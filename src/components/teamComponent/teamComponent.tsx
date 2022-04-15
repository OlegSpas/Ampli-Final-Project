import React from 'react';
import MemberCard from './memberCard';
import TeamData from '../../fakeData/teamData.json';
import './teamComponent.scss';
import TeamPopup from './teamPopup';


export default function TeamComponent() {
  const [isOpenPopup, setOpenPopup] = React.useState(false);

  const handleOpenPopup = () =>{
    setOpenPopup(true);
    document.body.style.overflow = 'hidden'
  }

  const handleClosePopup = () =>{
    setOpenPopup(false);
    document.body.style.overflow = 'visible'
  }


  return (

    <section className='teamComponent'>
       <div className="container">
            <div className="teamComponent__content">
                <div className="teamComponent__title">
                    <h2>Наша команда</h2>
                </div>
                <div className="teamComponent__list">
                    {TeamData.members.slice(0,4).map((item, index) => (
                        <MemberCard key={index} {...item}/>
                    ))}
                </div>
                <div className="teamComponent__action">
                    <button className="teamComponent__button" onClick={handleOpenPopup}>
                        Читати більше
                    </button>
                </div>
                {isOpenPopup && <TeamPopup  close={handleClosePopup}/>}
            </div>
       </div>
    </section>
  )
}