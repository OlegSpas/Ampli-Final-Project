import React from 'react';
import MemberCard from './memberCard';
import TeamData from '../../fakeData/teamData.json';
import './teamComponent.scss';


export default function TeamComponent() {

  return (

    <section className='teamComponent'>
       <div className="container">
            <div className="teamComponent__content">
                <div className="teamComponent__title">
                    <h2>Наша команда</h2>
                </div>
                <div className="teamComponent__list">
                    {TeamData.members.map((item, index) => (
                        <MemberCard key={index} {...item}/>
                    ))}
                </div>
            </div>
       </div>
    </section>
  )
}