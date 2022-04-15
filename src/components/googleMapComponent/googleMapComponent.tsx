import React from 'react';
import GoogleMap from './googleMap';
import './googleMap.scss';

export default function GoogleMapComponent() {
  return (
    <section className='GoogleMap'>
        <div className="container">
            <GoogleMap/>
        </div>
    </section>
  )
}