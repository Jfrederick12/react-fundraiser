import React, {Component} from 'react';
import Data from '../data/fundraisers.json';
import Fund from './fund';
import FundraiserCard from './fundraiser-card';
import { Grid, Row, Col } from 'react-bootstrap';
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
	      <Grid>
	      	<Row className="row">
		        {this.state.fundraisers.map((fund) => {
		        	return (
				        <Col md={2} md={4} key={fund.id}>
			        		< Fund fund={fund} />
			        	</Col>
		        	)
		        })}
	        </Row>
	      </Grid>
      </div>
    );
  }
}

export default Fundraiser;
