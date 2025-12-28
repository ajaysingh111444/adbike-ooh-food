import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const GoogleMapComponent = ({ address }) => {
  const center = {
    lat: address?.lat || 28.6139,
    lng: address?.lng || 77.2090,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAPn7ggJU_yL6qj6LlbrtTBqB6My9-xaFY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
