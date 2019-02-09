import React, { Component } from 'react';
import LoginButton from './LoginBtn';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          CHITCHAT 
          <LoginButton/>
          </p>
        </header>
        <LoginButton/>
      </div>

    );
  }
}


export default App;
