import React from 'react';
import PetsListSelectsList from './petsListSelectsList';
import PetsData from '../../fakeData/petsData.json';
import PetsCard from '../homePetsListComponent/homePetsListComponentCard';
import './petsList.scss';

export default function PetsList() {
    const pets = PetsData.pets;  
    const filteredPets = new Array()

    // Один обєкт де все є всі стейти

    const [ petType, setPetType ] = React.useState('');
    const [ petAge, setPetAge ] = React.useState('');
    const [ petSize, setPetSize ] = React.useState('');
    const [ petSex, setPetSex ]  = React.useState('');
    const [foundPets, setFoundPets] = React.useState(pets);


    const handleFilter = () => {        
        setFoundPets(  pets.filter((pet1) =>  {
           return pet1.age.includes(petAge) && 
            pet1.size.includes(petSize) && 
            pet1.sex.includes(petSex) && 
            pet1.type.includes(petType)
        }))
    }

  return (
    <section id="petsList">
        <div className="container">
            <div className="petsList__content">
                <PetsListSelectsList 
                    setPetType={setPetType} 
                    setPetAge={setPetAge}
                    setPetSize={setPetSize}
                    setPetSex={setPetSex}
                    handleFilter={handleFilter} 
                    foundPets={foundPets}/>
                <div className="petsList__list">
                    {foundPets.map((pet, index) => (
                        <PetsCard key={index} pet={pet}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}