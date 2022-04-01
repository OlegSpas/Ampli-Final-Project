import React from 'react';
import BlogsData from '../../fakeData/blogsData.json';
import BlogListItem from './blogListItem';
import './blogListComponent'


export default function BlogListComponent() {

  return (
    <div className="blogListComponent">
        <div className="container">
            <div className="blogList__content">
                <div className="blogList__title">
                    <h2>Наш блог</h2>
                </div>
                <div className="blogList__mainList">
                    {BlogsData.blogs.map((card:any, index:number) =>(
                        <BlogListItem
                            key={index}
                            title={card.title}
                            date={card.date}
                            link={card.link}
                        />
                        ))}
                </div>
                <div className="blogList__action">
                    <button className="blogList__button">
                        Читати більше
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}