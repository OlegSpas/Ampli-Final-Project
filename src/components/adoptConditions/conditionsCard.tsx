import React from 'react';
import Image from '../../images/condition.jpg';


interface IProps{
    title:string;
    description:string;
    image:any;
}


export default function ConditionsCard(props:IProps) {

  return (
      <>
        <div className="card__media">
            <img src={Image} alt={props.title} />
        </div>
        <div className="card__content">
            <h3 className="condition__title">
                {props.title}
            </h3>
            <p className="condition__description">
                {props.description}
            </p>
        </div>
      </>
  )
}