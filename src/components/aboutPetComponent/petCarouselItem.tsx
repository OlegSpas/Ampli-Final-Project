import "react-multi-carousel/lib/styles.css";
import './aboutPageComponent.scss';

interface IProps{
    image: {
        image:any
    };
    setCurrentImage: (value:any) => void;
    setActive: () => void;
    isActive: boolean;
    
}

export default function PetCarouselItem(props:IProps) {

    const handleSetCurrentImage = () =>{
        props.setCurrentImage(props.image.image);
        props.setActive();
    }


  return (
    <>
        <img src={props.image.image} alt="adopt pet"  className={`petCarousel__img ${props.isActive ? 'active' : ''}`} onClick={handleSetCurrentImage}/>
    </>
  )
}