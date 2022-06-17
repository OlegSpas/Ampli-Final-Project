import React from "react";
import ContactInfo from '../../fakeData/contactInfo.json';
import OptionIcon from '../../images/option.svg';

interface IProps{
    condition: {
        title: string;
        description: string;
        image: string;
    }
}

export default function AdminAdoptConditions(props:IProps) {

  return (
    <div className="shelter__element">
        <h3 className="infoTitle">{props.condition.title}</h3>
        <div className="info__element">
            <h3 className="info__value">{props.condition.description}</h3>
            <button className="info__action">
                <img  className="action__icon" src={OptionIcon} alt="menu" />
            </button>
        </div>
    </div>
  )
}