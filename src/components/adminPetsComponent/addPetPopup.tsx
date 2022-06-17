import React from 'react';
import { AddPetSelects } from '../../route/addPetSelects';
import AddPetSelect from './addPetSelect';
import PlusImage from '../../images/plus.svg';
import { postPet } from '../../axios/pets';

interface IProps{
  close:() => void;

}

interface IState{
  
}

export default function AddPetPopup(props:IProps) {
  const [canClose, setCanClose] = React.useState(true);
  const [ image, setImage ] = React.useState()
  const [ petImages, setPetImages ] = React.useState<any[]>([]);
  const [ petDetails, setPetDetails ] = React.useState([
        {
          selectName: "name",
          selectValue:null,
          displayName:"Ім'я"
        },
        {
          selectName: "age",
          selectValue:null,
          displayName:"Вік"
        },
        {
          selectName: "type",
          selectValue:'Собака',
          displayName:"Вид"
        },
        {
          selectName: "size",
          selectValue:"Малий",
          displayName:"Розмір"
        },
        {
          selectName: "sex",
          selectValue:"Дівчинка",
          displayName:"Стать"
        },
        {
          selectName: "message",
          selectValue:null,
          displayName:"Опис"
        }
  ]);
  const [ warning, setWarning ] = React.useState(<></>)
      

  const handleClose = () =>{
    if(canClose){
      props.close();
    }
  }

  const onChangeImageValue = (e:any) => {
    setImage(e.target.value);
  }

  const handleAddImages = () => {
    if(image){
      setPetImages([...petImages, image]);
    }
  }

  const onValueChange = (value:any, selectType:any) => {
    setPetDetails((prevState) => {
      let newState = [...prevState];
      const valueIndex = newState.findIndex((emp) => emp.selectName === selectType);

      newState[valueIndex] = {
        ...newState[valueIndex],
        selectValue: value
      };
      return newState;
    });
  };

  const handleAddPet = (e:any) => {
    e.preventDefault();
    var isValid = true;
    petDetails.forEach((detail) => {
      if(detail.selectValue === null){
        isValid = false;
      } })
      if(!isValid || petImages.length === 0){
        setWarning(
          <h3 className='warningMessage'>
            Заповніть усі поля
          </h3>
        )
        return;
      }   
    setWarning(  <></>)
    const currentDate = new Date();
    const petAge = petDetails.find((e) => e.selectName === 'age')?.selectValue;
    const result = currentDate.getTime() - new Date(petAge!).getTime();
    const calculateAge = Math.floor(result / 31556926000);
    let stringAge
    if(calculateAge < 1){
      stringAge = 'До року';
    }else if(calculateAge < 2 && calculateAge >= 1){
      stringAge = '1 рік';
    }else if(calculateAge < 3 && calculateAge >= 2){
      stringAge = '2-3 роки';
    }else if(calculateAge < 4 && calculateAge >= 3){
      stringAge = '3-4 роки';
    }else if(calculateAge < 6 && calculateAge >= 4){
      stringAge = '4-6 років';
    }else if(calculateAge < 8 && calculateAge >= 6){
      stringAge = '6-8 років';
    }else if(calculateAge < 10 && calculateAge >= 8){
      stringAge = '8-10 років';
    }else if(calculateAge > 10){
      stringAge = '10+ років';
    };
    postPet({
      name: petDetails.find((e) => e.selectName === 'name')?.selectValue,
      type: petDetails.find((e) => e.selectName === 'type')?.selectValue,
      sex: petDetails.find((e) => e.selectName === 'sex')?.selectValue,
      size: petDetails.find((e) => e.selectName === 'size')?.selectValue,
      age: stringAge,
      description: petDetails.find((e) => e.selectName === 'message')?.selectValue,
      images: petImages.map((image) => {
        return {url:image}
      })
    });
    props.close();
    window.location.reload();
  }


  


  return (
    <div className='addPet__popup' onClick={handleClose}>
        <div className="mainPopup"
            onMouseOver={() => setCanClose( false)} 	
            onMouseLeave={() => setCanClose(true)}>
            <h2 className='popup__title' onClick={handleAddPet}>Додати тварину</h2>
            <form className="form__popup">
                <div className="formData">
                  <input type="text" onChange={(e) => onValueChange(e.target.value, "name")} className="form__input petName__input" placeholder="Ім’я тварини"/>
                  <input type="month" onChange={(e) => onValueChange(e.target.value, "age")} className="form__input" placeholder="Вік"/>
                  {AddPetSelects.map((select, index) => (
                      <AddPetSelect key={index} onValueChange={onValueChange} select={select}/>
                  ))}
                </div>
                <div className="formMessage">
                    <textarea onChange={(e) => onValueChange(e.target.value, "message")} className="form__textarea" placeholder="Опишіть тварину: її особливості, колір, поведінку, харчування і т.д"></textarea>
                </div>
                <div className="formImage">
                  <div className="image__inputs">
                    <input className='image__input' onChange={onChangeImageValue} type="text" placeholder='Додати картинку' />
                    <img className={`imageAdd__Icon ${petImages.length >= 4 ? 'disabledBTN' : ''}`} src={PlusImage} alt="add photo" onClick={handleAddImages}/>
                  </div>
                  <p className='image__warning'>Макс. - 4</p>
                  <div className="img__list">
                    {
                      petImages.map((images, index) => (
                          <img className='petImage' key={index} src={images} alt="pet Image" />
                      ))
                    }
                  </div>
                </div>
              <div className="formActions">
                  {warning}
                  <button className="form__button" onClick={handleAddPet}>
                    Додати
                  </button>
              </div>
          </form>
        </div>
    </div>
  )
}