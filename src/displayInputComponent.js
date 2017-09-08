import React, { Component } from 'react';
import './App.css';

class displayInputComponent extends Component{

  constructor(props){
    super(props);
    this.state = {
      inputValue: [],
      funct:this.evaluate
    }
  }

  evaluate(){
    console.log('hi');
    var a = this.state.inputValue;
    // var b = a.toString();
    // console.log(b);
    var op1 = '';
    var op2 = '';
    var i = 1;
    while((a[i]!='+') && (a[i]!='-') && (a[i]!='*') && (a[i]!= '/')){
      op1 += a[i];
      i++;
    }
    console.log(op1);
    var oper = a[i];
    i++;
    while(i<a.length)
      {
        op2+=a[i];
        i++;
      }
    console.log(op2);
    var x = parseInt(op1);
    var y = parseInt(op2);
    var result;
    if(oper == '+'){
      result = x + y;
    }
    else if(oper == '-'){
      result = x - y;
    }
    else if(oper == '*'){
      result = x * y;
    }
    else if(oper == '/'){
      result = x / y;
    }
    console.log(result);
    this.props.sentResultToParent(result);
  }
  render(){
    {this.state.inputValue.push(this.props.valueFromParent)};
    return(
      <div className="calculator__display-input">
      {this.state.inputValue}
      </div>
    );
  }
}

export default displayInputComponent;