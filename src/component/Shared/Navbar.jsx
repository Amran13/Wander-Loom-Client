import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigationLink = <>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-violet-500 font-bold underline mx-4' : 'mx-4'}>Home</NavLink>
        <NavLink to="/all-tourist-spot" className={({ isActive }) => isActive ? 'text-violet-500 font-bold mx-4 underline' : 'mx-4'}>All Tourist Spot</NavLink>
        <NavLink to="/add-tourist-spot" className={({ isActive }) => isActive ? 'text-violet-500 orange font-bold mx-4 underline' : 'mx-4'}>Add Tourist Spot</NavLink>
        <NavLink to="/my-list" className={({ isActive }) => isActive ? 'text-violet-500 font-bold underline mx-4' : 'mx-4'}>My List</NavLink>
        {
            user ? '' : <>
                <NavLink to="/login" className={({ isActive }) => isActive ? 'text-violet-500 font-bold underline mx-4' : 'mx-4'}> Login </NavLink>
                <NavLink to="/register" className={({ isActive }) => isActive ? 'text-violet-500 font-bold underline mx-4' : 'mx-4'}>Register</NavLink>
            </>
        }
    </>

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(res => {
                        console.log('inside logOut', res)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
            }
        });
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navigationLink}
                    </ul>
                </div>
                <Link className='text-3xl font-bold' to="/">WanderLoom</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navigationLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex justify-center items-center gap-4'>
                     <FaUserCircle className='w-8 hover:cursor-pointer h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' />
                        <button onClick={handleLogOut} className='btn'>LogOut</button>
                    </div> :
                        <Link to="/login" className='btn'>Login</Link>
                }


            </div>
        </div>
    );
};

export default Navbar;