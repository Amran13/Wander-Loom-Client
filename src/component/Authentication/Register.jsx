import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/Image/login.svg'
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(res => {
                if (res.user) {
                    console.log('inside registed', res.user)
                    Swal.fire({
                        title: "Registered User!",
                        text: "This item has already added to the cart!",
                        icon: "success"
                    });
                }
            })
            .catch(err => {
                Swal.fire({
                    title: "Oops!",
                    text: err,
                    icon: "error"
                });
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <div className="w-1/2 lg:mr-24">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card shrink-0 md:w-1/2 max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn">Register</button>
                        </div>
                        <span className='mt-4'>Already have an account? <Link className='orange' to="/login">LOGIN</Link> </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;