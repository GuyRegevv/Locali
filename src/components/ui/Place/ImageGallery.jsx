import React from "react";

export default function ImageGallery({ images }) {
  // Limit to maximum 4 photos
  const limitedImages = images ? images.slice(0, 4) : [];
  
  return (
    <div className="mb-6">
      <div className="grid grid-cols-2 gap-2">
        {limitedImages.map((image, index) => (
          <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={image || "/placeholder.svg"}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
