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

async function findLists(filters = {}, userId = null) {
      const { country, city, category, subcategory, creator } = filters;    

      const where = {
        ...(category ? { genre: { contains: category, mode: 'insensitive' } } : {}),
        ...(subcategory ? { subgenre: { contains: subcategory, mode: 'insensitive' } } : {}),
        ...(creator ? { creator: { name: { contains: creator, mode: 'insensitive' } } } : {}),
        ...(country || city
          ? {
              city: {
                ...(city ? { name: { contains: city, mode: 'insensitive' } } : {}),
                ...(country ? { country: { name: { contains: country, mode: 'insensitive' } } } : {}),
              },
            }
          : {}),
      };

      const rows = await prisma.list.findMany({
        where,
        include: {
          city: { include: { country: true } },
          creator: { 
            select: { 
              id: true, 
              name: true,
              locations: {
                include: {
                  city: {
                    include: {
                      country: true
                    }
                  }
                }
              }
            } 
          },
          // Include likes if userId is provided to check if user liked each list
          ...(userId ? {
            likes: {
              where: { userId },
              select: { userId: true }
            }
          } : {})
        },
        orderBy: { createdAt: 'desc' },
      });

        // Map to the UI shape expected by the search page
        return rows.map(l => {
          // Check if creator has local expertise in this list's city
          const listCityId = l.city?.id;
          const creatorExpertise = l.creator?.locations?.find(loc => loc.city.id === listCityId);
          
          return {
            id: l.id,
            name: l.name,
            description: l.description,
            genre: l.genre,
            subgenre: l.subgenre,
            location: {
              country: l.city?.country?.name || '',
              city: l.city?.name || '',
            },
            creator: {
              id: l.creator?.id,
              name: l.creator?.name,
              localExpertise: creatorExpertise ? {
                status: creatorExpertise.status,
                cityName: creatorExpertise.city.name,
                countryName: creatorExpertise.city.country.name
              } : null
            },
            likeCount: l.likeCount,
            placeCount: l.placeCount,
            // Add isLikedByUser field if userId was provided
            ...(userId ? { isLikedByUser: l.likes && l.likes.length > 0 } : {})
          };
        });
  }

async function getListById(listId, userId = null) {
  const list = await prisma.list.findUnique({
    where: { id: listId },
    include: {
      city: { include: { country: true } },
      creator: { 
        select: { 
          id: true, 
          name: true,
          locations: {
            include: {
              city: {
                include: {
                  country: true
                }
              }
            }
          }
        } 
      },
      places: { orderBy: { order: 'asc' }, include: { place: true } },
      // Include likes if userId is provided to check if user liked this list
      ...(userId ? {
        likes: {
          where: { userId },
          select: { userId: true }
        }
      } : {})
    },
  });
  if (!list) {
    const err = new Error('List not found');
    err.status = 404;
    throw err;
  }

  // Check if creator has local expertise in this list's city
  const listCityId = list.city?.id;
  const creatorExpertise = list.creator?.locations?.find(loc => loc.city.id === listCityId);
  
  // Add local expertise information to creator
  if (list.creator) {
    list.creator.localExpertise = creatorExpertise ? {
      status: creatorExpertise.status,
      cityName: creatorExpertise.city.name,
      countryName: creatorExpertise.city.country.name
    } : null;
  }

  // Add isLikedByUser field if userId was provided
  if (userId) {
    list.isLikedByUser = list.likes && list.likes.length > 0;
    // Remove the likes array from the response to keep it clean
    delete list.likes;
  }

  return list;
}

async function likeList(userId, listId) {
  // Check if list exists
  const list = await prisma.list.findUnique({
    where: { id: listId },
    select: { id: true, likeCount: true }
  });
  
  if (!list) {
    const err = new Error('List not found');
    err.status = 404;
    throw err;
  }

  // Check if user already liked this list
  const existingLike = await prisma.listLike.findUnique({
    where: {
      userId_listId: {
        userId,
        listId
      }
    }
  });

  if (existingLike) {
    const err = new Error('List already liked by user');
    err.status = 400;
    throw err;
  }

  // Use transaction to ensure consistency
  const result = await prisma.$transaction(async (tx) => {
    // Create the like
    const like = await tx.listLike.create({
      data: {
        userId,
        listId
      }
    });

    // Increment the like count
    const updatedList = await tx.list.update({
      where: { id: listId },
      data: {
        likeCount: { increment: 1 }
      },
      select: {
        id: true,
        likeCount: true
      }
    });

    return {
      liked: true,
      likeCount: updatedList.likeCount,
      listId: listId
    };
  });

  return result;
}

async function unlikeList(userId, listId) {
  // Check if list exists
  const list = await prisma.list.findUnique({
    where: { id: listId },
    select: { id: true, likeCount: true }
  });
  
  if (!list) {
    const err = new Error('List not found');
    err.status = 404;
    throw err;
  }

  // Check if user actually liked this list
  const existingLike = await prisma.listLike.findUnique({
    where: {
      userId_listId: {
        userId,
        listId
      }
    }
  });

  if (!existingLike) {
    const err = new Error('List not liked by user');
    err.status = 400;
    throw err;
  }

  // Use transaction to ensure consistency
  const result = await prisma.$transaction(async (tx) => {
    // Delete the like
    await tx.listLike.delete({
      where: {
        userId_listId: {
          userId,
          listId
        }
      }
    });

    // Decrement the like count (ensure it doesn't go below 0)
    const updatedList = await tx.list.update({
      where: { id: listId },
      data: {
        likeCount: Math.max(0, list.likeCount - 1)
      },
      select: {
        id: true,
        likeCount: true
      }
    });

    return {
      liked: false,
      likeCount: updatedList.likeCount,
      listId: listId
    };
  });

  return result;
}

module.exports = {
  createList,
  findLists,
  getListById,
  likeList,
  unlikeList,
};

