import axios from 'axios';
import React, { useState } from 'react';
import { baseURL } from '../config';
import './User.css';

const clientApi = axios.create({ baseURL });

function User() {
  const [error, setError] = useState('');
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    repassword: ''
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
      || inputs?.password === ''
      || inputs?.repassword === '') {

      setError('Please fill all fields!')
      return;
    }    

    if(inputs.password !== inputs.repassword) {
      setError('Your password and confirmation password do not match.');
      return;
    }

    clientApi.post('/user', inputs).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className='User'>
      <form onSubmit={handleSubmit} method='POST'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' 
          onChange={handleChange}/>

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password'
          onChange={handleChange}/>
        
        <label htmlFor='repassword'>Re-enter Password</label>
        <input type='password' id='repassword' name='repassword'
          onChange={handleChange} />

        <button type="submit">Sign Up</button>
      </form>
      <p className='form-error'>{error}</p>
    </div>
  );
}

export default User;
