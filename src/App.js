import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Landing.css';
import Gallery from './Gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <Gallery/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Hello world!
        </p>
      </div>
    );
  }
}

class Landing extends Component {
  render() {
    return (
      <div className="Landing-header">
        <div className="Landing-content">
          <h2>Son of a bitch</h2>
          <h3>I am sick of these dolphins</h3>
        </div>
      </div>
    );
  }
}

export default App;
