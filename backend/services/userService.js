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
      const { email, password, name } = userData;
      
      // Generate avatar URL using the user's name as seed
      const avatar = this.generateAvatarUrl(name);
      
      return await prisma.user.create({
        data: {
          email,
          password,
          name,
          avatar
        }
      });
    } catch (error) {
      console.error('Error creating user:', error);
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
        createdAt: user.createdAt,
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
      createdAt: user.createdAt
    };
  }
}

// Export a singleton instance
module.exports = new UserService();
