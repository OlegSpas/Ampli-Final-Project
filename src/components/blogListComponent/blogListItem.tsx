import React from 'react';
import photo from '../../images/helpCardImg.jpg';
import './blogListComponent.scss'

interface IProps{
    title:string;
    date:string;
    link:string;
}


export default function BlogListItem(props:IProps) {

  return (
    <div className="blogList__card">
        <div className="card__image">
            <img src={photo} alt={props.title} />
        </div>
        <div className="card__content">
            <h3 className='card__title'>{props.title}</h3>
            <p className='card__date'>{props.date}</p>
        </div>
    </div>
  )
}