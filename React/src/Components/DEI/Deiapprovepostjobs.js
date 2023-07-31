import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'

export default class Deiapprovepostjobs extends Component {
	handleAccept = (candidateName) => {
		alert(`Accepted job position ${candidateName}`);
	  };	
	  handleDecline = (candidateName) => {
		alert(`Declined job position ${candidateName}`);
	  };
	render() {
    return (
    <div>
        	<h1 className="dashhead">DEI Officer Dashboard</h1>
	<div className="container">
		<section className="card">
        <h2> Job Posted</h2>
			<table className="ftable">
					<thead>
						<tr>
							<th>Position</th>
							<th>Job Description</th>
							<th>Date</th>
							<th>Location</th>
							<th> Accept </th>
							<th> Decline </th>
						</tr>
					</thead>
                <tbody>
				<tr>
					<td> PostDoc</td>
					<td> Software </td>
					<td> 07/16/2023</td>
					<td> Dallas</td>
					<td>
						<div className="">
							<button  className="button" onClick={() => this.handleAccept('PostDoc')}>Accept</button>	
						</div>
					</td>
					<td>
						<div className="">
						    <button  className="button" onClick={() => this.handleDecline('PostDoc')}>Decline</button>	
						</div>
					</td>
				</tr>
                <tr>
				<td> PhD</td>
				<td> Software </td>
				<td> 07/16/2023</td>
				<td> Dallas</td>
				<td>
					<div className="">
						<button  className="button" onClick={() => this.handleAccept('PhD')}>Accept</button>	
					</div>
				</td>
				<td>
					<div className="">
						<button  className="button" onClick={() => this.handleDecline('PhD')}>Decline</button>	
					</div>
				</td>
				</tr>
				<tr>
					<td> Faculty</td>
					<td> Software </td>
					<td> 07/16/2023</td>
					<td> Dallas</td>
					<td>
						<div className="">
							<button  className="button" onClick={() => this.handleAccept('Faculty')}>Accept</button>							
						</div>
					</td>
					<td>
						<div className="">
						    <button  className="button" onClick={() => this.handleDecline('Faculty')}>Decline</button>	
						</div>
					</td>
				</tr>
                </tbody>
			</table>
			<div className="button-container">
             <Link to={AppUrl.Deidashboard} className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>

	</div>
      </div>
    )
  }
}
