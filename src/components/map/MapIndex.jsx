//MapIndex.jsx
'use client'
import { MapLoader } from './MapLoader'
import { Markers } from './Markers'
import { APIProvider } from "@vis.gl/react-google-maps"

export default function MapIndex (props) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Maps API loaded')}>
      <MapLoader/>
      <Markers pois={props.pois}/>
    </APIProvider>
  )
} 