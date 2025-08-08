const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
};

// POST /api/auth/register - User registration
router.post('/register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

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

    // Create user
    const user = await userService.create({
      email,
      password: hashedPassword,
      name
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

// GET /api/auth/me - Get current user (protected route)
router.get('/me', async (req, res) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.userId;

    // Find user
    const user = await userService.findById(userId);

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    console.log('Current user request for:', user.email);

    // Return user data (without password)
    res.json({
      user: userService.getUserDataForResponse(user)
    });

  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    
    console.error('Get current user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/users - Get all users (protected route)
router.get('/users', async (req, res) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Get all users (without passwords)
    const users = await userService.findAll();

    console.log('Users list requested, returning', users.length, 'users');

    res.json({
      users
    });

  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
