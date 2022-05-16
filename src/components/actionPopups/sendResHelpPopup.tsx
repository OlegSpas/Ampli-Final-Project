import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

interface IProps{
  close:() => void;

}

export default function SendResHelpPopup(props:IProps) {
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
                    <select className='form__select'> 
                        <option value="value1">Значение 1</option>
                        <option value="value2">Значение 2</option>
                        <option value="value3">Значение 3</option>
                    </select>
                    <select className='form__select'> 
                        <option value="value1">Значение 1</option>
                        <option value="value2">Значение 2</option>
                        <option value="value3">Значение 3</option>
                    </select>
                </div>
                <div className="formMessage">
                    <div className="form__item">
                        <textarea className="form__textarea" placeholder="ВОпишіть те, що хочете пожертувати"></textarea>
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