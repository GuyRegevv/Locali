const prisma = require('../db/prismaClient');

/**
 * Payload shape (example)
 * {
 *   name: "Best Vegan Spots in Portland",
 *   description?: "some text",
 *   genre?: "Food & Drink",
 *   subgenre?: "Vegan",
 *   location: {
 *     country: { name: "United States", code?: "US", slug?: "united-states" },
 *     city:    { name: "Portland", slug?: "portland", lat?: 45.5152, lng?: -122.6784 }
 *   },
 *   items: [
 *     {
 *       googlePlaceId: "gpid_blossoming_lotus",
 *       name: "Blossoming Lotus",
 *       address: "1713 NE 15th Ave, Portland, OR 97212",
 *       lat: 45.5352, lng: -122.6504,
 *       primaryImageUrl?: "https://...",
 *       description?: "optional place summary",
 *       note?: "creator tip",
 *       order?: 1
 *     },
 *     ...
 *   ]
 * }
 */
async function createList({ creatorId, payload }) {
  const { name, description, genre, subgenre, location, items = [] } = payload || {};
  if (!name || !location?.country?.name || !location?.city?.name) {
    const err = new Error('Missing required fields: name, location.country.name, location.city.name');
    err.status = 400;
    throw err;
  }

  // upsert Country
  const country = await prisma.country.upsert({
    where: { name: location.country.name },
    update: {},
    create: {
      name: location.country.name,
      code: location.country.code || null,
      slug: location.country.slug || null,
    },
  });

  // upsert City (unique by [countryId, name])
  const city = await prisma.city.upsert({
    where: { countryId_name: { countryId: country.id, name: location.city.name } },
    update: {}, // (optional: you could update slug/coords if provided)
    create: {
      countryId: country.id,
      name: location.city.name,
      slug: location.city.slug || null,
      lat: typeof location.city.lat === 'number' ? location.city.lat : null,
      lng: typeof location.city.lng === 'number' ? location.city.lng : null,
    },
  });

  // Upsert all places by googlePlaceId
  const listPlaceCreates = [];
  for (const it of items) {
    if (!it?.googlePlaceId || !it?.name || typeof it.lat !== 'number' || typeof it.lng !== 'number' || !it.address) {
      // skip invalid items (or throw if you prefer strict)
      // You can change to: throw new Error('Invalid place item ...')
      continue;
    }

    let place = await prisma.place.findUnique({
      where: { googlePlaceId: it.googlePlaceId },
    });

    if (!place) {
      place = await prisma.place.create({
        data: {
          googlePlaceId: it.googlePlaceId,
          name: it.name,
          address: it.address,
          lat: it.lat,
          lng: it.lng,
          primaryImageUrl: it.primaryImageUrl || null,
          description: it.description || null,
          cityId: city.id,
        },
      });
    } else if (place.cityId !== city.id) {
      // Edge case: same Google ID but in a different city (unlikely, but safe to handle)
      // Usually Google IDs are unique globally; we’ll just keep the existing place as-is.
    }

    listPlaceCreates.push({
      placeId: place.id,
      order: Number.isInteger(it.order) ? it.order : listPlaceCreates.length + 1,
      note: it.note || null,
      // priceRange: it.priceRange || null, // foundation, off for now
    });
  }

  // Create the list with ListPlace rows
  const list = await prisma.list.create({
    data: {
      name,
      description: description || null,
      genre: genre || null,
      subgenre: subgenre || null,
      cityId: city.id,
      creatorId,
      places: { create: listPlaceCreates },
      placeCount: listPlaceCreates.length,
      // coverImage: you can set from first place image if you want
    },
    include: {
      city: { include: { country: true } },
      creator: { select: { id: true, name: true, email: true } },
      places: { orderBy: { order: 'asc' }, include: { place: true } },
    },
  });

  // bump City.listCount (denorm)
  await prisma.city.update({
    where: { id: city.id },
    data: { listCount: { increment: 1 } },
  });

  return list;
}

module.exports = {
  createList,
};
