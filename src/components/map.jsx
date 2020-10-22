import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 45.737930,
      lng: 4.850910
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC4GH-PFQGXJYdGJ7uvyfZX8fs0uLOEOAo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.loc}
        >
          <Marker
            lat={this.props.loc.lat}
            lng={this.props.loc.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
