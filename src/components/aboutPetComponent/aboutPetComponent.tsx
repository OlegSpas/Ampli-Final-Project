import React from 'react';
import ImagePetBlog from './imagePetBlock';
import "react-multi-carousel/lib/styles.css";
import './aboutPageComponent.scss';
import { PetCharacteristic } from '../../route/petCharacteristic';
import ActionPopup from '../actionPopups/actionPopup';


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
    const [ isOpenAdoptionPopup, setOpenAdoptionPopup ] = React.useState(false);
    const { id, name, age, sex, size, type, petDescription, images} = props.currentPet;

    const handleOpenAdoptionPopup = () =>{
        setOpenAdoptionPopup(true);
        document.body.style.overflow = 'hidden';
    }

    const handleCloseAdoptionPopup = () =>{
        setOpenAdoptionPopup(false);
        document.body.style.overflow = 'visible';
    }

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
                            <button onClick={handleOpenAdoptionPopup} className="petPage__button">Прихистити</button>
                            <button className="petPage__button">Взяти під опіку</button>
                        </div>
                    </div>
                    <div className="petPage__description">
                        <h2 className='petPage__descriptionSubTitle'>Про тварину</h2>
                        <p className='petPage__petDescription'>{petDescription}</p>
                    </div>
                    { isOpenAdoptionPopup && <ActionPopup close={handleCloseAdoptionPopup}/>}
                </div>
            </div>
        </div>
    </section>
  )
}
