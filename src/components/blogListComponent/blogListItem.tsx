import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG } from '../../route/Routes';
import './blogListComponent.scss'

interface IProps{
 blog:IBlogs;
}


export default function BlogListItem(props:IProps) {

  return (
    <Link to={{pathname:`${BLOG}/${props.blog.id}`}} className="blogList__card">
        <div className="card__image">
            <img src={props.blog.image} alt={props.blog.title} />
        </div>
        <div className="card__content">
            <h3 className='card__title'>{props.blog.title}</h3>
            <p className='card__date'>{props.blog.date}</p>
        </div>
    </Link>
  )
}