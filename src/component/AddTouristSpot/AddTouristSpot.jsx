import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTouristSpot = () => {
    const navigate = useNavigate()
    const handleAddTouristSpot = (e) => {
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

        const newTouristSpot = { userName, userEmail, touristSpot, country, avarageCost, seasonality, travelTime, totalVisitors, image, location, description }
        
        fetch(`http://localhost:5000/add-tourist-spot`, {
            method : "POST", 
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(newTouristSpot)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                //   navigate('/my-list')
                
            }
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="lg:text-5xl text-3xl font-bold"> Add Your Tourist Place </h1>
                    <p className="lg:py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 lg:w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddTouristSpot} className="card-body">
                        <div className='flex md:flex-row flex-col w-full md:gap-6'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='userName' placeholder="Type your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">User Email</span>
                                </label>
                                <input type="text" name='userEmail' placeholder="Type your email" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className='flex w-full md:flex-row flex-col md:gap-6'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Tourist Spot</span>
                                </label>
                                <input type="text" name='touristSpot' placeholder="Spot Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Country</span>
                                </label>
                                <input type="text" placeholder="Country Name" name='country' className="input input-bordered" required />
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col w-full md:gap-6'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Avarage Cost</span>
                                </label>
                                <input type="text" placeholder="Cost" name='avarageCost' className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Seasonality</span>
                                </label>
                                <input type="text" placeholder="Summer / Winter" name='seasonality' className="input input-bordered" required />
                            </div>
                        </div>

                        <div className='flex md:flex-row flex-col w-full md:gap-6'>
                            <div className="form-control md:w-1/2 w-full">
                                <label className="label">
                                    <span className="label-text">Travel Time</span>
                                </label>
                                <input type="text" placeholder="How much time it takes?" name='travelTime' className="input input-bordered" required />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Total Visitors</span>
                                </label>
                                <input type="text" placeholder="How much visitors visit per year?" name='totalVisitors' className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="Tourist Spot Image" name='image' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="Location" name='location' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='description' placeholder='Type a short description' className='p-2 border-2 rounded-lg' id="" cols="30" rows="4"></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTouristSpot;