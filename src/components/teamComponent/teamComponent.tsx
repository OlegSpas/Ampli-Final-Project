import React from 'react';
import MemberCard from './memberCard';
import TeamData from '../../fakeData/teamData.json';
import './teamComponent.scss';
import TeamPopup from './teamPopup';

interface IProps{
  team: ITeam[];
}

export default function TeamComponent(props: IProps) {
  const [isOpenPopup, setOpenPopup] = React.useState(false);

  const handleOpenPopup = () =>{
    setOpenPopup(true);
  }

  const handleClosePopup = () =>{
    setOpenPopup(false);
  }


  return (

    <section className='teamComponent'>
       <div className="container">
            <div className="teamComponent__content">
                <div className="teamComponent__title">
                    <h2>Наша команда</h2>
                </div>
                <div className="teamComponent__list">
                    {props.team.slice(0,4).map((member, index) => (
                        <MemberCard key={index} member={member}/>
                    ))}
                </div>
                <div className="teamComponent__action">
                    <button className="teamComponent__button" onClick={handleOpenPopup}>
                        Читати більше
                    </button>
                </div>
                {isOpenPopup && <TeamPopup team={props.team} close={handleClosePopup}/>}
            </div>
       </div>
    </section>
  )
}