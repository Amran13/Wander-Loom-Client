import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import img from '../../assets/Image/undraw_Add_tasks_re_s5yj.png'

const AllTouristSpot = () => {
    const spots = useLoaderData()
    console.log(spots)
    return (
        <div>
            {
                spots.length ? <div className='text-center font-bold text-3xl'>You have selected <span className='text-4xl text-violet-500'>{spots.length}</span> spot </div>
                    : <div className='mb-12'>
                        <img className='w-4/5 mx-auto' src={img} alt="" />
                        <div className='text-center font-bold text-3xl'>Please Select Some Spot  </div>
                        <div className='text-lg text-violet-800 text-center hover:font-medium hover:underline '><Link to="/add-tourist-spot">Add Tourist Spot</Link></div>
                    </div>
            }
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