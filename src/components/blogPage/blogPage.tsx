import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogComponent from '../blogComponent/blogComponent';
import BlogData from '../../fakeData/blogListData.json'
import HeroBlogPage from '../heroBlogPage/heroBlogPage';
import UnknownPage from '../unknownPage/unknownPage';

interface IProps {
  blogs: IBlogs[];
  }



export default function BlogPage(props:IProps) {

    const location = useLocation();
    const url = location.pathname;
    const splitURL = url.split('/');
    const blogId = Number(splitURL[2]);
    const currentBlog  = props.blogs.find((blog) => blog.id === blogId);

    if(currentBlog === undefined){
      return <UnknownPage/>
    } else{
      return (
        <>
          <HeroBlogPage currentBlog={currentBlog!}/>
          <BlogComponent currentBlog={currentBlog!}/>
        </>
    )
    }
}