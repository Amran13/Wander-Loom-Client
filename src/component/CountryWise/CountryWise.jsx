import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from '../../assets/Image/photo-1634985492349-8589a9255cbe.avif'
import SectionHeading from '../Shared/SectionHeading';
const CountryWise = () => {
    const countrySpots = useLoaderData()
    console.log(countrySpots.spots)
    return (
        <div>
            <SectionHeading heading={`Spots of ${countrySpots.country_name}`} text={`There are ${countrySpots.spots.length} spots you can visit`}></SectionHeading>
            <div className='grid grid-cols-3 gap-6 my-12'>
                {
                    countrySpots.spots.map(spot => <div key={countrySpots.spots.indexOf(spot)} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> {spot.tourist_spot_name} </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        {/* <div className="card-actions justify-end">
                            <Link to={`/tourist-spots/${spot._id}`}>
                                <button className="btn btn-primary">View Details</button>
                            </Link>
                        </div> */}
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default CountryWise;