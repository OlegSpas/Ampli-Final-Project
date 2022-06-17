import React from "react";
import { AdminMessagesRoutes } from "../../route/adminMessagesRoute";
import MessageData from '../../fakeData/messagesData.json';
import AdminMessageMenu from "./adminMessageMenu";
import './adminMessagesComponent.scss';
import AdminMessageCard from "./adminMessageCard";

interface IProps{
  messages:IMessages[];
}

export default function MessagesComponent(props:IProps) {
  const messages = props.messages;
  const [value, setValue] = React.useState('');
  const [messageList, setMessageList] = React.useState(messages);

  const handleFilter = (buttonValue:any) => {
    if(buttonValue !== 'all'){
      const results = messages.filter((message) => {
        return message.messageType.toLowerCase().includes(buttonValue.toLowerCase());
      });
      setMessageList(results);
    } else{
      setMessageList(messages);
    }
  };

  const handleFilterBySelect = (event:any) => {
    const selectValue = event.target.value;
    if(selectValue !== 'all'){
      const results = messages.filter((message) => {
        return message.messageType.toLowerCase().includes(selectValue.toLowerCase());
      });
      setMessageList(results);
    } else{
      setMessageList(messages);
    }
  }


  return (
    <div className="admin__messagesComponent">
      <h2 className="admin__contentTitle">Повідомлення</h2>
      <div className="admin__messageContent">
        <AdminMessageMenu handleFilterBySelect={handleFilterBySelect} handleFilter={handleFilter} setMessageList={setMessageList} setValue={setValue}/>
        <div className="admin__mainMessageContent">
          {messageList.sort((a, b) => a.id < b.id ? 1 : -1).map((adminMessage, index) => (
            <AdminMessageCard key={index} adminMessage={adminMessage} />
          ))}
        </div>
      </div>
    </div>
  )
}