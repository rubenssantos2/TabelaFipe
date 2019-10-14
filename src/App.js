import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import AveragePrice from './components/AveragePrice/AveragePrice';
import DataSearched from './components/DataSearched/DataSearched';
import ThreeProducts from './components/ThreeProducts/ThreeProducts';
import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Header />
      <Menu />
      <AveragePrice />
      <DataSearched />
      <ThreeProducts />


    </div>
    );
  }
}

export default App;
