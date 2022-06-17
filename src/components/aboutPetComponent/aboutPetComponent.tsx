import React from 'react';
import ImagePetBlog from './imagePetBlock';
import "react-multi-carousel/lib/styles.css";
import './aboutPetComponent.scss';
import { PetCharacteristic } from '../../route/petCharacteristic';
import AdoptionPopup from '../actionPopups/adoptPopup';


interface IProps{
    currentPet: IPet;
}


export default function AboutPageComponent(props:IProps) {
    const [ isOpenAdoptionPopup, setOpenAdoptionPopup ] = React.useState(false);
    const { name, age, sex, size, type, description, images} = props.currentPet;

    const handleOpenAdoptionPopup = () =>{
        setOpenAdoptionPopup(true);
    }

    const handleCloseAdoptionPopup = () =>{
        setOpenAdoptionPopup(false);

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
                        </div>
                    </div>
                    <div className="petPage__description">
                        <h2 className='petPage__descriptionSubTitle'>Про тварину</h2>
                        <p className='petPage__petDescription'>{description}</p>
                    </div>
                    { isOpenAdoptionPopup && <AdoptionPopup currentPet={props.currentPet} close={handleCloseAdoptionPopup}/>}
                </div>
            </div>
        </div>
    </section>
  )
}
