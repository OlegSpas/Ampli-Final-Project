import HeroBlog from '../heroBlog/heroBlog';
import BlogList from '../blogList/blogList';

interface IProps{
  blogs: IBlogs[];
}

export default function BlogListPage(props: IProps) {

  return (
      <>
        <HeroBlog/>
        <BlogList blogs={props.blogs}/>
      </>
  )
}