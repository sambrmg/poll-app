import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseURL, cookieConfig } from '../../config';
import Cookies from 'js-cookie';

function SignIn(props) {
    const clientApi = axios.create({ baseURL });
    const { handleAlert } = props;
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value.trim()}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        if(inputs?.username === ''
        || inputs?.password === '') {
            setError('Please fill all fields!')
            return;
        }    

    clientApi.post('/user/login', inputs)
      .then(function (response) {
          Cookies.set('token', response.data['x-access-token'], cookieConfig);
          Cookies.set('username', response.data['username'], cookieConfig);
          navigate('/', { replace: true });
      }).catch(function (error) {
        handleAlert(error.response.data.message, 'error');
      });
    }
    return (
        <div className='SignIn'>
          <form onSubmit={handleSubmit} method='POST'>
            <label htmlFor='username' className='FormLabel'>Username</label>
            <input type='text' id='username'
              name='username' className='FormControl'
              onChange={handleChange}/>
    
            <label htmlFor='password' className='FormLabel'>Password</label>
            <input type='password' id='password'
              name='password' className='FormControl'
              onChange={handleChange}/>
    
            <button className='Button PrimaryButton mt-2' type="submit">Sign In</button>
          </form>
          <p className='form-error'>{error}</p>
        </div>
      );
}

export default SignIn;
