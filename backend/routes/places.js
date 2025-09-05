const express = require('express');
const router = express.Router();
const prisma = require('../db/prismaClient');
const googlePlacesService = require('../services/googlePlacesService');

// GET /api/places/:id - Get rich place details with Google Places data
router.get('/:id', async (req, res) => {
  try {
    const placeId = req.params.id;
    
    // Get place from database
    const place = await prisma.place.findUnique({
      where: { id: placeId },
      include: {
        city: { include: { country: true } }
      }
    });

    if (!place) {
      return res.status(404).json({ error: 'Place not found' });
    }

    // Get rich data from Google Places API
    let googleData = null;
    if (place.googlePlaceId) {
      googleData = await googlePlacesService.getPlaceDetails(place.googlePlaceId);
    }

    // Combine database data with Google data
    const richPlaceData = {
      // Database data
      id: place.id,
      name: place.name,
      address: place.address,
      lat: place.lat,
      lng: place.lng,
      description: place.description,
      primaryImageUrl: place.primaryImageUrl,
      createdAt: place.createdAt,
      updatedAt: place.updatedAt,
      city: place.city,
      
      // Google Places data
      googleData: googleData,
      
      // Computed fields
      category: googleData ? googlePlacesService.getBusinessCategory(googleData.types) : 'Place',
      rating: googleData?.rating || 0,
      ratingCount: googleData?.userRatingsTotal || 0,
      priceLevel: googleData?.priceLevel || null,
      phoneNumber: googleData?.phoneNumber || null,
      website: googleData?.website || null,
      businessStatus: googleData?.businessStatus || 'OPERATIONAL',
      openingHours: googleData?.openingHours || null,
      photos: googleData?.photos || (place.primaryImageUrl ? [place.primaryImageUrl] : []),
      reviews: googleData?.reviews || [],
      googleUrl: googleData?.url || null
    };

    res.json(richPlaceData);

  } catch (error) {
    console.error('Error fetching place details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/places/google/:placeId - Direct Google Places API access
router.get('/google/:placeId', async (req, res) => {
  try {
    const googlePlaceId = req.params.placeId;
    const googleData = await googlePlacesService.getPlaceDetails(googlePlaceId);
    
    res.json({
      googlePlaceId,
      data: googleData
    });

  } catch (error) {
    console.error('Error fetching Google Places data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
