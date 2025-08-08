'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon, SparklesIcon, GlobeAltIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline';
import { SparklesIcon as SparklesSolid } from '@heroicons/react/24/solid';
import searchFilters from '@backend/data/SearchFilters.js';
import { ProtectedRoute } from '@/components/auth';

export default function HomePage() {
  const router = useRouter();
  const [filters, setFilters] = useState({
    country: '',
    city: '',
    category: '',
    subcategory: '',
    creator: ''
  });
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getQueryParams = () => {
    return Object.fromEntries(
      Object.entries(filters).filter(([_, value]) => 
        value !== '' && value !== false
      )
    );
  };

  const handleSearch = () => {
    setIsSearching(true);
    const queryParams = getQueryParams();
    const queryString = new URLSearchParams(queryParams).toString();
    
    // Simulate loading for better UX
    setTimeout(() => {
      router.push(`/search?${queryString}`);
    }, 500);
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-[#ddf9ce] via-white to-[#f0f9ed] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Sparkles */}
        <div className="absolute top-20 left-10 animate-bounce">
          <SparklesIcon className="h-8 w-8 text-green-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <SparklesSolid className="h-6 w-6 text-green-500 opacity-80" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-1000">
          <SparklesIcon className="h-10 w-10 text-green-300 opacity-50" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-500">
          <SparklesSolid className="h-8 w-8 text-green-400 opacity-70" />
        </div>
        
        {/* Floating Globes */}
        <div className="absolute top-60 left-1/4 animate-float">
          <GlobeAltIcon className="h-12 w-12 text-green-200 opacity-40" />
        </div>
        <div className="absolute bottom-60 right-1/4 animate-float-delayed">
          <GlobeAltIcon className="h-10 w-10 text-green-300 opacity-50" />
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16">
        <div className="w-full max-w-6xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-2xl border-2 border-green-400 flex items-center justify-center shadow-lg">
                <GlobeAltIcon className="h-10 w-10 text-green-600" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-green-600">Locali</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover authentic local experiences and hidden gems around the world
            </p>
          </div>

          {/* Enhanced Search Form */}
          <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Find Your Perfect Experience
              </h2>
              <p className="text-gray-600">
                Search by destination, category, or creator to discover amazing local recommendations
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="space-y-6">
              {/* Destination Row */}
              <div>
                <label className="block text-gray-700 mb-3 font-semibold text-lg">
                  <MapPinIcon className="inline h-5 w-5 mr-2 text-green-600" />
                  Destination
                </label>
                <div className="flex gap-4">
                  <select
                    name="country"
                    className="flex-1 h-14 p-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-lg"
                    value={filters.country}
                    onChange={handleChange}
                  >
                    <option value="">All Countries</option>
                    {searchFilters.countries.map((c) => (
                      <option key={c.label} value={c.label}>{c.label}</option>
                    ))}
                  </select>
                  <input 
                    name="city"
                    type="text"
                    placeholder="Enter city name..."
                    className="flex-1 h-14 p-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-lg"
                    value={filters.city}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Category Row */}
              <div>
                <label className="block text-gray-700 mb-3 font-semibold text-lg">
                  <StarIcon className="inline h-5 w-5 mr-2 text-green-600" />
                  Category
                </label>
                <div className="flex gap-4">
                  <select
                    name="category"
                    className="flex-1 h-14 p-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-lg"
                    value={filters.category}
                    onChange={handleChange}
                  >
                    <option value="">All Categories</option>
                    {searchFilters.categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  
                  {filters.category && (
                    <select
                      name="subcategory"
                      className="flex-1 h-14 p-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-lg"
                      value={filters.subcategory}
                      onChange={handleChange}
                    >
                      <option value="">All Sub-Categories</option>
                      {searchFilters.subcategories[filters.category]?.map((subcat) => (
                        <option key={subcat} value={subcat}>{subcat}</option>
                      ))}
                    </select>
                  )}
                </div>
              </div>

              {/* Creator Row */}
              <div>
                <label className="block text-gray-700 mb-3 font-semibold text-lg">
                  <SparklesIcon className="inline h-5 w-5 mr-2 text-green-600" />
                  Creator Type
                </label>
                <select
                  name="creator"
                  className="w-full h-14 p-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-lg"
                  value={filters.creator}
                  onChange={handleChange}
                >
                  <option value="">All Creators</option>
                  {searchFilters.creatorTypes.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  disabled={isSearching}
                  className="flex items-center justify-center px-12 py-4 bg-green-600 text-white font-bold text-xl rounded-xl hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Searching...
                    </>
                  ) : (
                    <>
                      <MagnifyingGlassIcon className="h-6 w-6 mr-3" />
                      Discover Experiences
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Cities Worldwide</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Local Experts</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Authentic Recommendations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(-10px); }
          50% { transform: translateY(10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
    </ProtectedRoute>
  );
}
