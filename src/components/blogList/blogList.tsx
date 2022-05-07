import React from 'react';
import BlogData from '../../fakeData/blogListData.json';
import BlogListItem from './blogListItem';
import BlogListButtons from './blogListButtons';
import './blogList.scss';



export default function BlogList() {
  const blogs = BlogData.blogs;
  const [value, setValue] = React.useState('all');
  const [foundBlogs, setFoundBlogs] = React.useState(blogs);

  const handleFilter = (buttonValue:any) => {
    if(buttonValue !== 'all'){
      const results = blogs.filter((blog) => {
        return blog.blogType.toLowerCase().includes(buttonValue.toLowerCase());
      });
      setFoundBlogs(results);
    } else{
      setFoundBlogs(blogs);
    }
  };

  return (
      <section className='BlogList'>
          <div className="container">
              <div className="BlogList__content">
                <BlogListButtons handleFilter={handleFilter} setFoundBlogs={setFoundBlogs} setValue={setValue}/>
                <div className="BlogList__list">
                  {foundBlogs.map((blog, index) => (
                    <BlogListItem key={index} blog={blog}/>
                  ))}
                </div>
              </div>
          </div>
      </section>
  )
}