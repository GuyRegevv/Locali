// prisma/cleanup-database.cjs
const { PrismaClient } = require('../src/lib/prisma/generated');

const prisma = new PrismaClient();

async function cleanupDatabase() {
  console.log('🧹 Starting database cleanup...');
  console.log('   Keeping only the latest Google Places API seed data');

  try {
    // 1. Get the latest 5 lists (the good ones with real Google Place IDs)
    const latestLists = await prisma.list.findMany({
      where: {
        name: {
          in: [
            'Best Ramen in Tokyo',
            'Street Art in Berlin', 
            'Vintage Shopping in London',
            'Hidden Gems in Paris',
            'Best Coffee Shops in New York'
          ]
        }
      },
      include: {
        places: {
          include: {
            place: true
          }
        }
      }
    });

    console.log(`📝 Found ${latestLists.length} lists to keep`);

    if (latestLists.length === 0) {
      console.log('❌ No lists found to keep. Aborting cleanup.');
      return;
    }

    // 2. Get all place IDs that are used in the lists we want to keep
    const placeIdsToKeep = new Set();
    latestLists.forEach(list => {
      list.places.forEach(listPlace => {
        placeIdsToKeep.add(listPlace.place.id);
      });
    });

    console.log(`📍 Will keep ${placeIdsToKeep.size} places`);

    // 3. Delete all lists that are NOT in our keep list
    const listsToDelete = await prisma.list.findMany({
      where: {
        id: {
          notIn: latestLists.map(list => list.id)
        }
      }
    });

    console.log(`🗑️  Deleting ${listsToDelete.length} old lists...`);
    
    // Delete list likes first (foreign key constraint)
    for (const list of listsToDelete) {
      await prisma.listLike.deleteMany({
        where: { listId: list.id }
      });
    }

    // Delete list places first (foreign key constraint)
    for (const list of listsToDelete) {
      await prisma.listPlace.deleteMany({
        where: { listId: list.id }
      });
    }

    // Delete the lists
    await prisma.list.deleteMany({
      where: {
        id: {
          notIn: latestLists.map(list => list.id)
        }
      }
    });

    // 4. Delete places that are NOT used in the lists we're keeping
    const placesToDelete = await prisma.place.findMany({
      where: {
        id: {
          notIn: Array.from(placeIdsToKeep)
        }
      }
    });

    console.log(`🗑️  Deleting ${placesToDelete.length} unused places...`);
    
    await prisma.place.deleteMany({
      where: {
        id: {
          notIn: Array.from(placeIdsToKeep)
        }
      }
    });

    // 5. Reset city list counts
    console.log('🔄 Resetting city list counts...');
    await prisma.city.updateMany({
      data: { listCount: 0 }
    });

    // Update list counts for cities that have lists
    for (const list of latestLists) {
      await prisma.city.update({
        where: { id: list.cityId },
        data: { listCount: { increment: 1 } }
      });
    }

    // 6. Clean up any orphaned list likes
    const remainingLists = await prisma.list.findMany({
      select: { id: true }
    });
    
    const remainingListIds = remainingLists.map(list => list.id);
    
    await prisma.listLike.deleteMany({
      where: {
        listId: {
          notIn: remainingListIds
        }
      }
    });

    // 7. Final verification
    const finalListCount = await prisma.list.count();
    const finalPlaceCount = await prisma.place.count();
    const finalUserCount = await prisma.user.count();
    const finalLikeCount = await prisma.listLike.count();

    console.log('\n✅ Database cleanup completed successfully!');
    console.log('📊 Final database state:');
    console.log(`   📝 Lists: ${finalListCount}`);
    console.log(`   📍 Places: ${finalPlaceCount}`);
    console.log(`   👥 Users: ${finalUserCount}`);
    console.log(`   ❤️ Likes: ${finalLikeCount}`);

    console.log('\n🎉 Your database now contains only:');
    console.log('   ✅ 5 high-quality lists with real Google Place IDs');
    console.log('   ✅ All places have working Google Places API integration');
    console.log('   ✅ Clean, presentation-ready data');

  } catch (error) {
    console.error('❌ Cleanup failed:', error);
    throw error;
  }
}

cleanupDatabase()
  .catch((e) => {
    console.error('❌ Cleanup failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
