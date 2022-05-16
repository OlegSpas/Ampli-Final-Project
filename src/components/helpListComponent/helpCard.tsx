import React from 'react';
import photo from '../../images/helpCardImg.jpg';

interface IProps{
    helpCard: IHelpTypes;
    handleOpenTeamPopup: () => void;
    handleOpenMoneyPopup: () => void;
    handleOpenResPopup: () => void;
}


export default function HelpCard(props:IProps) {

    const { helpName, helpDescription, popup } = props.helpCard;

    const handleOpenPopup = () => {
        if(popup === 'teamPopup'){
            props.handleOpenTeamPopup();
        } else if(popup === 'resPopup'){
            props.handleOpenResPopup();
        } else if(popup === 'moneyPopup'){
            props.handleOpenMoneyPopup();
        }
    }

  return (
    <div className="helpList__card">
        <div className="card__image">
            <img src={photo} alt={helpName} />
        </div>
        <div className="card__content">
            <h3>{helpName}</h3>
            <p>{helpDescription}</p>
        </div>
        <button onClick={handleOpenPopup}>
            Більше
        </button>
    </div>
  )
}