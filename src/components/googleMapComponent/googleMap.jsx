import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 46.693885,
      lng: 32.545922
    },
    zoom: 15
  };


  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='mainGoogleMap'>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: 'AIzaSyBzzi6JLW1NZIPdeQPrrFq2Hj8W9PwNyto'}}
          yesIWantToUseGoogleMapApiInternals
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={46.693885}
            lng={32.545922}
            // text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
