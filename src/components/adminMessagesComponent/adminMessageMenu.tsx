import React from 'react';
import { AdminMessagesRoutes } from "../../route/adminMessagesRoute";
import MenuMessageButton from './menuMessageButton';
import MenuMessageOption from './menuMessageOption';


interface IProps{
    setMessageList: (foundBlogs:any) => void;
    handleFilter: (buttonValue:any) => void;
    handleFilterBySelect: (buttonValue:any) => void;
}

export default function AdminMessageMenu(props: IProps) {
  const [isActiveButtons, setActiveButtons] = React.useState(AdminMessagesRoutes.map( (_,index) => index === 0 ? true : false) );
  
  const setActive = (index:number) => {
    const activeButtons = AdminMessagesRoutes.map( () => false);
    activeButtons[index] = true;
    setActiveButtons(activeButtons)
  }

  return (
      <>
        <div className='adminMessage__menu'>
          {AdminMessagesRoutes.map((button, index) => (
              <MenuMessageButton key={index} setActive={() => setActive(index)} isActive={isActiveButtons[index]} handleFilter={props.handleFilter} button={button}/>
          ))}
        </div>
        <select onChange={props.handleFilterBySelect} className="adminMessage__select">
            {AdminMessagesRoutes.map((option, index) => (
              <MenuMessageOption button={option} key={index}/>
            ))}
        </select>
      </>
  )
}