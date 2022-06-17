import React from "react";
import ContactInfo from '../../fakeData/contactInfo.json';
import AboutShelterInfo from '../../fakeData/aboutShelterInfo.json';
import TriggersData from '../../fakeData/triggersData.json';
import  AdoptConditionData from '../../fakeData/adoptConditionsData.json';
import ShelterTableElement from "./shelterTableElement";
import AboutShelterTableElement from "./aboutShelterElement";
import AdminTriggerElement from "./adminTriggerElement";
import AdminAdoptConditions from "./adminAdoptConditions";
import AddIcon from '../../images/plus.svg';
import './adminShelterComponent.scss';


interface IProps{

}

export default function ShelterComponent(props:IProps) {

  return (
    <div className="admin__shelterComponent">
      <h2 className="admin__contentTitle">Притулок</h2>
      <div className="admin__shelterTables">
        <div className="admin__shelterTable contactInfo">
          <h3 className="admin__tableTitle">Контактна інформація</h3>
          <div className="shelterTableContent">
            {ContactInfo.contactInfo.map((info, index) => (
              <ShelterTableElement key={index} info={info}/>
            ))}
          </div>
        </div>
        <div className="admin__shelterTable aboutShelterInfo">
          <h3 className="admin__tableTitle">Про притулок</h3>
          <div className="shelterTableContent">
            <button className="table__actionBtn">
              <img className="actionIcon" src={AddIcon} alt="add" />
            </button>
            {AboutShelterInfo.shelterInfo.map((info, index) => (
              <AboutShelterTableElement key={index} info={info}/>
            ))}
          </div>
        </div>
        <div className="admin__shelterTable triggersInfo">
          <h3 className="admin__tableTitle">Причини взяти тваринку</h3>
          <div className="shelterTableContent">
            {TriggersData.triggers.map((trigger, index) => (
              <>
                <AdminTriggerElement key={index} trigger={trigger}/>
              </>
            ))}
          </div>
        </div>
        <div className="admin__shelterTable adoptConditionsInfo">
          <h3 className="admin__tableTitle">Умови адаптації</h3>
          <div className="shelterTableContent">
          <button className="table__actionBtn">
              <img className="actionIcon" src={AddIcon} alt="add" />
            </button>
            {AdoptConditionData.conditions.map((condition, index) => (
              <AdminAdoptConditions condition={condition} key={index}/>
            ))}
          </div>
        </div>
      </div>
  </div>
  )
}