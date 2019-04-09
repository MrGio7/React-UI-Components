import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

function renderActionButton(i) {
    return <ActionButton value={i} />
};

const NumberButton = () =>{
    return(
        <div className='buttons'>   
        <div className="board-row">
        {renderActionButton('clear')}
        {renderActionButton('÷')}
        </div>

        <div className="board-row">
        {renderActionButton(7)}
        {renderActionButton(8)}
        {renderActionButton(9)}
        {renderActionButton('X')}
        </div>

        <div className="board-row">
        {renderActionButton(4)}
        {renderActionButton(5)}
        {renderActionButton(6)}
        {renderActionButton('-')}
        </div>

        <div className="board-row">
        {renderActionButton(1)}
        {renderActionButton(2)}
        {renderActionButton(3)}
        {renderActionButton('+')}
        </div>

        <div className="board-row">
        {renderActionButton(0)}
        {renderActionButton('=')}
        </div>
        </div>
    )
}

export default NumberButton;