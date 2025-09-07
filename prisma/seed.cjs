// prisma/seed.cjs
const { PrismaClient } = require('../src/lib/prisma/generated');

const prisma = new PrismaClient();

// Realistic data for presentation
const demoUsers = [
  {
    email: 'alex@example.com',
    password: 'dev-only-hash',
    name: 'Alex Johnson',
    avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=alex&size=200'
  },
  {
    email: 'maria@example.com', 
    password: 'dev-only-hash',
    name: 'Maria Rodriguez',
    avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=maria&size=200'
  },
  {
    email: 'david@example.com',
    password: 'dev-only-hash', 
    name: 'David Chen',
    avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=david&size=200'
  },
  {
    email: 'sophie@example.com',
    password: 'dev-only-hash',
    name: 'Sophie Dubois', 
    avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=sophie&size=200'
  },
  {
    email: 'james@example.com',
    password: 'dev-only-hash',
    name: 'James Cooper',
    avatar: 'https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=james&size=200'
  }
];

const citiesData = [
  // Major cities with realistic coordinates
  { name: 'New York', country: 'United States', code: 'US', lat: 40.7128, lng: -74.0060 },
  { name: 'London', country: 'United Kingdom', code: 'GB', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', country: 'France', code: 'FR', lat: 48.8566, lng: 2.3522 },
  { name: 'Tokyo', country: 'Japan', code: 'JP', lat: 35.6762, lng: 139.6503 },
  { name: 'Berlin', country: 'Germany', code: 'DE', lat: 52.5200, lng: 13.4050 },
  { name: 'Barcelona', country: 'Spain', code: 'ES', lat: 41.3851, lng: 2.1734 },
  { name: 'Melbourne', country: 'Australia', code: 'AU', lat: -37.8136, lng: 144.9631 },
  { name: 'Tel Aviv', country: 'Israel', code: 'IL', lat: 32.0853, lng: 34.7818 },
  { name: 'Amsterdam', country: 'Netherlands', code: 'NL', lat: 52.3676, lng: 4.9041 },
  { name: 'Seoul', country: 'South Korea', code: 'KR', lat: 37.5665, lng: 126.9780 }
];

const listTemplates = [
  // Food & Drink lists
  {
    name: 'Best Coffee Shops in New York',
    description: 'Discover the finest coffee culture in the city that never sleeps',
    genre: 'Food & Drink',
    subgenre: 'Coffee Shops',
    city: 'New York',
    places: [
      { name: 'Blue Bottle Coffee', address: '54 Mint St, New York, NY 10013', lat: 40.7074, lng: -74.0113, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frY4', description: 'Artisanal coffee with minimalist aesthetic' },
      { name: 'Stumptown Coffee Roasters', address: '30 W 8th St, New York, NY 10011', lat: 40.7336, lng: -73.9966, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frY5', description: 'Pioneer of third-wave coffee movement' },
      { name: 'Devoción', address: '69 Grand St, Brooklyn, NY 11249', lat: 40.7182, lng: -73.9575, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frY6', description: 'Farm-to-cup coffee with Colombian beans' },
      { name: 'La Colombe', address: '400 Lafayette St, New York, NY 10003', lat: 40.7282, lng: -73.9942, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frY7', description: 'Sustainable coffee with beautiful spaces' }
    ]
  },
  {
    name: 'Hidden Gems in Paris',
    description: 'Secret spots only locals know about in the City of Light',
    genre: 'Arts & Culture',
    subgenre: 'Hidden Spots',
    city: 'Paris',
    places: [
      { name: 'Musée de la Chasse et de la Nature', address: '62 Rue des Archives, 75003 Paris', lat: 48.8606, lng: 2.3522, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frY8', description: 'Quirky museum of hunting and nature' },
      { name: 'Passage des Panoramas', address: '11 Bd Montmartre, 75002 Paris', lat: 48.8721, lng: 2.3408, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frY9', description: 'Historic covered passage with vintage shops' },
      { name: 'Square du Vert-Galant', address: '15 Place du Pont Neuf, 75001 Paris', lat: 48.8566, lng: 2.3408, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ0', description: 'Secret garden on the tip of Île de la Cité' }
    ]
  },
  {
    name: 'Vintage Shopping in London',
    description: 'The best vintage and thrift stores across London',
    genre: 'Shopping',
    subgenre: 'Vintage Shops',
    city: 'London',
    places: [
      { name: 'Rokit', address: '101 Brick Ln, London E1 6SE', lat: 51.5194, lng: -0.0717, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ1', description: 'Iconic vintage store with 80s and 90s fashion' },
      { name: 'Beyond Retro', address: '110-112 Cheshire St, London E2 6EJ', lat: 51.5253, lng: -0.0556, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ2', description: 'Massive vintage warehouse with curated selection' },
      { name: 'Absolute Vintage', address: '15 Hanbury St, London E1 6QR', lat: 51.5194, lng: -0.0717, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ3', description: 'Carefully curated vintage pieces' }
    ]
  },
  {
    name: 'Street Art in Berlin',
    description: 'Explore Berlin\'s vibrant street art scene',
    genre: 'Arts & Culture',
    subgenre: 'Street Art',
    city: 'Berlin',
    places: [
      { name: 'East Side Gallery', address: 'Mühlenstraße, 10243 Berlin', lat: 52.5058, lng: 13.4394, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ4', description: 'Longest remaining section of Berlin Wall with murals' },
      { name: 'Hackescher Markt Area', address: 'Hackescher Markt, 10178 Berlin', lat: 52.5225, lng: 13.4016, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ5', description: 'Vibrant street art scene in historic district' },
      { name: 'RAW Gelände', address: 'Revaler Str. 99, 10245 Berlin', lat: 52.5101, lng: 13.4516, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ6', description: 'Former railway repair shop turned art space' }
    ]
  },
  {
    name: 'Best Ramen in Tokyo',
    description: 'Authentic ramen experiences in the ramen capital of the world',
    genre: 'Food & Drink',
    subgenre: 'Ramen',
    city: 'Tokyo',
    places: [
      { name: 'Ichiran Ramen', address: '1-22-7 Jinnan, Shibuya City, Tokyo 150-0041', lat: 35.6702, lng: 139.7016, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ7', description: 'Famous tonkotsu ramen with individual booths' },
      { name: 'Tsuta', address: '1-14-1 Sugamo, Toshima City, Tokyo 170-0002', lat: 35.7336, lng: 139.7336, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ8', description: 'Michelin-starred soba ramen' },
      { name: 'Afuri', address: '1-1-7 Ebisu, Shibuya City, Tokyo 150-0013', lat: 35.6467, lng: 139.7101, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frZ9', description: 'Modern yuzu shio ramen' }
    ]
  },
  {
    name: 'Tapas Trail in Barcelona',
    description: 'The ultimate tapas crawl through Barcelona\'s best bars',
    genre: 'Food & Drink',
    subgenre: 'Tapas',
    city: 'Barcelona',
    places: [
      { name: 'Cal Pep', address: 'Plaça de les Olles, 8, 08003 Barcelona', lat: 41.3846, lng: 2.1840, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra0', description: 'Legendary standing-only tapas bar' },
      { name: 'Quimet & Quimet', address: 'Carrer del Poeta Cabanyes, 25, 08004 Barcelona', lat: 41.3756, lng: 2.1633, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra1', description: 'Tiny family-run bar famous for montaditos' },
      { name: 'Bar Mut', address: 'Carrer de Pau Claris, 192, 08037 Barcelona', lat: 41.3934, lng: 2.1650, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra2', description: 'Modern tapas bar with excellent wine selection' }
    ]
  },
  {
    name: 'Independent Bookstores in Melbourne',
    description: 'Support local literature at these amazing independent bookstores',
    genre: 'Shopping',
    subgenre: 'Bookstores',
    city: 'Melbourne',
    places: [
      { name: 'Readings Carlton', address: '309 Lygon St, Carlton VIC 3053', lat: -37.7985, lng: 144.9683, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra3', description: 'Iconic independent bookstore with great events' },
      { name: 'Hill of Content', address: '86 Bourke St, Melbourne VIC 3000', lat: -37.8136, lng: 144.9631, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra4', description: 'Charming bookstore in historic building' },
      { name: 'The Paperback Bookshop', address: '60 Bourke St, Melbourne VIC 3000', lat: -37.8136, lng: 144.9631, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra5', description: 'Cozy second-hand bookstore' }
    ]
  },
  {
    name: 'Beach Bars in Tel Aviv',
    description: 'The best beachfront bars and cafes in Tel Aviv',
    genre: 'Food & Drink',
    subgenre: 'Beach Bars',
    city: 'Tel Aviv',
    places: [
      { name: 'Shalvata', address: 'Herbert Samuel St 1, Tel Aviv-Yafo', lat: 32.0753, lng: 34.7665, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra6', description: 'Beachfront bar with amazing sunset views' },
      { name: 'Manta Ray', address: 'Alma Beach, Tel Aviv-Yafo', lat: 32.0753, lng: 34.7665, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra7', description: 'Seafood restaurant right on the beach' },
      { name: 'La La Land', address: 'Retsif Herbert Samuel St 1, Tel Aviv-Yafo', lat: 32.0753, lng: 34.7665, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra8', description: 'Trendy beach bar with great cocktails' }
    ]
  },
  {
    name: 'Canal Views in Amsterdam',
    description: 'The most picturesque canal-side spots in Amsterdam',
    genre: 'Sightseeing',
    subgenre: 'Canal Views',
    city: 'Amsterdam',
    places: [
      { name: 'Brouwersgracht', address: 'Brouwersgracht, Amsterdam', lat: 52.3789, lng: 4.8847, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83fra9', description: 'Most beautiful canal in Amsterdam' },
      { name: 'Prinsengracht', address: 'Prinsengracht, Amsterdam', lat: 52.3676, lng: 4.9041, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frb0', description: 'Historic canal with houseboats' },
      { name: 'Herengracht', address: 'Herengracht, Amsterdam', lat: 52.3676, lng: 4.9041, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frb1', description: 'Golden Age canal with grand houses' }
    ]
  },
  {
    name: 'Korean BBQ in Seoul',
    description: 'The ultimate Korean BBQ experience in Seoul',
    genre: 'Food & Drink',
    subgenre: 'Korean BBQ',
    city: 'Seoul',
    places: [
      { name: 'Maple Tree House', address: '72 Nonhyeon-ro 38-gil, Gangnam-gu, Seoul', lat: 37.5172, lng: 127.0286, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frb2', description: 'Premium Korean BBQ with high-quality beef' },
      { name: 'Born & Bred', address: '1F, 131 Bogwang-ro, Yongsan-gu, Seoul', lat: 37.5311, lng: 126.9742, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frb3', description: 'Premium hanwoo beef specialist restaurant' },
      { name: 'Mapo Galmaegi', address: 'Hongik-ro 5-gil, Mapo-gu, Seoul', lat: 37.5503, lng: 126.9208, googlePlaceId: 'ChIJN1t_tDeuEmsRUsoyG83frb4', description: 'Local favorite for grilled pork skirt meat' }
    ]
  }
];

async function main() {
  console.log('🌱 Starting database seeding...');

  // 1. Create demo users
  console.log('👥 Creating demo users...');
  const users = [];
  for (const userData of demoUsers) {
    const user = await prisma.user.upsert({
      where: { email: userData.email },
      update: {},
      create: {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        avatar: userData.avatar,
        isLocal: Math.random() > 0.5 // Randomly assign some as locals
      }
    });
    users.push(user);
  }

  // 2. Create countries and cities
  console.log('🌍 Creating countries and cities...');
  const countries = new Map();
  const cities = new Map();

  for (const cityData of citiesData) {
    // Create country if not exists
    let country = countries.get(cityData.country);
    if (!country) {
      country = await prisma.country.upsert({
        where: { name: cityData.country },
        update: {},
        create: {
          name: cityData.country,
          code: cityData.code,
          slug: cityData.country.toLowerCase().replace(/\s+/g, '-')
        }
      });
      countries.set(cityData.country, country);
    }

    // Create city
    const city = await prisma.city.upsert({
      where: { countryId_name: { countryId: country.id, name: cityData.name } },
      update: {},
      create: {
        countryId: country.id,
        name: cityData.name,
        slug: cityData.name.toLowerCase().replace(/\s+/g, '-'),
        lat: cityData.lat,
        lng: cityData.lng,
        listCount: 0
      }
    });
    cities.set(cityData.name, city);
  }

  // 3. Create lists with places
  console.log('📝 Creating lists and places...');
  let totalLists = 0;
  let totalPlaces = 0;

  for (const listTemplate of listTemplates) {
    const city = cities.get(listTemplate.city);
    if (!city) {
      console.warn(`City ${listTemplate.city} not found, skipping list ${listTemplate.name}`);
      continue;
    }

    // Pick a random user as creator
    const creator = users[Math.floor(Math.random() * users.length)];

    // Create places first
    const listPlaceCreates = [];
    for (let i = 0; i < listTemplate.places.length; i++) {
      const placeData = listTemplate.places[i];
      
      // Check if place already exists
      let place = await prisma.place.findUnique({
        where: { googlePlaceId: placeData.googlePlaceId }
      });

      if (!place) {
        place = await prisma.place.create({
          data: {
            googlePlaceId: placeData.googlePlaceId,
            name: placeData.name,
            address: placeData.address,
            lat: placeData.lat,
            lng: placeData.lng,
            description: placeData.description,
            cityId: city.id
          }
        });
        totalPlaces++;
      }

      listPlaceCreates.push({
        placeId: place.id,
        order: i + 1,
        note: Math.random() > 0.7 ? `Must-try spot!` : null // Random notes
      });
    }

    // Create the list
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
        likeCount: Math.floor(Math.random() * 100), // Random likes for demo
        coverImage: listTemplate.places[0]?.primaryImageUrl || null
      }
    });

    // Update city list count
    await prisma.city.update({
      where: { id: city.id },
      data: { listCount: { increment: 1 } }
    });

    totalLists++;
  }

  // 4. Create some random likes between users and lists
  console.log('❤️ Creating random likes...');
  const allLists = await prisma.list.findMany();
  let totalLikes = 0;

  for (const user of users) {
    // Each user likes 3-8 random lists
    const numLikes = Math.floor(Math.random() * 6) + 3;
    const shuffledLists = allLists.sort(() => 0.5 - Math.random());
    
    for (let i = 0; i < numLikes && i < shuffledLists.length; i++) {
      const list = shuffledLists[i];
      
      // Don't like your own lists
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
        if (!error.message.includes('Unique constraint')) {
          console.warn('Error creating like:', error.message);
        }
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

  console.log('✅ Seeding completed successfully!');
  console.log(`📊 Summary:`);
  console.log(`   👥 Users: ${users.length}`);
  console.log(`   🌍 Countries: ${countries.size}`);
  console.log(`   🏙️ Cities: ${cities.size}`);
  console.log(`   📝 Lists: ${totalLists}`);
  console.log(`   📍 Places: ${totalPlaces}`);
  console.log(`   ❤️ Likes: ${totalLikes}`);
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });