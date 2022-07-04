import React from "react";
import './adminTeamComponent.scss';


interface IProps{
    member: ITeam;
}

export default function AdminTeamCard(props:IProps) {

  return (
    <div className="teamCard">
        <div className="card__media">
            <img className="card__img" src={props.member.avatar} alt="avatar" />
        </div>
        <div className="card__content">
            <h3 className="card__name">{props.member.name}</h3>
            <p className="card__job">{props.member.job}</p>
            <p className="card__contact">{props.member.phoneNumber}</p>
            <p className="card__contact">{props.member.email}</p>
        </div>
    </div>
  )
}