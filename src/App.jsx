import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Poll from './components/Poll/Poll';
import PollCreate from './components/Poll/PollCreate';
import SignUp from './components/Login/SignUp';
import SignIn from './components/Login/SignIn';
import Home from './components/Home';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState(undefined);
    
  useEffect(() => {
      setUsername(Cookies.get('username'));
  });
  
  const handleLogout = () => {
    Cookies.remove('username');
    Cookies.remove('token');
    
    navigate('/', { replace: true });
  };

  return (
    <div className='App'>
      {username &&
        <p className='Username'>Welcome {username}</p>
      }
      <div className='Menu'>
        {location.pathname !== '/' &&
          <Link to='/' className='Button PrimaryButton'>Home</Link>
        }
        {username &&
          <button className='Button PrimaryButton ml-1' type="button" onClick={handleLogout}>Logout</button>
        }
      </div>
      <div className='Content'>
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/p/:id' element={<Poll />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='*' element={<NotFound />} />

          <Route element={<PrivateRoute />}>
            <Route path="/create-poll" element={<PollCreate />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
