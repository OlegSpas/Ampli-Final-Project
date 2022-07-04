import React from 'react';
import UnknownAvatar from '../../images/unknownAvatar.svg';
import TeamAvatarElement from './teamAvatarElemet';
import { postUser } from '../../axios/users';

interface IProps{
  close:() => void;
  foundTeam: ITeam[];
}

export default function AdminTeamPopup(props:IProps) {
  const [ canClose, setCanClose] = React.useState(true);
  const [ imageValue, setImageValue ] = React.useState('')
  const [ avatar, setAvatar ] = React.useState(UnknownAvatar);
  const [ userInfo, setUserInfo ] = React.useState([
    {
      inputType:"name",
      inputValue: null
    },
    {
      inputType:"phoneNumber",
      inputValue: null
    },
    {
      inputType:"job",
      inputValue: null
    },
    {
      inputType:"email",
      inputValue: null
    },
    {
      inputType:"login",
      inputValue: null
    },
    {
      inputType:"password",
      inputValue: null
    }
  ])
  const [ warning, setWarning ] = React.useState(<></>)

  const onValueChange = (value:any, inputType:any) => {
    setUserInfo((prevState) => {
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

  const onChangeImageValue = (e:any) => {
    setImageValue(e.target.value);
  }

  const handleSetAvatar = (e:any) => {
    e.preventDefault();
    if(imageValue){
      setAvatar(imageValue);
    }
  }

  const handleAddUser = (e:any) => {
    e.preventDefault();
    var isValid = true;
    userInfo.forEach((detail) => {
      if(detail.inputValue === null){
        isValid = false;
      } })
      if(!isValid){
        setWarning(
          <h3 className='warningMessage'>
            Заповніть усі поля
          </h3>
        )
        return;
      }   
    setWarning(<></>)
    postUser({
      name: userInfo.find((e) => e.inputType === 'name')?.inputValue,
      phoneNumber: userInfo.find((e) => e.inputType === 'phoneNumber')?.inputValue,
      job: userInfo.find((e) => e.inputType === 'job')?.inputValue,
      email: userInfo.find((e) => e.inputType === 'email')?.inputValue,
      login: userInfo.find((e) => e.inputType === 'login')?.inputValue,
      password: userInfo.find((e) => e.inputType === 'password')?.inputValue,
      avatar: avatar
    });
    props.close();
    window.location.reload();
  }



  return (
    <div className='adminTeam__popup' onClick={handleClose}>
        <div className="mainPopup"
            onMouseOver={() => setCanClose( false)} 	
            onMouseLeave={() => setCanClose(true)}>
            <h2 className='popup__title'>Додати користувача</h2>
            <form className="form__popup">
                <div className="form__content">
                    <div className="formImage">
                        <TeamAvatarElement avatar={avatar}/>
                        <input onChange={onChangeImageValue} className='image__input' type="text" placeholder='Посилання на картинку' />
                        <button onClick={handleSetAvatar} className='image__actionBtn'>Встановити аватар</button>
                    </div>
                    <div className="formData">
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "name")} className="form__input" placeholder="Ім’я та прізвище"/>
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "phoneNumber")} className="form__input" placeholder="Номер телефону"/>
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "job")} className="form__input" placeholder="Посада"/>
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "email")} className="form__input" placeholder="Email"/>
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "login")} className="form__input" placeholder="Cтворіть логін"/>
                        <input type="text" onChange={(e) => onValueChange(e.target.value, "password")} className="form__input" placeholder="Створіть пароль"/>
                    </div>
                </div>
                <div className="formActions">
                  {warning}
                  <button className="form__button" onClick={handleAddUser}>
                    Додати
                  </button>
                </div>
            </form>
        </div>
    </div>
  )
}