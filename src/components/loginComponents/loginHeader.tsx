import Logo from '../../images/logo.svg';
import './loginPage.scss';

export default function LoginHeader() {

  return (
      <header className="login__header">
        <div className="container">
          <img className='loginPage__logo' src={Logo} alt="logo" />
        </div>
      </header>
  )
}