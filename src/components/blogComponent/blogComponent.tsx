import Avatar from '../../images/avatar.jpg';
import BlogParagraph from './blogParagraph';
import './blogComponent.scss';

interface IProps{
    currentBlog: IBlog;
}

export default function BlogComponent(props:IProps) {

    const { id, title, description, date, link, image, blogType, author, authorAvatar, article } = props.currentBlog


  return (
    <section className='Blog'>
        <div className="container">
            <div className="blog__Content">
                <div className="blog__media">
                    <img src={Avatar} alt={title} />
                    <h3>{props.currentBlog.author}</h3>
                </div>
                <article className="blog__article">
                    {article.map((article, index) => (
                        <BlogParagraph key={index} article={article}/>
                    ))}
                </article>
            </div>
        </div>
    </section>
  )
}