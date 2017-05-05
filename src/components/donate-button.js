import React, {Component} from 'react';
import '../styles/donate-button.css';
import {Alert} from 'react-bootstrap';

class DonateButton extends Component {
	constructor() {
		super();

		this.state = {
			value: '',
			alertVisible: false,
			showModal: false
		}
		this.onPledgeSubmit = this.onPledgeSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


  onPledgeSubmit(amount) {
  	this.props.onPledgeSubmit(
  		Number(this.state.value)
  	)
  	this.setState({alertVisible: false, value: ''})
  }	

  handleAlertShow() {
    this.setState({alertVisible: true});
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  	event.preventDefault()
  	this.setState({value: ''})
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }  

	render() {
		if (this.state.alertVisible) {
			return(
				<Alert>
					<p>{`are you sure you want to donate $${this.state.value}?`}</p>
					<div className="flex-container">
						<div className="col">
							<button className="btn-yes" onClick={this.onPledgeSubmit}>Yes</button>
						</div>
						<div className="col">
						  <button className="btn-no" onClick={this.handleAlertDismiss.bind(this)}>No</button>
						</div>
					</div>
				</Alert>
			)
		}
		return(
			<form className="donate-form" onSubmit={this.handleSubmit}>

					<input type="number" value={this.state.value} onChange={this.handleChange} placeholder="$ Amount"/>
		
					<button className="btn" onClick={this.handleAlertShow.bind(this)}>Donate</button>
		
			</form>
		)
	}
}

export default DonateButton;

// <button onClick={this.handleAlertDismiss.bind(this)}>Hide Alert</button>