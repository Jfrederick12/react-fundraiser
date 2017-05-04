import React, {Component} from 'react';
import Data from '../data/fundraisers.json';
import DonateButton from './donate-button';
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
  		amountRaised: (this.state.amountRaised + amount)
  	})
  }

  render() {
    return (
      <div className="App">
        {this.state.fundraisers.map((fund) => {
          return (
            <div className="fund-container" key={fund.id}>
              <p>{fund.name}</p>
              <p>{fund.goal}</p>
              <p>{fund.doners.length}</p>
              <p>{`$${this.state.amountRaised} of $${fund.goal} raised.`} </p>
			        < DonateButton onPledgeSubmit={this.onPledgeSubmit} fund={fund} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default Fundraiser;