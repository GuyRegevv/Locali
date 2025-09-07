// prisma/seed-with-google-api.cjs
const { PrismaClient } = require('../src/lib/prisma/generated');
const axios = require('axios');

const prisma = new PrismaClient();

// Google Places API configuration
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || process.env.GOOGLE_MAPS_API_KEY;
const GOOGLE_PLACES_BASE_URL = 'https://maps.googleapis.com/maps/api/place';

class GooglePlacesSeeder {
  constructor() {
    this.apiKey = GOOGLE_PLACES_API_KEY;
    if (!this.apiKey) {
      console.warn('⚠️  Google Places API key not found in environment variables');
      console.log('   Please set GOOGLE_PLACES_API_KEY or GOOGLE_MAPS_API_KEY');
    }
  }

  async searchPlaces(query, location, radius = 5000, type = null) {
    if (!this.apiKey) {
      console.log('❌ Cannot search places without API key');
      return [];
    }

    try {
      const params = {
        query: query,
        location: `${location.lat},${location.lng}`,
        radius: radius,
        key: this.apiKey
      };

      if (type) {
        params.type = type;
      }

      console.log(`🔍 Searching for: "${query}" near ${location.lat},${location.lng}`);
      
      const response = await axios.get(`${GOOGLE_PLACES_BASE_URL}/textsearch/json`, {
        params
      });

      if (response.data.status !== 'OK') {
        console.warn(`⚠️  Google Places API error: ${response.data.status}`);
        return [];
      }

      return response.data.results || [];
    } catch (error) {
      console.error('❌ Error searching places:', error.message);
      return [];
    }
  }

  async getPlaceDetails(placeId) {
    if (!this.apiKey) {
      return null;
    }

    try {
      const response = await axios.get(`${GOOGLE_PLACES_BASE_URL}/details/json`, {
        params: {
          place_id: placeId,
          fields: 'name,formatted_address,geometry,rating,user_ratings_total,types,photos',
          key: this.apiKey
        }
      });

      if (response.data.status !== 'OK') {
        console.warn(`⚠️  Google Places API error: ${response.data.status}`);
        return null;
      }

      return response.data.result;
    } catch (error) {
      console.error('❌ Error getting place details:', error.message);
      return null;
    }
  }
}

