import React from 'react';
import PetsListSelectsList from './petsListSelectsList';
import PetsData from '../../fakeData/petsData.json';
// import { SelectStates } from '../../route/selectStates';
import PetsCard from '../homePetsListComponent/homePetsListComponentCard';
import { Link } from 'react-router-dom';
import { ADOPTION } from '../../route/Routes';
import './petsList.scss';
import { getPets } from '../../axios/pets';


interface IProps{
    pets:IPet[];
}

export default function PetsList(props:IProps) {
    // const pets = PetsData.pets;  

    // Один обєкт де все є всі стейти
    const [ pets, setPets ] = React.useState<IPet[]>(props.pets);
    const [ petType, setPetType ] = React.useState('');
    const [ petAge, setPetAge ] = React.useState('');
    const [ petSize, setPetSize ] = React.useState('');
    const [ petSex, setPetSex ]  = React.useState('');
    const [ foundPets, setFoundPets ] = React.useState<IPet[]>(props.pets);
    // const [ state, setState ] = React.useState(SelectStates);

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
                    // setState={setState}
                    // state={state}
                    // SelectStates={SelectStates}
                    handleFilter={handleFilter} 
                    foundPets={foundPets}/>
                <div className="petsList__list">
                    {foundPets.length > 0?(
                        foundPets.sort((a, b) => a.id < b.id ? 1 : -1).map((pet, index) => (
                                <PetsCard pet={pet}/>
                        ))
                    ) : (
                        <h2 className='error__title'>Упс... Немає результатів</h2>
                     )}
                </div>
            </div>
        </div>
    </section>
  )
}