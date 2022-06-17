import React from "react";
import ContactInfo from '../../fakeData/contactInfo.json';
import OptionIcon from '../../images/option.svg';

interface IProps{
    info: {
        paragraph:string;
    }
}

export default function AboutShelterTableElement(props:IProps) {

  return (
    <div className="shelter__element">
        <h3 className="infoTitle">Абзац</h3>
        <div className="info__element">
            <h3 className="info__value">{props.info.paragraph}</h3>
            <button className="info__action">
                <img  className="action__icon" src={OptionIcon} alt="menu" />
            </button>
        </div>
    </div>
  )
}