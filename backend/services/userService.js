const prisma = require('../db/prismaClient');

class UserService {
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
      
      return await prisma.user.create({
        data: {
          email,
          password,
          name
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

  // Get user data without password (for responses)
  getUserDataForResponse(user) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt
    };
  }
}

// Export a singleton instance
module.exports = new UserService();
