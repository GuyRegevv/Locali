'use client'
import { useMemo } from 'react';
import MapIndex from './MapIndex';

// Props:
// - list (optional): a full list object including places [{ place: { lat,lng,name,address,googlePlaceId }, order, note }]
// - fallbackCenter (optional): { lat, lng }
export default function SearchMap({ list, fallbackCenter }) {
  // Build POIs for markers
  const pois = useMemo(() => {
    if (!list?.places) return [];
    return list.places.map((lp, idx) => ({
      key: lp.place.googlePlaceId || `${list.id}-${idx}`,
      location: { lat: lp.place.lat, lng: lp.place.lng },
      name: lp.place.name,
      address: lp.place.address,
    }));
  }, [list]);

  // Derive center: prefer first POI, else explicit list lat/lng, else fallback, else default London
  const center = useMemo(() => {
    if (pois[0]?.location) return pois[0].location;
    if (list?.lat && list?.lng) return { lat: list.lat, lng: list.lng };
    if (fallbackCenter?.lat && fallbackCenter?.lng) return fallbackCenter;
    return { lat: 51.5074, lng: -0.1278 };
  }, [pois, list, fallbackCenter]);


  // Pass selectedPlace only to recenter the map via key; no center marker is rendered
  const selectedPlace = useMemo(() => ({ id: list?.id || 'default', location: center }), [center, list]);

  return (
    <div className="w-full h-full">
      <MapIndex pois={pois} selectedPlace={selectedPlace} />
    </div>
  );
}


