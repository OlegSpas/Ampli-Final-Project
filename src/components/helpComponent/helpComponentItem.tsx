import React from 'react';
import photo from '../../images/helpCardImg.jpg';

interface IProps{
    title:string;
    description:string;
    link:string;
}


export default function HelpComponentItem(props:IProps) {

  return (
    <div className="helpComponent__card">
        <div className="card__image">
            <img src={photo} alt={props.title} />
        </div>
        <div className="card__content">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button>
                Більше
            </button>
        </div>
    </div>
  )
}