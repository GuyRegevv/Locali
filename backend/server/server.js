const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Import routes
const healthRoutes = require('../routes/health');
const authRoutes = require('../routes/auth');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', healthRoutes);
app.use('/api/auth', authRoutes);

// Authentication middleware (will be implemented in next step)
const authenticateToken = (req, res, next) => {
  // TODO: Implement JWT authentication
  next();
};

// Routes will be added in the next step
// POST /api/auth/register
// POST /api/auth/login  
// GET /api/auth/me
// GET /api/users

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
