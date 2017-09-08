import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './buttonContainerComponent.js';
import DisplayInput from './displayInputComponent';
import DisplayOutput from './displayOutputComponent';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      buttonValue: null,
      buttonValueArray:[],
      result:''
    }
  }

  myCallback= (dataFromChild) => {
    console.log(dataFromChild);
    if (dataFromChild == '='){
      this.refs.child.evaluate();
    }
    else{
      this.setState(
      {
        buttonValue:dataFromChild,
      }
    )
    }
  }

  resultFromChild = (resultValue) => {
    this.setState(
      {
        result:resultValue,
      }
    )
  }

  render() {
    return (
      <div className="App">
        <DisplayInput valueFromParent={this.state.buttonValue} ref='child' sentResultToParent={this.resultFromChild}/>
        <DisplayOutput valueFromParent={this.state.result}/>
        <ButtonContainer callbackFromParent={this.myCallback}/>
      </div>
    );
  }
}

export default App;