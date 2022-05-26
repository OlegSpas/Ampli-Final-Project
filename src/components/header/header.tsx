import React from 'react';
import logo from '../../images/logo.svg';
import { Routes } from '../../route/navRoutes';
import HeaderNavButton from './headerButton';
import './header.scss'


function Header() {

  return (
   <header className='header'>
     <div className="container">
      <div className="headerContent">
        <div className="navbar-logo">
          <img src={logo} alt="navbar logo" />
        </div>
        <nav className="navbar-menu">
          <ul className='navbar-menu__list'>
            {Routes.map((item, index) => (
             <HeaderNavButton key={index} {...item}/>
            ))}
          </ul>
        </nav>
        <div className="gamb__menu">
          menu
        </div>
      </div>
    </div>
   </header>
  )
}

export default Header;