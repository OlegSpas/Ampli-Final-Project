import React from 'react';
import './triggers.scss'
import TriggersItem from './triggersItem';
// import TriggerData from '../../fakeData/triggersData.json';
import {TriggersList} from '../../route/triggers'



export default function Triggers() {

  return (
      <div className="triggers">
          <div className="container">
              <div className="triggersContent">
                  <div className="triggersTitle">
                      <h2 className="triggersTitle__h2">Чому це важливо?</h2>
                  </div>
                  <div className="triggersList">
                      {TriggersList.map((card:any, index:number) =>(
                          <TriggersItem 
                            key={index}
                            card={card}
                            />
                      ))}
                  </div>
              </div>
          </div>
      </div>
  )
}