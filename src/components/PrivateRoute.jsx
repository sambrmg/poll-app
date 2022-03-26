import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

function PrivateRoute({
    redirectPath = '/sign-in'
  }) {
    if (!Cookies.get('token')) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return <Outlet />;
}

export default PrivateRoute;