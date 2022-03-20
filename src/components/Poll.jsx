import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../config';
import './Poll.css';

const clientApi = axios.create({ baseURL });

export function PollList(props) {
  const options = props.options;
  const listItems = options.map((item) =>
    <li key={item.toString()}>
      <button>{item}</button>
    </li>
  );
  return (
    <ul className='List'>{listItems}</ul>
  );
}

function Poll() {
  const [pollTitle, setTitle] = useState('');
  const [pollDescription, setDescription] = useState('');
  const [pollOptions, setOptions] = useState([]);

  
  useEffect(() => {
    fetchPoll();
  }, []);

  const fetchPoll = async () => {
    clientApi.get(`/sY34kg`).then((res) => {
      setTitle(res.data.title);
      setDescription(res.data.description);
      setOptions(res.data.options);
    });
  }

  return (
    <div className='Poll'>
      <header>
        <h1 className='Title'>{pollTitle}</h1>
        <p className='Description'>{pollDescription}</p>
      </header>
      <main>
        <PollList options={pollOptions}/>
      </main>
    </div>
  );
}

export default Poll;
