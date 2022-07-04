import React from 'react';
import { Link } from 'react-router-dom';
import { ADOPTION } from '../../route/Routes';
// import './homePetsListComponent.scss';

interface IProps{
    pet:IPet;
}


export default function PetsCard(props:IProps) {

    const { name, age, sex, size, type } = props.pet

  return (
    <Link to={{pathname:`${ADOPTION}/${props.pet.id}`}} className="petCard">
        <div className="petCard__image">
            <img src={props.pet.images[0].url} alt={type} />
        </div>
        <div className="petCard__content">
            <h3 className='petCard__title'>{name}</h3>
            <div className="petCard__item">
                <p>Вид</p>
                <p>{type}</p>
            </div>
            <div className="petCard__item">
                <p>Стать</p>
                <p>{sex}</p>
            </div>
            <div className="petCard__item">
                <p>Вік</p>
                <p>{age}</p>
            </div>
            <div className="petCard__item">
                <p>Розмір</p>
                <p>{size}</p>
            </div>
            <div className="petCard__action">
                <button className="petCard__button">
                    Допомогти
                </button>
            </div>
        </div>
    </Link>
  )
}