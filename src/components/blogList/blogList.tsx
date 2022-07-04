import React from 'react';
import BlogListItem from './blogListItem';
import BlogListButtons from './blogListButtons';
import './blogList.scss';
import BlogListSelect from './blogListSelect';

interface IProps{
  blogs:IBlogs[];
}

export default function BlogList(props: IProps) {
  const blogs = props.blogs;
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

  const handleFilterBySelect = (event:any) => {
    const selectValue = event.target.value;
    if(selectValue !== 'all'){
      const results = blogs.filter((blog) => {
        return blog.blogType.toLowerCase().includes(selectValue.toLowerCase());
      });
      setFoundBlogs(results);
    } else{
      setFoundBlogs(blogs);
    }
  }

  return (
      <section className='BlogList'>
          <div className="container">
              <div className="BlogList__content">
                <BlogListButtons handleFilter={handleFilter} setFoundBlogs={setFoundBlogs}/>
                <BlogListSelect handleFilter={handleFilterBySelect}/>
                <div className="BlogList__list">
                  {foundBlogs.sort((a, b) => a.id < b.id ? 1 : -1).map((blog, index) => (
                    <BlogListItem key={index} blog={blog}/>
                  ))}
                </div>
              </div>
          </div>
      </section>
  )
}