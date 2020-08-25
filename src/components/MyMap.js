import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap defaultZoom={17} defaultCenter={{ lat: 49.231, lng: -123.065 }}>
      <Marker position={{ lat: 49.231098, lng: -123.065 }} />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const MyMap = () => {

  
  return (
    <div style={{  margin:"0 auto" }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCMUU8f-GddkCCQANa7MqTIfW548tnPnFs&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `300px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default MyMap;
