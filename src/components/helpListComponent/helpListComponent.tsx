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
    document.body.style.overflow = 'hidden';
}

const handleCloseTeamPopup = () =>{
  setActiveTeamPopup(false);
  document.body.style.overflow = 'visible';
}

const handleOpenMoneyPopup = () =>{
  setActiveMoneyPopup(true);
  document.body.style.overflow = 'hidden';
}

const handleCloseMoneyPopup = () =>{
  setActiveMoneyPopup(false);
  document.body.style.overflow = 'visible';
}

const handleOpenResPopup = () =>{
  setActiveResPopup(true);
  document.body.style.overflow = 'hidden';
}

const handleCloseResPopup = () =>{
  setActiveResPopup(false);
document.body.style.overflow = 'visible';
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