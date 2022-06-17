import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { postMessage } from '../../axios/messages';

interface IProps{
  close:() => void;

}

export default function JoinTeamPopup(props:IProps) {
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
          inputValue: null
      },
      {
          inputType:"reportDetails",
          inputValue: "Автодопомога"
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
  const onChange = () => {
    setVerified(true);
  }

  const handleClose = () =>{
    if(canClose){
      props.close()
    }
  }

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
      messageType: 'Заявки у команду',
      authorName: messageInfo.find((e) => e.inputType === 'authorName')?.inputValue,
      authorSecondName: messageInfo.find((e) => e.inputType === 'authorSecondName')?.inputValue,
      authorPhoneNumber: messageInfo.find((e) => e.inputType === 'authorPhoneNumber')?.inputValue,
      authorEmail: messageInfo.find((e) => e.inputType === 'authorEmail')?.inputValue,
      report: messageInfo.find((e) => e.inputType === 'report')?.inputValue,
      reportDetails:messageInfo.find((e) => e.inputType === 'reportDetails')?.inputValue,
      message: messageInfo.find((e) => e.inputType === 'message')?.inputValue,
      date: currentDay
    });
    props.close()
  }

  return (
    <div className='help__popup' onClick={handleClose}>
        <div className="mainPopup" 
            onMouseOver={() => setCanClose( false)} 	
            onMouseLeave={() => setCanClose(true)}>
            <form className="form__popup">
                <div className="formData">
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "authorName")} className="form__input" placeholder="Вкажіть ім’я"/>
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "authorSecondName")}  className="form__input" placeholder="Вкажіть ваше прізвище"/>
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "authorPhoneNumber")} className="form__input" placeholder="Вкажіть номер телефону"/>
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "authorEmail")} className="form__input" placeholder="Вкажіть eMail"/>
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "report")} className="form__input" placeholder="Вкажіть ваш вік"/>
                    <select className='form__select' onChange={(e) => onValueChange(e.target.value, "reportDetails")}> 
                        <option value="Автодопомога">Автодопомога</option>
                        <option value="Допомога в притулку">Допомога в притулку</option>
                        <option value="Допомога на івентах">Допомога на івентах</option>
                        <option value="Допомога по догляду за тваринами">Допомога по догляду за тваринами</option>
                    </select>
                </div>
                <div className="formMessage">
                    <div className="form__item">
                        <textarea onChange={(e) => onValueChange(e.target.value, "message")} className="form__textarea" placeholder="Ваше повідомлення"></textarea>
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
                {warning}
                <div className="formActions">
                    <button className="form__button" onClick={handleSendMessage}>
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