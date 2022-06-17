import React from 'react';
import { AdminMessagesRoutes } from "../../route/adminMessagesRoute";
import MenuMessageButton from './menuMessageButton';
import MessagePopup from './messagePopup';


interface IProps{
    adminMessage:IMessages;
}

export default function AdminMessageCard(props: IProps) {
    const shortMessage = props.adminMessage.message.slice(0, 35) + "...";
    const [ message, setMessage ] = React.useState(props.adminMessage.message);
    const [ isOpenMessagePopup, setOpenMessagePopup ] = React.useState(false);

    React.useEffect(() => {
        if(props.adminMessage.message.length > 35){
            setMessage(shortMessage);
        } else{
            setMessage(props.adminMessage.message);
        }
    },[message])

    const handleOpenMessagePopup = () => {
        setOpenMessagePopup(true);
      }
      const handleCloseMessagePopup = () => {
        setOpenMessagePopup(false);
      }
    

  return (
      <>
        <div className='adminMessage__card' onClick={handleOpenMessagePopup}>
            <h3 className='message__author'>{props.adminMessage.authorName} {props.adminMessage.authorSecondName}</h3>
            <h3 className='message__type'>{props.adminMessage.messageType}</h3>
            <p className='message__text'>{message}</p>
            <p className='message__date'>{props.adminMessage.date}</p>
        </div>
        { isOpenMessagePopup && <MessagePopup adminMessage={props.adminMessage}  close={handleCloseMessagePopup}/>}
      </>
  )
}