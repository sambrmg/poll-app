import React, { useEffect, useState } from 'react';

function PollCreate() {
    const [error, setError] = useState('');
    const [inputs, setInputs] = useState({
        title: '',
    });
    useEffect(() => {
        
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value.trim()}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='PollCreate'>
          <form onSubmit={handleSubmit} method='POST'>
            <label htmlFor='title' className='FormLabel'>Title</label>
            <input type='text' id='title'
              name='title' className='FormInput'
              onChange={handleChange}/>
    
            <button className='PrimaryButton mt-20' type="submit">Create poll</button>
          </form>
          <p className='form-error'>{error}</p>
        </div>
    );
}

export default PollCreate;