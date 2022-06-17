import React from 'react';
import './heroBlog.scss'



export default function HeroBlog() {

  return (
      <section id='HeroBlog'>
          <div className="container">
              <div className="heroBlogList__content">
                    <h1 className="heroBlog__title">
                        Блог
                    </h1>
                    <p className="heroBlog__description">
                        Все про тварин, догляд та успіхи притулку Happy Paw
                    </p>
              </div>
          </div>
      </section>
  )
}