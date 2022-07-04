import React from "react";
import AdminSidebar from "../adminSidebar/adminSidebar";
import MessagesComponent from "../adminMessagesComponent/adminMessagesComponent";
import AdminTeamComponent from "../adminTeamComponent/adminTeamComponent";
import AdminPetsComponent from "../adminPetsComponent/adminPetsComponent";
import AdminBlogComponent from "../adminBlogComponent/adminBlogComponent";
import './adminPage.scss';

interface IProps{
  pets:IPet[];
  team: ITeam[];
  messages:IMessages[];
  blogs: IBlogs[];
}

export default function AdminPage(props:IProps) {

  const [ content, setContent ] = React.useState('Messages');
  const [ component, setComponent ] = React.useState(<MessagesComponent messages={props.messages}/>)

  React.useEffect(() => {
    switch(content){
      case 'Messages':
        setComponent(<MessagesComponent messages={props.messages}/>)
        break;         
      case 'Team':
        setComponent(<AdminTeamComponent team={props.team}/>)
        break;    
      case 'Pets':
        setComponent(<AdminPetsComponent pets={props.pets}/>)
        break;  
      case 'Blog':
        setComponent(<AdminBlogComponent blogs={props.blogs}/>)
        break;  
    }
  },[content, props.blogs, props.messages, props.pets, props.team])


  return (
      <section id="adminPanel">
         <AdminSidebar  setContent={setContent}/>
        <div className="container adminContent">
          {component}
        </div>
      </section>
  )
}