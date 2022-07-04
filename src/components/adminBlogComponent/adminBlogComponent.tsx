import React from "react";
import BlogListItem from "../blogList/blogListItem";
import AddBlogPopup from "./addBlogPopup";
import AdminBlogAction from "./adminBlogAction";
import './adminBlogComponent.scss';


interface IProps{
  blogs: IBlogs[];
}

export default function AdminBlogComponent(props:IProps) {
  const blogs = props.blogs;
  const [foundBlogs, setFoundBlogs ] = React.useState(blogs);
  const [isOpenBlogPopup, setOpenBlogPopup ] = React.useState(false);

  const handleFilter = (searchValue:any) => {
    if(searchValue !== ''){
      const result = blogs.filter((blog) => {
        return blog.title.toLowerCase().startsWith(searchValue.toLowerCase());
      });
      setFoundBlogs(result);
    } else{
      setFoundBlogs(blogs);
    }
  };

  const handleOpenBlogPopup = () => {
    setOpenBlogPopup(true);
  }
  const handleCloseBlogPopup  = () => {
    setOpenBlogPopup(false);
  }

  return (
      <div className="admin__teamComponent">
        <h2 className="admin__contentTitle">Блог</h2>
        <AdminBlogAction handleOpenBlogPopup={handleOpenBlogPopup} handleFilter={handleFilter}/>
        <div className="admin__blogList">
          {foundBlogs.length > 0?(
            foundBlogs.sort((a, b) => a.id < b.id ? 1 : -1).map((blog, index) =>(
              <BlogListItem key={index} blog={blog}/>
            ))
          ) : (
            <h2 className='error__title'>Упс... Немає результатів</h2>
          )}
        </div>
        { isOpenBlogPopup && <AddBlogPopup close={handleCloseBlogPopup}/>}
      </div>
  )
}