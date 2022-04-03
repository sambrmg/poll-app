import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);
    
    useEffect(() => {
        setIsLoggedIn(Cookies.get('token'));
    });

    return (
        <div className='Home'>
            {!isLoggedIn && 
                <Link to='/sign-up' className='Button PrimaryButton mb-2'>Sign Up</Link>
            }

            {!isLoggedIn && 
                <Link to='/sign-in' className='Button PrimaryButton'>Sign In</Link>
            }

            {isLoggedIn && 
                <Link to='/create-poll' className='Button PrimaryButton mb-2'>Create a new poll</Link>
            }

            {isLoggedIn && 
                <Link to='/my-polls' className='Button PrimaryButton'>My Polls</Link>
            }
        </div>
    );
}

export default Home;