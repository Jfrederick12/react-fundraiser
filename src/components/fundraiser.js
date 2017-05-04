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
		              <p>{fund.name}</p>
		              <p>{fund.goal}</p>
		              <p>{fund.doners.length}</p>
		              <p>{`$${this.state.amountRaised} of $${fund.goal} raised.`} </p>
					        < DonateButton onPledgeSubmit={this.onPledgeSubmit} fund={fund} />
		            </div>
          		)
	          
	        } 
        })}
      </div>
    );
  }
}

export default Fundraiser;
// const divStyle = { width: '100%'}

       //    {
				  	// let amount = Math.round((this.state.amountRaised / fund.goal) * 100)
       //    	if (amount > 100) {
       //    		const divStyle = { width: '100%'}
       //    		return(
		     //        <div className="fund-container" key={fund.id}>
		     //          < ProgressBar />
		     //          <p>{fund.name}</p>
		     //          <p>{fund.goal}</p>
		     //          <p>{fund.doners.length}</p>
		     //          <p>{`$${this.state.amountRaised} of $${fund.goal} raised.`} </p>
					  //       < DonateButton onPledgeSubmit={this.onPledgeSubmit} fund={fund} />
		     //        </div>
       //    		)
	      //     } else {
	      //     	let amount = Math.round((this.state.amountRaised / fund.goal) * 100)
	      //     	const divStyle = { width: `${amount}%` }
	      //     	return (
		     //        <div className="fund-container" key={fund.id}>
		     //          <div className="progress-bar">
							//       <div className="bar" style={divStyle}></div>
							//     </div>
		     //          <p>{fund.name}</p>
		     //          <p>{fund.goal}</p>
		     //          <p>{fund.doners.length}</p>
		     //          <p>{`$${this.state.amountRaised} of $${fund.goal} raised.`} </p>
					  //       < DonateButton onPledgeSubmit={this.onPledgeSubmit} fund={fund} />
		     //        </div>
	      //     	)
	      //     }
	      //   } 


