
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isValidToken } from '../Helper/jwt';

const GuessGuard = ({children}) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken && isValidToken(accessToken)) { 
        return <Navigate to={'/admin'} />;
    }

    return <>{children}</>;
};

export default GuessGuard