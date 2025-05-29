"use client";

import React from "react";
import { useState } from "react";
import UIListHeader from "../../../components/ui/UIListHeader";
import UIPlaceButton from "../../../components/ui/UIPlaceButton";
import PlaceDetails from "../../../components/ui/Place/PlaceDetails";
import { places } from "../../../data/places-fake-data";
import dynamic from "next/dynamic"

const locations = places.map((place) => ({
  key: place.title.toLowerCase().replace(/\s+/g, ''),
  location: place.location
}));

console.log('Locations for map:', locations);

const DynamicMapIndex = dynamic(() => import("@/components/map/MapIndex"), {
  ssr: false,
  loading: () => <p>Loading</p>
})

export default function ListPage() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  
  console.log('Selected place changed:', selectedPlace?.title || 'None');
  
  return (
    <div className="flex flex-col w-full">
      <UIListHeader
        title="List"
        location="Location"
        description="Description A little bit longer description to test the layout"
      />
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-row w-2/3 h-full">
          <div
            className="flex flex-col w-1/2 h-full overflow-y-auto"
            style={{ maxHeight: "860px" }}
          >
            <div className="mt-4">
              {places.map((place) => (
                <UIPlaceButton
                  key={place.id}
                  title={place.title}
                  category={place.category}
                  address={place.address}
                  distance={place.distance}
                  isSelected={selectedPlace?.id === place.id}
                  onClick={() => setSelectedPlace(place)}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 bg-white overflow-auto">
            <PlaceDetails place={selectedPlace} />
          </div> 
        </div>
        <div className="w-1/3 h-full" >
          <DynamicMapIndex 
            pois={locations}
            selectedPlace={selectedPlace}
          />
        </div>
      </div>
    </div>
  );
}
