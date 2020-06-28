import React, {useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import CustomMarker from '../CustomMarker/CustomMarker';
import PositionContext from '../Context/PositionContext';
 

 const MapComponent=(props)=>{


  const position =useContext(PositionContext);
  
  const handleApiLoaded = (map, maps) => {
    map.addListener('dragend', function() {  
      props.onDrag({lat:'', lng:''})
    });  
  }

 
  return (
      <GoogleMapReact
        distanceToMouse={()=>{}}
        bootstrapURLKeys={{ key:""}}
        zoom={15}
        center={{lat:position.lat, lng:position.lng}}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <CustomMarker lat={position.lat} lng={position.lng} />
      </GoogleMapReact>
   
  );
}

export default MapComponent;