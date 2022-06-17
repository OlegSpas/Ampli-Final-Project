import React from 'react';
import GoodPopupImg from '../../images/goodPopup.svg';
import './warningPopup.scss'


export default function GoodPopup() {

  return (
    <div className='warning__popup'>
      <div className="mainPopup" >
            <img src={GoodPopupImg} alt='message sent' />
            <h2 className='popup__title'>Дякуюємо за довіру!</h2>
      </div>
    </div>
  )
}