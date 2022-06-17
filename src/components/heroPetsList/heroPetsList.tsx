import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT } from '../../route/Routes';
import './heroPetsList.scss'



export default function HeroPetsListPage() {

  return (
      <section id="heroPets">
          <div className="container">
              <div className="heroPets__content">
                    <h1 className="heroPets__title">
                        Наші хвостаті
                    </h1>
                    <p className="heroPets__description">
                        Знайди свого ідеального улюбленця
                    </p>
                    <p className="heroPets__description">
                        Якщо ви хочете взяти тварину з притулку Happy Paw  - ознайомтесь, будь ласка, з правилами адопції.
                    </p>
                    <Link to={ABOUT} className='heroPets__button'>
                        Ознайомитись
                    </Link>
              </div>
          </div>
      </section>
  )
}