const { PrismaClient } = require('../../src/lib/prisma/generated');

// Create a single Prisma client instance to be shared across all services
const prisma = new PrismaClient({
//   log: ['query', 'info', 'warn', 'error'], // Optional: Enable logging for debugging
});

// Handle Prisma client connection events
prisma.$connect()
  .then(() => {
    console.log('✅ Shared Prisma client connected successfully');
  })
  .catch((error) => {
    console.error('❌ Failed to connect shared Prisma client:', error);
  });

// Graceful shutdown handling
process.on('beforeExit', async () => {
  console.log('Disconnecting shared Prisma client...');
  await prisma.$disconnect();
});

module.exports = prisma;
