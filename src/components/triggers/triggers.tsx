import React from 'react';
import './triggers.scss'
import TriggersItem from './triggersItem';
import TriggerData from '../../fakeData/triggersData.json'



export default function Triggers() {

  return (
      <div className="triggers">
          <div className="container">
              <div className="triggersContent">
                  <div className="triggersTitle">
                      <h2 className="triggersTitle__h2">Чому це важливо?</h2>
                  </div>
                  <div className="triggersList">
                      {TriggerData.triggers.map((card:any, index:number) =>(
                          <TriggersItem 
                            key={index}
                            title={card.title}
                            description={card.description}
                            color={card.color}
                            />
                      ))}
                  </div>
              </div>
          </div>
      </div>
  )
}