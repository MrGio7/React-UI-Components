import React from 'react';
import './Button.css';


class ActionButton extends React.Component{

    render(){
        return(
            <button className='btn' >
            {this.props.value}
            </button>
        )
    }
}

export default ActionButton;