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
        className="w-full px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 rounded-xl shadow-sm disabled:bg-gray-100 disabled:cursor-not-allowed transition-all duration-200"
      />
      {isLoading && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-500"></div>
        </div>
      )}
    </div>
  )
}

// Main map search component
export default function MapSearch({ onLocationSelect, listLocation = null, errorMessage = '' }) {
  const [selectedPlace, setSelectedPlace] = useState(null)
  const [mapCenter, setMapCenter] = useState({ lat: 32.0853, lng: 34.7818 }) // Default to Tel Aviv
  const [mapZoom, setMapZoom] = useState(13)
  const [mapError, setMapError] = useState(null)
  const [clearTrigger, setClearTrigger] = useState(0)

  // Update map center when list location changes
  useEffect(() => {
    if (listLocation && listLocation.cityLat && listLocation.cityLng) {
      setMapCenter({ lat: listLocation.cityLat, lng: listLocation.cityLng })
      setMapZoom(13)
    }
  }, [listLocation])

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
    <div className="w-full h-full flex flex-col bg-gray-50">
      <APIProvider 
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
        onLoad={() => console.log('Maps API loaded')}
      >
        {/* Search Bar */}
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Find Places</h3>
              {listLocation ? (
                <p className="text-sm text-gray-600">
                  Search for places in <span className="font-medium text-green-600">{listLocation.city.name}, {listLocation.country.name}</span>
                </p>
              ) : (
                <p className="text-sm text-orange-600">Please select a list location first</p>
              )}
            </div>
            {selectedPlace && (
              <button
                onClick={clearSelection}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Clear
              </button>
            )}
          </div>
          
          {listLocation ? (
            <PlacesAutocomplete 
              onPlaceSelect={handlePlaceSelect}
              clearTrigger={clearTrigger}
              placeholder={`Search for restaurants, cafes, attractions in ${listLocation.city.name}...`}
            />
          ) : (
            <div className="w-full px-4 py-3 border border-orange-200 bg-orange-50 rounded-xl">
              <p className="text-orange-800 text-sm">
                Please select a list location in the form to start searching for places.
              </p>
            </div>
          )}
          
          {/* Error Message */}
          {errorMessage && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 text-red-500 mt-0.5">⚠️</div>
                <p className="text-red-800 text-sm">{errorMessage}</p>
              </div>
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
                  background={'#16a34a'} 
                  borderColor={'#15803d'} 
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