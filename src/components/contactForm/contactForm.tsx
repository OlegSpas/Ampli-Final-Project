import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './contactForm.scss';


export default function ContactForm() {
    const onChange = (value:any) => {
        console.log('Captcha value:', value);
      }

  return (
      <section className="contactForm">
          <div className="container">
              <div className="contactForm__content">
                    <h2 className="contactForm__title">Виникли питання? Задавайте</h2>
                    <form className="contactForm__main">
                        <div className="formData">
                            <div className="form__item">
                                <input type="text" className="form__input" placeholder="Вкажіть ім’я"/>
                            </div>
                            <div className="form__item">
                                <input type="text" className="form__input" placeholder="Вкажіть номер телефону"/>
                            </div>
                            <div className="form__item">
                                <input type="text" className="form__input" placeholder="Вкажіть eMail"/>
                            </div>
                        </div>
                        <div className="formMessage">
                            <div className="form__item">
                                <textarea className="form__textarea" placeholder="Ваше повідомлення"></textarea>
                            </div>
                        </div>
                        <div className="formCheckbox">
                            <div className="form__item">
                                <div className="checkbox">
                                    <input id="formAgreement" type="checkbox" name="agreement" className="checkbox__input"/>
                                    <label htmlFor="formAgreement" className="checkbox__label">Я даю згоду на обробку своїх персональних даних</label>
                                </div>
                            </div>
                            <div className="form__item">
                                <div className="checkbox">
                                <ReCAPTCHA
                                    sitekey="KEY"
                                    onChange={onChange}
                                /> 
                                </div>
                            </div>
                        </div>
                        <button className="formButton" >Надіслати</button>
                    </form>
              </div>
          </div>
      </section>
  )
}