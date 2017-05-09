import React, {Component} from 'react';
import '../styles/header.css';

class Header extends Component {
	render() {
		return(
    	<div className="header">
				<div className="social-icon">
					<nav>
						<a href='https://github.com/Jfrederick12/react-fundraiser' className="social-icon"><i className="fa fa-github-alt fa-2x"></i></a>
						<a href='http://jfrederickportfolio.herokuapp.com/'>www.justin-frederick.com</a>
					</nav>
				</div>    		
    		<h1>'Fun' Raiser</h1>
    		<p>Times can be tough, this mock fundraiser app is there to help others in times of need.</p>
    	</div>
		)
	}
}

export default Header;