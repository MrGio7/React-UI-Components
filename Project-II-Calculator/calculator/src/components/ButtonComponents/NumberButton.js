import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

function renderActionButton(i) {
    return <ActionButton value={i} />
};

const NumberButton = () =>{
    return(
        <div className='btns'>
            <div className='numberBtns'>   
                <div className="board-row">
                    {renderActionButton('clear')}
                </div>

                <div className="board-row">
                    {renderActionButton(7)}
                    {renderActionButton(8)}
                    {renderActionButton(9)}
                </div>

                <div className="board-row">
                    {renderActionButton(4)}
                    {renderActionButton(5)}
                    {renderActionButton(6)}
                </div>

                <div className="board-row">
                    {renderActionButton(1)}
                    {renderActionButton(2)}
                    {renderActionButton(3)}
                </div>

                <div className="board-row">
                    {renderActionButton(0)}
            </div>
            
            </div>

            <div className='functionBtns'>
                <div className="board-row">
                    {renderActionButton('÷')}
                    {renderActionButton('X')}
                    {renderActionButton('-')}
                    {renderActionButton('+')}
                    {renderActionButton('=')}
                </div>
            </div>
        </div>
    )
}

export default NumberButton;