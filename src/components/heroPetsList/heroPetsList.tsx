import React from 'react';
import './heroPetsList.scss'



export default function HeroPetsListPage() {

  return (
      <section id="heroPets">
          <div className="container">
              <div className="heroBlog__content">
                    <h1 className="heroBlog__title">
                        Наші хвостаті
                    </h1>
                    <p className="heroBlog__description">
                        Знайди свого ідеального улюбленця
                    </p>
                    <p className="heroBlog__description">
                        Якщо ви хочете взяти тварину з притулку Happy Paw  - ознайомтесь, будь ласка, з правилами адопції.
                    </p>
                    <button className='heroBlog__button'>
                        Ознайомитись
                    </button>
              </div>
          </div>
      </section>
  )
}