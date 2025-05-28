//MapLoader.jsx
'use client'
import { APIProvider, Map, MapCameraChangedEvent } from "@vis.gl/react-google-maps"

export const MapLoader = () => {

  const MapID = "bcbffe8ac9d9d240c9525e02"
  return (
    <Map 
      defaultZoom={13}
      defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
      mapId={MapID}
      onCameraChanged={(event) =>
        console.log('camera changed:', event.detail.center, 'zoom:', event.detail.zoom)
      }>
    </Map>
  )
} 