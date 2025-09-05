import React from "react";

export default function PlaceInfoItems({ 
  category, 
  address, 
  ratingCount, 
  phoneNumber, 
  website, 
  openingHours, 
  businessStatus 
}) {
  const formatOpeningHours = (openingHours) => {
    if (!openingHours || !openingHours.weekday_text) return null;
    
    const today = new Date().getDay();
    const todayIndex = today === 0 ? 6 : today - 1; // Convert Sunday (0) to 6
    
    return openingHours.weekday_text[todayIndex] || null;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-600';
      case 'CLOSED_TEMPORARILY': return 'text-yellow-600';
      case 'CLOSED_PERMANENTLY': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="mb-6 space-y-3">
      {category && (
        <div className="flex items-center text-gray-600">
          <span className="inline-block w-6 h-6 mr-3 text-gray-500">
            <i className="bi bi-info-circle"></i>
          </span>
          <p>{category}</p>
        </div>
      )}

      {address && (
        <div className="flex items-center text-gray-600">
          <span className="inline-block w-6 h-6 mr-3 text-gray-500">
            <i className="bi bi-geo-alt"></i>
          </span>
          <p>{address}</p>
        </div>
      )}

      {phoneNumber && (
        <div className="flex items-center text-gray-600">
          <span className="inline-block w-6 h-6 mr-3 text-gray-500">
            <i className="bi bi-telephone"></i>
          </span>
          <a href={`tel:${phoneNumber}`} className="hover:text-blue-600">
            {phoneNumber}
          </a>
        </div>
      )}

      {website && (
        <div className="flex items-center text-gray-600">
          <span className="inline-block w-6 h-6 mr-3 text-gray-500">
            <i className="bi bi-globe"></i>
          </span>
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-600 truncate"
          >
            {website.replace(/^https?:\/\//, '')}
          </a>
        </div>
      )}

      {openingHours && (
        <div className="flex items-center text-gray-600">
          <span className="inline-block w-6 h-6 mr-3 text-gray-500">
            <i className="bi bi-clock"></i>
          </span>
          <p>{formatOpeningHours(openingHours) || 'Hours not available'}</p>
        </div>
      )}

      {businessStatus && (
        <div className="flex items-center">
          <span className="inline-block w-6 h-6 mr-3 text-gray-500">
            <i className="bi bi-circle-fill"></i>
          </span>
          <p className={`${getStatusColor(businessStatus)} font-medium`}>
            {businessStatus.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())}
          </p>
        </div>
      )}

      {ratingCount && (
        <div className="flex items-center text-gray-600">
          <span className="inline-block w-6 h-6 mr-3 text-gray-500">
            <i className="bi bi-star-fill"></i>
          </span>
          <p>{ratingCount.toLocaleString()} users have starred this place</p>
        </div>
      )}
    </div>
  );
}