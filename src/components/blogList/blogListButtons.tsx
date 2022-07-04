import React from 'react';
import { BlogButtons } from '../../route/blogButton';
import BlogListButton from './blogListButton';


interface IProps{
    setFoundBlogs: (foundBlogs:any) => void;
    handleFilter: (buttonValue:any) => void;
}

export default function BlogListButtons(props: IProps) {
  const [isActiveButtons, setActiveButtons] = React.useState(BlogButtons.map( (_,index) => index === 0 ? true : false) );
  
  const setActive = (index:number) => {
    const activeButtons = BlogButtons.map( () => false);
    activeButtons[index] = true;
    setActiveButtons(activeButtons)
  }

  return (
    <div className='BlogList__buttons'>
        {BlogButtons.map((button, index) => (
            <BlogListButton key={index} setActive={() => setActive(index)} isActive={isActiveButtons[index]} handleFilter={props.handleFilter} button={button}/>
        ))}
    </div>
  )
}