async function main() {
  console.log('🌱 Starting database seeding with Google Places API...');

  const seeder = new GooglePlacesSeeder();

  if (!seeder.apiKey) {
    console.log('❌ Cannot proceed without Google Places API key');
    console.log('   Please set GOOGLE_PLACES_API_KEY or GOOGLE_MAPS_API_KEY in your environment');
    console.log('   You can also manually add places through your app interface');
    return;
  }

  // 1. Get existing users
  const users = await prisma.user.findMany();
  if (users.length === 0) {
    console.log('❌ No users found. Please create a user first.');
    return;
  }

  // 2. Define search queries for different types of places
  const searchQueries = [
    {
      name: 'Best Coffee Shops in New York',
      description: 'Discover the finest coffee culture in the city that never sleeps',
      genre: 'Food & Drink',
      subgenre: 'Coffee Shops',
      city: 'New York',
      location: { lat: 40.7128, lng: -74.0060 },
      queries: ['coffee shop New York', 'specialty coffee Manhattan', 'artisan coffee Brooklyn']
    },
    {
      name: 'Hidden Gems in Paris',
      description: 'Secret spots only locals know about in the City of Light',
      genre: 'Arts & Culture',
      subgenre: 'Hidden Spots',
      city: 'Paris',
      location: { lat: 48.8566, lng: 2.3522 },
      queries: ['hidden gems Paris', 'secret spots Paris', 'local favorites Paris']
    },
    {
      name: 'Vintage Shopping in London',
      description: 'The best vintage and thrift stores across London',
      genre: 'Shopping',
      subgenre: 'Vintage Shops',
      city: 'London',
      location: { lat: 51.5074, lng: -0.1278 },
      queries: ['vintage shop London', 'thrift store London', 'antique shop London']
    },
    {
      name: 'Street Art in Berlin',
      description: 'Explore Berlin\'s vibrant street art scene',
      genre: 'Arts & Culture',
      subgenre: 'Street Art',
      city: 'Berlin',
      location: { lat: 52.5200, lng: 13.4050 },
      queries: ['street art Berlin', 'graffiti Berlin', 'urban art Berlin']
    },
    {
      name: 'Best Ramen in Tokyo',
      description: 'Authentic ramen experiences in the ramen capital of the world',
      genre: 'Food & Drink',
      subgenre: 'Ramen',
      city: 'Tokyo',
      location: { lat: 35.6762, lng: 139.6503 },
      queries: ['ramen Tokyo', 'tonkotsu ramen Tokyo', 'best ramen Tokyo']
    }
  ];

  let totalLists = 0;
  let totalPlaces = 0;

  for (const listTemplate of searchQueries) {
    console.log(`\n📝 Creating list: ${listTemplate.name}`);

    // 3. Search for places using Google Places API
    const allPlaces = [];
    
    for (const query of listTemplate.queries) {
      const places = await seeder.searchPlaces(query, listTemplate.location, 10000);
      allPlaces.push(...places);
      
      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Remove duplicates based on place_id
    const uniquePlaces = allPlaces.filter((place, index, self) => 
      index === self.findIndex(p => p.place_id === place.place_id)
    );

    console.log(`   Found ${uniquePlaces.length} unique places`);

    if (uniquePlaces.length === 0) {
      console.log(`   ⚠️  Skipping ${listTemplate.name} - no places found`);
      continue;
    }

    // 4. Get or create city
    const country = await prisma.country.upsert({
      where: { name: getCountryName(listTemplate.city) },
      update: {},
      create: {
        name: getCountryName(listTemplate.city),
        code: getCountryCode(listTemplate.city),
        slug: getCountryName(listTemplate.city).toLowerCase().replace(/\s+/g, '-')
      }
    });

    const city = await prisma.city.upsert({
      where: { countryId_name: { countryId: country.id, name: listTemplate.city } },
      update: {},
      create: {
        countryId: country.id,
        name: listTemplate.city,
        slug: listTemplate.city.toLowerCase().replace(/\s+/g, '-'),
        lat: listTemplate.location.lat,
        lng: listTemplate.location.lng,
        listCount: 0
      }
    });

    // 5. Create places in database
    const listPlaceCreates = [];
    const placesToUse = uniquePlaces.slice(0, 5); // Use first 5 places

    for (let i = 0; i < placesToUse.length; i++) {
      const googlePlace = placesToUse[i];
      
      // Check if place already exists
      let place = await prisma.place.findUnique({
        where: { googlePlaceId: googlePlace.place_id }
      });

      if (!place) {
        // Get additional details
        const details = await seeder.getPlaceDetails(googlePlace.place_id);
        
        place = await prisma.place.create({
          data: {
            googlePlaceId: googlePlace.place_id,
            name: googlePlace.name,
            address: googlePlace.formatted_address,
            lat: googlePlace.geometry?.location?.lat || 0,
            lng: googlePlace.geometry?.location?.lng || 0,
            description: details ? `Rating: ${details.rating || 'N/A'}/5 (${details.user_ratings_total || 0} reviews)` : null,
            cityId: city.id
          }
        });
        totalPlaces++;
        console.log(`   ✅ Created place: ${place.name}`);
      } else {
        console.log(`   ♻️  Using existing place: ${place.name}`);
      }

      listPlaceCreates.push({
        placeId: place.id,
        order: i + 1,
        note: i === 0 ? 'Must-visit spot!' : null
      });

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // 6. Create the list
    const creator = users[Math.floor(Math.random() * users.length)];

    const list = await prisma.list.create({
      data: {
        name: listTemplate.name,
        description: listTemplate.description,
        genre: listTemplate.genre,
        subgenre: listTemplate.subgenre,
        cityId: city.id,
        creatorId: creator.id,
        places: { create: listPlaceCreates },
        placeCount: listPlaceCreates.length,
        likeCount: Math.floor(Math.random() * 50) + 10,
        coverImage: null
      }
    });

    // Update city list count
    await prisma.city.update({
      where: { id: city.id },
      data: { listCount: { increment: 1 } }
    });

    totalLists++;
    console.log(`   ✅ Created list with ${listPlaceCreates.length} places`);
  }

  // 7. Create some likes
  const allLists = await prisma.list.findMany();
  let totalLikes = 0;

  for (const user of users.slice(0, 3)) {
    const numLikes = Math.floor(Math.random() * 3) + 1;
    const shuffledLists = allLists.sort(() => 0.5 - Math.random());
    
    for (let i = 0; i < numLikes && i < shuffledLists.length; i++) {
      const list = shuffledLists[i];
      
      if (list.creatorId === user.id) continue;

      try {
        await prisma.listLike.create({
          data: {
            userId: user.id,
            listId: list.id
          }
        });
        totalLikes++;
      } catch (error) {
        // Ignore duplicate like errors
      }
    }
  }

  // Update like counts
  for (const list of allLists) {
    const likeCount = await prisma.listLike.count({
      where: { listId: list.id }
    });
    
    await prisma.list.update({
      where: { id: list.id },
      data: { likeCount }
    });
  }

  console.log('\n✅ Seeding completed successfully!');
  console.log(`📊 Summary:`);
  console.log(`   👥 Users: ${users.length}`);
  console.log(`   📝 New Lists: ${totalLists}`);
  console.log(`   📍 New Places: ${totalPlaces}`);
  console.log(`   ❤️ Likes: ${totalLikes}`);
  console.log('');
  console.log('🎉 SUCCESS! All places have REAL Google Place IDs from Google Places API!');
}

// Helper functions
function getCountryName(city) {
  const cityCountryMap = {
    'New York': 'United States',
    'Paris': 'France',
    'London': 'United Kingdom',
    'Berlin': 'Germany',
    'Tokyo': 'Japan',
    'Barcelona': 'Spain',
    'Melbourne': 'Australia',
    'Tel Aviv': 'Israel',
    'Amsterdam': 'Netherlands',
    'Seoul': 'South Korea'
  };
  return cityCountryMap[city] || 'Unknown';
}

function getCountryCode(city) {
  const cityCodeMap = {
    'New York': 'US',
    'Paris': 'FR',
    'London': 'GB',
    'Berlin': 'DE',
    'Tokyo': 'JP',
    'Barcelona': 'ES',
    'Melbourne': 'AU',
    'Tel Aviv': 'IL',
    'Amsterdam': 'NL',
    'Seoul': 'KR'
  };
  return cityCodeMap[city] || null;
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
