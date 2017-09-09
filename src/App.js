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
      result:'',
      flag:0
    }
  }

  myCallback= (dataFromChild) => {
    console.log(dataFromChild);
    if ((dataFromChild === '+') || (dataFromChild === '-') || (dataFromChild === '*') ||(dataFromChild === '/')){
      this.setState(
      {
        flag:1,
      }
      )
    }
    if (dataFromChild === '='){
      this.refs.child.evaluate();
    }
    else if(dataFromChild === 'CLR'){
      this.setState(
        {
          buttonValueArray:[],
          result:'',
          flag:0
        }
        )
    }
    else if(dataFromChild === 'C'){
      this.setState(
        {
          buttonValueArray:this.state.buttonValueArray.slice(0,-1)     
        }
        )
    }
    else if((dataFromChild === '%')){

    }
    else if(((dataFromChild === '+') || (dataFromChild === '-') || (dataFromChild === '*') ||(dataFromChild === '/')) && this.state.flag === 1){
      
    }
    else{
      this.setState(
      {
        buttonValue:dataFromChild,
      }
      )
      this.state.buttonValueArray.push(dataFromChild);
      console.log(this.state.buttonValueArray);
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
        <DisplayInput valueFromParent={this.state.buttonValueArray} ref='child' sentResultToParent={this.resultFromChild}/>
        <DisplayOutput valueFromParent={this.state.result}/>
        <ButtonContainer callbackFromParent={this.myCallback}/>
      </div>
    );
  }
}

export default App;
