import Avatar from '../../images/avatar.jpg';
import BlogParagraph from './blogParagraph';
import './blogComponent.scss';

interface IProps{
    currentBlog: IBlogs;
}

export default function BlogComponent(props:IProps) {


  return (
    <section className='Blog'>
        <div className="container">
            <div className="blog__Content">
                <div className="blog__media">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvV7PmZEa4c7heXjMTbsf2WBXuHz_lS8wURA&usqp=CAU" alt="Аватар" />
                    <h3>Іван Петрович</h3> 
                </div>
                <article className="blog__article">
                    <h4>{props.currentBlog.message}</h4>
                </article>
            </div>
        </div>
    </section>
  )
}