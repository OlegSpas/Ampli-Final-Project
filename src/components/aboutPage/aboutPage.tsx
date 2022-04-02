import AdoptConditions from '../adoptConditions/adoptConditions';
import AboutShelderComponent from '../homeAboutShelderComponent/aboutShelderComponent';
import TeamComponent from '../teamComponent/teamComponent';
import Triggers from '../triggers/triggers';
import BlogListComponent from '../blogListComponent/blogListComponent';



export default function AboutPage() {

  return (
      <>
        <AboutShelderComponent/>
        <Triggers/>
        <AdoptConditions/>
        <TeamComponent/>
        <BlogListComponent/>
      </>
  )
}