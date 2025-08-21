// prisma/seed.cjs
const { PrismaClient } = require('../src/lib/prisma/generated');

const prisma = new PrismaClient();

async function main() {
  // 1) Countries
  const us = await prisma.country.upsert({
    where: { name: 'United States' },
    update: {},
    create: { name: 'United States', code: 'US', slug: 'united-states' }
  });
  const italy = await prisma.country.upsert({
    where: { name: 'Italy' },
    update: {},
    create: { name: 'Italy', code: 'IT', slug: 'italy' }
  });

  // 2) Cities
  const portland = await prisma.city.upsert({
    where: { countryId_name: { countryId: us.id, name: 'Portland' } },
    update: {},
    create: { countryId: us.id, name: 'Portland', slug: 'portland', lat: 45.5152, lng: -122.6784 }
  });
  const rome = await prisma.city.upsert({
    where: { countryId_name: { countryId: italy.id, name: 'Rome' } },
    update: {},
    create: { countryId: italy.id, name: 'Rome', slug: 'rome', lat: 41.9028, lng: 12.4964 }
  });

  // 3) Demo user (adjust to your auth later)
  const alex = await prisma.user.upsert({
    where: { email: 'alex@example.com' },
    update: {},
    create: {
      email: 'alex@example.com',
      password: 'dev-only-hash', // replace with a real hash in prod
      name: 'Alex Johnson'
    }
  });

  // 4) Places for Portland (deduped by googlePlaceId)
  const blossomingLotus = await prisma.place.upsert({
    where: { googlePlaceId: 'gpid_blossoming_lotus' },
    update: {},
    create: {
      googlePlaceId: 'gpid_blossoming_lotus',
      name: 'Blossoming Lotus',
      address: '1713 NE 15th Ave, Portland, OR 97212',
      lat: 45.5352, lng: -122.6504,
      primaryImageUrl: 'https://example.com/images/blossoming_lotus_1.jpg',
      cityId: portland.id,
      description: 'Upscale vegan fusion cuisine with organic ingredients'
    }
  });

  const vtopia = await prisma.place.upsert({
    where: { googlePlaceId: 'gpid_vtopia' },
    update: {},
    create: {
      googlePlaceId: 'gpid_vtopia',
      name: 'Vtopia Cheese Shop & Deli',
      address: '1628 SW Jefferson St, Portland, OR 97201',
      lat: 45.5191, lng: -122.6906,
      primaryImageUrl: 'https://example.com/images/vtopia_1.jpg',
      cityId: portland.id,
      description: 'Artisanal vegan cheese shop with sandwiches and small plates'
    }
  });

  // 5) List + items (Portland)
  const veganList = await prisma.list.create({
    data: {
      name: 'Best Vegan Spots in Portland',
      description: 'the best list in the world',
      genre: 'Food & Drink',
      subgenre: 'Vegan',
      cityId: portland.id,
      creatorId: alex.id,
      places: {
        create: [
          { placeId: blossomingLotus.id, order: 1, note: 'Must-try fusion plates' },
          { placeId: vtopia.id,         order: 2, note: 'Amazing cheeses + sandwiches' }
        ]
      },
      placeCount: 2,
      coverImage: 'https://example.com/images/blossoming_lotus_1.jpg'
    },
    include: { places: true }
  });

  // 6) Optional: bump City.listCount (denorm)
  await prisma.city.update({
    where: { id: portland.id },
    data: { listCount: { increment: 1 } }
  });

  console.log('Seed complete:', {
    countries: [us.name, italy.name],
    cities: [portland.name, rome.name],
    list: veganList.name
  });
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
