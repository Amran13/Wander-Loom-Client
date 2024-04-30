import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionHeading from '../Shared/SectionHeading';


const AddedSpotsDetails = () => {
    const { userName, userEmail, touristSpot, country, avarageCost, seasonality, travelTime, totalVisitors, image, location, description } = useLoaderData();
    return (
        <div>
            <SectionHeading heading={`Details of ${touristSpot}`} text={location}></SectionHeading>
            <div className=''>
                <img className=' mx-auto' src={image} alt="" />
            </div>
            <div className='my-8 space-y-4 p-4'>
                <h2 className='text-4xl font-bold'> {touristSpot} </h2>
                <p> {location} </p>
                <div>
                    <h3 className='font-bold'>Addtional Info</h3>
                    <p> <span className='font-medium'>Avarage Cost :</span>  {avarageCost} </p>
                    <p> <span  className='font-medium'> Best Season To Travel : </span>  {seasonality} </p>
                    <p> <span className='font-medium'>Travel Time :</span>  {travelTime} </p>
                    <p> <span className='font-medium'>Total Visitors :</span> {totalVisitors} </p>
                </div>
                <p> <span className='font-semibold'>Descriptions :</span> {description} </p>
            </div>
        </div>
    );
};

export default AddedSpotsDetails;