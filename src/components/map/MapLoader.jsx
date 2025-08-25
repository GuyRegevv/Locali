//MapLoader.jsx
'use client'
import { useEffect, useState } from 'react'
import { Map } from "@vis.gl/react-google-maps"

export const MapLoader = ({currentLocation, zoomLevel, selectedPlace}) => {
  const MapID = "bcbffe8ac9d9d240c9525e02"
  
  // Always use default* props so the map stays interactive (drag/zoom)
  // Use a changing key when selectedPlace changes to recenter when a new list is picked
  return (
    <Map 
      key={selectedPlace?.id || 'default'}
      defaultZoom={zoomLevel || 13}
      defaultCenter={currentLocation}
      mapId={MapID}
      onCameraChanged={(event) =>
        console.log('camera changed:', event.detail.center, 'zoom:', event.detail.zoom)
      }>
    </Map>
  )
} 