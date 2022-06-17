import './heroHome.scss'
import HeroImage from '../../images/heroHomeImg.png'
import { ADOPTION } from '../../route/Routes'
import { Link } from 'react-router-dom'

 export default function HeroHome() {

  return (
    <main className='heroMain'>
        <div className="container">
            <div className="heroContent">
                <div className="heroOfferConstruction">
                    <h1 className='heroOfferConstruction__title'>Твій друг поруч</h1>
                    <p className='heroOfferConstruction__subTitle'>Дім — там, де на тебе чекають. Хвостик радітиме твоєму поверненню завжди</p>
                    <Link to={ADOPTION} className='heroOfferConstruction__button'>
                        Знайти друга
                    </Link>
                </div>
                <div className="heroImage">
                    <img className='heroImage__img' src={HeroImage} alt="dogs" />
                </div>
            </div>
        </div>
    </main>
  )
}
