import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


type SimpleMapProps = {
    center: {
      lat: number,
      lng: number,
    },
    zoom: number,
}

const AnyReactComponent = ({ text }) => <div>{text}</div>

class SimpleMap extends React.Component<SimpleMapProps> {
  static defaultProps = {
    center: {
      lat: 14.569598294797048,
      lng: -75.55183377214301,
    },
    zoom: 4,
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '65vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GMAPS_ID }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         {/* <AnyReactComponent
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}


export default SimpleMap;