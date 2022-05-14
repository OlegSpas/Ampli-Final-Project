import React from 'react';
import PetsListSelectsList from './petsListSelectsList';
import PetsData from '../../fakeData/petsData.json';
import { SelectStates } from '../../route/selectStates';
import PetsCard from '../homePetsListComponent/homePetsListComponentCard';
import { Link } from 'react-router-dom';
import { ADOPTION } from '../../route/Routes';
import './petsList.scss';

export default function PetsList() {
    const pets = PetsData.pets;  
    const filteredPets = new Array()

    // Один обєкт де все є всі стейти

    const [ petType, setPetType ] = React.useState('');
    const [ petAge, setPetAge ] = React.useState('');
    const [ petSize, setPetSize ] = React.useState('');
    const [ petSex, setPetSex ]  = React.useState('');
    const [ foundPets, setFoundPets ] = React.useState(pets);
    const [ state, setState ] = React.useState(SelectStates);

    // console.log(state)

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
                    setState={setState}
                    state={state}
                    SelectStates={SelectStates}
                    handleFilter={handleFilter} 
                    foundPets={foundPets}/>
                <div className="petsList__list">
                    {foundPets.map((pet, index) => (
                        <Link className='petsList__cardLink' to={{pathname:`${ADOPTION}/${pet.id}`}}>
                            <PetsCard key={index} pet={pet}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}