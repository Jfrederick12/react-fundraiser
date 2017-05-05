import React, {Component} from 'react';
import DonateButton from './donate-button';
import ProgressBar from './progress-bar';
import '../styles/fundraiser.css';

class Fund extends Component {
	constructor(props) {
		super(props);

    this.state = {
      amountRaised: 0,
      agree: true,
      backers: this.props.fund.doners.length
    }		
    this.onPledgeSubmit = this.onPledgeSubmit.bind(this);
	}

  onPledgeSubmit(amount) {
  	this.setState({
  		amountRaised: (this.state.amountRaised + amount),
  		backers: (this.state.backers + 1)
  	})
  }

  render() {
		let amount = Math.round((this.state.amountRaised / this.props.fund.goal) * 100)
		return(
      <div className="fund-container" key={this.props.fund.id}>
  	    <div className="bubble">
		      <span>
		      	{ amount < 100 ?
						    `$${this.props.fund.goal - this.state.amountRaised} still needed for the fund`
					    :
					      `Congrats! the fund has raised $${this.state.amountRaised}` 
		      	}
			    </span>
		    </div>
        <div>< ProgressBar amount={amount}/></div>
        <h1>{this.props.fund.name}</h1>
        < DonateButton onPledgeSubmit={this.onPledgeSubmit} fund={this.props.fund} />
        <span><em>${this.state.amountRaised}</em> of ${this.props.fund.goal} raised.</span>
        <span>{`${this.state.backers} backers`}</span>
        <p className="description">{this.props.fund.description}</p>
      </div>
		)          	
  }
}

export default Fund;