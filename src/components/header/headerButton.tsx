import React  from 'react';
import { Link } from 'react-router-dom';


interface IProps{
  buttonText:string;
  path:string
}

export default function HeaderNavButton(props:IProps) {

  return (
    <li className='navbar-menu__item'>
      <Link className='navbar-menu__link' to={props.path}>
        {props.buttonText}
      </Link>
    </li>
  )
}