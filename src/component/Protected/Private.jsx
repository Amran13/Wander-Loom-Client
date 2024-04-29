import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ( {children} ) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className='text-center text-2xl font-bold'>Loading...</div>
    }
    return (
        <div>
            {
                user ? children : <Navigate to="/login"></Navigate>
            }
        </div>
    );
};

export default Private;