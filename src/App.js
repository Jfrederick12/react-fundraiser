import React, { Component } from 'react';
import Data from './data/fundraisers.json';
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
        {this.state.fundraisers.map((fund) => {
          return (
            <div key={fund.id}>
              <p>{fund.name}</p>
              <p>{fund.goal}</p>
              <p>{fund.doners.length}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
