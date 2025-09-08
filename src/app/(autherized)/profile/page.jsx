'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  UserCircleIcon, 
  EnvelopeIcon, 
  CalendarIcon, 
  HeartIcon, 
  ListBulletIcon,
  CameraIcon,
  SparklesIcon,
  GlobeAltIcon,
  MapPinIcon,
  StarIcon,
  HomeIcon,
  GlobeAmericasIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid, StarIcon as StarSolid } from '@heroicons/react/24/solid';
import { ProtectedRoute } from '@/components/auth';
import { apiGet } from '@/utils/apiCall';
import { LocalExpertise } from '@/components/profile';
import LocalExpertiseBadge from '@/components/ui/LocalExpertiseBadge';

export default function ProfilePage() {
  // Router for navigation
  const router = useRouter();
  
  // State for user profile data
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user profile data on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching user profile...');
        const response = await apiGet('/auth/profile');
        
        console.log('Profile data received:', response);
        setUser(response.user);
      } catch (err) {
        console.error('Error fetching user profile:', err);
        setError(err.message || 'Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);



  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Handle navigation to list page
  const handleListClick = (listId) => {
    router.push(`/list/${listId}`);
  };



  // Loading state
  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-[#ddf9ce] via-white to-[#f0f9ed] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading your profile...</p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  // Error state
  if (error) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-[#ddf9ce] via-white to-[#f0f9ed] flex items-center justify-center">
          <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
            <div className="text-red-500 mb-4">
              <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Profile</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  // Main profile content
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-[#ddf9ce] via-white to-[#f0f9ed] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce">
            <SparklesIcon className="h-8 w-8 text-green-400 opacity-60" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <GlobeAltIcon className="h-6 w-6 text-green-500 opacity-80" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce delay-1000">
            <StarIcon className="h-10 w-10 text-green-300 opacity-50" />
          </div>
          <div className="absolute bottom-20 right-10 animate-pulse delay-500">
            <HeartSolid className="h-8 w-8 text-green-400 opacity-70" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-8 py-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Profile Header */}
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                
                {/* Avatar Section */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gray-200 rounded-full border-4 border-green-400 flex items-center justify-center overflow-hidden">
                    {user?.avatar ? (
                      <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <UserCircleIcon className="h-20 w-20 text-gray-500" />
                    )}
                  </div>
                  <button className="absolute bottom-2 right-2 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors shadow-lg">
                    <CameraIcon className="h-5 w-5" />
                  </button>
                </div>

                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{user?.name || 'User'}</h1>
                  </div>

                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <EnvelopeIcon className="h-5 w-5 text-green-600" />
                      <span>{user?.email || 'No email'}</span>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <CalendarIcon className="h-5 w-5 text-green-600" />
                      <span>Member since {user?.createdAt ? formatDate(user.createdAt) : 'Unknown'}</span>
                    </div>

                    {/* Address */}
                    {user?.address && (
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <MapPinIcon className="h-5 w-5 text-green-600" />
                        <span>{user.address}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-8 md:gap-4 md:flex-row">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{user?.lists?.length || 0}</div>
                    <div className="text-sm text-gray-600">Lists Created</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{user?.likes?.length || 0}</div>
                    <div className="text-sm text-gray-600">Lists Liked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {user?.lists?.reduce((sum, list) => sum + (list.likeCount || 0), 0) || 0}
                    </div>
                    <div className="text-sm text-gray-600">Total Likes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Local Expertise Section */}
            <LocalExpertise user={user} setUser={setUser} />

            {/* Content Tabs */}
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* My Lists */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <ListBulletIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">My Lists</h2>
                </div>

                <div className="space-y-4">
                  {user?.lists?.map((list) => (
                    <div 
                      key={list.id} 
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-green-300"
                      onClick={() => handleListClick(list.id)}
                    >
                      <div className="flex gap-4">
                        {list.coverImage && (
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={list.coverImage} alt={list.name} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 truncate">{list.name}</h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-2">{list.description}</p>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <MapPinIcon className="h-3 w-3" />
                              {list.city.name}, {list.city.country.name}
                            </div>
                            <div className="flex items-center gap-1">
                              <HeartSolid className="h-3 w-3 text-red-500" />
                              {list.likeCount}
                            </div>
                            <div className="flex items-center gap-1">
                              <StarSolid className="h-3 w-3 text-yellow-500" />
                              {list.placeCount} places
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {(!user?.lists || user.lists.length === 0) && (
                    <div className="text-center py-8 text-gray-500">
                      <ListBulletIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>No lists created yet</p>
                      <p className="text-sm">Start sharing your local knowledge!</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Liked Lists */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <HeartSolid className="h-6 w-6 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">Liked Lists</h2>
                </div>

                <div className="space-y-4 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                  {user?.likes?.map((like) => (
                    <div 
                      key={like.listId} 
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer hover:border-green-300"
                      onClick={() => handleListClick(like.listId)}
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-800 truncate">{like.list.name}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{like.list.description}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <UserCircleIcon className="h-3 w-3" />
                            by {like.list.creator.name}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPinIcon className="h-3 w-3" />
                            {like.list.city.name}, {like.list.city.country.name}
                          </div>
                          <div className="flex items-center gap-1">
                            <HeartSolid className="h-3 w-3 text-red-500" />
                            {like.list.likeCount}
                          </div>
                          <div className="flex items-center gap-1">
                            <StarSolid className="h-3 w-3 text-yellow-500" />
                            {like.list.placeCount} places
                          </div>
                        </div>
                        {like.list.creator?.localExpertise && (
                          <div className="mt-2">
                            <LocalExpertiseBadge 
                              expertise={like.list.creator.localExpertise}
                              size="sm"
                              showText={true}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {(!user?.likes || user.likes.length === 0) && (
                    <div className="text-center py-8 text-gray-500">
                      <HeartIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
                      <p>No liked lists yet</p>
                      <p className="text-sm">Discover and save amazing local recommendations!</p>
                    </div>
                  )}
                </div>
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
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </div>
    </ProtectedRoute>
  );
}
