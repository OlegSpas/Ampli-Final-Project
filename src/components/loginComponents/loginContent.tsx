import React from 'react';
import LoginImage from '../../images/loginImg.svg'
import './loginPage.scss';


export default function LoginContent() {

  return (
    <section id="loginPage">
        <div className="container">
            <img className='loginPage__Image' src={LoginImage} alt="Login" />
            <div className="loginPage__content">
                <h2 className="loginPage__title">
                     Увійти в адмін панель
                </h2>
                <form className="form__popup">
                    <input type="text" className="form__input" placeholder="Логін"/>
                    <input type="text" className="form__input" placeholder="Пароль"/>
                    <h3 className='form__warning'>Якщо ви забули свої дані, зверніться до власника сайту</h3>
                    <button className='form__action'>Увійти</button>
                </form>
            </div>
        </div>
    </section>
  )
}