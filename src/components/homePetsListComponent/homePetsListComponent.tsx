import React from 'react';
import PetsData from '../../fakeData/petsData.json';
import './homePetsListComponent.scss';
import PetsCard from './homePetsListComponentCard';


export default function HomePetsListComponent() {

  return (
    <div className="homePetsComponent">
        <div className="container">
            <div className="homePetsComponent__content">
                <div className="homePetsComponent__title">
                    <h2>Наші хвостики</h2>
                </div>
                <div className="homePetsComponent__list">
                    {PetsData.pets.map((card:any, index:number) =>(
                            <PetsCard
                                key={index}
                                name={card.name}
                                age={card.age}
                                sex={card.sex}
                                size={card.size}
                                type={card.type}
                            />
                    ))}
                </div>
                <div className="homePetsComponent__action">
                    <button className="homePetsComponent__button">
                        Читати більше
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}