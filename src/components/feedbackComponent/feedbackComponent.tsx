import React from 'react';
import Carousel from "react-multi-carousel";
import FeedbackData from '../../fakeData/feedbacks.json';
import FeedbackItem from './feedbackItem';
import './feedbackComponent.scss';
import "react-multi-carousel/lib/styles.css";


export default function FeedbackComponent() {

  return (

    <section className='Feedback'>
        <div className="container">
            <div className="feedback__content">
                <div className="feedback__title">
                    <h2>Про нас говорять</h2>
                </div>
                <div className="feedback__topContent">
                    <div className="feedback__main">
                        <Carousel
                            // additionalTransfrom={0}
                            arrows
                            autoPlay
                            autoPlaySpeed={10000}
                            centerMode={false} // Чи показувати частинки попередніх\наступних карток
                            className="feedback__carousel"
                            containerClass="container-with-dots" // додатковий клас
                            dotListClass="" // cтилізація списку точок
                            draggable={true} // чи можна скролити на ПК
                            focusOnSelect={false} // при кліку зробити слайд поточним
                            infinite
                            itemClass="feedback__card"
                            keyBoardControl
                            minimumTouchDrag={80} // скільки треба проскролити
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1200
                                },
                                items: 1,
                                partialVisibilityGutter: 40
                                },
                                mobile: {
                                breakpoint: {
                                    max: 375,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 40
                                },
                                tablet: {
                                breakpoint: {
                                    max: 1199,
                                    min: 376
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                                }
                            }}
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            >
                                {FeedbackData.feedbacks.map((item, index) => (
                                    <FeedbackItem key={index} {...item}/>
                                ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}