import React from 'react';

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
    <div className="helpList__card" onClick={handleOpenPopup}>
        <div className="card__image">
            <img src={props.helpCard.image} alt={helpName} />
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