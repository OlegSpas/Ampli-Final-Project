import React from 'react';
import Carousel from "react-multi-carousel";
import PetCarouselItem from './petCarouselItem';


interface IProps{
    images:IImage[];
}

export default function ImagePetBlog(props:IProps) {
    const firstImage = props.images[0].url

    const [ currentImage, setCurrentImage ] = React.useState(firstImage);
    const [isActiveButtons, setActiveButtons] = React.useState(props.images.map( (_,index) => index === 0 ? true : false));
   
    React.useEffect(() => {
        setCurrentImage(firstImage);
    },[firstImage])  

    const setActive = (index:number) => {
        const activeButtons = props.images.map( () => false);
        activeButtons[index] = true;
        setActiveButtons(activeButtons)
      }


  return (
    <div className='petPage__ImageBlock'>
        <img src={currentImage} alt='adopt dog' className='petPage__currentPage'/>
        <Carousel
            arrows={false}
            autoPlay={false}
            centerMode={false} // Чи показувати частинки попередніх\наступних карток
            className="petPage__carousel"
            containerClass="container-with-dots" // додатковий клас
            dotListClass="" // cтилізація списку точок
            draggable={false} // чи можна скролити на ПК
            infinite
            itemClass="petImage__card"
            keyBoardControl={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1200
                },
                items: 3,
                partialVisibilityGutter: 40
                },
                mobile: {
                breakpoint: {
                    max: 375,
                    min: 0
                },
                items: 2,
                partialVisibilityGutter: 40
                },
                tablet: {
                breakpoint: {
                    max: 1199,
                    min: 376
                },
                items: 3,
                partialVisibilityGutter: 40
                }
            }}
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
                {props.images.map((image, index) => (
                    <PetCarouselItem setActive={() => setActive(index)} image={image} isActive={isActiveButtons[index]} key={index} setCurrentImage={setCurrentImage}/>
                ))}
        </Carousel>
    </div>
  )
}