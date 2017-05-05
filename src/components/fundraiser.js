import React, {Component} from 'react';
import Data from '../data/fundraisers.json';
import Fund from './fund';
import '../styles/fundraiser.css';

class Fundraiser extends Component {
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
        	return < Fund fund={fund} />
        })}
      </div>
    );
  }
}

export default Fundraiser;