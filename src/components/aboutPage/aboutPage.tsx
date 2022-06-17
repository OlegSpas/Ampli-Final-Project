import AdoptConditions from '../adoptConditions/adoptConditions';
import AboutShelderComponent from '../homeAboutShelderComponent/aboutShelderComponent';
import TeamComponent from '../teamComponent/teamComponent';
import Triggers from '../triggers/triggers';
import BlogListComponent from '../blogListComponent/blogListComponent';
import GoogleMapComponent from '../googleMapComponent/googleMapComponent';
import FeedbackComponent from '../feedbackComponent/feedbackComponent';


interface IProps{
  team: ITeam[];
  blogs: IBlogs[];
}

export default function AboutPage(props: IProps) {

  return (
      <>
        <div className='spaceBlock'></div>
        <AboutShelderComponent/>
        <Triggers/>
        <AdoptConditions/>
        <TeamComponent team={props.team}/>
        <FeedbackComponent/>
        <GoogleMapComponent/>
        <BlogListComponent blogs={props.blogs}/>
      </>
  )
}