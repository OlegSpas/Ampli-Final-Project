import React from 'react';
import petDog from '../../images/petDog.jpg'
import './homePetsListComponent.scss';

interface IProps{
    pet:{
        id:number;
        name:string;
        age:string;
        sex:string;
        size:string;
        type:string;
    }
}


export default function PetsCard(props:IProps) {

    const { id, name, age, sex, size, type } = props.pet

  return (
    <div className="petCard">
        <div className="petCard__image">
            <img src={petDog} alt={type} />
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
    </div>
  )
}