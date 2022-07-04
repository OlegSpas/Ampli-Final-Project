import React from 'react';
import PetsCard from '../homePetsListComponent/homePetsListComponentCard';
import './similarPetsComponent.scss';


interface IProps{
    currentPet:IPet;
    pets: IPet[];
}

export default function SimilarPetsComponent(props:IProps) {
    const [ similarPets, setSimilarPets ] = React.useState(props.pets);

    const shuffle = (array:any) => {
        let currentIndex = array.length,  randomIndex;      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

      
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
        const filteredPets: IPet[] = [];
        const pets = props.pets
    
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
                      <PetsCard key={index} pet={pet}/>
                    ))}
                </div>
            </div>
        </div>
      </section>
  )
}