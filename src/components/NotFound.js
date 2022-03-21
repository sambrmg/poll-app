import { Link } from 'react-router-dom';
import React from 'react';
import './NotFound.css';

function NotFound() {
    return (
        <div className='NotFound'>
            <h1>404</h1>
            <h2>Not Found</h2>
            <Link to='/' className='PrimaryButton mt-20'>Home</Link>
        </div>
    )
}

export default NotFound;