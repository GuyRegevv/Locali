const prisma = require('../db/prismaClient');

class UserService {
  // Generate avatar URL using DiceBear API
  generateAvatarUrl(seed, size = 200) {
    // Clean the seed to make it URL-safe (remove spaces, special chars, make lowercase)
    const cleanSeed = seed.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remove special chars but keep spaces
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    return `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${cleanSeed}&size=${size}`;
  }
  // Find user by email
  async findByEmail(email) {
    try {
      return await prisma.user.findUnique({
        where: { email }
      });
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  }

  // Find user by ID
  async findById(id) {
    try {
      return await prisma.user.findUnique({
        where: { id }
      });
    } catch (error) {
      console.error('Error finding user by ID:', error);
      throw error;
    }
  }

  // Create new user
  async create(userData) {
    try {
      const { email, password, name, address, isLocal, locations } = userData;
      
      // Generate avatar URL using the user's name as seed
      const avatar = this.generateAvatarUrl(name);
      
      // If locations are provided, validate them
      if (locations && locations.length > 0) {
        await this.validateUserLocations(locations);
      }
      
      return await prisma.user.create({
        data: {
          email,
          password,
          name,
          avatar,
          address: address || null,
          isLocal: isLocal || false,
          locations: locations ? {
            create: locations.map(location => ({
              cityId: location.cityId,
              status: location.status
            }))
          } : undefined
        },
        include: {
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
      });
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  // Validate user locations according to business rules
  async validateUserLocations(locations) {
    if (!locations || locations.length === 0) {
      return; // No locations to validate
    }

    // Check for duplicate cities
    const cityIds = locations.map(loc => loc.cityId);
    const uniqueCityIds = [...new Set(cityIds)];
    if (cityIds.length !== uniqueCityIds.length) {
      throw new Error('Cannot have duplicate cities in locations');
    }

    // Check business rules: only one BORN_THERE and one CURRENTLY_LIVING
    const bornThereCount = locations.filter(loc => loc.status === 'BORN_THERE').length;
    const currentlyLivingCount = locations.filter(loc => loc.status === 'CURRENTLY_LIVING').length;

    if (bornThereCount > 1) {
      throw new Error('User can only be born in one city');
    }

    if (currentlyLivingCount > 1) {
      throw new Error('User can only currently live in one city');
    }

    // Validate that all cities exist
    const existingCities = await prisma.city.findMany({
      where: {
        id: {
          in: cityIds
        }
      },
      select: { id: true }
    });

    if (existingCities.length !== cityIds.length) {
      throw new Error('One or more cities do not exist');
    }

    // Validate status values
    const validStatuses = ['BORN_THERE', 'LIVED_PAST', 'CURRENTLY_LIVING'];
    const invalidStatus = locations.find(loc => !validStatuses.includes(loc.status));
    if (invalidStatus) {
      throw new Error(`Invalid status: ${invalidStatus.status}`);
    }
  }

  // Add location to existing user
  async addUserLocation(userId, locationData) {
    try {
      const { cityId, status } = locationData;
      
      // Check if user already has this city
      const existingLocation = await prisma.userLocation.findUnique({
        where: {
          userId_cityId: {
            userId,
            cityId
          }
        }
      });

      if (existingLocation) {
        throw new Error('User already has this city in their locations');
      }

      // Get user's current locations to validate business rules
      const currentLocations = await prisma.userLocation.findMany({
        where: { userId }
      });

      // Create temporary locations array for validation
      const tempLocations = [
        ...currentLocations.map(loc => ({ cityId: loc.cityId, status: loc.status })),
        { cityId, status }
      ];

      await this.validateUserLocations(tempLocations);

      return await prisma.userLocation.create({
        data: {
          userId,
          cityId,
          status
        },
        include: {
          city: {
            include: {
              country: true
            }
          }
        }
      });
    } catch (error) {
      console.error('Error adding user location:', error);
      throw error;
    }
  }

  // Remove location from user
  async removeUserLocation(userId, locationId) {
    try {
      return await prisma.userLocation.delete({
        where: {
          id: locationId,
          userId // Ensure user can only delete their own locations
        }
      });
    } catch (error) {
      console.error('Error removing user location:', error);
      throw error;
    }
  }

  // Get user's local cities
  async getUserLocalCities(userId) {
    try {
      return await prisma.userLocation.findMany({
        where: { userId },
        include: {
          city: {
            include: {
              country: true
            }
          }
        },
        orderBy: {
          createdAt: 'asc'
        }
      });
    } catch (error) {
      console.error('Error getting user local cities:', error);
      throw error;
    }
  }

  // Create or find city from Google Places data
  async createOrFindCity(googleCityData) {
    try {
      const { name, country, countryCode, lat, lng, placeId } = googleCityData;

      // First, try to find existing city by Google Place ID
      let city = await prisma.city.findFirst({
        where: { 
          OR: [
            { googlePlaceId: placeId },
            { 
              AND: [
                { name: name },
                { country: { name: country } }
              ]
            }
          ]
        },
        include: { country: true }
      });

      if (city) {
        return city;
      }

      // Find or create country
      let countryRecord = await prisma.country.findFirst({
        where: { name: country }
      });

      if (!countryRecord) {
        countryRecord = await prisma.country.create({
          data: {
            name: country,
            code: countryCode,
            slug: country.toLowerCase().replace(/\s+/g, '-')
          }
        });
      }

      // Create new city
      city = await prisma.city.create({
        data: {
          name: name,
          countryId: countryRecord.id,
          lat: lat,
          lng: lng,
          googlePlaceId: placeId,
          slug: name.toLowerCase().replace(/\s+/g, '-')
        },
        include: { country: true }
      });

      return city;
    } catch (error) {
      console.error('Error creating or finding city:', error);
      throw error;
    }
  }

  // Get all users (without passwords)
  async findAll() {
    try {
      return await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          name: true,
          avatar: true,
          address: true,
          isLocal: true,
          createdAt: true
        }
      });
    } catch (error) {
      console.error('Error finding all users:', error);
      throw error;
    }
  }

  // Check if email exists
  async emailExists(email) {
    try {
      const user = await this.findByEmail(email);
      return !!user; // Convert to boolean
    } catch (error) {
      console.error('Error checking if email exists:', error);
      throw error;
    }
  }

  // Get complete user profile with lists and likes (for profile page)
  async getUserProfile(userId) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          // User's local locations
          locations: {
            include: {
              city: {
                include: {
                  country: true
                }
              }
            },
            orderBy: {
              createdAt: 'asc'
            }
          },
          // User's own lists with full relations
          lists: {
            include: {
              city: {
                include: {
                  country: true
                }
              }
            },
            orderBy: {
              createdAt: 'desc'
            }
          },
          // User's liked lists with full relations
          likes: {
            include: {
              list: {
                include: {
                  creator: {
                    select: {
                      id: true,
                      name: true,
                      email: true
                    }
                  },
                  city: {
                    include: {
                      country: true
                    }
                  }
                }
              }
            },
            orderBy: {
              createdAt: 'desc'
            }
          }
        }
      });

      if (!user) {
        throw new Error('User not found');
      }

      // Return user data without password
      return {
        id: user.id,
        email: user.email,
        name: user.name,
        avatar: user.avatar,
        address: user.address,
        isLocal: user.isLocal,
        createdAt: user.createdAt,
        locations: user.locations,
        lists: user.lists,
        likes: user.likes
      };
    } catch (error) {
      console.error('Error getting user profile:', error);
      throw error;
    }
  }

  // Get user data without password (for responses)
  getUserDataForResponse(user) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      address: user.address,
      isLocal: user.isLocal,
      createdAt: user.createdAt,
      locations: user.locations || []
    };
  }

  // Get user's liked list IDs for frontend state initialization
  async getUserLikedListIds(userId) {
    try {
      const likes = await prisma.listLike.findMany({
        where: { userId },
        select: { listId: true }
      });

      return likes.map(like => like.listId);
    } catch (error) {
      console.error('Error getting user liked list IDs:', error);
      throw error;
    }
  }
}

// Export a singleton instance
module.exports = new UserService();
