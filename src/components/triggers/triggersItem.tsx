import React from 'react';
import TriggersIcon from '../../images/triggersItem.svg'

interface IProps{
    title:string;
    description:string;
    color:string;
}


export default function TriggersItem(props:IProps) {

  return (
    <div className="triggersList__item">
        {/* <div className="triggersCard__img "> */}
        <div className={`triggersCard__img ${props.color}`}>
            <img src={TriggersIcon} alt={props.title} />
        </div>
        <div className="triggersCard__content">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    </div>
  )
}