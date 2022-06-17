import React from 'react';
import TriggersIcon from '../../images/triggersItem.svg'

interface IProps{
  card: ITriggers;
}


export default function TriggersItem(props:IProps) {

  return (
    <div className="triggersList__item">
        <div className={`triggersCard__img ${props.card.color}`}>
            <img src={props.card.image} alt={props.card.title} />
        </div>
        <div className="triggersCard__content">
            <h3>{props.card.title}</h3>
            <p>{props.card.description}</p>
        </div>
    </div>
  )
}