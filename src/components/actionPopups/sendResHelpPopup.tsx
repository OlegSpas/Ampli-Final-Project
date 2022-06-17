import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { postMessage } from '../../axios/messages';

interface IProps{
  close:() => void;

}

export default function SendResHelpPopup(props:IProps) {
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
        inputValue: "Їжа"
    },
    {
        inputType:"reportDetails",
        inputValue: "Нова пошта"
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
      messageType: 'Матеріальна допомога',
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
                    <input type="text" onChange={(e) => onValueChange(e.target.value, "authorSecondName")} className="form__input" placeholder="Вкажіть ваше прізвище"/>
                    <input type="text" onChange={(e) => onValueChange(e.target.value, "authorPhoneNumber")} className="form__input" placeholder="Вкажіть номер телефону"/>
                    <input type="text" onChange={(e) => onValueChange(e.target.value, "authorEmail")} className="form__input" placeholder="Вкажіть eMail"/>
                    <select onChange={(e) => onValueChange(e.target.value, "report")} className='form__select'> 
                        <option value="Їжа">Їжа</option>
                        <option value="Ліки">Ліки</option>
                        <option value="Товари із зоомагазину">Товари із зоомагазину</option>
                        <option value="Інше">Інше</option>
                    </select>
                    <select onChange={(e) => onValueChange(e.target.value, "reportDetails")} className='form__select'> 
                        <option value="Нова пошта">Нова пошта</option>
                        <option value="УкрПошта">УкрПошта</option>
                        <option value="Самостійно">Самостійно</option>
                    </select>
                </div>
                <div className="formMessage">
                    <div className="form__item">
                        <textarea onChange={(e) => onValueChange(e.target.value, "message")} className="form__textarea" placeholder="Опишіть те, що хочете пожертувати"></textarea>
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
                    <button className="form__button"  onClick={handleSendMessage}>
                        Допомогти
                    </button>
                </div>
            </form>
            <div className="popup__content">
                <h2 className='popup__title'>Допоможи матеріально</h2>
                <p className='popup__description'>Якщо бажаєш ощасливити наших хвостатих улюбленців та передати в притулок речі на кшталт іграшок, їжі, ліків, мисок і т.д. - заповніть форму.</p>
                <p className='popup__description'>Притулок існує завдяки пожертвам меценатів та приватних благодійників. Саме тому ми завжди вдячні за будь-яку благодійну допомогу.</p>
                <h3 className='popup__subTitle'>Що можна надіслати?</h3>
                <ul className="popup__helpList">
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Їжа</h3>
                        <p className="popup__helpDescription">Можете пожертувати нашому притулку лише корм перевірених на ринку виробників.</p>
                    </li>
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Ліки</h3>
                        <p className="popup__helpDescription">Надзвичайно потребуємо медикаменти для тварин, котрі зараз хворі, або для профілактики захворювань.</p>
                    </li>
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Товари із зоомагазину</h3>
                        <p className="popup__helpDescription">Для того, щоб нашим хвостикам було веселіше та комфортніше, можете надсилати іграшки, нашийники, переноски, повідки, миски.</p>
                    </li>
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Інше</h3>
                        <p className="popup__helpDescription">Для того, щоб ми могли якісно обслуговувати наш притулок, потребуємо господарські товари, куртки, екіпіровку.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}