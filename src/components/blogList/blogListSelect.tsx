import React from 'react';
import { BlogButtons } from '../../route/blogButton';
import BlogListOption from './blogListOption';


interface IProps{
    handleFilter: (buttonValue:any) => void;
}

export default function BlogListSelect(props: IProps) {
 

  return (
    <select onChange={props.handleFilter} className='BlogList__Select'>
        {BlogButtons.map((button, index) => (
            <BlogListOption key={index}  button={button}/>
        ))}
    </select>
  )
}