import React from 'react';
import './PollList.css';

function PollList(props) {
    const options = props.options;
    const listItems = options.map((item) =>
        <li key={item.toString()}>
        <button>{item}</button>
        </li>
    );
    return (
        <ul className='PollList'>{listItems}</ul>
    );
}

export default PollList;