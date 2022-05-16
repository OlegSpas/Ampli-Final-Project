import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

interface IProps{
  close:() => void;

}

export default function SendMoneyHelp(props:IProps) {
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
                    <input type="text" className="form__input" placeholder="Сума допомоги UAH"/>
                    <select className='form__select'> 
                        <option value="value1">Значение 1</option>
                        <option value="value2">Значение 2</option>
                        <option value="value3">Значение 3</option>
                    </select>
                </div>
                <div className="formMessage">
                    <div className="form__item">
                        <textarea className="form__textarea" placeholder="Додатковий коментар та побажання"></textarea>
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
                        Регулярний платіж
                    </button>
                    <button className="form__button">
                        Разовий платіж
                    </button>
                </div>
            </form>
            <div className="popup__content">
                <h2 className='popup__title'>Допоможи фінансово</h2>
                <p className='popup__description'>Якщо бажаєш ощасливити наших хвостатих улюбленців, найдієвіший спосіб – пожертвувати гроші на їхнє утримання та лікування, а також розвиток проєктів Фонду. </p>
                <p className='popup__description'>Притулок існує завдяки пожертвам меценатів та приватних благодійників. Саме тому ми завжди вдячні за будь-яку благодійну допомогу.</p>
                <h3 className='popup__subTitle'>На що ми витрачаємо кошти?</h3>
                <ul className="popup__helpList">
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Харчування</h3>
                        <p className="popup__helpDescription">За надіслані кошти ми купуємо продукти, м’ясо та корм для наших підопічних</p>
                    </li>
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Лікування тварин</h3>
                        <p className="popup__helpDescription">Кожній тварині потрібен догляд та лікування у разі хвороби. За надіслані кошти ми купуємо ліки та відвідуємо ветеринарів</p>
                    </li>
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Проведення  івентів</h3>
                        <p className="popup__helpDescription">Завдяки твоїм коштам ми можемо брати участь у соціальних проєктах для поширення наших ідей</p>
                    </li>
                    <li className="popup__helpListItem">
                        <h3 className="popup__HelpName">Існування притулку</h3>
                        <p className="popup__helpDescription">За надіслані кошти ми створюємо комфортні умови для наших хвостиків: робимо вольєри, купуємо іграшки</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}