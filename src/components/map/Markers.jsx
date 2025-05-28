import { AdvancedMarker,Pin } from "@vis.gl/react-google-maps"

export const Markers = (props) => { 
  return (
    <>
      {props.pois?.map((poi) => {
        // Check if this POI matches the selected place
        const isSelected = props.selectedPlace && 
                          poi.location.lat === props.selectedPlace.location.lat && 
                          poi.location.lng === props.selectedPlace.location.lng;
        
        return (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
            <Pin 
              background={isSelected ? '#FF0000' : '#FBBC04'} 
              glyphColor={'#FFF'} 
              borderColor={isSelected ? '#8B0000' : '#000'}
              scale={isSelected ? 1.5 : 1}
            />
          </AdvancedMarker>
        );
      })}
    </>
  );
} 