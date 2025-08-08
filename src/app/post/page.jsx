"use client";

import React, { useState, useEffect } from "react";
import PostForm from "@/components/post/PostForm";
import MapSearch from "@/components/map/MapSearch";
import UIPlaceButton from "@/components/ui/UIPlaceButton";
import { ProtectedRoute } from '@/components/auth';

export default function PostPage() {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedLocations, setSelectedLocations] = useState([]);

    const handleSubmit = (data) => {    
        data.selectedLocations = selectedLocations;
        console.log(data);
        // TODO: Send data to backend
    };

    // Log whenever selectedLocations changes
    useEffect(() => {
        console.log('Updated selected locations:', selectedLocations);
    }, [selectedLocations]);

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        
        if (location && location.placeId) {
            setSelectedLocations(prev => {
                const exists = prev.find(loc => loc.placeId === location.placeId);
                if (!exists) {
                    return [...prev, location];
                } else {
                    return prev;
                }
            });
        }
    };

    const handleDeleteLocation = (placeId) => {
        setSelectedLocations(prev => prev.filter(loc => loc.placeId !== placeId));
        
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
                    <PostForm selectedLocation={selectedLocation} onSubmit={handleSubmit} />
                </div>
            </div>
            
            {/* Middle section - Map Search (1/3) */}
            <div className="w-1/3 bg-white border-r border-gray-200">
                <MapSearch onLocationSelect={handleLocationSelect} />
            </div>

            {/* Right section - Selected Places List */}
            <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col gap-2 p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Selected Places</h3>
                {selectedLocations.length === 0 ? (
                    <p className="text-gray-500 text-sm">No places selected yet</p>
                ) : (
                    selectedLocations.map((location) => (
                        <UIPlaceButton 
                            key={location.placeId} 
                            title={location.name} 
                            address={location.address}
                            category={location.types?.[0] || 'Unknown'} 
                            onClick={() => {
                                // Optional: Handle click on selected place (e.g., center map on it)
                                console.log('Clicked on selected place:', location.name);
                            }}
                            onDelete={() => handleDeleteLocation(location.placeId)}
                        />
                    ))
                )}
            </div>
        </div>
        </ProtectedRoute>
    );
}