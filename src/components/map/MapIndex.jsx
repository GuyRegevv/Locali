//MapIndex.jsx
'use client'
import { MapLoader } from './MapLoader'
import { Markers } from './Markers'
import { APIProvider } from "@vis.gl/react-google-maps"

export default function MapIndex (props) {
  // Use selected place location if available, otherwise use first POI or appropriate default center
  const currentLocation = props.selectedPlace?.location || 
                          props.pois[0]?.location || 
                          { lat: 51.5074, lng: -0.1278 };
  
  const zoomLevel = props.selectedPlace ? 13 : 11;
  
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API loaded')}>
      <MapLoader 
        currentLocation={currentLocation}
        zoomLevel={zoomLevel}
        selectedPlace={props.selectedPlace}
      />
      <Markers 
        pois={props.pois}
        selectedPlace={props.selectedPlace}
      />
    </APIProvider>
  )
} 