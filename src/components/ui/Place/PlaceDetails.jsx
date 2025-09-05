import React from "react";
import ImageGallery from "./ImageGallery";
import PlaceHeader from "./PlaceHeader";
import PlaceInfoItems from "./PlaceInfoItems";

export default function PlaceDetails({ place }) {
  if (!place) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p className="text-gray-500 text-lg">Select a place to view details</p>
      </div>
    );
  }

  return (
    <div className="p-4 h-full overflow-hidden flex flex-col">
      <div className="flex-shrink-0">
        <ImageGallery images={place.photos || place.images} />
      </div>
      <div className="flex-shrink-0">
        <PlaceHeader 
          title={place.name || place.title} 
          rating={place.rating}
          ratingCount={place.ratingCount || place.userRatingsTotal}
          priceLevel={place.priceLevel}
        />
      </div>
      <div className="flex-shrink-0">
        <PlaceInfoItems
          category={place.category}
          address={place.formattedAddress || place.address}
          phoneNumber={place.phoneNumber}
          website={place.website}
          openingHours={place.openingHours}
          businessStatus={place.businessStatus}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Place description removed for now */}
      </div>
    </div>
  );
}
