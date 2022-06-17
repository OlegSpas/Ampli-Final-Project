import React from 'react';
import PopupError from '../../images/popupError.svg';
import './warningPopup.scss'

interface IProps{
  // close:() => void;

}

// Добавити заборону виключання при наведенні

export default function ErrorPopup(props:IProps) {
  const [canClose, setCanClose] = React.useState(true);

  const handleClose = () =>{
    if(canClose){
      // props.close()
    }
  }

  return (
    <div className='warning__popup' onClick={handleClose}>
      <div className="mainPopup" 
          onMouseOver={() => setCanClose( false)} 	
          onMouseLeave={() => setCanClose(true)}>
            <img src={PopupError} alt='error' />
            <h2 className='popup__title'>Заповніть усі поля</h2>
      </div>
    </div>
  )
}