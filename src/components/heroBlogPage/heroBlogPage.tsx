import React from 'react';
import './heroBlogPage.scss'


interface IProps{
    currentBlog: IBlogs;
}


export default function HeroBlogPage(props:IProps) {

  return (
      <section id='HeroBlog'>
          <div className="container">
              <div className="heroBlog__content">
                    <h1 className="heroBlog__title">
                        {props.currentBlog.title}
                    </h1>
                    <p className="heroBlog__description">
                        {props.currentBlog.description}
                    </p>
              </div>
          </div>
      </section>
  )
}