# 🌍 Locali - Discover Local Experiences

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.13.0-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-316192?style=for-the-badge&logo=postgresql)](https://postgresql.org/)
[![Google Maps](https://img.shields.io/badge/Google_Maps-API-4285F4?style=for-the-badge&logo=google-maps)](https://developers.google.com/maps)

> **Connect with real locals who share authentic recommendations for food, culture, and hidden gems in cities around the world.**

Locali is a modern web application that bridges the gap between travelers and locals, providing authentic, community-driven recommendations for places to visit, eat, and explore. Built with Next.js and powered by Google Places API, it offers an intuitive platform for discovering hidden gems and local experiences.

## ✨ Features

### 🗺️ **Interactive Maps & Discovery**
- **Google Maps Integration**: Interactive maps with custom markers for places and lists
- **Location-Based Search**: Find recommendations by city, country, or specific locations
- **Real-time Place Data**: Live information from Google Places API including photos, ratings, and reviews

### 👥 **Community-Driven Content**
- **Local Expert Profiles**: Users can mark themselves as locals to share authentic recommendations
- **Curated Lists**: Create and share themed lists (food, culture, nightlife, shopping, etc.)
- **Social Features**: Like lists, follow creators, and discover trending recommendations

### 🏷️ **Smart Categorization**
- **Genre & Subgenre System**: Organize content by categories like "Food & Drink", "Culture", "Entertainment"
- **Advanced Filtering**: Search by location, category, creator, or specific themes
- **Personalized Recommendations**: Discover content based on your interests and location

### 🔐 **User Authentication & Profiles**
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **User Profiles**: Customizable profiles with avatar, address, and local status
- **Protected Routes**: Secure access to user-specific features and content

## 🛠️ Tech Stack

### **Frontend**
- **Next.js 15.2.3** - React framework with App Router
- **React 19.0.0** - UI library with latest features
- **Tailwind CSS 4.0.15** - Utility-first CSS framework
- **Framer Motion 12.15.0** - Animation library
- **Heroicons** - Beautiful SVG icons
- **Bootstrap Icons** - Additional icon set

### **Backend**
- **Express.js** - Node.js web framework
- **Prisma 6.13.0** - Modern database ORM
- **PostgreSQL 15** - Relational database
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing

### **APIs & Services**
- **Google Places API** - Place data, photos, and reviews
- **Google Maps API** - Interactive maps and geocoding
- **Axios** - HTTP client for API requests

### **Development Tools**
- **Docker Compose** - Containerized PostgreSQL database
- **Prisma Migrate** - Database schema management
- **ESLint** - Code linting and formatting

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ and npm
- **Docker** and Docker Compose
- **Google Cloud Platform** account with Places API and Maps API enabled

### 1. Clone the Repository
```bash
git clone <repository-url>
cd locali
```

### 2. Environment Setup
Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL="postgresql://locali_user:locali_password@localhost:5433/locali_db"

# JWT Secret
JWT_SECRET="your-super-secret-jwt-key"

# Google APIs
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-google-maps-api-key"
GOOGLE_PLACES_API_KEY="your-google-places-api-key"
```

### 3. Start the Database
```bash
# Start PostgreSQL with Docker Compose
docker-compose up -d

# Verify database is running
docker-compose ps
```

### 4. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed with sample data
node prisma/seed-expanded-lists.cjs
```

### 5. Install Dependencies & Start Development
```bash
# Install dependencies
npm install

# Start the Next.js development server
npm run dev

# In a separate terminal, start the backend server
npm run server
```

### 6. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Health Check**: http://localhost:3001/api/health

## 📁 Project Structure

```
locali/
├── 📁 src/                          # Next.js application source
│   ├── 📁 app/                      # App Router pages
│   │   ├── 📁 (autherized)/         # Protected routes
│   │   │   ├── 📁 home/             # Dashboard & search
│   │   │   ├── 📁 list/[id]/        # Individual list pages
│   │   │   ├── 📁 map/              # Interactive map view
│   │   │   ├── 📁 profile/          # User profiles
│   │   │   └── 📁 search/           # Search & filtering
│   │   ├── 📁 (unautherized)/       # Public routes
│   │   └── 📄 page.jsx              # Landing page
│   ├── 📁 components/               # Reusable React components
│   │   ├── 📁 auth/                 # Authentication components
│   │   ├── 📁 map/                  # Map-related components
│   │   ├── 📁 ui/                   # UI components
│   │   └── 📁 layouts/              # Layout components
│   ├── 📁 contexts/                 # React contexts
│   └── 📁 lib/                      # Utilities and configurations
├── 📁 backend/                      # Express.js backend
│   ├── 📁 routes/                   # API route handlers
│   ├── 📁 services/                 # Business logic services
│   ├── 📁 middleware/               # Express middleware
│   └── 📁 data/                     # Static data files
├── 📁 prisma/                       # Database schema and migrations
│   ├── 📄 schema.prisma             # Database schema
│   ├── 📁 migrations/               # Database migrations
│   └── 📁 seed-*.cjs                # Database seeding scripts
└── 📄 docker-compose.yml            # PostgreSQL container setup
```

## 🗄️ Database Schema

The application uses a well-structured PostgreSQL database with the following key models:

- **User**: User accounts with authentication and profile information
- **Country/City**: Geographic hierarchy for location-based content
- **Place**: Individual locations with Google Places integration
- **List**: Curated collections of places with metadata
- **ListPlace**: Junction table linking lists to places with ordering
- **ListLike**: Social engagement tracking

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start Next.js development server
npm run server           # Start Express backend server
npm run dev:server       # Start backend with nodemon

# Database
npm run db:generate      # Generate Prisma client
npm run db:push          # Push schema changes to database
npm run db:migrate       # Run database migrations
npm run db:reset         # Reset database (⚠️ destructive)

# Production
npm run build            # Build Next.js application
npm run start            # Start production server
npm run lint             # Run ESLint
```

## 🌱 Database Seeding

The project includes several seeding options for different use cases:

### **Recommended: Expanded Lists** ⭐
```bash
node prisma/seed-expanded-lists.cjs
```
Creates 20 diverse lists across 5 cities with real Google Place IDs.

### **Cleanup & Reset**
```bash
node prisma/cleanup-database.cjs
```
Removes old/duplicate data, keeping only high-quality content.

## 🔑 API Endpoints

### **Authentication**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### **Lists**
- `GET /api/lists` - Search and filter lists
- `POST /api/lists` - Create new list (authenticated)
- `GET /api/lists/:id` - Get specific list with places
- `POST /api/lists/:id/like` - Like a list (authenticated)
- `DELETE /api/lists/:id/like` - Unlike a list (authenticated)

### **Places**
- `GET /api/places/search` - Search places by location/query
- `GET /api/places/:id` - Get place details with Google Places data

### **Geographic**
- `GET /api/geo/countries` - Get all countries
- `GET /api/geo/cities` - Get cities by country

## 🎨 Key Features in Detail

### **Interactive Map Experience**
- Real-time place markers with custom styling
- Zoom and pan functionality
- Place selection with detailed information panels
- Integration with Google Maps for accurate location data

### **Smart Search & Discovery**
- Location-based filtering (country, city)
- Category-based filtering (genre, subgenre)
- Creator-based filtering
- Real-time search suggestions

### **Social Features**
- Like/unlike lists
- User profiles with local status
- Community-driven content curation
- Engagement metrics (likes, views)

## 🚀 Deployment

### **Environment Variables**
Ensure all required environment variables are set in your production environment:
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secure JWT signing key
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - Google Maps API key
- `GOOGLE_PLACES_API_KEY` - Google Places API key

### **Database Migration**
```bash
npm run db:push
```

### **Build & Start**
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Places API** for comprehensive place data
- **Google Maps Platform** for interactive mapping
- **Prisma** for excellent database tooling
- **Next.js** team for the amazing React framework
- **Tailwind CSS** for beautiful, utility-first styling

---

**Built with ❤️ for travelers and locals worldwide**

*Discover authentic experiences, connect with communities, and explore the world like never before with Locali.*