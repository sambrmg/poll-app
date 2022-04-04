import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../../config';
import './Poll.css';
import PollList from './PollList';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


function Poll() {
  const clientApi = axios.create({ 
    baseURL,
    headers: {
      'Authorization': Cookies.get('token')
    }
  });
  const [pollTitle, setTitle] = useState('');
  const [pollDescription, setDescription] = useState('');
  const [pollOptions, setOptions] = useState([]);
  const [sumAnswer, setSumAnswer] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    clientApi
      .get(`/p/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setOptions(res.data.options);
        setSumAnswer(res.data.sum);
      })
      .catch(() => navigate('/not-found', { replace: true }));
  }, []);

  return (
    <div className='Poll'>
      <header>
        <h1 className='Title'>{pollTitle}</h1>
        <p className='Description'>{pollDescription}</p>
      </header>
      <main>
        <PollList options={pollOptions} sumAnswer={sumAnswer}/>
      </main>
    </div>
  );
}

export default Poll;
