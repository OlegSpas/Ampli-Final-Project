import React from 'react';
import './googleMap.scss';

export default function GoogleMapComponent() {
  return (
    <section className='GoogleMap'>
        <div className="container">
          <iframe className='mainGoogleMap' title='googleMap' src="https://www.google.com/maps/d/u/0/embed?mid=1sEZgiS_JT71fr5ExQUa4d8fajsNya4I&ehbc=2E312F"></iframe>
        </div>
    </section>
  )
}