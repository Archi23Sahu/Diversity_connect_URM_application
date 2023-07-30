import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Urmcheckjobroles extends Component {
	handleApplyClick = () => {		
		alert('You have successfully applied for the job!');
	  };
	render() {
    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
	<div className="container">
		<section className="card">
        <h2> Jobs Posted</h2>
			<table className="ftable">
				<thead>
						<tr>
							<th>Position</th>
							<th>Job Description</th>
							<th>Date Posted</th>
							<th>Location</th>
							<th> Details </th>
							<th> Apply </th>
						</tr>
				</thead>
                <tbody>
				<tr>
					<td> Post Doc</td>
					<td> Backend Developer </td>
					<td> 07/16/2023</td>
					<td> Dallas</td>
					<td>
						<div className=""> <Link to="/Jobviewurm" className="button">Details</Link> </div>
					</td>
					<td>
						<div className=""> <button type="submit" className="button" onClick={this.handleApplyClick}>Apply</button> </div>
					</td>
				</tr>
				<tr>
					<td> Faculty</td>
					<td> Full Stack Developer </td>
					<td> 01/16/2023</td>
					<td> Dallas</td>
					<td>
						<div className=""> <Link to="/Jobviewurm" className="button">Details</Link> </div>
					</td>
					<td>
						<div className=""> <button type="submit" className="button" onClick={this.handleApplyClick}>Apply</button> </div>
					</td>
				</tr>
				<tr>
					<td> Post Doc</td>
					<td> Software Developer </td>
					<td> 06/21/2023</td>
					<td> Dallas</td>
					<td>
						<div className=""> <Link to="/Jobviewurm" className="button">Details</Link></div>
					</td>
					<td>
						<div className=""> <button type="submit" className="button" onClick={this.handleApplyClick}>Apply</button>  </div>
					</td>
				</tr>
                </tbody>

			</table>
            <div>
			<Link to="/Urmdashboard" className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>

	</div>

      </div>
    )
  }
}
