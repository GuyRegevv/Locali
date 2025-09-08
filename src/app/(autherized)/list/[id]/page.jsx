"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import UIListHeader from "../../../../components/ui/UIListHeader";
import UIPlaceButton from "../../../../components/ui/UIPlaceButton";
import PlaceDetails from "../../../../components/ui/Place/PlaceDetails";
import { places } from "../../../../data/places-fake-data";
import dynamic from "next/dynamic";
import { ProtectedRoute } from '@/components/auth';
import { apiGet } from '@/utils/apiCall';

// Transform backend data to match UI component expectations
const transformPlaces = (listData) => {
  if (!listData?.places) return [];
  
  return listData.places.map((listPlace) => {
    const place = listPlace.place;
    
    // Generate a more descriptive category based on list genre/subgenre
    const getCategory = () => {
      if (listData.genre && listData.subgenre) {
        return `${listData.genre} - ${listData.subgenre}`;
      } else if (listData.genre) {
        return listData.genre;
      } else {
        return 'Place';
      }
    };
    
    // Generate a more descriptive description if none exists
    const getDescription = () => {
      if (place.description) {
        return place.description;
      }
      
      // Create a fallback description based on available data
      const location = `${listData.city?.name || 'Unknown'}, ${listData.city?.country?.name || 'Unknown'}`;
      return `A ${getCategory().toLowerCase()} located at ${place.address} in ${location}. ${listPlace.note ? `Note: ${listPlace.note}` : ''}`;
    };
    
    // Generate fallback images if none exist
    const getImages = () => {
      if (place.primaryImageUrl) {
        return [place.primaryImageUrl];
      }
      
      // Use placeholder images based on category
      const category = getCategory().toLowerCase();
      if (category.includes('food') || category.includes('restaurant')) {
        return ['https://picsum.photos/seed/food/400/300'];
      } else if (category.includes('art') || category.includes('gallery')) {
        return ['https://picsum.photos/seed/art/400/300'];
      } else if (category.includes('market') || category.includes('shopping')) {
        return ['https://picsum.photos/seed/market/400/300'];
      } else {
        return ['https://picsum.photos/seed/place/400/300'];
      }
    };
    
    return {
      id: place.id,
      title: place.name,
      category: getCategory(),
      address: place.address,
      distance: 'N/A', // Would need user location to calculate
      rating: listData.averageRating || 0,
      ratingCount: listData.ratingCount ? `${listData.ratingCount}` : '0',
      description: getDescription(),
      images: getImages(),
      lists: listData.placeCount || 0,
      location: { lat: place.lat, lng: place.lng },
      note: listPlace.note, // Add the list-specific note
      order: listPlace.order, // Add the order in the list
      priceRange: listPlace.priceRange // Add price range if available
    };
  });
};

const transformLocations = (listData) => {
  if (!listData?.places) return [];
  
  return listData.places.map((listPlace) => ({
    key: listPlace.place.name.toLowerCase().replace(/\s+/g, ''),
    location: { lat: listPlace.place.lat, lng: listPlace.place.lng }
  }));
};


const DynamicMapIndex = dynamic(() => import("@/components/map/MapIndex"), {
  ssr: false,
  loading: () => <p>Loading</p>
})

