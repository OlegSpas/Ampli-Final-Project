import React from 'react';
import Image from '../../images/helpCardImg.jpg';

interface IProps{
    button: IBlogButton;
    setValue:(buttonValue:string) => void;
    handleFilter: (buttonValue:any) => void;
    setActive: () => void;
    isActive: boolean;
}

export default function BlogListButton(props: IProps) {
    const {buttonText, buttonValue} = props.button;

    const handleSetBlogs = () => {
      // console.log(props.value)
      // props.setValue(buttonValue);
      // console.log(props.value)
      // console.log(props.value)
      // setTimeout(function () {
      //   handleSetValue()
      // },2000)
      // handleSetValue()
      // console.log(props.value)
      // props.setActive();
      // handleSetFilter()
      // props.handleFilter(buttonValue);



      props.setValue(buttonValue);
      props.setActive();
      props.handleFilter(buttonValue);
    }

  return (
    <button className={`blogList__button ${props.isActive ? 'active' : ''}`} onClick={handleSetBlogs}>
        {buttonText}
    </button>
  )
}