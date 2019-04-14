import React from 'react';
import './App.css';
import './components/ButtonComponents/Button.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      result: ''
    }
  }

  buttonPressed = i =>{
    this.setState({
      result: i
    })
  }


  render(){
  return (
    <div className='mainContainer'>
      <CalculatorDisplay  result={this.state.result}/>
      <NumberButton  buttonPressed={this.buttonPressed} />
    </div>
  );
}
};

export default App;
