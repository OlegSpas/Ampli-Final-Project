import React from 'react';
import { useLocation } from 'react-router-dom';
import PetsData from '../../fakeData/petsData.json';
import AboutPageComponent from '../aboutPetComponent/aboutPetComponent';
import SimilarPetsComponent from '../similarPetsComponent/similarPetsComponent';
import UnknownPage from '../unknownPage/unknownPage';

interface IProps{
  pets:IPet[];
}

export default function PetPage(props:IProps) {

    const location = useLocation();
    const url = location.pathname;
    const splitURL = url.split('/');
    const petId = Number(splitURL[2]);
    const currentPet  = props.pets.find((pet) => pet.id === petId);


    if(currentPet === undefined){
      return <UnknownPage/>
    } else{
      return (
        <>
          <AboutPageComponent currentPet={currentPet!}/>
          <SimilarPetsComponent pets={props.pets} currentPet={currentPet!}/>
        </>
    )
  }
}