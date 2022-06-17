import HeroPetsListPage from "../heroPetsList/heroPetsList";
import PetsList from "../petsList/petsList";

interface IProps{
  pets:IPet[];
}

export default function PetsListPage(props:IProps) {

  return (
      <>
        <HeroPetsListPage/>
        <PetsList pets={props.pets}/>
      </>
  )
}