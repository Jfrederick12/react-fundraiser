import React, {Component} from 'react';
import Data from '../data/fundraisers.json';
import '../styles/fundraiser.css';

class Fundraiser extends Component {
  constructor() {
    super();
    this.state = {
      fundraisers: Data,
      amountRaised: 0
    }
    this.onPledgeSubmit = this.onPledgeSubmit.bind(this);
  }

  onPledgeSubmit(amount) {
  	this.setState({
  		amountRaised: (this.state.amountRaised += 30)
  	})
  	console.log(this.state.amountRaised)
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
              <p>{`$${this.state.amountRaised} of $${fund.goal} raised.`} </p>
            </div>
          )
        })}
        <button onClick={this.onPledgeSubmit}>Give It!</button>
      </div>
    );
  }
}

export default Fundraiser;