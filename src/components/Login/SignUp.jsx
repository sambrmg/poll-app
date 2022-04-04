import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../config';

function SignUp(props) {
  const clientApi = axios.create({ baseURL });
  const { handleAlert } = props;
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    repassword: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value.trim() }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (
      inputs?.username === '' ||
      inputs?.password === '' ||
      inputs?.repassword === ''
    ) {
      setError('Please fill all fields!');
      return;
    }

    if (inputs.password !== inputs.repassword) {
      setError('Your password and confirmation password do not match.');
      return;
    }

    clientApi
      .post('/user', inputs)
      .then(function (response) {
        if (response.data?.created === true) {
          handleAlert('User created!');
          navigate('/sign-in', { replace: true });
        } else {
          handleAlert(response.data.message, 'error');
        }
      })
      .catch(function (error) {
        handleAlert(error.message, 'error');
      });
  };

  return (
    <div className='SignUp'>
      <form onSubmit={handleSubmit} method='POST'>
        <label htmlFor='username' className='FormLabel'>
          Username
        </label>
        <input
          type='text'
          id='username'
          aria-label='username'
          name='username'
          className='FormControl'
          onChange={handleChange}
        />

        <label htmlFor='password' className='FormLabel'>
          Password
        </label>
        <input
          type='password'
          id='password'
          aria-label='password'
          name='password'
          className='FormControl'
          onChange={handleChange}
        />

        <label htmlFor='repassword' className='FormLabel'>
          Re-enter Password
        </label>
        <input
          type='password'
          id='repassword'
          name='repassword'
          aria-label='re-password'
          className='FormControl'
          onChange={handleChange}
        />

        <button className='Button PrimaryButton mt-2' type='submit'>
          Sign Up
        </button>
      </form>
      <p className='form-error'>{error}</p>
    </div>
  );
}

export default SignUp;
