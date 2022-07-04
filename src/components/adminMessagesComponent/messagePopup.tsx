import React from 'react';

interface IProps{
  close:() => void;
  adminMessage:IMessages;
}

export default function MessagePopup(props:IProps) {
  const [canClose, setCanClose] = React.useState(true);


  const handleClose = () =>{
    if(canClose){
      props.close()
    }
  }

  return (
    <div className='message__popup' onClick={handleClose}>
        <div className="mainPopup"
            onMouseOver={() => setCanClose( false)} 	
            onMouseLeave={() => setCanClose(true)}>
              <header className="header__popup">
                <div className="author__data">
                  <div className="author__title">
                    <h3 className='author__name'>{props.adminMessage.authorName} {props.adminMessage.authorSecondName}</h3>
                    <p className="author__detail">{props.adminMessage.report}</p>
                    <p className="author__detail">{props.adminMessage.reportDetails}</p>
                  </div>
                  <div className="author__contact">
                    <p className='author__contactMain'> Email:  {props.adminMessage.authorEmail}</p>
                    <p className='author__contactMain'>{props.adminMessage.authorPhoneNumber}</p>
                  </div>
                </div>
                <div className="date">
                  <p className='message__data'>{props.adminMessage.date}</p>
                </div>
              </header>
              <main className="message__content">
                <h2 className='messageTitle'>
                  {props.adminMessage.messageType}
                </h2>
                <p className="message__text">
                  {props.adminMessage.message}
                </p>
              </main>
        </div>
    </div>
  )
}
