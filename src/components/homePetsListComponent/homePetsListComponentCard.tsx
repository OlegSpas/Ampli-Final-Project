import React from 'react';
import petDog from '../../images/petDog.jpg'
import './homePetsListComponent.scss';

interface IProps{
    name:string;
    age:string;
    sex:string;
    size:string;
    type:string;
}


export default function PetsCard(props:IProps) {

  return (
    <div className="petCard">
        <div className="petCard__image">
            <img src={petDog} alt={props.type} />
        </div>
        <div className="petCard__content">
            <h3 className='petCard__title'>{props.name}</h3>
            <div className="petCard__item">
                <p>Вид</p>
                <p>{props.type}</p>
            </div>
            <div className="petCard__item">
                <p>Стать</p>
                <p>{props.sex}</p>
            </div>
            <div className="petCard__item">
                <p>Вік</p>
                <p>{props.age}</p>
            </div>
            <div className="petCard__item">
                <p>Розмір</p>
                <p>{props.size}</p>
            </div>
            <div className="petCard__action">
                <button className="petCard__button">
                    Допомогти
                </button>
            </div>
        </div>
    </div>
  )
}