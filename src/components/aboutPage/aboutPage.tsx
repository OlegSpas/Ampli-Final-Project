import AdoptConditions from '../adoptConditions/adoptConditions';
import AboutShelderComponent from '../homeAboutShelderComponent/aboutShelderComponent';
import TeamComponent from '../teamComponent/teamComponent';
import Triggers from '../triggers/triggers';
import BlogListComponent from '../blogListComponent/blogListComponent';
import GoogleMapComponent from '../googleMapComponent/googleMapComponent';
import FeedbackComponent from '../feedbackComponent/feedbackComponent';



export default function AboutPage() {

  return (
      <>
        <div className='spaceBlock'></div>
        <AboutShelderComponent/>
        <Triggers/>
        <AdoptConditions/>
        <TeamComponent/>
        <FeedbackComponent/>
        <GoogleMapComponent/>
        <BlogListComponent/>
      </>
  )
}