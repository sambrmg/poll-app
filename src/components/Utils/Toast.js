
import './Toast.css';
import React, { useState, useEffect} from 'react';

function Toast({ message = '', status = 'default' }) {
    
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);

    const statusList = {
        default: 'Default',
        warning: 'Warning',
        error: 'Error',
    };

    const handleHide = () => {
        setText('');
        setShow(false);
    };

    useEffect(() => {
        if(message.trim() !== '') {
            setText(message);
            setShow(true);
        }
    }, [message, status])

    return (
        <div className={`Toast ${statusList[status]} ${!show ? 'hide' : ''}`} >
            <span>{text}</span>
            <button className='CloseButton' onClick={handleHide}>x</button>
        </div>
    );
}

export default Toast;