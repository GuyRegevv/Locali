const express = require('express');
const router = express.Router();
const prisma = require('../db/prismaClient');
const googlePlacesService = require('../services/googlePlacesService');

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
      id: c.id,
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

// GET /api/geo/search-cities?q=Paris
router.get('/search-cities', async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || q.length < 2) {
      return res.json({ cities: [] });
    }

    const cities = await googlePlacesService.searchCities(q);
    res.json({ cities });
  } catch (e) {
    console.error('[GET /geo/search-cities]', e);
    res.status(500).json({ error: 'Failed to search cities' });
  }
});

// GET /api/geo/city-details?placeId=ChIJD7fiBh9u5kcRYJSMaMOCCwQ
router.get('/city-details', async (req, res) => {
  try {
    const { placeId } = req.query;
    
    if (!placeId) {
      return res.status(400).json({ error: 'Place ID is required' });
    }

    const cityDetails = await googlePlacesService.getCityDetails(placeId);
    
    if (!cityDetails) {
      return res.status(404).json({ error: 'City not found' });
    }

    res.json({ city: cityDetails });
  } catch (e) {
    console.error('[GET /geo/city-details]', e);
    res.status(500).json({ error: 'Failed to get city details' });
  }
});

module.exports = router;