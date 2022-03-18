import React, { useEffect, useState } from 'react';
import './User.css';

function User() {
  return (
    <div className='User'>
      <form action='' method='POST'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password' />

        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default User;
