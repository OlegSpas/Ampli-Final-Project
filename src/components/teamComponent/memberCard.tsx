import React from 'react';
import Avatar from '../../images/avatar.jpg'

interface IProps{
  id:number
  name:string;
  job:string;
  image:any;
}

export default function MemberCard(props: IProps) {

  return (

    <article className='member__card'>
      <div className="card__media">
        <img src={Avatar} alt={props.name} />
      </div>
      <div className="card__content">
        <h3 className="card__title">{props.name}</h3>
        <p className="card__description">{props.job}</p>
      </div>
    </article>
  )
}