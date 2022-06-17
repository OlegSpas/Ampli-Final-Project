import React from 'react';
import { HelpTypes } from './helpTypes';
import HelpCard from './helpCard';
import JoinTeamPopup from '../actionPopups/joinTeamPopup';
import SendResHelpPopup from '../actionPopups/sendResHelpPopup';
import SendMoneyHelp from '../actionPopups/sendMoneyHelp';
import './helpListComponent.scss'



export default function HelpListComponent() {

  const [ isActiveTeamPopup, setActiveTeamPopup ] = React.useState(false);
  const [ isActiveMoneyPopup, setActiveMoneyPopup ] = React.useState(false);
  const [ isActiveResPopup, setActiveResPopup ] = React.useState(false);
  
  const handleOpenTeamPopup = () =>{
    setActiveTeamPopup(true);
  }
const handleCloseTeamPopup = () =>{
  setActiveTeamPopup(false);
}


const handleOpenMoneyPopup = () =>{
  setActiveMoneyPopup(true);
}

const handleCloseMoneyPopup = () =>{
  setActiveMoneyPopup(false);

}

const handleOpenResPopup = () =>{
  setActiveResPopup(true);

}

const handleCloseResPopup = () =>{
  setActiveResPopup(false);
}

  return (
    <section id='helpList'>
        <div className="container">
            <div className="helpList__content">
                {HelpTypes.map((helpCard, index) => (
                    <HelpCard 
                      handleOpenTeamPopup={handleOpenTeamPopup}
                      handleOpenMoneyPopup={handleOpenMoneyPopup} 
                      handleOpenResPopup={handleOpenResPopup}
                      helpCard={helpCard} 
                      key={index}/>
                ))}
                { isActiveTeamPopup && <JoinTeamPopup close={handleCloseTeamPopup}/>}
                { isActiveMoneyPopup && <SendMoneyHelp close={handleCloseMoneyPopup}/>}
                { isActiveResPopup && <SendResHelpPopup close={handleCloseResPopup}/>}
            </div>
        </div>
    </section>
  )
}