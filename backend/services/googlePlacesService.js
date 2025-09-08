const axios = require('axios');

class GooglePlacesService {
  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    this.baseUrl = 'https://maps.googleapis.com/maps/api/place';
  }

  /**
   * Get detailed place information from Google Places API
   * @param {string} placeId - Google Place ID
   * @returns {Object} Rich place data
   */
  async getPlaceDetails(placeId) {
    if (!this.apiKey) {
      console.warn('Google Places API key not configured');
      return this.getFallbackPlaceData();
    }

    try {
      // Get basic place details
      const detailsResponse = await axios.get(`${this.baseUrl}/details/json`, {
        params: {
          place_id: placeId,
          fields: 'name,formatted_address,formatted_phone_number,website,rating,user_ratings_total,price_level,opening_hours,photos,types,reviews,url',
          key: this.apiKey
        }
      });

      if (detailsResponse.data.status !== 'OK') {
        console.warn('Google Places API error:', detailsResponse.data.status);
        return this.getFallbackPlaceData();
      }

      const place = detailsResponse.data.result;
      
      // Get photos if available
      let photos = [];
      if (place.photos && place.photos.length > 0) {
        photos = await this.getPlacePhotos(place.photos.slice(0, 5)); // Get first 5 photos
      }

      return {
        name: place.name,
        formattedAddress: place.formatted_address,
        phoneNumber: place.formatted_phone_number,
        website: place.website,
        rating: place.rating,
        userRatingsTotal: place.user_ratings_total,
        priceLevel: place.price_level,
        openingHours: place.opening_hours,
        types: place.types,
        reviews: place.reviews || [],
        photos: photos,
        url: place.url,
        businessStatus: place.business_status || 'OPERATIONAL'
      };

    } catch (error) {
      console.error('Error fetching Google Places data:', error.message);
      return this.getFallbackPlaceData();
    }
  }

  /**
   * Get photo URLs from photo references
   * @param {Array} photoReferences - Array of photo reference objects
   * @returns {Array} Array of photo URLs
   */
  async getPlacePhotos(photoReferences) {
    if (!this.apiKey || !photoReferences || photoReferences.length === 0) {
      return [];
    }

    try {
      const photoPromises = photoReferences.map(async (photoRef) => {
        try {
          const response = await axios.get(`${this.baseUrl}/photo`, {
            params: {
              photo_reference: photoRef.photo_reference,
              maxwidth: 400,
              key: this.apiKey
            },
            responseType: 'arraybuffer'
          });
          
          // Convert to base64 for easy display
          const base64 = Buffer.from(response.data, 'binary').toString('base64');
          return `data:image/jpeg;base64,${base64}`;
        } catch (error) {
          console.warn('Error fetching photo:', error.message);
          return null;
        }
      });

      const photos = await Promise.all(photoPromises);
      return photos.filter(photo => photo !== null);

    } catch (error) {
      console.error('Error fetching photos:', error.message);
      return [];
    }
  }

  /**
   * Fallback data when Google API is not available
   * @returns {Object} Basic place data
   */
  getFallbackPlaceData() {
    return {
      name: null,
      formattedAddress: null,
      phoneNumber: null,
      website: null,
      rating: null,
      userRatingsTotal: null,
      priceLevel: null,
      openingHours: null,
      types: [],
      reviews: [],
      photos: [],
      url: null,
      businessStatus: 'OPERATIONAL'
    };
  }

  /**
   * Search for cities using Google Places Autocomplete
   * @param {string} query - Search query (city name)
   * @returns {Array} Array of city suggestions
   */
  async searchCities(query) {
    if (!this.apiKey || !query || query.length < 2) {
      return [];
    }

    try {
      const response = await axios.get(`${this.baseUrl}/autocomplete/json`, {
        params: {
          input: query,
          types: '(cities)',
          key: this.apiKey
        }
      });

      if (response.data.status !== 'OK') {
        console.warn('Google Places Autocomplete error:', response.data.status);
        return [];
      }

      const predictions = response.data.predictions || [];
      
      // Filter and format city results
      const cities = predictions
        .filter(prediction => {
          // Only include results that are cities
          return prediction.types.includes('locality') || 
                 prediction.types.includes('administrative_area_level_1') ||
                 prediction.types.includes('country');
        })
        .map(prediction => ({
          placeId: prediction.place_id,
          name: prediction.structured_formatting.main_text,
          country: prediction.structured_formatting.secondary_text,
          fullName: prediction.description
        }));

      return cities;

    } catch (error) {
      console.error('Error searching cities:', error.message);
      return [];
    }
  }

  /**
   * Get city details from Google Places API
   * @param {string} placeId - Google Place ID
   * @returns {Object} City details with coordinates
   */
  async getCityDetails(placeId) {
    if (!this.apiKey) {
      return null;
    }

    try {
      const response = await axios.get(`${this.baseUrl}/details/json`, {
        params: {
          place_id: placeId,
          fields: 'name,formatted_address,geometry,address_components',
          key: this.apiKey
        }
      });

      if (response.data.status !== 'OK') {
        console.warn('Google Places Details error:', response.data.status);
        return null;
      }

      const place = response.data.result;
      
      // Extract city and country from address components
      let cityName = '';
      let countryName = '';
      let countryCode = '';

      place.address_components.forEach(component => {
        if (component.types.includes('locality')) {
          cityName = component.long_name;
        } else if (component.types.includes('country')) {
          countryName = component.long_name;
          countryCode = component.short_name;
        }
      });

      return {
        name: cityName || place.name,
        country: countryName,
        countryCode: countryCode,
        formattedAddress: place.formatted_address,
        lat: place.geometry.location.lat,
        lng: place.geometry.location.lng,
        placeId: placeId
      };

    } catch (error) {
      console.error('Error fetching city details:', error.message);
      return null;
    }
  }

  /**
   * Get business category from Google types
   * @param {Array} types - Google place types
   * @returns {string} Human-readable category
   */
  getBusinessCategory(types) {
    if (!types || types.length === 0) return 'Place';
    
    const typeMap = {
      'restaurant': 'Restaurant',
      'food': 'Food & Drink',
      'cafe': 'Café',
      'bar': 'Bar',
      'bakery': 'Bakery',
      'meal_takeaway': 'Takeaway',
      'meal_delivery': 'Delivery',
      'tourist_attraction': 'Tourist Attraction',
      'museum': 'Museum',
      'art_gallery': 'Art Gallery',
      'park': 'Park',
      'shopping_mall': 'Shopping Mall',
      'store': 'Store',
      'clothing_store': 'Clothing Store',
      'jewelry_store': 'Jewelry Store',
      'electronics_store': 'Electronics Store',
      'book_store': 'Book Store',
      'pharmacy': 'Pharmacy',
      'hospital': 'Hospital',
      'doctor': 'Medical',
      'dentist': 'Dental',
      'veterinary_care': 'Veterinary',
      'gas_station': 'Gas Station',
      'bank': 'Bank',
      'atm': 'ATM',
      'post_office': 'Post Office',
      'police': 'Police Station',
      'fire_station': 'Fire Station',
      'school': 'School',
      'university': 'University',
      'library': 'Library',
      'gym': 'Gym',
      'spa': 'Spa',
      'beauty_salon': 'Beauty Salon',
      'hair_care': 'Hair Salon',
      'car_repair': 'Auto Repair',
      'car_wash': 'Car Wash',
      'lodging': 'Hotel',
      'campground': 'Campground',
      'rv_park': 'RV Park',
      'amusement_park': 'Amusement Park',
      'aquarium': 'Aquarium',
      'zoo': 'Zoo',
      'movie_theater': 'Movie Theater',
      'night_club': 'Nightclub',
      'casino': 'Casino',
      'bowling_alley': 'Bowling',
      'golf_course': 'Golf Course',
      'stadium': 'Stadium',
      'church': 'Church',
      'mosque': 'Mosque',
      'synagogue': 'Synagogue',
      'hindu_temple': 'Hindu Temple',
      'cemetery': 'Cemetery',
      'funeral_home': 'Funeral Home',
      'real_estate_agency': 'Real Estate',
      'insurance_agency': 'Insurance',
      'accounting': 'Accounting',
      'lawyer': 'Lawyer',
      'travel_agency': 'Travel Agency',
      'moving_company': 'Moving Company',
      'storage': 'Storage',
      'laundry': 'Laundry',
      'dry_cleaning': 'Dry Cleaning',
      'locksmith': 'Locksmith',
      'plumber': 'Plumber',
      'electrician': 'Electrician',
      'painter': 'Painter',
      'roofing_contractor': 'Roofing',
      'general_contractor': 'Contractor',
      'home_goods_store': 'Home Goods',
      'furniture_store': 'Furniture Store',
      'hardware_store': 'Hardware Store',
      'garden_center': 'Garden Center',
      'pet_store': 'Pet Store',
      'bicycle_store': 'Bicycle Store',
      'car_dealer': 'Car Dealer',
      'motorcycle_dealer': 'Motorcycle Dealer',
      'rv_dealer': 'RV Dealer',
      'boat_dealer': 'Boat Dealer',
      'car_rental': 'Car Rental',
      'bicycle_rental': 'Bicycle Rental',
      'parking': 'Parking',
      'subway_station': 'Subway Station',
      'bus_station': 'Bus Station',
      'train_station': 'Train Station',
      'airport': 'Airport',
      'taxi_stand': 'Taxi Stand',
      'transit_station': 'Transit Station'
    };

    // Find the most specific category
    for (const type of types) {
      if (typeMap[type]) {
        return typeMap[type];
      }
    }

    // Fallback to first type or generic
    return types[0] ? types[0].replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Place';
  }
}

module.exports = new GooglePlacesService();
