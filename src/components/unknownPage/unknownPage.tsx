import React from 'react';
import ErrorImage from '../../images/error.svg';
import './unknownPage.scss';



export default function UnknownPage() {



  return (

    <section className='UnknownPage'>
        <div className="container">
            <div className="unknownPage__content">
                <h2 className="page__title">
                    Cторінка не знайдена
                </h2>
                <img className='page__image' src={ErrorImage} alt="Error Image" />
            </div>
        </div>
    </section>
  )
}