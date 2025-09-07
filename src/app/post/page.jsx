"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import PostForm from "@/components/post/PostForm";
import MapSearch from "@/components/map/MapSearch";
import SelectedPlaces from "@/components/post/SelectedPlaces";
import { ProtectedRoute } from '@/components/auth';
import { apiPost } from '@/utils/apiCall'; 

export default function PostPage() {
    const router = useRouter();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const [listLocation, setListLocation] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);


    const sameCity = (proposed, existing) => {
        return proposed.city.name === existing.city.name && 
               proposed.country.name === existing.country.name;
      };

    const extractCityCountry = (components = []) => {
        const find = (type) => components.find(c => (c.types || []).includes(type));
        const country = find('country');
        // Prefer 'locality'. Fall back to 'postal_town' (UK), then admin levels.
        const cityComp =
            find('locality') ||
            find('postal_town') ||
            find('administrative_area_level_2') ||
            find('administrative_area_level_1');
        return {
            country: country ? { name: country.long_name, code: country.short_name } : { name: 'Unknown', code: null },
            city: cityComp ? { name: cityComp.long_name } : { name: 'Unknown' }
        };
    };
        

    const handleSubmit = async (formData) => {
        // Validation
        if (!formData.listName || formData.listName.trim() === '') {
            alert('Please enter a list name');
            return;
        }

        if (!listLocation) {
            alert('Please select at least one place to create a list');
            return;
        }

        if (selectedLocations.length === 0) {
            alert('Please select at least one place for your list');
            return;
        }

        setIsSubmitting(true);

        try {
            // Transform the data to match backend expectations
            const payload = {
                name: formData.listName.trim(),
                description: formData.description || null,
                genre: formData.category || null,
                subgenre: formData.subcategory || null,
                location: {
                    country: {
                        name: listLocation.country.name,
                        code: listLocation.country.code || null
                    },
                    city: {
                        name: listLocation.city.name,
                        lat: listLocation.cityLat,
                        lng: listLocation.cityLng
                    }
                },
                items: selectedLocations.map((location, index) => ({
                    googlePlaceId: location.placeId,
                    name: location.name,
                    address: location.address,
                    lat: location.location?.lat || 0,
                    lng: location.location?.lng || 0,
                    order: index + 1
                }))
            };

            console.log('Submitting payload:', payload);

            // Call the backend API
            const response = await apiPost('/lists', payload);
            
            console.log('List created successfully:', response);
            
            // Navigate to profile page using Next.js router
            router.push('/profile');
            
        } catch (error) {
            console.error('Error creating list:', error);
            alert(`Failed to create list: ${error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Log whenever selectedLocations changes
    useEffect(() => {
        console.log('Updated selected locations:', selectedLocations);
    }, [selectedLocations]);

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);

        if (!location || !location.placeId) return;
            
        const proposed = (() => {
            const lc = extractCityCountry(location.address_components || []);
            // keep city lat/lng as the first picked place’s coords (good enough for MVP)
            return {
                ...lc,
                cityLat: location.location?.lat ?? null,
                cityLng: location.location?.lng ?? null
            };
        })();

        setSelectedLocations(prev => {
            // de-dup by placeId
            if (prev.some(p => p.placeId === location.placeId)) return prev;

            // first place defines the list city/country
            if (!listLocation) {
                setListLocation(proposed);
                return [...prev, location];
            }

            // enforce single-city lists for MVP
            if (sameCity(proposed, listLocation)) {
                return [...prev, location];
            } else {
                // replace with your toast if you have one
                alert(
                    `For now, a list must stay in one city.\n` +
                    `Your list is set to ${listLocation.city.name}, ${listLocation.country.name}.`
                );
                return prev;
            }
        });
    };

    const handleDeleteLocation = (placeId) => {
        setSelectedLocations(prev => {
            const next = prev.filter(item => item.placeId !== placeId);
            if (next.length === 0) setListLocation(null);
            return next;
        });
        // If the deleted location was the currently selected one, clear the selection
        if (selectedLocation && selectedLocation.placeId === placeId) {
            setSelectedLocation(null);
        }
    };

    return (
        <ProtectedRoute>
            <div className="flex w-full h-screen bg-gray-100">
            {/* Left section - Post Form (1/3) */}
            <div className="w-1/3 flex items-center justify-center p-4 border-r border-gray-200">
                <div className="w-full max-w-lg">
                    <PostForm 
                        selectedLocation={selectedLocation} 
                        onSubmit={handleSubmit} 
                        isSubmitting={isSubmitting}
                        listLocation={listLocation}
                    />
                </div>
            </div>
            
            {/* Middle section - Map Search (1/3) */}
            <div className="w-1/3 bg-white border-r border-gray-200">
                <MapSearch onLocationSelect={handleLocationSelect} />
            </div>

            {/* Right section - Selected Places List */}
            <SelectedPlaces 
                selectedLocations={selectedLocations}
                onDeleteLocation={handleDeleteLocation}
            />
        </div>
        </ProtectedRoute>
    );
}