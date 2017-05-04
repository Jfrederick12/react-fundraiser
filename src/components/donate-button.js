import React, {Component} from 'react';
import '../styles/donate-button.css';

class DonateButton extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
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
  	this.setState({value: ''})
  }

	render() {
		console.log(this.state.value)
		return(
			<form className="donate-form" onSubmit={this.handleSubmit}>
				<div className="col">
					<input type="number" value={this.state.value} onChange={this.handleChange}/>
				</div>
				<div className="col">
					<button className="btn" onClick={this.onPledgeSubmit}>Donate</button>
				</div>
			</form>
		)
	}
}

export default DonateButton;