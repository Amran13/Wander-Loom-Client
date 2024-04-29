import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllTouristSpot = () => {
    const spots = useLoaderData()
    console.log(spots)
    return (
        <div>
            <div className='grid grid-cols-3'>
                {
                    spots.map(spot => <div key={spot._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={spot.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {spot.touristSpot} </h2>
                            <p> {spot.location} </p>
                            <div className="card-actions justify-end">
                                <Link to={`/all-tourist-spot/${spot._id}`}>
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

export default AllTouristSpot;