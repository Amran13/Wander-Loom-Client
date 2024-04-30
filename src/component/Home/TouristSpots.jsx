import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/Image/photo-1589193302643-3ee67ac58fc7.avif'
import SectionHeading from '../Shared/SectionHeading';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    touristSpots.map(spot => <div key={spot._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {spot.tourist_spot_name} </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <Link to={`/tourist-spots/${spot._id}`}>
                                    <button className="btn btn-primary">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TouristSpots;