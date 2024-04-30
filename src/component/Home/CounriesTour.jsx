import React, { useEffect, useState } from 'react';
import img from '../../assets/Image/photo-1634985492349-8589a9255cbe.avif'
import SectionHeading from '../Shared/SectionHeading';
import { Link } from 'react-router-dom';

const CounriesTour = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/countries-tour')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const heading = `Travel Around Europe`
    const text = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, facilis.`
    return (
        <div className='mb-24'>
            <SectionHeading heading={heading} text={text} ></SectionHeading>
            <div className='grid grid-cols-3 gap-6'>
                {
                    countries.map(country => <div key={country._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title"> {country.country_name} </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <Link to={`/countries-tour/${country._id}`}><button className="btn btn-primary">View Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CounriesTour;