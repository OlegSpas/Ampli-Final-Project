import React from 'react';
import { AddPetSelects } from '../../route/addPetSelects';
import UnknownAvatar from '../../images/unknownAvatar.svg'
import { BlogButtons } from '../../route/blogButton';
import { postBlog } from '../../axios/blogs';
// import TeamAvatarElement from './teamAvatarElemet';

interface IProps{
  close:() => void;

}

export default function AddBlogPopup(props:IProps) {
  const [canClose, setCanClose] = React.useState(true);
  const [ warning, setWarning ] = React.useState(<></>);
  const [ blogDetails, setBlogDetails ] = React.useState([
    {
      inputType:"title",
      inputValue: null
  },
  {
      inputType:"description",
      inputValue: null
  },    
  {
      inputType:"image",
      inputValue: null
  },
  {
      inputType:"blogType",
      inputValue: "care"
  },
  {
      inputType:"message",
      inputValue: null
  }
  ]);



  const handleClose = () =>{
    if(canClose){
      props.close()
    }
  }

  const onValueChange = (value:any, inputType:any) => {
    setBlogDetails((prevState) => {
      let newState = [...prevState];
      const valueIndex = newState.findIndex((emp) => emp.inputType === inputType);

      newState[valueIndex] = {
        ...newState[valueIndex],
        inputValue: value
      };
      return newState;
    });
};

const handleSendMessage = (e:any) => {
  e.preventDefault();
  var isValid = true;
  blogDetails.forEach((detail) => {
    if(detail.inputValue === null){
      isValid = false;
    } })
    if(!isValid){
      setWarning(
        <h3 className='warningMessage'>
          Заповніть усі поля
        </h3>
      )
      return;
    }   
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  const year = String(today.getFullYear())  
  const currentDay = day + '.' + month + '.' + year;
  setWarning(<></>)
  postBlog({
    title: blogDetails.find((e) => e.inputType === 'title')?.inputValue,
    description: blogDetails.find((e) => e.inputType === 'description')?.inputValue,
    image: blogDetails.find((e) => e.inputType === 'image')?.inputValue,
    blogType: blogDetails.find((e) => e.inputType === 'blogType')?.inputValue,
    message: blogDetails.find((e) => e.inputType === 'message')?.inputValue,
    date: currentDay
  });
  props.close();
  window.location.reload();
}



  return (
    <div className='adminBlog_popup' onClick={handleClose}>
        <div className="mainPopup"
            onMouseOver={() => setCanClose( false)} 	
            onMouseLeave={() => setCanClose(true)}>
            <h2 className='popup__title'>Створити статтю</h2>
            <form className="form__popup">
                <div className="formData">
                    <input type="text" onChange={(e) => onValueChange(e.target.value, "title")} className="form__input article__title" placeholder="Заголовок"/>
                    <select onChange={(e) => onValueChange(e.target.value, "blogType")} className='form__select'> 
                        {BlogButtons.slice(1).map((option, index) => (
                            <option value={option.buttonValue} key={index}>{option.buttonText}</option>
                        ))}
                    </select>
                    <textarea onChange={(e) => onValueChange(e.target.value, "description")}  className="form__textarea article__description" placeholder="Короткий опис вашої статті( 3-5 речень)"></textarea>
                    <input onChange={(e) => onValueChange(e.target.value, "image")} type="text" className="form__input paragraph__subtitle" placeholder="Зображення для картки"/>
                    <textarea onChange={(e) => onValueChange(e.target.value, "message")}  className="form__textarea paragraph__content" placeholder="Контент"></textarea>
                </div>
                <div className="formActions">
                  {warning}
                    <button onClick={handleSendMessage} className="form__button">
                        Cтворити статтю
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}