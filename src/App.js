import React, { Component } from 'react';
import './App.css';

import Nav from './Nav';
import MainContainer from './MainContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <MainContainer />
      </div>
    );
  }
}

export default App;
