const express = require('express');
const router = express.Router();
const { authenticateToken, optionalAuth } = require('../middleware/auth');
const { createList, findLists, getListById, likeList, unlikeList } = require('../services/listService');

// sanity ping
router.get('/ping', (req, res) => res.json({ ok: true }));

// POST /api/lists  (auth required)
// Body: see service JSDoc above
router.post('/', authenticateToken, async (req, res) => {
  try {
    const creatorId = req.userId; // set by authenticateToken
    const list = await createList({ creatorId, payload: req.body });
    return res.status(201).json(list);
  } catch (err) {
    console.error('[POST /api/lists] error:', err);
    const status = err.status || 500;
    return res.status(status).json({ error: err.message || 'Failed to create list' });
  }
});

router.get('/', optionalAuth, async (req, res) => {
  try {
    const { country, city, category, subcategory, creator } = req.query;
    
    // userId is now set by optionalAuth middleware
    const userId = req.userId;
    
    const lists = await findLists({ country, city, category, subcategory, creator }, userId);
    res.json(lists);
  } catch (err) {
    console.error('[GET /api/lists] error:', err);
    res.status(500).json({ error: 'Failed to fetch lists' });
  }
});

// GET /api/lists/:id - full list with places
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const userId = req.userId;
    const list = await getListById(req.params.id, userId);
    res.json(list);
  } catch (err) {
    const status = err.status || 500;
    res.status(status).json({ error: err.message || 'Failed to fetch list' });
  }
});

// POST /api/lists/:id/like - like a list (auth required)
router.post('/:id/like', authenticateToken, async (req, res) => {
  try {
    const userId = req.userId; // set by authenticateToken
    const listId = req.params.id;
    
    const result = await likeList(userId, listId);
    res.json(result);
  } catch (err) {
    console.error('[POST /api/lists/:id/like] error:', err);
    const status = err.status || 500;
    res.status(status).json({ error: err.message || 'Failed to like list' });
  }
});

// DELETE /api/lists/:id/like - unlike a list (auth required)
router.delete('/:id/like', authenticateToken, async (req, res) => {
  try {
    const userId = req.userId; // set by authenticateToken
    const listId = req.params.id;
    
    const result = await unlikeList(userId, listId);
    res.json(result);
  } catch (err) {
    console.error('[DELETE /api/lists/:id/like] error:', err);
    const status = err.status || 500;
    res.status(status).json({ error: err.message || 'Failed to unlike list' });
  }
});

module.exports = router;
