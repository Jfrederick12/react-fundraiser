import React, {Component} from 'react';
import Data from '../data/fundraisers.json';
import Fund from './fund';
import FundraiserCard from './fundraiser-card';
import '../styles/fundraiser.css';

class Fundraiser extends Component {
  constructor() {
    super();
    this.state = {
      fundraisers: Data
    }
  }

  onPledgeSubmit(amount) {
  	this.setState({
  		amountRaised: (this.state.amountRaised + amount)
  	})
  }  

  render() {
    return (
      <div className="App">
      	<div className="flex-grid">
	        {this.state.fundraisers.map((fund) => {
	        	return (
			        <div className="col" key={fund.id}>
		        		< Fund fund={fund} />
		        	</div>
	        	)
	        })}
        </div>
      </div>
    );
  }
}

export default Fundraiser;

        		// <div key={fund.id}>
	        	// 	< Fund fund={fund} />
	        	// </div>