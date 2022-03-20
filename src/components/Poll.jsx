import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../config';
import './Poll.css';
import PollList from './PollList';
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

const clientApi = axios.create({ baseURL });

function Poll() {
  const [pollTitle, setTitle] = useState('');
  const [pollDescription, setDescription] = useState('');
  const [pollOptions, setOptions] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchPoll();
  }, []);

  const fetchPoll = async () => {
    clientApi.get(`/${id}`).then((res) => {
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
