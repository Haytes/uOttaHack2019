import React, { Component } from 'react';
import LoginButton from './LoginBtn';
import logo from './logo.svg';
import Home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <br/>
          <br/>
          <LoginButton/>
          
          </p>
        </header>
        <br/>
      </div>

    );
  }
}


export default App;
