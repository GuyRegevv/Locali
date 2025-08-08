const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

// JWT Authentication Middleware
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Access token required' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.userId;

    const user = await userService.findById(userId);

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    req.user = userService.getUserDataForResponse(user);
    req.userId = userId;

    console.log('Authenticated request from:', user.email);
    
    next();

  } catch (error) {
    // Handle JWT-specific errors
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    
    console.error('Authentication middleware error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Optional middleware for routes that can work with or without authentication
const optionalAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      // No token provided, continue without authentication
      req.user = null;
      req.userId = null;
      return next();
    }

    // If token is provided, validate it
    const decoded = jwt.verify(token, JWT_SECRET);
    const userId = decoded.userId;

    const user = await userService.findById(userId);
    
    if (user) {
      req.user = userService.getUserDataForResponse(user);
      req.userId = userId;
      console.log('Optional auth - authenticated request from:', user.email);
    } else {
      req.user = null;
      req.userId = null;
    }

    next();

  } catch (error) {
    // For optional auth, don't fail on invalid tokens
    console.log('Optional auth - invalid token, continuing without authentication');
    req.user = null;
    req.userId = null;
    next();
  }
};

module.exports = {
  authenticateToken,
  optionalAuth
};
