import React, { useEffect, useState } from 'react';
import img from '../../assets/Image/photo-1589193302643-3ee67ac58fc7.avif'
import SectionHeading from '../Shared/SectionHeading';

const TouristSpots = () => {
    const [touristSpots, setTouristSpots] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/tourist-spots')
            .then(res => res.json())
            .then(data => setTouristSpots(data))
    }, [])
    const heading = `Tourist Spots`
    const text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, facilis.`
    return (
        <div className='mb-24'>
            <SectionHeading heading={heading} text={text}></SectionHeading>
            <div className='grid grid-cols-3 gap-6'>
                {
                    touristSpots.map(spot => <div key={spot._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {spot.spot_name} </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;