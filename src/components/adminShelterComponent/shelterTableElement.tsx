import React from "react";
import ContactInfo from '../../fakeData/contactInfo.json';
import OptionIcon from '../../images/option.svg';

interface IProps{
    info: {
        infoTitle: string;
        infoValue: string;
    }
}

export default function ShelterTableElement(props:IProps) {

  return (
    <div className="shelter__element">
        <h3 className="infoTitle">{props.info.infoTitle}</h3>
        <div className="info__element">
            <h3 className="info__value">{props.info.infoValue}</h3>
            <button className="info__action">
                <img  className="action__icon" src={OptionIcon} alt="menu" />
            </button>
        </div>
    </div>
  )
}