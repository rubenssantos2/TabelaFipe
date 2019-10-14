import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

import Header from './components/Header/Header';

import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <Menu />

    </div>
    );
  }
}

export default App;
