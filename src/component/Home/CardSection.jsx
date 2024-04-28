import React, { useEffect, useState } from 'react';
import img from '../../assets/Image/compass.png'

const CardSection = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('Card.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-4 bg-orange-500 py-12 h-[450px] px-6 rounded-lg my-20'>
                {
                    cards.map(card => <div className="card transition ease-in-out hover:-translate-y-4 duration-200 bg-zinc-100 py-8 card-compact w-72 shadow-xl">
                        <figure><img className='w-20' src={img} alt="Shoes" /></figure>
                        <div className="card-body text-center">
                            <h2 className="card-title  mx-auto"> {card.title} </h2>
                            <p> {card.description} </p>
                            <p> {card.additional_info} </p>
                            
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CardSection;