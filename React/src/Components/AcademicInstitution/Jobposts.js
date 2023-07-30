import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Jobposts extends Component {
	handleSubmit = (event) => {
        event.preventDefault();
        const jobposition = event.target.jobposition.value;
        const description = event.target.jdesc.value;
        const date = event.target.date.value;
        const location = event.target.location.value;
        const message = `Position: ${jobposition}\nDescription: ${description}\nDate: ${date}\nLocation: ${location}`;
        alert(message);
		event.target.reset();
		 
      };
  render() {
    return (
      <div>
        <h1 className="dashhead">Academia Dashboard</h1>
	  <div className="container">
		<section className="card">
        <h2> Job Posting Form</h2>
		<form onSubmit={this.handleSubmit}> <br />
				<table className="form-group">
					<tbody>
					<tr>
						<th><label htmlFor="jobposition"><b>Position</b></label></th>
						<td> <input type="text" name="jobposition" id="jobposition" placeholder="Enter position" required /></td>
					</tr>
					<tr>
						<th><label htmlFor="jdesc"><b>Job Description</b></label></th>
						<td>
							<textarea rows="4" cols="54" id="jdesc" name="jdesc"
								placeholder="Enter your institution description"></textarea>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="date"><b>Date</b></label></th>
						<td><input type="date" name="date" id="date" />
						</td>
					</tr>
					<tr>
						<th><label htmlFor="location"><b>Location</b></label></th>
						<td><input type="text" name="location" id="location" placeholder="Enter location" /> </td>
					</tr>
					<tr>
						<td colSpan="2">
							<div className="form-group">
								<button type="submit" className="button" >Post Job</button>	
							</div><br/>
						</td>
					</tr>
					</tbody>
				</table>

			</form> <br />
			<div className="button-container">
              <Link to="/Academiadashboard" className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer />

	</div>
        
      </div>
    )
  }
}
