'use client'
import React from 'react';

export default function SelectedPlaces({ selectedLocations, onDeleteLocation }) {
  return (
    <div className="w-1/3 bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">Selected Places</h3>
          {selectedLocations.length > 0 && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              {selectedLocations.length} {selectedLocations.length === 1 ? 'place' : 'places'}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">
          {selectedLocations.length === 0 
            ? "Click on the map to add places to your list"
            : "Click on a place to view details or remove it"
          }
        </p>
      </div>

      {/* Places List */}
      <div className="flex-1 overflow-y-auto p-4">
        {selectedLocations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">No places selected yet</h4>
            <p className="text-sm text-gray-500 max-w-xs">
              Start building your list by clicking on places in the map to add them here.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {selectedLocations.map((location, index) => (
              <div 
                key={location.placeId}
                className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 bg-green-100 text-green-700 text-xs font-semibold rounded-full flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <h4 className="font-semibold text-gray-900 truncate">{location.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{location.address}</p>
                  </div>
                  <button
                    onClick={() => onDeleteLocation(location.placeId)}
                    className="ml-3 w-7 h-7 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-600 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 opacity-0 group-hover:opacity-100"
                    title="Remove place"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
