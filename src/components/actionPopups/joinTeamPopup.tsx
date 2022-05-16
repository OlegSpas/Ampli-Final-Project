import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

interface IProps{
  close:() => void;

}

export default function JoinTeamPopup(props:IProps) {
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
    <div className='help__popup' onClick={handleClose}>
        <div className="mainPopup" 
            onMouseOver={() => setCanClose( false)} 	
            onMouseLeave={() => setCanClose(true)}>
            <form className="form__popup">
                <div className="formData">
                        <input type="text" className="form__input" placeholder="Вкажіть ім’я"/>
                        <input type="text" className="form__input" placeholder="Вкажіть ваше прізвище"/>
                        <input type="text" className="form__input" placeholder="Вкажіть номер телефону"/>
                        <input type="text" className="form__input" placeholder="Вкажіть eMail"/>
                        <input type="text" className="form__input" placeholder="Вкажіть ваш вік"/>
                    <select className='form__select'> 
                        <option value="value1">Значение 1</option>
                        <option value="value2">Значение 2</option>
                        <option value="value3">Значение 3</option>
                    </select>
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
                <div className="formActions">
                    <button className="form__button">
                        Надіслати
                    </button>
                </div>
            </form>
            <div className="popup__content">
                <h2 className='popup__title'>Приєднатись до команди</h2>
                <p className='popup__description'>Є безліч хороших справ, до яких ти можеш долучитися. Просто заповни форму і вкажи як саме бажаєш допомогти. І не забудь прихопити з собою безмірну кількість любові та ласки!</p>
                <h3 className='popup__subTitle'>Як ти можеш допомогти?</h3>
                <ul className="popup__helpList">
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Автодопомога</h3>
                        <p className="popup__helpDescription">Якщо ти маєш автомобіль, вільний час і велике бажання допомагати – тоді гайда до нас!</p>
                    </li>
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Допомога в притулку</h3>
                        <p className="popup__helpDescription">Притулок – це тимчасовий, а інколи й постійний дім для песиків і котиків. Тут є багато роботи, без виконання якої життя наших пестунів просто неможливе.</p>
                    </li>
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Допомога на івентах</h3>
                        <p className="popup__helpDescription">Твоя доброта може стати нам у нагоді під час організації благодійних заходів.</p>
                    </li>
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Допомога по догляду за тваринами</h3>
                        <p className="popup__helpDescription">Це можливість попіклуватися про чотирилапих пухнастиків, почухати їм за вушком, отримати величезну порцію собачої та котячої ніжності.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}