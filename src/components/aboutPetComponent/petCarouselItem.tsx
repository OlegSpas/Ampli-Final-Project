import "react-multi-carousel/lib/styles.css";

interface IProps{
    image: IImage;
    setCurrentImage: (value:any) => void;
    setActive: () => void;
    isActive: boolean;
    
}

export default function PetCarouselItem(props:IProps) {

    const handleSetCurrentImage = () =>{
        props.setCurrentImage(props.image.url);
        props.setActive();
    }


  return (
    <>
        <img src={props.image.url} alt="adopt pet"  className={`petCarousel__img ${props.isActive ? 'active' : ''}`} onClick={handleSetCurrentImage}/>
    </>
  )
}