import React from 'react';
import photo from '../../images/helpCardImg.jpg';

interface IProps{
    helpCard: IHelpTypes;
}


export default function HelpCard(props:IProps) {

    const { helpName, helpDescription, buttonFunction } = props.helpCard

  return (
    <div className="helpList__card">
        <div className="card__image">
            <img src={photo} alt={helpName} />
        </div>
        <div className="card__content">
            <h3>{helpName}</h3>
            <p>{helpDescription}</p>
        </div>
        <button>
                Більше
        </button>
    </div>
  )
}