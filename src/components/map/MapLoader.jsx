//MapLoader.jsx
'use client'
import { useEffect, useState } from 'react'
import { Map } from "@vis.gl/react-google-maps"

export const MapLoader = ({currentLocation, zoomLevel, selectedPlace}) => {
  const MapID = "bcbffe8ac9d9d240c9525e02"
  
  // If there's a selectedPlace, use controlled props for programmatic control
  // Otherwise, use default props for user interaction
  if (selectedPlace) {
    return (
      <Map 
        key={selectedPlace?.id || 'default'}
        zoom={zoomLevel}
        center={currentLocation}
        mapId={MapID}
        onCameraChanged={(event) =>
          console.log('camera changed:', event.detail.center, 'zoom:', event.detail.zoom)
        }>
      </Map>
    )
  }
  
  // For interactive maps (like /map page), use default props
  return (
    <Map 
      defaultZoom={zoomLevel || 13}
      defaultCenter={currentLocation}
      mapId={MapID}
      onCameraChanged={(event) =>
        console.log('camera changed:', event.detail.center, 'zoom:', event.detail.zoom)
      }>
    </Map>
  )
} 