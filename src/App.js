import React, { Component } from 'react';
import Data from './data/fundraisers.json';
import Fundraiser from './components/fundraiser';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fundraisers: Data
    }
  }
  render() {
    return (
      <div className="App">
        < Fundraiser />
      </div>
    );
  }
}

export default App;
