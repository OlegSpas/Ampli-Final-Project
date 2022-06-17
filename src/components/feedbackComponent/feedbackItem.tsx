import React from 'react';
import Image from '../../images/avatar.jpg'

interface IProps{
    name: string;
    achieve: string;
    feedback: string;
    avatar: string;
}


export default function FeedbackItem(props:IProps) {

  return (

    <>
        <div className="card__media">
            <img src={props.avatar} alt={props.name} />
        </div>
        <div className="card__content">
            <div className="cardHead">
                <h3 className="feedbackCard__title">
                    {props.name}
                </h3>
                <p className='feedbackCard__achieve'>
                    {props.achieve}
                </p>
            </div>
            <p className="feedbackCard__description">
                {props.feedback}
            </p>
        </div>
  </>
  )
}