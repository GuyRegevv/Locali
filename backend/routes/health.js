const express = require('express');
const prisma = require('../db/prismaClient');

const router = express.Router();

// Health check endpoint
router.get('/health', async (req, res) => {
  console.log('Health check endpoint hit');
  
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`;
    res.json({ 
      message: 'Server is running!', 
      database: 'connected',
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    console.error('Database health check failed:', error);
    res.status(503).json({ 
      message: 'Server is running but database is unavailable', 
      database: 'disconnected',
      timestamp: new Date().toISOString() 
    });
  }
});

module.exports = router;
