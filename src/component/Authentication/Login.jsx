import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/Image/login.svg'
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Login = () => {
    const { loginUser, loginWithGoogle } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(res => {
                if (res.user) {
                    console.log('Inside Login', res.user)
                    Swal.fire({
                        title: "Logged In",
                        text: "This item has already added to the cart!",
                        icon: "success"
                    });
                    // navigate(`${location?.state ? location.state : '/order'}`)
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
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
        .then(res => {
            if(res.user){
                Swal.fire({
                    title: "Logged In",
                    text: "This item has already added to the cart!",
                    icon: "success"
                });
            }
        })
        .catch(err => console.error(err))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-24">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
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
                            <button className="btn">Login</button>
                        </div>
                        <span className='mt-4'>New to WanderLoom? <Link className='orange' to="/register">REGISTER</Link> </span>
                        <div>
                            <p className='text-center my-4 text-gray-600'>Or Login With</p>
                            <div className='flex justify-center space-x-3'>
                                <div onClick={handleLoginWithGoogle} className='btn'>
                                    <FaGoogle className='text-3xl rounded' />
                                </div>
                                <div className='btn'>
                                    <FaGithub className='text-3xl rounded' />
                                </div>
                                <div className='btn'>
                                    <FaGoogle className='text-3xl rounded' />
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;