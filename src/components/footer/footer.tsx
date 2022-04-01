import React from 'react';
import Logo from '../../images/whiteLogo.svg';
import { Routes } from '../../route/navRoutes';
import FooterNavButton from './footerButton';
import './footer.scss';


export default function Footer() {

  return (
      <footer className="footer">
        <div className="container">
            <div className="footer__content">
                <div className="footerLogo">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="footer__mainContent">
                    <div className="footer__contacts">
                        <p className='footer__text'>+(380) 123 45 6789</p>
                        <h3 className='footer__text'>Україна, Львів,
                            вул. Степана Бандери</h3>
                    </div>
                    <div className="footer__copyright">
                        <h3 className='footer__text'>@Spas. Всі права захищено</h3>
                    </div>
                    <nav className="footer-menu">
                        <ul className='footer-menu__list'>
                            {Routes.map((item, index) => (
                                <FooterNavButton key={index} {...item}/>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
      </footer>
  )
}