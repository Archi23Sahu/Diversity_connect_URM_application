import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'


export default class Jobviewurm extends Component {
  render() {
    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
	<div className="container">
		<section className="card">
        <h2> View Job Posting</h2>
			<form action="" method="post"> <br/>

				<table className="form-group">
					<tbody>
					<tr>
						<th><label htmlFor="jobposition"><b>Position</b></label></th>
						<td> <input type="text" name="" id="jobposition" placeholder="Enter position"
								defaultValue="Backend Developer" readOnly /></td>
					</tr>
					<tr>
						<th><label htmlFor="jdesc"><b>Job Description</b></label></th>
						<td>
							<textarea rows="4" cols="57" id="jdesc" placeholder="Enter your institution description"
								readOnly defaultValue="A software developer with a focus on web application development and server-side, or database-side, programming is known as a back-end developer. The code that the website visitor cannot see is handled by back-end developers, but they are also in charge of making sure that the front end, or what the visitor sees and interacts with, is fully working as a whole"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="date"><b>Date</b></label></th>
						<td><input type="date" name="" id="date" defaultValue="2020-01-01" readOnly/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="location"><b>Location</b></label></th>
						<td><input type="text" name="" id="location" placeholder="Enter location" defaultValue="USA" readOnly/>
						</td>
					</tr>
					<tr>
					<td colSpan="2">
						<div className="button-container">

                        <Link to={AppUrl.Urmdashboard} className="button">Back to Dashboard</Link>
						</div>
						<br/>
					</td>
					</tr>
					
                </tbody>
				</table>

			</form>
		</section>

		
		<Footer/>

	</div>
      </div>
    )
  }
}
