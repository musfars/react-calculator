import React, { Component } from 'react';
import './App.css';

class buttonComponentContainer extends Component{

  render(){
    return(
      <div className="calculator__buttons-container">
        {
          ['C','CLR','%','/',7,8,9,'*',4,5,6,'-',1,2,3,'+'].map((item)=>
          <button value={item} onClick={() => {this.props.callbackFromParent(item)}}>{item}</button>
          )
        }
          <button className="longButton" value="0" onClick={() => {this.props.callbackFromParent(0)}}>0</button>
          <button value="." onClick={() => {this.props.callbackFromParent('.')}}>.</button>
          <button className="darkButton" value="=" onClick={() => {this.props.callbackFromParent('=')}}>=</button>
      </div>
    );
  }
}

export default buttonComponentContainer;