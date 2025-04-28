import React from "react";
import ImageGallery from "./ImageGallery";
import PlaceHeader from "./PlaceHeader";
import PlaceInfoItems from "./PlaceInfoItems";
import PlaceDescription from "./PlaceDescription";

export default function PlaceDetails({ place }) {
  if (!place) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p className="text-gray-500 text-lg">Select a place to view details</p>
      </div>
    );
  }

  return (
    <div className="p-4 h-full overflow-auto">
      <ImageGallery images={place.images} />
      <PlaceHeader title={place.title} />
      <PlaceInfoItems
        category={place.category}
        address={place.address}
        ratingCount={place.ratingCount}
      />
      <PlaceDescription description={place.description} />
    </div>
  );
}
