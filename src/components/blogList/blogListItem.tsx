import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG } from '../../route/Routes';

interface IProps{
  blog: IBlogs;
}

export default function BlogListItem(props: IProps) {
  const shortDescription = props.blog.description.slice(0, 110) + "...";
  var description
  if(props.blog.description.length > 50){
    description = shortDescription
  } else{
    description = props.blog.description
  }

  return (
    <Link className="blog__link" to={{pathname:`${BLOG}/${props.blog.id}`}}>
      <article className="blog__card">
        <div className="card__media">
          <img src={props.blog.image} alt="media" />
        </div>
        <div className="card__content">
          <h3 className="card__title">
            {props.blog.title}
          </h3>
          <div className="card__description">
            {description}
          </div>
        </div>
      </article>
    </Link>
  )
}