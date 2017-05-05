import React, {Component} from 'react';
import Data from '../data/fundraisers.json';
import DonateButton from './donate-button';
import ProgressBar from './progress-bar';
import '../styles/fundraiser.css';

class Fundraiser extends Component {
  constructor() {
    super();
    this.state = {
      fundraisers: Data,
      amountRaised: 0,
      agree: true
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
          {
				  	let amount = Math.round((this.state.amountRaised / fund.goal) * 100)
          		return(
		            <div className="fund-container" key={fund.id}>
            	    <div className="bubble">
							      <span>
							      	{ amount < 100 ?
											    `$${fund.goal - this.state.amountRaised} still needed for the fund`
										    :
										      `Congrats! the fund has raised $${this.state.amountRaised}` 
							      	}
								    </span>
							    </div>
		              <div>< ProgressBar amount={amount}/></div>
		              <h1>{fund.name}</h1>
					        < DonateButton onPledgeSubmit={this.onPledgeSubmit} fund={fund} />
		              <span><em>${this.state.amountRaised}</em> of ${fund.goal} raised.</span>
		              <span>{`${fund.doners.length} backers`}</span>
					        <p className="description">{fund.description}</p>
		            </div>
          		)
	          
	        } 
        })}
      </div>
    );
  }
}

export default Fundraiser;