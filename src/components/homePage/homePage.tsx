import BlogListComponent from '../blogListComponent/blogListComponent';
import ContactForm from '../contactForm/contactForm';
import HelpComponent from '../helpComponent/helpComponent';
import HeroHome from '../heroHome/heroHome';
import AboutShelderComponent from '../homeAboutShelderComponent/aboutShelderComponent';
import HomePetsListComponent from '../homePetsListComponent/homePetsListComponent';
import Triggers from '../triggers/triggers';



export default function HomePage() {

  return (
      <>
        <HeroHome/>
        <Triggers/>
        <AboutShelderComponent/>
        <HelpComponent/>
        <BlogListComponent/>
        <HomePetsListComponent/>
        <ContactForm/>
      </>
  )
}