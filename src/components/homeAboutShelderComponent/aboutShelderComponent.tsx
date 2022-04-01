import React from 'react';
import ShelderPhoto from '../../images/shelder.png'
import './aboutShelder.scss'



export default function AboutShelderComponent() {

  return (
    <div className="AboutShelder">
        <div className="container">
            <div className="aboutShelder__Content">
                <div className="aboutShelder__image">
                    <img src={ShelderPhoto} alt="Our Shelder" />
                </div>
                <div className="aboutShelder__content">
                    <h2>Про притулок</h2>
                    <p>mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis </p>
                    <p>dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras </p>
                    <button >
                        Читати більше
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}