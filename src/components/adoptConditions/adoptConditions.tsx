import React from 'react';
import Carousel from "react-multi-carousel";
import AdoptConditionsData from '../../fakeData/adoptConditionsData.json';
import ConditionsCard from './conditionsCard';
import './adoptConditions.scss';
import "react-multi-carousel/lib/styles.css";


export default function AdoptConditions() {

  return (

    <section className='adoptConditions'>
        <div className="container">
            <div className="adoptConditions__content">
                <div className="adoptConditions__title">
                    <h2>Умови адопції тварин</h2>
                </div>
                <div className="adoptCondition__topContent">
                    <div className="adoptConditions__main">
                        <Carousel
                            // additionalTransfrom={0}
                            arrows
                            autoPlay
                            autoPlaySpeed={5000000}
                            centerMode={false} // Чи показувати частинки попередніх\наступних карток
                            className="adopt__carousel"
                            containerClass="container-with-dots" // додатковий клас
                            dotListClass="" // cтилізація списку точок
                            draggable={true} // чи можна скролити на ПК
                            focusOnSelect={false} // при кліку зробити слайд поточним
                            infinite
                            itemClass="condition__card"
                            keyBoardControl
                            minimumTouchDrag={80} // скільки треба проскролити
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                                },
                                mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                                },
                                tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                                }
                            }}
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            >
                                {AdoptConditionsData.conditions.map((item, index) => (
                                    <ConditionsCard key={index} {...item}/>
                                ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}