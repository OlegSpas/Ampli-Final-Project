import React from 'react';
import { PetSelects } from '../../route/petSelects';
import SearchIcon from '../../images/search.svg';
import PetsListSelect from './blogListSelect';

interface IProps{
    foundPets:any;
    handleFilter: () => void;
    setPetType: (value:any) => void;
    setPetAge: (value:any) => void;
    setPetSize: (value:any) => void;
    setPetSex: (value:any) => void;
}

export default function PetsListSelectsList(props:IProps) {

  return (
    <div className="petsList__menu">
        <div className='petsList__selects'>
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
  )
}