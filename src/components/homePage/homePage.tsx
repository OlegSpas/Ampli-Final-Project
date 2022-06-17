import BlogListComponent from '../blogListComponent/blogListComponent';
import ContactForm from '../contactForm/contactForm';
import HelpComponent from '../helpComponent/helpComponent';
import HeroHome from '../heroHome/heroHome';
import AboutShelderComponent from '../homeAboutShelderComponent/aboutShelderComponent';
import HomePetsListComponent from '../homePetsListComponent/homePetsListComponent';
import Triggers from '../triggers/triggers';



interface IProps{
  pets:IPet[];
  blogs: IBlogs[];
}

export default function HomePage(props: IProps) {

  return (
      <>
        <HeroHome/>
        <Triggers/>
        <AboutShelderComponent/>
        <HelpComponent/>
        <BlogListComponent blogs={props.blogs}/>
        <HomePetsListComponent pets={props.pets}/>
        <ContactForm/>
      </>
  )
}