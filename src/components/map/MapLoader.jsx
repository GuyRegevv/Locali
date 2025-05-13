//MapLoader.jsx
'use client'
import { APIProvider, Map, MapCameraChangedEvent } from "@vis.gl/react-google-maps"

export const MapLoader = () => {

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API loaded')}>
      <Map 
        defaultZoom={13}
        defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
        onCameraChanged={(event) =>
          console.log('camera changed:', event.detail.center, 'zoom:', event.detail.zoom)
        }>
      </Map>
    </APIProvider>
  )
} 