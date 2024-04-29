import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AddedSpotsDetails = () => {
    const { userName, userEmail, touristSpot, country, avarageCost, seasonality, travelTime, totalVisitors, image, location, description } =  useLoaderData();
    return (
        <div>
            <img src={image} alt="" />
            <h2 className='text-4xl font-bold'> {touristSpot} </h2>
            <h3 className='text-2xl'> {country} </h3>
            <p> {location} </p>
            {/* <p> {short_description} </p> */}
            <div>
                <h3>Addtional Info</h3>
                <p> {avarageCost} </p>
                <p> {seasonality} </p>
                <p> {travelTime} </p>
                <p> {totalVisitors} </p>
            </div>
            <p> {description} </p>
        </div>
    );
};

export default AddedSpotsDetails;