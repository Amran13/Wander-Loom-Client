import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionHeading from '../Shared/SectionHeading';

const TouristSpotsDetails = () => {
    const { tourist_spot_name, img, country_name, location, short_description, average_cost, seasonality, description } = useLoaderData()
    return (
        <div>
            <SectionHeading heading={`Details of ${tourist_spot_name}`} text={`${location}, ${country_name}`}></SectionHeading>
            <div className=''>
                <img className=' mx-auto' src={img} alt="" />
            </div>
            <div className='my-8 space-y-4 p-4'>
                <h2 className='text-4xl font-bold'> {tourist_spot_name} </h2>
                <p> {location} </p>
                <div>
                    <h3 className='font-bold'>Addtional Info</h3>
                    <p> <span className='font-medium'>Avarage Cost :</span>  {average_cost} </p>
                    <p> <span  className='font-medium'> Best Season To Travel : </span>  {seasonality} </p>
                    <p> <span className='font-medium'>Country Name :</span>  {country_name} </p>
                </div>
                <p> <span className='font-semibold'>Descriptions :</span> {description} </p>
            </div>
        </div>
    );
};

export default TouristSpotsDetails;