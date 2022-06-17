import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
import { postMessage } from '../../axios/messages';
import { ABOUT } from '../../route/Routes';

interface IProps{
  close:() => void;
  currentPet: IPet;
}

// Добавити заборону виключання при наведенні

export default function AdoptionPopup(props:IProps) {
  const [canClose, setCanClose] = React.useState(true);
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
      },      
      {
          inputType:"authorPhoneNumber",
          inputValue: null
      },
      {
          inputType:"authorEmail",
          inputValue: null
      },
      {
          inputType:"report",
          inputValue: props.currentPet.name
      },
      {
          inputType:"reportDetails",
          inputValue: props.currentPet.id
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

  const handleClose = () =>{
    if(canClose){
      props.close()
    }
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
      setWarning(
        <h3 className='warningMessage'>
          Заповніть усі поля
        </h3>
      )
      return;
    }   
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const year = String(today.getFullYear())  
  const currentDay = day + '.' + month + '.' + year;
  setWarning(<></>)
  postMessage({
    messageType: 'Заявки на адопцію',
    authorName: messageInfo.find((e) => e.inputType === 'authorName')?.inputValue,
    authorSecondName: messageInfo.find((e) => e.inputType === 'authorSecondName')?.inputValue,
    authorPhoneNumber: messageInfo.find((e) => e.inputType === 'authorPhoneNumber')?.inputValue,
    authorEmail: messageInfo.find((e) => e.inputType === 'authorEmail')?.inputValue,
    report: props.currentPet.name,
    reportDetails: 'ID тваринки: ' + props.currentPet.id,
    message: messageInfo.find((e) => e.inputType === 'message')?.inputValue,
    date: currentDay
  });
  props.close()
}


  return (
    <div className='adoption__popup' onClick={handleClose}>
      <div className="mainPopup" 
          onMouseOver={() => setCanClose( false)} 	
          onMouseLeave={() => setCanClose(true)}>
              <h2 className='popup__title'>Прихистіть тваринку</h2>
              <p className='popup__description'>Коли ми беремо тваринку з притулку, то рятуємо одразу трьох: тваринку, яку забрали додому, бездомну тварину з вулиці, що займе звільнене місце у притулку, і, звичайно, Людину в собі. </p>
          <form className="form__popup">
              <div className="formData">
                  <input type="text" onChange={(e) => onValueChange(e.target.value, "authorName")} className="form__input" placeholder="Вкажіть ім’я"/>
                  <input type="text" onChange={(e) => onValueChange(e.target.value, "authorSecondName")} className="form__input" placeholder="Вкажіть ваше прізвище"/>
                  <input type="text" onChange={(e) => onValueChange(e.target.value, "authorPhoneNumber")} className="form__input" placeholder="Вкажіть номер телефону"/>
                  <input type="text" onChange={(e) => onValueChange(e.target.value, "authorEmail")} className="form__input" placeholder="Вкажіть eMail"/>
              </div>
              <div className="formMessage">
                  <div className="form__item">
                      <textarea onChange={(e) => onValueChange(e.target.value, "message")} className="form__textarea" placeholder="Розкажіть детальніше про себе,  чому саме ця тварина і т.д"></textarea>
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
                          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                          onChange={onChange}
                      /> 
                      </div>
                  </div>
              </div>
                <h3 className='formWarning'>Перед тим як заповнити форму, ознайомтесь із умовами адопції</h3>
                {warning}
              <div className="formActions">
                  <button onClick={handleSendMessage} className="form__button primaryButton">
                    Надіслати
                  </button>
                  <Link to={ABOUT} className="form__button secondaryButton">
                    Ознайомитись
                  </Link>
              </div>
          </form>
      </div>
    </div>
  )
}