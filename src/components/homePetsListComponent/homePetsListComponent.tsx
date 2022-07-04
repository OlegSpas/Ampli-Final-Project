import React from 'react';
import { Link } from 'react-router-dom';
import { ADOPTION } from '../../route/Routes';
import './homePetsListComponent.scss';
import PetsCard from './homePetsListComponentCard';



interface IProps{
    pets:IPet[];
}

export default function HomePetsListComponent(props: IProps) {

  return (
    <div className="homePetsComponent">
        <div className="container">
            <div className="homePetsComponent__content">
                <div className="homePetsComponent__title">
                    <h2>Наші хвостики</h2>
                </div>
                <div className="homePetsComponent__list">
                    {props.pets.slice(0,6).map((pet:any, index:number) =>(
                        <PetsCard key={index} pet={pet}/>
                    ))}
                </div>
                <div className="homePetsComponent__action">
                    <Link to={ADOPTION} className="homePetsComponent__button">
                        Читати більше
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}