import React from 'react';
import Avatar from '../../images/avatar.jpg'

interface IProps{
  member: ITeam;
}

export default function MemberCard(props: IProps) {

  return (

    <article className='member__card'>
      <div className="card__media">
        <img src={props.member.avatar} alt={props.member.name} />
      </div>
      <div className="card__content">
        <h3 className="card__title">{props.member.name}</h3>
        <p className="card__description">{props.member.job}</p>
        <p className="card__description">{props.member.phoneNumber}</p>
      </div>
    </article>
  )
}