import React, { Component } from 'react';
import Custom from '../src/components/custom.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>hello, this is read the docs project</p>
            <Custom />
        </header>
      </div>
    );
  }
}

export default App;
