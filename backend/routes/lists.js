const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const { createList, findLists, getListById } = require('../services/listService');

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

router.get('/', async (req, res) => {
  try {
    const { country, city, category, subcategory, creator } = req.query;
    const lists = await findLists({ country, city, category, subcategory, creator });
    res.json(lists);
  } catch (err) {
    console.error('[GET /api/lists] error:', err);
    res.status(500).json({ error: 'Failed to fetch lists' });
  }
});

// GET /api/lists/:id - full list with places
router.get('/:id', async (req, res) => {
  try {
    const list = await getListById(req.params.id);
    res.json(list);
  } catch (err) {
    const status = err.status || 500;
    res.status(status).json({ error: err.message || 'Failed to fetch list' });
  }
});

module.exports = router;
