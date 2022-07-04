import React from 'react';
import BlogListItem from './blogListItem';
import './blogListComponent'
import { BLOG } from '../../route/Routes';
import { Link } from 'react-router-dom';

interface IProps{
    blogs: IBlogs[];
}

export default function BlogListComponent(props:IProps) {

  return (
    <div className="blogListComponent">
        <div className="container">
            <div className="blogList__content">
                <div className="blogList__title">
                    <h2>Наш блог</h2>
                </div>
                <div className="blogList__mainList">
                    {props.blogs.sort((a, b) => a.id < b.id ? 1 : -1).slice(0,3).map((blog:any, index:number) =>(
                        <BlogListItem
                            key={index}
                            blog={blog}
                        />
                        ))}
                </div>
                <div className="blogList__action">
                    <Link to={BLOG} className="blogList__button">
                        Читати більше
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}