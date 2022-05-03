import React from 'react';
import { useLocation } from 'react-router-dom';
import BlogComponent from '../blogComponent/blogComponent';
import BlogData from '../../fakeData/blogListData.json'
import HeroBlogPage from '../heroBlogPage/heroBlogPage';

interface IProps {
    match: {params:{id:number}};
  }

interface IState{
    blogData?: IBlog;
}  


export default function BlogPage(props:IProps, state: IState) {

    const location = useLocation();
    const url = location.pathname;
    const splitURL = url.split('/');
    const blogId = Number(splitURL[2]);
    console.log(blogId)
    const currentBlog  = BlogData.blogs[blogId]
    console.log(currentBlog)

  return (
      <>
        <HeroBlogPage/>
        <BlogComponent currentBlog={currentBlog}/>
      </>
  )
}