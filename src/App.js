import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Landing.css';
import './GalleryItem.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <GalleryItemLeft/>
        <GalleryItemRight/>
        <GalleryItemLeft/>
        <GalleryItemRight/>
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
          <h2>Dominic Holmes</h2>
          <h3>iOS Dev</h3>
        </div>
      </div>
    );
  }
}

class GalleryItemLeft extends Component {
  render() {
    return (
      <div className="GalleryItem">
        <div className="GalleryItem-header"></div>
        <div className="GalleryItem-content">
          <div className="GalleryItem-marginPadding"></div>
          <div className="GalleryItem-textContainer">
            <p className="GalleryItem-productRole">iOS Lead</p>
            <p className="GalleryItem-productTitle">Penn Mobile iOS</p>
            <p className="GalleryItem-productDescription">Product Description. This should be a bit longer, and contain a few sentences. An effective description will sum up the product well in a succint (but interesting!) manner.</p>
          </div>
          <div className="GalleryItem-imageContainer"></div>
        </div>
        <div className="GalleryItem-footer"></div>
      </div>
    );
  }
}

class GalleryItemRight extends Component {
  render() {
    return (
      <div className="GalleryItem">
        <div className="GalleryItem-header"></div>
        <div className="GalleryItem-content">
          <div className="GalleryItem-imageContainer"></div>
          <div className="GalleryItem-textContainer">
            <p className="GalleryItem-productRole">iOS Lead</p>
            <p className="GalleryItem-productTitle">Penn Mobile iOS</p>
            <p className="GalleryItem-productDescription">Product Description. This should be a bit longer, and contain a few sentences. An effective description will sum up the product well in a succint (but interesting!) manner.</p>
          </div>
          <div className="GalleryItem-marginPadding"></div>
        </div>
        <div className="GalleryItem-footer"></div>
      </div>
    );
  }
}

export default App;
