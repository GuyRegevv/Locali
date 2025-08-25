const express = require('express');
const router = express.Router();
const prisma = require('../db/prismaClient');

// GET /api/geo/countries
router.get('/countries', async (req, res) => {
  try {
    const rows = await prisma.country.findMany({ orderBy: { name: 'asc' } });
    // Keep the same {label, value} shape the UI expects
    const countries = rows.map(c => ({ label: c.name, value: c.code || c.name }));
    res.json({ countries });
  } catch (e) {
    console.error('[GET /geo/countries]', e);
    res.status(500).json({ error: 'Failed to load countries' });
  }
});

// GET /api/geo/cities?country=Italy
router.get('/cities', async (req, res) => {
  try {
    const { country } = req.query;
    const where = country
      ? { country: { name: { equals: country, mode: 'insensitive' } } }
      : {};
    const rows = await prisma.city.findMany({
      where,
      include: { country: true },
      orderBy: [{ country: { name: 'asc' } }, { name: 'asc' }],
    });
    // Return simple options grouped by country if needed later
    const cities = rows.map(c => ({
      label: c.name,
      value: c.name,
      country: c.country?.name || '',
    }));
    res.json({ cities });
  } catch (e) {
    console.error('[GET /geo/cities]', e);
    res.status(500).json({ error: 'Failed to load cities' });
  }
});

module.exports = router;