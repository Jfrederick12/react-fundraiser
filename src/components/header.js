import React, {Component} from 'react';
import '../styles/header.css';

class Header extends Component {
	render() {
		return(
    	<div className="header">
				<div className="social-icon">
					<nav>
						<a href='https://github.com/Jfrederick12/React_Contact_Filter' className="social-icon"><i className="fa fa-github-alt fa-2x"></i></a>
						<a href='http://jfrederickportfolio.herokuapp.com/'>www.justin-frederick.com</a>
					</nav>
				</div>    		
    		<h1>'Fun' Raiser</h1>
    		<p>The end time are near, maybe. Either way, there are beasts of legend that require your hard earned dollars to rise up once again!</p>
    	</div>
		)
	}
}

export default Header;