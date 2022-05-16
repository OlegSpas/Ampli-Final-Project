import React from 'react';
import { HelpTypes } from './helpTypes';
import HelpCard from './helpCard';
import './helpListComponent.scss'



export default function HelpListComponent() {

  return (
    <section id='helpList'>
        <div className="container">
            <div className="helpList__content">
                {HelpTypes.map((helpCard, index) => (
                    <HelpCard helpCard={helpCard} key={index}/>
                ))}
            </div>
        </div>
    </section>
  )
}