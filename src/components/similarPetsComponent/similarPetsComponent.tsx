import React from 'react';
import { useLocation } from 'react-router-dom';
import PetsData from '../../fakeData/petsData.json';
import PetsCard from '../homePetsListComponent/homePetsListComponentCard';
import { Link } from 'react-router-dom';
import { ADOPTION } from '../../route/Routes';
import AboutPageComponent from '../aboutPetComponent/aboutPetComponent';
import './similarPetsComponent.scss';


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

export default function SimilarPetsComponent(props:IProps) {
    const [ similarPets, setSimilarPets ] = React.useState(PetsData.pets);

    const shuffle = (array:any) => {
        let currentIndex = array.length,  randomIndex;      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {

      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
          }
          
        return array;
      }

      React.useEffect(() => {
        const pets = PetsData.pets;
        const filteredPets = new Array;
    
        pets.forEach((pet) => {
            const isCurrentPet =  pet.id.toString().includes(props.currentPet.id.toString())
            if(isCurrentPet === false){
                filteredPets.push(pet)
            }
          })
        setSimilarPets(shuffle(filteredPets))
      },[props.currentPet])
      
  return (
      <section id='similarPets'>
        <div className="container">
            <div className="similarPets__content">
                <h2 className="similarPets__title">
                    Також наші хвостики
                </h2>
                <div className="similarPets__list">
                    {similarPets.slice(0,4).map((pet, index) => (
                            <Link className='petsList__cardLink' key={index} to={{pathname:`${ADOPTION}/${pet.id}`}}>
                                <PetsCard key={index} pet={pet}/>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
      </section>
  )
}