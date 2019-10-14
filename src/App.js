import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import DataList from './components/DataList/DataList';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <DataList />
    </div>
    );
  }
}

export default App;
