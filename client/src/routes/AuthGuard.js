
import React from 'react';
import { Navigate } from 'react-router-dom';
import { isValidToken } from '../Helper/jwt';

const AuthGuard = ({children}) => {
    const accessToken = localStorage.getItem('accessToken');
  

    if(!accessToken || !isValidToken(accessToken)) {
       return <Navigate to="/login"/>
    }

    return <>{children}</>;
};

export default AuthGuard