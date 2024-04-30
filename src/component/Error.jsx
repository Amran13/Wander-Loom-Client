import React from 'react';
import img from '../assets/Image/undraw_Page_not_found_re_e9o6.png'

const Error = () => {
    return (
        <div>
            <img className='w-2/3 mx-auto' src={img} alt="not-found" />
            <h2 className='text-center font-bold text-3xl'>Something Went Wrong!</h2>
        </div>
    );
};

export default Error;