import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Poll.css';

function Poll() {
  const [poll, setPoll] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4000/`).then((res) => {
      setPoll(res.data);
    });
  });

  return (
    <div className='Poll'>
      <header>
        <h1 className='Title'>{poll.title}</h1>
        <p className='Description'>{poll.description}</p>
      </header>
      <main>
        <ul className='List'>
          {poll.options?.map((option) => (
            <li key={option}>
              <button>{option}</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Poll;
