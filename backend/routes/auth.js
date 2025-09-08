const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
};

// POST /api/auth/register - User registration
router.post('/register', async (req, res) => {
  try {
    const { email, password, name, address } = req.body;

    console.log('Registration attempt for email:', email);

    // Basic validation
    if (!email || !password || !name) {
      return res.status(400).json({ error: 'Email, password, and name are required' });
    }

    // Check if user already exists
    if (await userService.emailExists(email)) {
      console.log('Registration failed: Email already exists:', email);
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password (8 rounds as specified)
    const hashedPassword = await bcrypt.hash(password, 8);

    // Create user (locations can be added later in profile)
    const user = await userService.create({
      email,
      password: hashedPassword,
      name,
      address,
      isLocal: false, // Default to false, users can add locations in profile
      locations: [] // Start with empty locations, users can add in profile
    });

    // Generate JWT token
    const token = generateToken(user.id);

    console.log('User registered successfully:', user.email);

    // Return user data (without password) and token
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: userService.getUserDataForResponse(user)
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    // Handle validation errors from userService
    if (error.message.includes('User can only be born in one city') ||
        error.message.includes('User can only currently live in one city') ||
        error.message.includes('Cannot have duplicate cities') ||
        error.message.includes('do not exist') ||
        error.message.includes('Invalid status')) {
      return res.status(400).json({ error: error.message });
    }
    
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/auth/login - User login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log('Login attempt for email:', email);

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user by email
    const user = await userService.findByEmail(email);

    if (!user) {
      console.log('Login failed: User not found:', email);
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log('Login failed: Invalid password for:', email);
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = generateToken(user.id);

    console.log('User logged in successfully:', user.email);

    // Return user data (without password) and token
    res.json({
      message: 'Login successful',
      token,
      user: userService.getUserDataForResponse(user)
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/me', authenticateToken, async (req, res) => {
  try {
    res.json({
      user: req.user
    });
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/auth/profile - Get complete user profile with lists and likes
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    console.log('Profile data requested for user:', req.user.email);
    
    // Get complete user profile with all relations
    const userProfile = await userService.getUserProfile(userId);
    
    console.log('Profile data retrieved for user:', req.user.email, 
      'with', userProfile.lists.length, 'lists and', userProfile.likes.length, 'likes');
    
    res.json({
      user: userProfile
    });
  } catch (error) {
    console.error('Get user profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/users', authenticateToken, async (req, res) => {
  try {
    const users = await userService.findAll();

    console.log('Users list requested by', req.user.email, 'returning', users.length, 'users');

    res.json({
      users
    });

  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/auth/liked-lists - Get user's liked list IDs for frontend state
router.get('/liked-lists', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    
    const likedListIds = await userService.getUserLikedListIds(userId);
    
    res.json({
      likedListIds
    });
  } catch (error) {
    console.error('Get liked lists error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/auth/locations - Get user's local cities
router.get('/locations', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    
    const locations = await userService.getUserLocalCities(userId);
    
    res.json({
      locations
    });
  } catch (error) {
    console.error('Get user locations error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/auth/locations - Add location to user
router.post('/locations', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { cityId, status, googleCityData } = req.body;
    
    if (!status) {
      return res.status(400).json({ error: 'Status is required' });
    }

    let finalCityId = cityId;

    // If Google Places data is provided, create or find the city
    if (googleCityData && !cityId) {
      const city = await userService.createOrFindCity(googleCityData);
      finalCityId = city.id;
    } else if (!cityId) {
      return res.status(400).json({ error: 'City ID or Google city data is required' });
    }
    
    const location = await userService.addUserLocation(userId, { cityId: finalCityId, status });
    
    res.status(201).json({
      message: 'Location added successfully',
      location
    });
  } catch (error) {
    console.error('Add user location error:', error);
    
    // Handle validation errors
    if (error.message.includes('User already has this city') ||
        error.message.includes('User can only be born in one city') ||
        error.message.includes('User can only currently live in one city') ||
        error.message.includes('do not exist') ||
        error.message.includes('Invalid status')) {
      return res.status(400).json({ error: error.message });
    }
    
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /api/auth/locations/:locationId - Remove location from user
router.delete('/locations/:locationId', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { locationId } = req.params;
    
    await userService.removeUserLocation(userId, locationId);
    
    res.json({
      message: 'Location removed successfully'
    });
  } catch (error) {
    console.error('Remove user location error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
