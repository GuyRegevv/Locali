import React from "react";

export default function PlaceHeader({ title, rating, ratingCount, priceLevel }) {
  const renderStars = (rating) => {
    if (!rating) return null;
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-lg ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
        <span className="text-sm text-gray-600 ml-1">
          {rating.toFixed(1)} ({ratingCount ? ratingCount.toLocaleString() : 0} reviews)
        </span>
      </div>
    );
  };

  const renderPriceLevel = (priceLevel) => {
    if (!priceLevel) return null;
    return (
      <div className="flex items-center">
        {[...Array(4)].map((_, i) => (
          <span key={i} className={`text-lg ${i < priceLevel ? 'text-green-600' : 'text-gray-300'}`}>
            $
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <div className="flex items-center space-x-4">
            {renderStars(rating)}
            {renderPriceLevel(priceLevel)}
          </div>
        </div>
        <button className="p-2 bg-gray-100 rounded-full">
          <i className="bi bi-star text-xl"></i>
        </button>
      </div>
    </div>
  );
}
