import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

interface IProps{
  close:() => void;

}

// Добавити заборону виключання при наведенні

export default function AdoptionPopup(props:IProps) {
  const [canClose, setCanClose] = React.useState(true);

  const onChange = (value:any) => {
    console.log('Captcha value:', value);
  }

  const handleClose = () =>{
    if(canClose){
      props.close()
    }
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
                  <input type="text" className="form__input" placeholder="Вкажіть ім’я"/>
                  <input type="text" className="form__input" placeholder="Вкажіть ваше прізвище"/>
                  <input type="text" className="form__input" placeholder="Вкажіть номер телефону"/>
                  <input type="text" className="form__input" placeholder="Вкажіть eMail"/>
              </div>
              <div className="formMessage">
                  <div className="form__item">
                      <textarea className="form__textarea" placeholder="Розкажіть детальніше про себе,  чому саме ця собака і т.д"></textarea>
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
                <h3 className='formWarning'>Перед тим як заповнити форму, ознайомтесь із умовами адопції</h3>
              <div className="formActions">
                  <button className="form__button primaryButton">
                    Надіслати
                  </button>
                  <button className="form__button secondaryButton">
                    Ознайомитись
                  </button>
              </div>
          </form>
      </div>
    </div>
  )
}