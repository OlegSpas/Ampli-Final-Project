import React from 'react';


interface IProps{
    title:string;
    description:string;
    image:any;
}


export default function ConditionsCard(props:IProps) {

  return (
      <>
        <div className="card__media">
            <img src={props.image} alt={props.title} />
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