export default function ListPage() {
  const params = useParams();
  const listId = params.id;
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [listData, setListData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingPlace, setLoadingPlace] = useState(false);
  
  console.log('List ID from URL:', listId);
  console.log('Selected place changed:', selectedPlace?.title || 'None');
  
  // Fetch rich place data from Google Places API
  const fetchPlaceDetails = async (placeId) => {
    setLoadingPlace(true);
    try {
      console.log('Fetching rich place data for ID:', placeId);
      console.log('API URL:', `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'}/places/${placeId}`);
      const richPlaceData = await apiGet(`/places/${placeId}`);
      console.log('Fetched rich place data:', richPlaceData);
      return richPlaceData;
    } catch (err) {
      console.error('Failed to fetch rich place data:', err);
      console.error('Error details:', {
        message: err.message,
        stack: err.stack,
        name: err.name
      });
      return null;
    } finally {
      setLoadingPlace(false);
    }
  };
  
  // Handle place selection with rich data fetching
  const handlePlaceClick = async (place) => {
    console.log('handlePlaceClick called with place:', place);
    setSelectedPlace(place); // Set basic place data immediately
    
    // Fetch rich Google Places data
    const richData = await fetchPlaceDetails(place.id);
    console.log('Rich data received:', richData);
    console.log('Google data in response:', richData?.googleData);
    console.log('Rating:', richData?.rating);
    console.log('Photos:', richData?.photos);
    console.log('Reviews:', richData?.reviews);
    if (richData) {
      // Merge rich data with basic place data
      const enhancedPlace = {
        ...place,
        ...richData,
        // Ensure we keep the original place data as fallback
        title: richData.name || place.title,
        name: richData.name || place.title,
        address: richData.formattedAddress || place.address,
        images: richData.photos || place.images,
        description: richData.description || place.description,
        category: richData.category || place.category,
        rating: richData.rating || place.rating,
        ratingCount: richData.ratingCount || place.ratingCount,
        userRatingsTotal: richData.userRatingsTotal,
        priceLevel: richData.priceLevel,
        phoneNumber: richData.phoneNumber,
        website: richData.website,
        openingHours: richData.openingHours,
        businessStatus: richData.businessStatus,
        reviews: richData.reviews,
        googleUrl: richData.googleUrl
      };
      setSelectedPlace(enhancedPlace);
    }
  };
  
  // Fetch list data from API
  useEffect(() => {
    const fetchListData = async () => {
      if (!listId) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        console.log('Fetching list data for ID:', listId);
        const data = await apiGet(`/lists/${listId}`);
        console.log('Fetched list data:', data);
        setListData(data);
      } catch (err) {
        console.error('Failed to fetch list data:', err);
        setError(err.message || 'Failed to load list');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchListData();
  }, [listId]);
  
  // Show loading state
  if (isLoading) {
    return (
      <ProtectedRoute>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="text-xl text-gray-600 mb-2">Loading list...</div>
            <div className="text-sm text-gray-500">ID: {listId}</div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }
  
  // Show error state
  if (error) {
    return (
      <ProtectedRoute>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="text-xl text-red-600 mb-2">Error loading list</div>
            <div className="text-sm text-gray-500 mb-4">{error}</div>
            <div className="text-xs text-gray-400">ID: {listId}</div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }
  
  // Show not found state
  if (!listData) {
    return (
      <ProtectedRoute>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="text-xl text-gray-600 mb-2">List not found</div>
            <div className="text-sm text-gray-500">ID: {listId}</div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }
  
  return (
    <ProtectedRoute>
      <div className="flex flex-col w-full">
      <UIListHeader
        title={listData.name || 'Untitled List'}
        location={`${listData.city?.name || 'Unknown'}, ${listData.city?.country?.name || 'Unknown'}`}
        description={listData.description || 'No description available'}
        creator={listData.creator}
      />
      <div className="flex flex-row w-full h-screen">
        <div className="flex flex-row w-2/3 h-full">
          <div
            className="flex flex-col w-1/2 h-full overflow-y-auto"
            style={{ maxHeight: "calc(100vh - 200px)" }}
          >
            <div className="mt-4">
              {transformPlaces(listData).map((place) => (
                <UIPlaceButton
                  key={place.id}
                  title={place.title}
                  category={place.category}
                  address={place.address}
                  distance={place.distance}
                  isSelected={selectedPlace?.id === place.id}
                  onClick={() => handlePlaceClick(place)}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 bg-white overflow-hidden">
            {loadingPlace ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-lg text-gray-600 mb-2">Loading place details...</div>
                  <div className="text-sm text-gray-500">Fetching Google Places data</div>
                </div>
              </div>
            ) : (
              <PlaceDetails place={selectedPlace} />
            )}
          </div> 
        </div>
        <div className="w-1/3 h-full" >
          <DynamicMapIndex 
            pois={transformLocations(listData)}
            selectedPlace={selectedPlace}
          />
        </div>
      </div>
    </div>
    </ProtectedRoute>
  );
}
