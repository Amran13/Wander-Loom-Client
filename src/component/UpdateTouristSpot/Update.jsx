import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const spot = useLoaderData()
    console.log(spot)
    const { averageCost,
        country,
        description,
        image,
        location,
        seasonality,
        totalVisitors,
        touristSpot,
        travelTime,
        userEmail,
        userName,
        _id } = spot;
    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const touristSpot = form.touristSpot.value;
        const country = form.country.value;
        const avarageCost = form.avarageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const image = form.image.value;
        const location = form.location.value;
        const description = form.description.value;

        const updatedTouristSpot = { userName, userEmail, touristSpot, country, avarageCost, seasonality, travelTime, totalVisitors, image, location, description }
        fetch(`http://localhost:5000/add-tourist-spot/${_id}`, {
            method : 'PUT',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(updatedTouristSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="lg:text-5xl text-3xl font-bold"> Update Place </h1>
                </div>
                <div className="card shrink-0 lg:w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className='flex md:flex-row flex-col w-full md:gap-6'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" defaultValue={userName} name='userName' placeholder="Type your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" defaultValue={userEmail} name='userEmail' placeholder="Type your email" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className='flex w-full md:flex-row flex-col md:gap-6'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Tourist Spot</span>
                                </label>
                                <input type="text" name='touristSpot' defaultValue={touristSpot} placeholder="Spot Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input type="text" placeholder="Country Name" defaultValue={country} name='country' className="input input-bordered" required />
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col w-full md:gap-6'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Avarage Cost</span>
                                </label>
                                <input type="text" placeholder="Cost" defaultValue={averageCost} name='avarageCost' className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Seasonality</span>
                                </label>
                                <input type="text" placeholder="Summer / Winter" defaultValue={seasonality} name='seasonality' className="input input-bordered" required />
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col w-full md:gap-6'>
                            <div className="form-control md:w-1/2 w-full">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <input type="text" defaultValue={travelTime} placeholder="How much time it takes?" name='travelTime' className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Total Visitors</span>
                                </label>
                                <input type="text" defaultValue={totalVisitors} placeholder="How much visitors visit per year?" name='totalVisitors' className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" defaultValue={image} placeholder="Tourist Spot Image" name='image' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" defaultValue={location} placeholder="Location" name='location' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' defaultValue={description} placeholder='Type a short description' className='p-2 border-2 rounded-lg' id="" cols="30" rows="4"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;