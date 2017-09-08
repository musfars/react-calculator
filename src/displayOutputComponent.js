import React, { Component } from 'react';
import './App.css';

class displayOutputComponent extends Component{
  render(){
    return(
      <div className="calculator__display-output">
      {this.props.valueFromParent}
      </div>
    );
  }
}

export default displayOutputComponent;