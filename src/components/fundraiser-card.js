import React, {Component} from 'react';
import ProgressBar from './progress-bar';
import '../styles/fundraiser-card.css';

class FundraiserCard extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	amountRaised: 0,
		// }
	}

	render() {
		// let amount = Math.round((this.state.amountRaised / this.props.fund.goal) * 100)
		return(
			<div>
			  <p>{this.props.fund.goal}</p>
			</div>
		)
	}
}

export default FundraiserCard;
