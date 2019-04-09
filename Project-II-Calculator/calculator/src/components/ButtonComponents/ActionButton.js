import React from 'react';
import './Button.css';

function ActionButton(props) {
    return(
        <button className='btn'>
        {props.value}
        </button>
    )
}

export default ActionButton;