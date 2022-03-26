import React, { useEffect, useState } from 'react';

function PollCreate() {
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

        if(options.length < 2) {
            setError('Please add two or more options!')
            return;
        }
        const optionsFilled = options.filter( item => item.value.trim() !== '');
        console.log(optionsFilled);
    };

    const Option = () => 
      options.map((item, index) => 
        <div key={index}>
          <label className='FormLabel'>Option {index+1}</label>
          <input name={`option${index}`} className='FormControl'
            onChange={event => { 
              item.value = event.target.value 
            }}  />
        </div>
      )
    
    
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
            
            <Option />

            <button className='PrimaryButton mt-20' type="button" 
              onClick={handleOption}>Add option</button>
            <button className='PrimaryButton mt-20' type="submit">Create poll</button>
          </form>
          <p className='form-error'>{error}</p>
        </div>
    );
}

export default PollCreate;