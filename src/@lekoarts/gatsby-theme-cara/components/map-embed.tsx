import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


type SimpleMapProps = {
    center: {
      lat: number,
      lng: number,
    },
    zoom: number,
    height: string,
    width: string,
}

const AnyReactComponent = ({ text }) => <div style={{ background: 'white', padding: '8px', width: 'fit-content', borderRadius: '4px'}} >{text}</div>

class SimpleMap extends React.Component<SimpleMapProps> {
  static defaultProps = {
    center: {
      lat: 14.569598294797048,
      lng: -75.55183377214301,
    },
    zoom: 4,
    height: '65vh',
    width: '100%',
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: this.props.height, width: this.props.width, borderRadius: '20px', overflow: 'hidden', boxShadow: '2px 2px 12px 1px rgba(0, 0, 0, 0.1)'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GMAPS_ID }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
         <AnyReactComponent
            text="Project pins coming soon"
          />
        </GoogleMapReact>
      </div>
    );
  }
}


export default SimpleMap;