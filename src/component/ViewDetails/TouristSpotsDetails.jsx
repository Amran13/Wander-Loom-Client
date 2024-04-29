import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TouristSpotsDetails = () => {
    const { tourist_spot_name, img, country_name, location, short_description, average_cost, seasonality, description } = useLoaderData()
    return (
        <div>
            <img src={img} alt="" />
            <h2 className='text-4xl font-bold'> {tourist_spot_name} </h2>
            <h3 className='text-2xl'> {country_name} </h3>
            <p> {location} </p>
            <p> {short_description} </p>
            <div>
                <h3>Addtional Info</h3>
                <p> {average_cost} </p>
                <p> {seasonality} </p>
            </div>
            <p> {description} </p>
        </div>
    );
};

export default TouristSpotsDetails;