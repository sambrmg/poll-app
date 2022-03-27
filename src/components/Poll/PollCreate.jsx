import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../../config';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function PollCreate() {
  const navigate = useNavigate();
  const clientApi = axios.create({ 
    baseURL,
    headers: {
      'Authorization': Cookies.get('token')
    }
  });

  const [error, setError] = useState('');
  const [inputs, setInputs] = useState({
      title: '',
      description: ''
  });
  const [options, setOptions] = useState([]);

  useEffect(() => {
      
  }, []);

  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value.trim()}));

  };

  const handleSubmit = (event) => {
      event.preventDefault();
      setError('');

      if(inputs?.title === ''
      || inputs?.description === '') {
          setError('Please fill all fields!')
          return;
      }

      const optionsFilled = options.filter( item => item.value.trim() !== '');

      if(optionsFilled.length < 2) {
          setError('Please add two or more options!')
          return;
      }

      clientApi.post('/', { ...inputs, optionsFilled }).then(function (response) {
        navigate(`/p/${response.data.pollCode}`, { replace: true });
      }).catch(function (error) {
        setError(error.message)
      });

  };

  const handleOption = () => setOptions([...options, { value : '' }]);

  return (
      <div className='PollCreate'>
        <form onSubmit={handleSubmit} method='POST'>
          <label htmlFor='title' className='FormLabel'>Title</label>
          <input type='text' id='title'
            name='title' className='FormControl'
            onChange={handleChange}/>

          <label htmlFor='description' className='FormLabel'>Description</label>
          <textarea name="description" id="description"
            className='FormControl FormTextarea' onChange={handleChange}></textarea>
          
          {options.map((item, index) => 
            <div key={index}>
              <label className='FormLabel'>Option {index+1}</label> 
              <input name={`option${index}`} className='FormControl'
                onChange={event => { 
                  item.value = event.target.value 
                }} />
            </div>
          )}

          <button className='Button SecondaryButton mt-2' type="button" 
            onClick={handleOption}>Add option</button>
          <button className='Button PrimaryButton mt-2' type="submit">Create poll</button>
        </form>
        <p className='form-error'>{error}</p>
      </div>
  );
}

export default PollCreate;