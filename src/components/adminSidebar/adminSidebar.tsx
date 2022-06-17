import React from "react";
import { AdminRoutes } from "../../route/adminRoutes";
import AdminLogo from '../../images/adminLogo.svg';
import HideIcon from '../../images/HideIcon.svg';
import './adminSidebar.scss'
import AdminSidebarButton from "./adminSidebarButton";
import { HOME } from "../../route/Routes";
import { Link } from "react-router-dom";


interface IProps{
    setContent: (value:any) => void;
}

export default function AdminSidebar(props:IProps) {
    const [isActiveButton, setActiveButton] = React.useState(AdminRoutes.map( (_,index) => index === 0 ? true : false) );

    const setActive = (index:number) => {
        const activeButtons = AdminRoutes.map( () => false);
        activeButtons[index] = true;
        setActiveButton(activeButtons);
      }

    return (
        <div className="admin__sidebar">
            <div className="sidebar__header">
                <Link to={HOME}>
                    <img className="adminLogo" src={AdminLogo} alt="HappyPaw logo" />
                </Link>
                <Link to={HOME} className="sidebar__actionBtn"><img src={HideIcon} alt="sidebar button" /></Link>
            </div>
            <div className="sidebar__navigation">
                <h3 className="sidebar__subTitle">Керування</h3>
                {AdminRoutes.map((button, index) => (
                    <AdminSidebarButton key={index}  setContent={props.setContent}isActiveButton={isActiveButton[index]} setActive={() => setActive(index)} button={button}/>
                ))}
            </div>
        </div>
    )
  }