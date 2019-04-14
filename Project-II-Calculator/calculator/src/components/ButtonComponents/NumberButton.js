import React from 'react';
import './Button.css';
import ActionButton from './ActionButton';

class NumberButton extends React.Component{
    constructor(props){
        super()
    }

    buttonPressed = i => {
        this.props.buttonPressed(i.target.result)
    }

     renderActionButton = i => {
        return <ActionButton value={i} onClick={this.buttonPressed} />
};

    render(){
        return(
            <div className='btns'>
            <div className='numberBtns'>   
                <div className="board-row">
                    {this.renderActionButton('clear')}
                </div>

                <div className="board-row">
                    {this.renderActionButton(7)}
                    {this.renderActionButton(8)}
                    {this.renderActionButton(9)}
                </div>

                <div className="board-row">
                    {this.renderActionButton(4)}
                    {this.renderActionButton(5)}
                    {this.renderActionButton(6)}
                </div>

                <div className="board-row">
                    {this.renderActionButton(1)}
                    {this.renderActionButton(2)}
                    {this.renderActionButton(3)}
                </div>

                <div className="board-row">
                    {this.renderActionButton(0)}
            </div>
            
            </div>

            <div className='functionBtns'>
                <div className="board-row">
                    {this.renderActionButton('÷')}
                    {this.renderActionButton('X')}
                    {this.renderActionButton('-')}
                    {this.renderActionButton('+')}
                    {this.renderActionButton('=')}
                </div>
            </div>
        </div>
        )
    }
}


export default NumberButton;