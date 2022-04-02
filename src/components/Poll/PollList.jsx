import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { baseURL } from '../../config';
import './PollList.css';

function PollList({ options }) {
    const [list, setList] = useState([]);
    const [voted, setVoted] = useState(false);

    useEffect(() => {
        setList(options.map(item => {
            return {
                selected: false,
                ...item
            }
        }))
    }, [options]);

    const clientApi = axios.create({ 
        baseURL
    });

    const handleVote = ( id, index ) => {
        clientApi.put('/', { id, voted }).then(function (response) {
            setList(list.map( (item, i) => {
                return {
                    ...item,
                    selected: (i === index) && !voted,
                }
            }));
            setVoted(!voted);
        });
    }

    const listItems = list.map((item, index) =>
        <li key={item.id.toString()}>
            <button onClick={() => handleVote(item.id, index)} disabled={!item.selected && voted}
                className={item.selected ? 'selected' : ''}>{item.title}</button>
        </li>
    );
    return (
        <ul className='PollList'>{listItems}</ul>
    );
}

export default PollList;