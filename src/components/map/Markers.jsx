import { AdvancedMarker,Pin } from "@vis.gl/react-google-maps"

export const Markers = (props) => { 
  return (
    <>
      {props.pois?.map((poi) => {
        return (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
            <Pin 
              background={'#FBBC04'} 
              glyphColor={'#FFF'} 
              borderColor={'#000'}
              scale={1}
            />
          </AdvancedMarker>
        );
      })}
    </>
  );
} 