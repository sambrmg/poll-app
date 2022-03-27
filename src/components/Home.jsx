import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='Home'>
            <Link to='/create-poll' className='Button PrimaryButton mb-20'>Create a new poll</Link>
            <Link to='/sign-up' className='Button PrimaryButton mb-20'>Sign Up</Link>
            <Link to='/sign-in' className='Button PrimaryButton'>Sign In</Link>
        </div>
    );
}

export default Home;