import React from 'react';
import logo from '../../images/logo.svg';
import { Routes } from '../../route/navRoutes';
import HeaderNavButton from './headerButton';
import CloseIcon from '../../images/close.svg';
import './header.scss'


function Header() {

  const [ isActiveMenu, setActiveMenu ] = React.useState(false);
  

  const handleOpenMenu = () => {
    setActiveMenu(true)
  }
  const handleCloseMenu = () => {
    setActiveMenu(false);
  }

  return (
   <header className='header'>
     <div className="container">
      <div className="headerContent">
        <div className="navbar-logo">
          <img src={logo} alt="navbar logo" />
        </div>
        <div className="navigation">
          <nav className={`navbar-menu ${isActiveMenu ? 'show-menu' : '' }`}>
            <ul className='navbar-menu__list'>
              {Routes.map((item, index) => (
              <HeaderNavButton handleCloseMenu={handleCloseMenu} key={index} {...item}/>
              ))}
            </ul>
            <img src={CloseIcon} alt="menu" className="close-button"  onClick={handleCloseMenu}/>
          </nav>
          <div className="navbar__toggle" onClick={handleOpenMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </div>
    <div className={`bg ${isActiveMenu ? 'active_bgc' : '' }`} onClick={handleCloseMenu}></div>
   </header>
  )
}

export default Header;