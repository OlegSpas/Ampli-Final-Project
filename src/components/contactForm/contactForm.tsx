import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { postMessage } from '../../axios/messages';
import FormQuestion from '../../images/formQuestionImage.png';
import ErrorPopup from '../errorPopup/errorPopup';
import GoodPopup from '../errorPopup/goodPopup';
import './contactForm.scss';


export default function ContactForm() {
    const [ isVerified, setVerified ] = React.useState(false);
    const [ warning, setWarning ] = React.useState(<></>)
    const [ messageInfo, setMessageInfo ] = React.useState([
        {
            inputType:"authorName",
            inputValue: null
        },
        {
            inputType:"authorSecondName",
            inputValue: null
        },      {
            inputType:"authorPhoneNumber",
            inputValue: null
        },
        {
            inputType:"authorEmail",
            inputValue: null
        },
        {
            inputType:"message",
            inputValue: null
        },
        {
            inputType:"agreement",
            inputValue: false
        }
    ])

    const onChange = () => {
        setVerified(true);
      }

    const onValueChange = (value:any, inputType:any) => {
        setMessageInfo((prevState) => {
          let newState = [...prevState];
          const valueIndex = newState.findIndex((emp) => emp.inputType === inputType);
    
          newState[valueIndex] = {
            ...newState[valueIndex],
            inputValue: value
          };
          return newState;
        });
    };

      const handleSendMessage = (e:any) => {
        e.preventDefault();
        var isValid = true;
        messageInfo.forEach((detail) => {
          if(detail.inputValue === null || detail.inputValue === false){
            isValid = false;
          } })
          if(!isValid || !isVerified){
            setWarning(<ErrorPopup/>)
            setTimeout(function(){
                setWarning(<></>)
            },3000)
            return;
          }   
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const year = String(today.getFullYear())  
        const currentDay = day + '.' + month + '.' + year;
        setWarning(<GoodPopup/>)
        setTimeout(function(){
            setWarning(<></>)
        },3000)
        postMessage({
          messageType: 'Запитання',
          authorName: messageInfo.find((e) => e.inputType === 'authorName')?.inputValue,
          authorSecondName: messageInfo.find((e) => e.inputType === 'authorSecondName')?.inputValue,
          authorPhoneNumber: messageInfo.find((e) => e.inputType === 'authorPhoneNumber')?.inputValue,
          authorEmail: messageInfo.find((e) => e.inputType === 'authorEmail')?.inputValue,
          report: "",
          reportDetails:"",
          message: messageInfo.find((e) => e.inputType === 'message')?.inputValue,
          date: currentDay
        });
      }

  return (
      <section className="contactForm">
          <div className="container">
              <div className="contactForm__content">
                    <h2 className="contactForm__title">Виникли питання? Задавайте</h2>
                    <div className="main__content">
                        <form className="contactForm__main">
                            <div className="formData">
                                <div className="form__item">
                                    <input type="text"  onChange={(e) => onValueChange(e.target.value, "authorName")} className="form__input" placeholder="Вкажіть ім’я"/>
                                </div>
                                <div className="form__item">
                                    <input type="text" onChange={(e) => onValueChange(e.target.value, "authorSecondName")} className="form__input" placeholder="Вкажіть прізвище"/>
                                </div>
                                <div className="form__item">
                                    <input type="text" onChange={(e) => onValueChange(e.target.value, "authorPhoneNumber")} className="form__input" placeholder="Вкажіть номер телефону"/>
                                </div>
                                <div className="form__item">
                                    <input type="text" onChange={(e) => onValueChange(e.target.value, "authorEmail")} className="form__input" placeholder="Вкажіть eMail"/>
                                </div>
                            </div>
                            <div className="formMessage">
                                <div className="form__item">
                                    <textarea className="form__textarea" onChange={(e) => onValueChange(e.target.value, "message")} placeholder="Ваше повідомлення"></textarea>
                                </div>
                            </div>
                            <div className="formCheckbox">
                                <div className="form__item">
                                    <div className="checkbox">
                                        <input onChange={(e) => onValueChange(e.target.value, "agreement")} id="formAgreement" type="checkbox" name="agreement" className="checkbox__input"/>
                                        <label htmlFor="formAgreement" className="checkbox__label">Я даю згоду на обробку своїх персональних даних</label>
                                    </div>
                                </div>
                                <div className="form__item">
                                    <div className="checkbox">
                                    <ReCAPTCHA
                                        sitekey=" 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                        onChange={onChange}
                                    /> 
                                    </div>
                                </div>
                            </div>
                            {warning}
                            <button className="formButton" onClick={handleSendMessage}>Надіслати</button>
                        </form>
                        <img className='form__image' src={FormQuestion} alt="FormQuestion" />
                    </div>
              </div>
          </div>
      </section>
  )
}