import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class GoogleMap extends Component {
  render() {
    const { google, address } = this.props;
    return (
      <Map google={google} zoom={14}>

        <Marker
          name={'Current location'}
          position={{ lat: address.lat, lng: address.lng }}
        />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAPn7ggJU_yL6qj6LlbrtTBqB6My9-xaFY'
})(GoogleMap);
