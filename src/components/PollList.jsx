import React from 'react';
import './PollList.css';

function PollList(props) {
    const options = props.options;
    const listItems = options.map((item) =>
        <li key={item.id.toString()}>
        <button>{item.title}</button>
        </li>
    );
    return (
        <ul className='PollList'>{listItems}</ul>
    );
}

export default PollList;