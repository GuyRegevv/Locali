# 🌍 Locali

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.13.0-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-316192?style=for-the-badge&logo=postgresql)](https://postgresql.org/)

> Connect with real locals who share authentic recommendations for food, culture, and hidden gems in cities around the world.

A community-driven platform where locals share curated lists of their favorite places. Discover authentic experiences through interactive maps, real-time place data, and social features.

## ✨ Key Features

- 🗺️ **Interactive Maps** - Google Maps integration with custom place markers
- 👥 **Community Lists** - Curated recommendations from local experts  
- 🔍 **Smart Search** - Filter by location, category, or creator
- 🔐 **User Profiles** - Secure authentication with local status badges
- 📱 **Real-time Data** - Live Google Places API integration

## 🛠️ Tech Stack

**Frontend:** Next.js 15, React 19, Tailwind CSS, Framer Motion  
**Backend:** Express.js, Prisma, PostgreSQL, JWT  
**APIs:** Google Places API, Google Maps API

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Docker and Docker Compose
- Google Cloud Platform account with Places API and Maps API enabled

### Setup
```bash
# 1. Clone and install
git clone <repository-url>
cd locali
npm install

# 2. Environment setup
cp .env.example .env.local
# Add your Google API keys to .env.local

# 3. Start database
docker-compose up -d

# 4. Setup database
npm run db:generate
npm run db:push
node prisma/seed-expanded-lists.cjs

# 5. Start development
npm run dev          # Frontend (port 3000)
npm run server       # Backend (port 3001)
```

## 📁 Project Structure

```
locali/
├── src/app/              # Next.js App Router pages
├── src/components/       # React components
├── backend/              # Express.js API server
├── prisma/               # Database schema & migrations
└── docker-compose.yml    # PostgreSQL setup
```

## 🔧 Scripts

```bash
npm run dev              # Start frontend (port 3000)
npm run server           # Start backend (port 3001)
npm run db:push          # Update database schema
npm run build            # Build for production
```

## 🌱 Database Seeding

```bash
# Recommended: Creates 20 diverse lists with real Google Place IDs
node prisma/seed-expanded-lists.cjs

# Cleanup old data
node prisma/cleanup-database.cjs
```

## 🔑 Key API Endpoints

- `GET /api/lists` - Search and filter lists
- `POST /api/lists` - Create new list (authenticated)
- `GET /api/places/search` - Search places by location
- `POST /api/auth/login` - User authentication

---

**Built with ❤️ for travelers and locals worldwide**