'use client'
import { useState, useEffect } from 'react';
import { 
  MapPinIcon,
  PlusIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { useAuth } from '@/contexts/AuthContext';

export default function LocalExpertise({ user, setUser }) {
  // Location management state
  const [showAddLocation, setShowAddLocation] = useState(false);
  const [citySearchQuery, setCitySearchQuery] = useState('');
  const [citySuggestions, setCitySuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [newLocation, setNewLocation] = useState({
    status: ''
  });
  const [locationError, setLocationError] = useState('');
  const [isAddingLocation, setIsAddingLocation] = useState(false);
  const [isSearchingCities, setIsSearchingCities] = useState(false);
  
  const { addLocation, removeLocation } = useAuth();

  // Search cities with Google Places API
  useEffect(() => {
    const searchCities = async () => {
      if (!citySearchQuery || citySearchQuery.length < 2) {
        setCitySuggestions([]);
        setShowSuggestions(false);
        return;
      }

      setIsSearchingCities(true);
      try {
        const response = await fetch(`http://localhost:3001/api/geo/search-cities?q=${encodeURIComponent(citySearchQuery)}`);
        const data = await response.json();
        setCitySuggestions(data.cities || []);
        setShowSuggestions(true);
      } catch (error) {
        console.error('Failed to search cities:', error);
        setCitySuggestions([]);
      } finally {
        setIsSearchingCities(false);
      }
    };

    const timeoutId = setTimeout(searchCities, 300); // Debounce search
    return () => clearTimeout(timeoutId);
  }, [citySearchQuery]);

  // Handle city search input
  const handleCitySearchChange = (e) => {
    setCitySearchQuery(e.target.value);
    setSelectedCity(null);
    setLocationError('');
  };

  // Handle city selection from suggestions
  const handleCitySelect = async (city) => {
    setSelectedCity(city);
    setCitySearchQuery(city.fullName);
    setShowSuggestions(false);
    setLocationError('');
  };

  // Handle status change
  const handleStatusChange = (e) => {
    setNewLocation(prev => ({
      ...prev,
      status: e.target.value
    }));
    setLocationError('');
  };

  // Add location to the list
  const handleAddLocation = async () => {
    if (!selectedCity || !newLocation.status) {
      setLocationError('Please select both city and status');
      return;
    }

    // Check for duplicates (by city name and country)
    const isDuplicate = user?.locations?.some(loc => 
      loc.city.name === selectedCity.name && 
      loc.city.country.name === selectedCity.country
    );
    if (isDuplicate) {
      setLocationError('This city is already added');
      return;
    }

    // Check business rules
    const hasBornThere = user?.locations?.some(loc => loc.status === 'BORN_THERE');
    const hasCurrentlyLiving = user?.locations?.some(loc => loc.status === 'CURRENTLY_LIVING');

    if (newLocation.status === 'BORN_THERE' && hasBornThere) {
      setLocationError('You can only be born in one city');
      return;
    }

    if (newLocation.status === 'CURRENTLY_LIVING' && hasCurrentlyLiving) {
      setLocationError('You can only currently live in one city');
      return;
    }

    setIsAddingLocation(true);
    setLocationError('');

    try {
      // Get city details from Google Places
      const cityDetailsResponse = await fetch(`http://localhost:3001/api/geo/city-details?placeId=${selectedCity.placeId}`);
      const cityDetailsData = await cityDetailsResponse.json();
      
      if (!cityDetailsData.city) {
        setLocationError('Failed to get city details');
        return;
      }

      const result = await addLocation(null, newLocation.status, cityDetailsData.city);
      
      if (result.success) {
        // Update local user state
        setUser(prev => ({
          ...prev,
          locations: [...(prev.locations || []), result.location]
        }));
        
        // Reset form
        setNewLocation({ status: '' });
        setCitySearchQuery('');
        setSelectedCity(null);
        setShowAddLocation(false);
      } else {
        setLocationError(result.error || 'Failed to add location');
      }
    } catch (error) {
      setLocationError('Network error. Please try again.');
    } finally {
      setIsAddingLocation(false);
    }
  };

  // Remove location from the list
  const handleRemoveLocation = async (locationId) => {
    try {
      const result = await removeLocation(locationId);
      
      if (result.success) {
        // Update local user state
        setUser(prev => ({
          ...prev,
          locations: prev.locations?.filter(loc => loc.id !== locationId) || []
        }));
      } else {
        setLocationError(result.error || 'Failed to remove location');
      }
    } catch (error) {
      setLocationError('Network error. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <MapPinIcon className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Local Expertise</h2>
        </div>
        <button
          onClick={() => setShowAddLocation(!showAddLocation)}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <PlusIcon className="h-4 w-4" />
          Add Location
        </button>
      </div>

      {/* Add Location Form */}
      {showAddLocation && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Add Your Local City</h3>
          
          {locationError && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {locationError}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search for a City
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={citySearchQuery}
                  onChange={handleCitySearchChange}
                  placeholder="Type city name (e.g., Paris, Tokyo, New York)"
                  className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                />
                {isSearchingCities && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
                  </div>
                )}
                
                {/* City Suggestions Dropdown */}
                {showSuggestions && citySuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {citySuggestions.map((city, index) => (
                      <div
                        key={index}
                        onClick={() => handleCitySelect(city)}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium text-gray-800">{city.name}</div>
                        <div className="text-sm text-gray-600">{city.country}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {selectedCity && (
                <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-sm text-green-800">
                    <span className="font-medium">Selected:</span> {selectedCity.name}, {selectedCity.country}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Connection to This City
              </label>
              <select
                value={newLocation.status}
                onChange={handleStatusChange}
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              >
                <option value="">Select Status</option>
                <option value="BORN_THERE">Born there</option>
                <option value="LIVED_PAST">Lived there in the past</option>
                <option value="CURRENTLY_LIVING">Currently living there</option>
              </select>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleAddLocation}
                disabled={isAddingLocation}
                className="flex-1 h-10 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAddingLocation ? 'Adding...' : 'Add Location'}
              </button>
              <button
                onClick={() => {
                  setShowAddLocation(false);
                  setNewLocation({ status: '' });
                  setCitySearchQuery('');
                  setSelectedCity(null);
                  setShowSuggestions(false);
                  setLocationError('');
                }}
                className="px-4 h-10 bg-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Locations List */}
      <div className="space-y-3">
        {user?.locations?.map((location) => (
          <div key={location.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">
                {location.status === 'BORN_THERE' && '👶'}
                {location.status === 'LIVED_PAST' && '🏠'}
                {location.status === 'CURRENTLY_LIVING' && '📍'}
              </span>
              <div>
                <div className="font-semibold text-gray-800">
                  {location.city.name}, {location.city.country.name}
                </div>
                <div className="text-sm text-gray-600">
                  {location.status === 'BORN_THERE' && 'Born there'}
                  {location.status === 'LIVED_PAST' && 'Lived there in the past'}
                  {location.status === 'CURRENTLY_LIVING' && 'Currently living there'}
                </div>
              </div>
            </div>
            <button
              onClick={() => handleRemoveLocation(location.id)}
              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
              title="Remove location"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
        
        {(!user?.locations || user.locations.length === 0) && (
          <div className="text-center py-8 text-gray-500">
            <MapPinIcon className="h-12 w-12 mx-auto mb-3 opacity-50" />
            <p className="text-lg font-medium">No local cities added yet</p>
            <p className="text-sm">Add cities where you have local knowledge to help others discover great places!</p>
          </div>
        )}
      </div>
    </div>
  );
}
