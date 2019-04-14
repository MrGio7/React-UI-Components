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
    if(i === '='){
      this.calculate()
    } else if(i === 'clear') {
      this.clear()
    } else
    this.setState({
      result: this.state.result + i
    })
  }

  clear = () =>{
    this.setState({
      result: ''
    })
  }

  calculate = () =>{
    this.setState({
      result: eval(this.state.result)
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
