import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/helpCardImg.jpg';
import { BLOG } from '../../route/Routes';

interface IProps{
  blog: {
    id: number;
    title: string;
    description: string;
    date: string;
    link: string;
    image: string;
    blogType: string;
}
}

export default function BlogListItem(props: IProps) {

  return (
    <Link className="blog__link" to={{pathname:`${BLOG}/${props.blog.id}`}}>
      <article className="blog__card">
        <div className="card__media">
          <img src={Image} alt="image" />
        </div>
        <div className="card__content">
          <h3 className="card__title">
            {props.blog.title}
          </h3>
          <div className="card__description">
            {props.blog.description}
          </div>
        </div>
      </article>
    </Link>
  )
}