import React from 'react';
import ImagePetBlog from './imagePetBlock';
import "react-multi-carousel/lib/styles.css";
import './aboutPageComponent.scss';
import PetCharacteristicItem from './PetCharacteristicItem';
import { PetCharacteristic } from '../../route/petCharacteristic';


interface IProps{
    currentPet:{
        id: number;
        name: string;
        age: string;
        sex: string;
        size: string;
        type: string;
        petDescription: string;
        images: {
            image: any;
        }[];
    }
}


export default function AboutPageComponent(props:IProps) {

    const { id, name, age, sex, size, type, petDescription, images} = props.currentPet;

  return (
    <section id='PetPage'>
        <div className="container">
            <div className="petPage__content">
                <ImagePetBlog images={images}/>
                <div className="petPage__AboutBlock">
                    <h1 className='petPage__petName'>{name}</h1>
                    <div className="petPage__mainBlock">
                        <div className="petPage__petCharacteristic">
                            <div className="petCharacteristic__item">
                                <h3 className='petCharacteristic__type'>Вид</h3>
                                <h2 className='petCharacteristic__answer'>{type}</h2>
                            </div>
                            <div className="petCharacteristic__item">
                                <h3 className='petCharacteristic__type'>Стать</h3>
                                <h2 className='petCharacteristic__answer'>{sex}</h2>
                            </div>
                            <div className="petCharacteristic__item">
                                <h3 className='petCharacteristic__type'>Розмір</h3>
                                <h2 className='petCharacteristic__answer'>{size}</h2>
                            </div>
                            <div className="petCharacteristic__item">
                                <h3 className='petCharacteristic__type'>Вік</h3>
                                <h2 className='petCharacteristic__answer'>{age}</h2>
                            </div>
                        </div>
                        <div className="petPage__actions">
                            <button className="petPage__button">Прихистити</button>
                            <button className="petPage__button">Взяти під опіку</button>
                        </div>
                    </div>
                    <div className="petPage__description">
                        <h2 className='petPage__descriptionSubTitle'>Про тварину</h2>
                        <p className='petPage__petDescription'>{petDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
