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
      // <div className='mainGoogleMap'>
        <iframe className='mainGoogleMap' src="https://www.google.com/maps/d/u/0/embed?mid=1sEZgiS_JT71fr5ExQUa4d8fajsNya4I&ehbc=2E312F"></iframe>
      // {/* </div> */}
    );
  }
}
