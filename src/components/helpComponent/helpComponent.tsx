import React from 'react';
import HelpData from '../../fakeData/helpData.json'
import './helpComponent.scss'
import HelpComponentItem from './helpComponentItem';




export default function HelpComponent() {

  return (
    <div className="helpComponent">
        <div className="container">
            <div className="helpComponent__Content">
                <div className="helpComponent__title">
                    <h2>Як ти можеш допомогти?</h2>
                </div>
                <div className="helpComponent__list">
                {HelpData.helpTypes.map((card:any, index:number) =>(
                    <HelpComponentItem
                        key={index}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                      ))}
                </div>
            </div>
        </div>
    </div>
  )
}