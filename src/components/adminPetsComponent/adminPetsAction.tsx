import React from "react";
import SearchIcon from '../../images/search.svg';
import { PetSelects } from '../../route/petSelects';
import PetsListSelect from "../petsList/petsListSelect";

interface IProps{
  handleFilter: () => void;
  setPetType: (value:any) => void;
  setPetAge: (value:any) => void;
  setPetSize: (value:any) => void;
  setPetSex: (value:any) => void;
  handleOpenAddPetPopup: () => void;
  foundPets:any;
}

export default function AdminPetsAction(props:IProps) {

    

  return (
      <div className="admin__teamAction">
        <button onClick={props.handleOpenAddPetPopup} className="admin__actionButton">Додати</button>
        <div className="petList__menu">
            <div className="petList__selects">
                {PetSelects.map((select, index) => (
                    <PetsListSelect 
                        setPetType={props.setPetType} 
                        setPetAge={props.setPetAge}
                        setPetSize={props.setPetSize}
                        setPetSex={props.setPetSex}
                        foundPets={props.foundPets} 
                        key={index} 
                        select={select} />
                ))}
            </div>
            <button onClick={props.handleFilter} className='petsList__searchBtn'>Пошук  <img src={SearchIcon} alt="search" /></button>
        </div>
      </div>
  )
}