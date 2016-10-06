import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Basket from './components/Basket';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Basket/>
      </div>
    );
  }
}

export default App;
