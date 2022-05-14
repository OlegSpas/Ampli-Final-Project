import React from 'react';
import { useLocation } from 'react-router-dom';
import PetsData from '../../fakeData/petsData.json';
import AboutPageComponent from '../aboutPetComponent/aboutPetComponent';
import SimilarPetsComponent from '../similarPetsComponent/similarPetsComponent';

export default function PetPage() {

    const location = useLocation();
    const url = location.pathname;
    const splitURL = url.split('/');
    const petId = Number(splitURL[2]);
    const currentPet  = PetsData.pets[petId]

  return (
      <>
        <AboutPageComponent currentPet={currentPet}/>
        <SimilarPetsComponent currentPet={currentPet}/>
      </>
  )
}