import React, {Component} from 'react';
import '../styles/progress-bar.css';

class ProgressBar extends Component {
  render() {
  	const divStyle = { width: `${this.props.amount}%` }
  	const maxStyle = { width: '100%'}
		return(
			<div className="progress-container">
	      <div className="progress-bar">
	        {
	        	this.props.amount < 100 ?
	        		<div className='bar' style={divStyle}></div>
	        	:
	        		<div className='bar' style={maxStyle}></div>
	        }
		    </div>
	    </div>
		)
	}
}

export default ProgressBar

