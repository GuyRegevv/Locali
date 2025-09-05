'use client'
import { SparklesIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { SparklesIcon as SparklesSolid } from '@heroicons/react/24/solid';
import { ProtectedRoute } from '@/components/auth';
import { SearchForm } from './SearchForm';

export default function HomePage() {
  return (
    <ProtectedRoute>
      <div className="h-screen bg-gradient-to-br from-[#ddf9ce] via-white to-[#f0f9ed] relative overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 py-10">
        <div className="w-full max-w-5xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
              Welcome to <span className="text-green-600">Locali</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover authentic local experiences and hidden gems around the world
            </p>
          </div>

          {/* Enhanced Search Form */
          }
          <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">
                Find Your Perfect Experience
              </h2>
              <p className="text-gray-600 text-sm">
                Search by destination, category, or creator to discover amazing local recommendations
              </p>
            </div>
            <SearchForm />
          </div>
          {/** Removed quick stats to keep one-screen layout **/}
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
