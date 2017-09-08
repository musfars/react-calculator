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
    var a = this.props.valueFromParent;
    // var b = a.toString();
    console.log(a);
    var op1 = '';
    var op2 = '';
    var i = 0;
    while((a[i]!=='+') && (a[i]!=='-') && (a[i]!=='*') && (a[i]!=='/') && (i<a.length)){
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
    var x = parseFloat(op1,10);
    var y = parseFloat(op2,10);
    var result;
    if(oper === '+'){
      result = x + y;
    }
    else if(oper === '-'){
      result = x - y;
    }
    else if(oper === '*'){
      result = x * y;
    }
    else if(oper === '/'){
      result = (x / y).toFixed(4);
    }
    console.log(result);
    this.props.sentResultToParent(result);
  }
  render(){
    // {this.state.inputValue.push(this.props.valueFromParent)};
    return(
      <div className="calculator__display-input">
      {this.props.valueFromParent}
      </div>
    );
  }
}

export default displayInputComponent;