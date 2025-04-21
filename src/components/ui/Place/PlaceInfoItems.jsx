import React from "react";

export default function PlaceInfoItems({ category, address, ratingCount }) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2 text-gray-600">
        <span className="inline-block w-6 h-6 mr-1 text-gray-500">
          <i className="bi bi-info"></i>
        </span>
        <p>{category}</p>
      </div>

      <div className="flex items-center mb-2 text-gray-600">
        <span className="inline-block w-6 h-6 mr-1 text-gray-500">
          <i className="bi bi-geo-alt"></i>
        </span>
        <p>{address}</p>
      </div>

      <div className="flex items-center mb-4 text-gray-600">
        <span className="inline-block w-6 h-6 mr-1 text-gray-500">
          <i className="bi bi-star-fill"></i>
        </span>
        <p>{ratingCount} users have starred this place</p>
      </div>
    </div>
  );
}