import React from 'react';
import './Display.css';

class CalculatorDisplay extends React.Component {

    render(){
    return(
        <div className='display'>
        <p>{this.props.result}</p>
        </div>
    )
}
}

export default CalculatorDisplay;