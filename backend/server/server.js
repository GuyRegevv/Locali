// Load environment variables from .env.local for Google API key
require('dotenv').config({ path: '.env.local' });
// Also load from .env for other variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import routes
const healthRoutes = require('../routes/health');
const authRoutes = require('../routes/auth');
const listRoutes = require('../routes/lists')
const geoRoutes = require('../routes/geo')
const placeRoutes = require('../routes/places')

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/lists', listRoutes)
app.use('/api/geo', geoRoutes)
app.use('/api/places', placeRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});
