import React, {Component} from 'react';
import '../styles/donate-button.css';

class DonateButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0
		}
		this.onPledgeSubmit = this.onPledgeSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


  onPledgeSubmit(amount) {
  	this.props.onPledgeSubmit(
  		Number(this.state.value)
  	)
  }	

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  	event.preventDefault()
  }

	render() {
		console.log(this.state.value)
		return(
				<form onSubmit={this.handleSubmit}>
					<input type="number" value={this.state.value} onChange={this.handleChange}/>
					<button onClick={this.onPledgeSubmit}>Donate</button>
				</form>
		)
	}
}

export default DonateButton;