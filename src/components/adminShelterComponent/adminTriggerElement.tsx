import React from 'react';
import TriggersIcon from '../../images/triggersItem.svg';
import OptionIcon from '../../images/option.svg';

interface IProps{
    trigger: {
        title: string;
        description: string;
        color: string;
    }
}


export default function AdminTriggerElement(props:IProps) {

  return (
    <div className="triggersList__item">
        <div className="card__content">
            <div className={`triggersCard__img ${props.trigger.color}`}>
                <img src={TriggersIcon} alt={props.trigger.title} />
            </div>
            <div className="triggersCard__content">
                <h3>{props.trigger.title}</h3>
                <p>{props.trigger.description}</p>
            </div>
        </div>
        <button className="info__action">  
            <img  className="action__icon" src={OptionIcon} alt="menu" />
        </button>
    </div>
  )
}