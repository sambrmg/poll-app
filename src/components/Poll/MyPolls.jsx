import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../../config';
import './MyPolls.css';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function MyPolls(props) {
    const { handleAlert } = props;
    const [pollList, setPollList] = useState([]);
    const clientApi = axios.create({ 
        baseURL,
        headers: {
          'Authorization': Cookies.get('token')
        }
      });

    useEffect(() => {
        clientApi.get(`/my-polls`)
            .then((res) => {
                setPollList(res.data);
            })
            .catch((err) => handleAlert('Some error occurred'));
        }, []);

    return (
        <div className='MyPolls'>
            <ul>
                {pollList.map((item, key) => {
                    return <li key={key}>
                        <Link to={`/p/${item.code}`}>{item.title}</Link>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default MyPolls;