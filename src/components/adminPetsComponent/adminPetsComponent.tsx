import React from "react";
import PetsData from '../../fakeData/petsData.json';
import PetsCard from '../homePetsListComponent/homePetsListComponentCard';
import AdminPetsAction from "./adminPetsAction";
import { Link } from 'react-router-dom';
import { ADOPTION } from '../../route/Routes';
import './adminPetsComponent.scss';
import AddPetPopup from "./addPetPopup";
import { getPets } from '../../axios/pets';

interface IProps{
  pets:IPet[];
}

export default function AdminPetsComponent(props:IProps) {
  const pets = props.pets;  
  const [ petType, setPetType ] = React.useState('');
  const [ petAge, setPetAge ] = React.useState('');
  const [ petSize, setPetSize ] = React.useState('');
  const [ petSex, setPetSex ]  = React.useState('');
  const [ foundPets, setFoundPets ] = React.useState(pets);
  const [ isOpenAddPetPopup, setOpenAddPetPopup ] = React.useState(false);

  const handleFilter = () => {        
    setFoundPets(  pets.filter((pet1) =>  {
       return pet1.age.includes(petAge) && 
        pet1.size.includes(petSize) && 
        pet1.sex.includes(petSex) && 
        pet1.type.includes(petType)
    }))
  } 

  const handleOpenAddPetPopup = () => {
    setOpenAddPetPopup(true);
  }
  const handleCloseAddPetPopup = () => {
    setOpenAddPetPopup(false);
  }

  React.useEffect(() => {
    setFoundPets(pets)
  })

  return (
    <div className="admin__petsComponent">
      <h2 className="admin__contentTitle">Тварини</h2>
        <AdminPetsAction 
          handleFilter={handleFilter}
          setPetType={setPetType} 
          setPetAge={setPetAge}
          setPetSize={setPetSize}
          setPetSex={setPetSex}
          foundPets={foundPets}
          handleOpenAddPetPopup={handleOpenAddPetPopup}/>
        <div className="admin__petList">
          {foundPets.length > 0?(
             foundPets.sort((a, b) => a.id < b.id ? 1 : -1).map((pet, index) => (
                <PetsCard key={index} pet={pet}/>
            ))
            ) : (
            <h2 className='error__title'>Упс... Немає результатів</h2>
           )}
        </div>
        {isOpenAddPetPopup && <AddPetPopup close={handleCloseAddPetPopup}/>}
    </div>
  )
}