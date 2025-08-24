'use client'
import { useState, useEffect, useRef } from 'react'
import { APIProvider, Map, AdvancedMarker, Pin, useMapsLibrary } from "@vis.gl/react-google-maps"

// Search input component that uses Google Places Autocomplete
function PlacesAutocomplete({ onPlaceSelect, clearTrigger, placeholder = "Search for places..." }) {
  const [placeAutocomplete, setPlaceAutocomplete] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const inputRef = useRef(null)
  const places = useMapsLibrary('places')

  useEffect(() => {
    if (!places || !inputRef.current) return

    const options = {
      fields: ['geometry', 'name', 'formatted_address', 'place_id', 'types', 'address_components']
    }

    try {
      setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options))
      setIsLoading(false)
    } catch (error) {
      console.error('Error initializing Places Autocomplete:', error)
      setIsLoading(false)
    }
  }, [places])

  useEffect(() => {
    if (!placeAutocomplete) return

    placeAutocomplete.addListener('place_changed', () => {
      const place = placeAutocomplete.getPlace()
      if (place.geometry?.location) {
        onPlaceSelect({
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          },
          name: place.name,
          address: place.formatted_address,
          placeId: place.place_id,
          types: place.types,
          address_components: place.address_components || []
        })
      }
    })
  }, [onPlaceSelect, placeAutocomplete])

  // Clear input when clearTrigger changes
  useEffect(() => {
    if (clearTrigger > 0 && inputRef.current) {
      inputRef.current.value = ''
    }
  }, [clearTrigger])

  return (
    <div className="relative">
      <input
        ref={inputRef}
        placeholder={isLoading ? "Loading..." : placeholder}
        disabled={isLoading}
        className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-blue-500 text-gray-800 rounded-lg shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
      {isLoading && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  )
}

// Main map search component
export default function MapSearch({ onLocationSelect }) {
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [mapCenter, setMapCenter] = useState({ lat: 32.0853, lng: 34.7818 }) // Default to Tel Aviv
  const [mapZoom, setMapZoom] = useState(13)
  const [mapError, setMapError] = useState(null)
  const [clearTrigger, setClearTrigger] = useState(0)

  const handlePlaceSelect = (place) => {
    setSelectedPlace(place)
    setMapCenter(place.location)
    setMapZoom(15)
    
    // Call the callback if provided
    if (onLocationSelect) {
      onLocationSelect(place)
    }
  }

  const clearSelection = () => {
    setSelectedPlace(null)
    setMapZoom(10)
    setMapCenter({ lat: 40.7128, lng: -74.0060 })
    
    // Trigger input clear by incrementing the counter
    setClearTrigger(prev => prev + 1)
    
    if (onLocationSelect) {
      onLocationSelect(null)
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      <APIProvider 
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log('Maps API loaded')}
      >
        {/* Search Bar */}
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-medium text-gray-800">Search Location</h3>
            {selectedPlace && (
              <button
                onClick={clearSelection}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Clear Selection
              </button>
            )}
          </div>
          
          <PlacesAutocomplete 
            onPlaceSelect={handlePlaceSelect}
            clearTrigger={clearTrigger}
            placeholder="Search for restaurants, hotels, attractions..."
          />
          
          {selectedPlace && (
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900">{selectedPlace.name}</h4>
              <p className="text-sm text-blue-700">{selectedPlace.address}</p>
              {selectedPlace.types && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {selectedPlace.types.slice(0, 3).map((type, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {type.replace(/_/g, ' ')}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Map */}
        <div className="flex-1">
          <Map
            defaultZoom={mapZoom}
            defaultCenter={mapCenter}
            zoom={mapZoom}
            center={mapCenter}
            mapId="bcbffe8ac9d9d240c9525e02"
            onCameraChanged={(event) => {
              console.log('Camera changed:', event.detail.center, 'zoom:', event.detail.zoom)
            }}
            onLoad={() => setMapError(null)}
            onError={(error) => {
              console.error('Map error:', error)
              setMapError(error)
            }}
          >
            {selectedPlace && (
              <AdvancedMarker position={selectedPlace.location}>
                <Pin 
                  background={'#3B82F6'} 
                  borderColor={'#1E40AF'} 
                  glyphColor={'white'}
                />
              </AdvancedMarker>
            )}
          </Map>
          
          {mapError && (
            <div className="absolute inset-0 bg-red-50 flex items-center justify-center">
              <div className="text-center p-4">
                <h4 className="text-red-800 font-medium">Map Error</h4>
                <p className="text-red-600 text-sm">Failed to load the map. Please check your API key and internet connection.</p>
              </div>
            </div>
          )}
        </div>
      </APIProvider>
    </div>
  )
} 