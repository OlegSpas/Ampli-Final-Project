import React from 'react';
import './heroHelpPage.scss'



export default function HeroHelpPage() {

  return (
      <section id="heroHelpPage">
          <div className="container">
              <div className="heroHelpPage__content">
                    <h1 className="heroHelpPage__title">
                        Допоможи  притулку Happy Paw
                    </h1>
                    <p className="heroHelpPage__description">
                    Для того, щоб переглянути як ми використовуємо кошти, які ви надсилаєте нам - скористайтесь посиланням нижче
                    </p>
                    <button className='heroHelpPage__button'>
                        Ознайомитись
                    </button>
              </div>
          </div>
      </section>
  )
}