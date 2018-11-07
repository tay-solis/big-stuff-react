import React, { Component } from 'react';

import Nav from './components/Nav'
import Header from './components/Header'
import Routes from './config/routes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        { Routes }
      </div>
    );
  }
}

export default App;
