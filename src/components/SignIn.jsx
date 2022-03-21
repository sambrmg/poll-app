import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../config';
import Cookies from 'js-cookie';
import './SignIn.css';

const clientApi = axios.create({ baseURL });

function SignIn() {
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
          Cookies.set('token', response.data['x-access-token'], { expires: 7, path: '' });
          navigate('/', { replace: true });
      }).catch(function (error) {
        setError(error.response.data.message)
      });
    }
    return (
        <div className='SignIn'>
          <form onSubmit={handleSubmit} method='POST'>
            <label htmlFor='username' className='FormLabel'>Username</label>
            <input type='text' id='username'
              name='username' className='FormInput'
              onChange={handleChange}/>
    
            <label htmlFor='password' className='FormLabel'>Password</label>
            <input type='password' id='password'
              name='password' className='FormInput'
              onChange={handleChange}/>
    
            <button className='PrimaryButton mt-20' type="submit">Sign In</button>
          </form>
          <p className='form-error'>{error}</p>
        </div>
      );
}

export default SignIn;
