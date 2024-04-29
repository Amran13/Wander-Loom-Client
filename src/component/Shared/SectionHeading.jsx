import React from 'react';

const SectionHeading = ({heading, text}) => {
    return (
        <div className='text-center space-y-4 mt-28 mb-8'>
            <h1 className='text-5xl font-bold text-violet-700'> {heading}  </h1>
            <p className='text-gray-500 text-xl font-medium'> {text} </p>
            <div className='w-60 mx-auto h-2 bg-violet-500 rounded-lg'>
            </div>
        </div>
    );
};

export default SectionHeading;