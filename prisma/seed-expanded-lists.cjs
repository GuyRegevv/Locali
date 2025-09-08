// prisma/seed-expanded-lists.cjs
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
  console.log('🌱 Starting EXPANDED database seeding with Google Places API...');
  console.log('   Creating diverse lists for the same 5 cities');

  const seeder = new GooglePlacesSeeder();

  if (!seeder.apiKey) {
    console.log('❌ Cannot proceed without Google Places API key');
    console.log('   Please set GOOGLE_PLACES_API_KEY or GOOGLE_MAPS_API_KEY in your environment');
    return;
  }

  // 1. Create demo users with local expertise if none exist
  let users = await prisma.user.findMany();
  const existingUserLocations = await prisma.userLocation.findMany();
  
  if (users.length === 0 || existingUserLocations.length === 0) {
    console.log('👥 Creating demo users with local expertise...');
    
    // Define city data for user creation
    const cityData = {
      'New York': { lat: 40.7128, lng: -74.0060 },
      'Paris': { lat: 48.8566, lng: 2.3522 },
      'London': { lat: 51.5074, lng: -0.1278 },
      'Berlin': { lat: 52.5200, lng: 13.4050 },
      'Tokyo': { lat: 35.6762, lng: 139.6503 }
    };
    
    // Define culturally appropriate name pools
    const namePools = {
      'New York': {
        firstNames: ['Michael', 'Sarah', 'David', 'Jessica', 'Christopher', 'Ashley', 'Matthew', 'Amanda', 'Joshua', 'Stephanie'],
        lastNames: ['Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez']
      },
      'Paris': {
        firstNames: ['Pierre', 'Marie', 'Jean', 'Sophie', 'Philippe', 'Camille', 'Antoine', 'Julie', 'Nicolas', 'Claire'],
        lastNames: ['Dubois', 'Martin', 'Bernard', 'Thomas', 'Petit', 'Robert', 'Richard', 'Durand', 'Moreau', 'Simon']
      },
      'London': {
        firstNames: ['James', 'Emma', 'William', 'Olivia', 'Oliver', 'Charlotte', 'Harry', 'Amelia', 'George', 'Isabella'],
        lastNames: ['Smith', 'Jones', 'Taylor', 'Williams', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Roberts']
      },
      'Berlin': {
        firstNames: ['Klaus', 'Anna', 'Hans', 'Maria', 'Wolfgang', 'Elisabeth', 'Dieter', 'Ursula', 'Günther', 'Monika'],
        lastNames: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann']
      },
      'Tokyo': {
        firstNames: ['Hiroshi', 'Yuki', 'Takeshi', 'Akiko', 'Kenji', 'Naoko', 'Satoshi', 'Mika', 'Yuji', 'Rie'],
        lastNames: ['Tanaka', 'Sato', 'Suzuki', 'Takahashi', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura', 'Kobayashi', 'Kato']
      }
    };

    // Define local expertise scenarios for each city
    const expertiseScenarios = [
      // New York experts
      { cities: ['New York'], scenario: 'born_and_live' },
      { cities: ['New York'], scenario: 'born_there' },
      { cities: ['New York'], scenario: 'live_there' },
      
      // Paris experts
      { cities: ['Paris'], scenario: 'born_and_live' },
      { cities: ['Paris'], scenario: 'born_there' },
      { cities: ['Paris'], scenario: 'live_there' },
      
      // London experts
      { cities: ['London'], scenario: 'born_and_live' },
      { cities: ['London'], scenario: 'born_there' },
      { cities: ['London'], scenario: 'live_there' },
      
      // Berlin experts
      { cities: ['Berlin'], scenario: 'born_and_live' },
      { cities: ['Berlin'], scenario: 'born_there' },
      { cities: ['Berlin'], scenario: 'live_there' },
      
      // Tokyo experts
      { cities: ['Tokyo'], scenario: 'born_and_live' },
      { cities: ['Tokyo'], scenario: 'born_there' },
      { cities: ['Tokyo'], scenario: 'live_there' },
      
      // Multi-city experts (born in one, live in another)
      { cities: ['New York', 'Paris'], scenario: 'born_and_live' },
      { cities: ['London', 'Berlin'], scenario: 'born_and_live' },
      { cities: ['Paris', 'Tokyo'], scenario: 'born_and_live' }
    ];

    const createdUsers = [];

    for (let i = 0; i < expertiseScenarios.length; i++) {
      const scenario = expertiseScenarios[i];
      const primaryCity = scenario.cities[0];
      const namePool = namePools[primaryCity];
      
      // Generate random name from the primary city's name pool
      const firstName = namePool.firstNames[Math.floor(Math.random() * namePool.firstNames.length)];
      const lastName = namePool.lastNames[Math.floor(Math.random() * namePool.lastNames.length)];
      const fullName = `${firstName} ${lastName}`;
      
      // Generate email based on name
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
      
      // Determine if user is local (always true for our experts)
      const isLocal = true;
      
      // Create user locations for expertise
      const userLocations = [];
      for (const cityName of scenario.cities) {
        const locationData = cityData[cityName];
        if (locationData) {
          userLocations.push({
            city: cityName,
            lat: locationData.lat,
            lng: locationData.lng,
            isBirthplace: scenario.scenario === 'born_there' || scenario.scenario === 'born_and_live',
            isCurrentResidence: scenario.scenario === 'live_there' || scenario.scenario === 'born_and_live'
          });
        }
      }

      const user = await prisma.user.create({
        data: {
          name: fullName,
          email: email,
          password: 'demo123', // Demo password
          avatar: null,
          isLocal: isLocal,
          address: null
        }
      });

      // Create user locations for expertise tracking
      for (const location of userLocations) {
        // Get or create country and city first
        const country = await prisma.country.upsert({
          where: { name: getCountryName(location.city) },
          update: {},
          create: {
            name: getCountryName(location.city),
            code: getCountryCode(location.city),
            slug: getCountryName(location.city).toLowerCase().replace(/\s+/g, '-')
          }
        });

        const city = await prisma.city.upsert({
          where: { countryId_name: { countryId: country.id, name: location.city } },
          update: {},
          create: {
            countryId: country.id,
            name: location.city,
            slug: location.city.toLowerCase().replace(/\s+/g, '-'),
            lat: location.lat,
            lng: location.lng,
            listCount: 0
          }
        });

        // Create user location record
        let status;
        if (location.isBirthplace && location.isCurrentResidence) {
          status = 'CURRENTLY_LIVING'; // Born there and still living there
        } else if (location.isBirthplace) {
          status = 'BORN_THERE'; // Born there but not currently living there
        } else {
          status = 'CURRENTLY_LIVING'; // Currently living there but not born there
        }

        await prisma.userLocation.create({
          data: {
            userId: user.id,
            cityId: city.id,
            status: status
          }
        });
      }

      createdUsers.push({
        ...user,
        expertiseCities: scenario.cities,
        scenario: scenario.scenario
      });
    }
    
    users = createdUsers;
    console.log(`✅ Created ${users.length} demo users with local expertise`);
    
    // Log expertise summary
    console.log('📋 Local Expertise Summary:');
    users.forEach(user => {
      const expertiseDesc = user.expertiseCities.length > 1 
        ? `expert in ${user.expertiseCities.join(' & ')} (${user.scenario})`
        : `expert in ${user.expertiseCities[0]} (${user.scenario})`;
      console.log(`   👤 ${user.name}: ${expertiseDesc}`);
    });
  }

  // 2. Define EXPANDED search queries for different types of places
  const searchQueries = [
    // NEW YORK LISTS
    {
      name: 'Best Pizza in New York',
      description: 'The ultimate pizza tour through the Big Apple',
      genre: 'Food & Drink',
      subgenre: 'Pizza',
      city: 'New York',
      location: { lat: 40.7128, lng: -74.0060 },
      queries: ['best pizza New York', 'NYC pizza', 'artisan pizza Manhattan']
    },
    {
      name: 'Rooftop Bars in New York',
      description: 'Sky-high cocktails with stunning city views',
      genre: 'Nightlife',
      subgenre: 'Rooftop Bars',
      city: 'New York',
      location: { lat: 40.7128, lng: -74.0060 },
      queries: ['rooftop bar New York', 'sky bar Manhattan', 'rooftop cocktail NYC']
    },
    {
      name: 'Museums & Galleries in New York',
      description: 'Cultural treasures in the city that never sleeps',
      genre: 'Arts & Culture',
      subgenre: 'Museums',
      city: 'New York',
      location: { lat: 40.7128, lng: -74.0060 },
      queries: ['museum New York', 'art gallery Manhattan', 'cultural center NYC']
    },
    {
      name: 'Green Spaces in New York',
      description: 'Peaceful parks and gardens in the urban jungle',
      genre: 'Nature & Outdoors',
      subgenre: 'Parks',
      city: 'New York',
      location: { lat: 40.7128, lng: -74.0060 },
      queries: ['park New York', 'garden Manhattan', 'green space NYC']
    },

    // PARIS LISTS
    {
      name: 'Best Bakeries in Paris',
      description: 'Authentic French patisseries and boulangeries',
      genre: 'Food & Drink',
      subgenre: 'Bakeries',
      city: 'Paris',
      location: { lat: 48.8566, lng: 2.3522 },
      queries: ['boulangerie Paris', 'patisserie Paris', 'bakery Paris']
    },
    {
      name: 'Bookstores & Libraries in Paris',
      description: 'Literary havens in the City of Light',
      genre: 'Arts & Culture',
      subgenre: 'Bookstores',
      city: 'Paris',
      location: { lat: 48.8566, lng: 2.3522 },
      queries: ['bookstore Paris', 'librairie Paris', 'bookshop Paris']
    },
    {
      name: 'Markets & Food Halls in Paris',
      description: 'Fresh produce and local delicacies',
      genre: 'Food & Drink',
      subgenre: 'Markets',
      city: 'Paris',
      location: { lat: 48.8566, lng: 2.3522 },
      queries: ['market Paris', 'food market Paris', 'marché Paris']
    },
    {
      name: 'Romantic Spots in Paris',
      description: 'Perfect places for love in the most romantic city',
      genre: 'Romance',
      subgenre: 'Romantic Spots',
      city: 'Paris',
      location: { lat: 48.8566, lng: 2.3522 },
      queries: ['romantic restaurant Paris', 'romantic spot Paris', 'date night Paris']
    },

    // LONDON LISTS
    {
      name: 'Traditional Pubs in London',
      description: 'Historic pubs with character and charm',
      genre: 'Food & Drink',
      subgenre: 'Pubs',
      city: 'London',
      location: { lat: 51.5074, lng: -0.1278 },
      queries: ['traditional pub London', 'historic pub London', 'British pub London']
    },
    {
      name: 'Street Food in London',
      description: 'Global flavors from London\'s street food scene',
      genre: 'Food & Drink',
      subgenre: 'Street Food',
      city: 'London',
      location: { lat: 51.5074, lng: -0.1278 },
      queries: ['street food London', 'food market London', 'food truck London']
    },
    {
      name: 'Live Music Venues in London',
      description: 'Where music comes alive in the capital',
      genre: 'Entertainment',
      subgenre: 'Live Music',
      city: 'London',
      location: { lat: 51.5074, lng: -0.1278 },
      queries: ['live music London', 'concert venue London', 'music venue London']
    },
    {
      name: 'Historic Sites in London',
      description: 'Journey through London\'s rich history',
      genre: 'Arts & Culture',
      subgenre: 'Historic Sites',
      city: 'London',
      location: { lat: 51.5074, lng: -0.1278 },
      queries: ['historic site London', 'historical landmark London', 'heritage site London']
    },

    // BERLIN LISTS
    {
      name: 'Beer Gardens in Berlin',
      description: 'Traditional German beer culture in the capital',
      genre: 'Food & Drink',
      subgenre: 'Beer Gardens',
      city: 'Berlin',
      location: { lat: 52.5200, lng: 13.4050 },
      queries: ['beer garden Berlin', 'biergarten Berlin', 'outdoor beer Berlin']
    },
    {
      name: 'Flea Markets in Berlin',
      description: 'Treasure hunting in Berlin\'s vibrant markets',
      genre: 'Shopping',
      subgenre: 'Flea Markets',
      city: 'Berlin',
      location: { lat: 52.5200, lng: 13.4050 },
      queries: ['flea market Berlin', 'flohmarkt Berlin', 'antique market Berlin']
    },
    {
      name: 'Nightclubs in Berlin',
      description: 'Berlin\'s legendary electronic music scene',
      genre: 'Nightlife',
      subgenre: 'Nightclubs',
      city: 'Berlin',
      location: { lat: 52.5200, lng: 13.4050 },
      queries: ['nightclub Berlin', 'electronic music Berlin', 'club Berlin']
    },
    {
      name: 'Modern Architecture in Berlin',
      description: 'Contemporary design and innovative buildings',
      genre: 'Arts & Culture',
      subgenre: 'Architecture',
      city: 'Berlin',
      location: { lat: 52.5200, lng: 13.4050 },
      queries: ['modern architecture Berlin', 'contemporary building Berlin', 'design building Berlin']
    },

    // TOKYO LISTS
    {
      name: 'Sushi & Sashimi in Tokyo',
      description: 'The finest raw fish experiences in the world',
      genre: 'Food & Drink',
      subgenre: 'Sushi',
      city: 'Tokyo',
      location: { lat: 35.6762, lng: 139.6503 },
      queries: ['sushi Tokyo', 'sashimi Tokyo', 'sushi restaurant Tokyo']
    },
    {
      name: 'Temples & Shrines in Tokyo',
      description: 'Spiritual sanctuaries in the modern metropolis',
      genre: 'Arts & Culture',
      subgenre: 'Temples',
      city: 'Tokyo',
      location: { lat: 35.6762, lng: 139.6503 },
      queries: ['temple Tokyo', 'shrine Tokyo', 'Buddhist temple Tokyo']
    },
    {
      name: 'Karaoke Bars in Tokyo',
      description: 'Sing your heart out in Tokyo\'s karaoke culture',
      genre: 'Entertainment',
      subgenre: 'Karaoke',
      city: 'Tokyo',
      location: { lat: 35.6762, lng: 139.6503 },
      queries: ['karaoke Tokyo', 'karaoke bar Tokyo', 'singing room Tokyo']
    },
    {
      name: 'Tech & Electronics in Tokyo',
      description: 'Cutting-edge technology and gadgets',
      genre: 'Shopping',
      subgenre: 'Electronics',
      city: 'Tokyo',
      location: { lat: 35.6762, lng: 139.6503 },
      queries: ['electronics Tokyo', 'tech store Tokyo', 'gadget store Tokyo']
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
      await new Promise(resolve => setTimeout(resolve, 200));
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
    const placesToUse = uniquePlaces.slice(0, 4); // Use first 4 places

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
        note: i === 0 ? 'Top recommendation!' : null
      });

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    // 6. Create the list - only assign users who have expertise in this city
    // Get users who have UserLocation records for this city
    const targetCity = await prisma.city.findFirst({
      where: { name: listTemplate.city }
    });
    
    if (!targetCity) {
      console.log(`   ⚠️  Skipping ${listTemplate.name} - city not found: ${listTemplate.city}`);
      continue;
    }
    
    const eligibleUsers = await prisma.user.findMany({
      where: {
        locations: {
          some: {
            cityId: targetCity.id
          }
        }
      }
    });
    
    if (eligibleUsers.length === 0) {
      console.log(`   ⚠️  Skipping ${listTemplate.name} - no users with expertise in ${listTemplate.city}`);
      continue;
    }
    
    const creator = eligibleUsers[Math.floor(Math.random() * eligibleUsers.length)];
    console.log(`   👤 Assigned to: ${creator.name} (expert in ${listTemplate.city})`);

    const list = await prisma.list.create({
      data: {
        name: listTemplate.name,
        description: listTemplate.description,
        genre: listTemplate.genre,
        subgenre: listTemplate.subgenre,
        cityId: targetCity.id,
        creatorId: creator.id,
        places: { create: listPlaceCreates },
        placeCount: listPlaceCreates.length,
        likeCount: Math.floor(Math.random() * 30) + 5,
        coverImage: null
      }
    });

    // Update city list count
    await prisma.city.update({
      where: { id: targetCity.id },
      data: { listCount: { increment: 1 } }
    });

    totalLists++;
    console.log(`   ✅ Created list with ${listPlaceCreates.length} places`);
  }

  // 7. Create some likes
  const allLists = await prisma.list.findMany();
  let totalLikes = 0;

  for (const user of users.slice(0, 4)) {
    const numLikes = Math.floor(Math.random() * 5) + 2;
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

  console.log('\n✅ EXPANDED seeding completed successfully!');
  console.log(`📊 Summary:`);
  console.log(`   👥 Users: ${users.length}`);
  console.log(`   📝 New Lists: ${totalLists}`);
  console.log(`   📍 New Places: ${totalPlaces}`);
  console.log(`   ❤️ Likes: ${totalLikes}`);
  console.log('');
  console.log('🎉 SUCCESS! All places have REAL Google Place IDs from Google Places API!');
  console.log('🌟 Your database now has diverse, high-quality lists for presentation!');
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
