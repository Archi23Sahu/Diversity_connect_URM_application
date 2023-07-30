import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Deiviewurmcandidate extends Component {
	handleSearch = (event) => {
		event.preventDefault();
		const position = event.target.position.value;
		const location = event.target.location.value;
		const message = `Position: ${position}\nLocation: ${location}`;
		alert(message);
		event.target.reset();
	  };
	render() {
    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
	  <div className="container">
		<section className="card">
        <h2> Search URM Candidate </h2>
			<form onSubmit={this.handleSearch}>	
				<table className="center">
					<tbody>
					<tr>
						<th><label htmlFor="position"><b> Position</b></label></th>
						<td> <input type="text" name="position" id="position" required /></td>
					</tr>
					<tr>
						<th><label htmlFor="location"><b>Location</b></label></th>
						<td><input type="text" name="location" id="location" /> </td>
					</tr>
					<tr>
						<td colSpan="2">
							<div className="form-group">
								<button type="submit" className="button">   Search URM Candidate  </button>
								
							</div><br/>
						</td>
					</tr>
					</tbody>
				</table>
				<br/>
			</form>

			<table className="ftable">
				<thead>
					<tr>
						<th> Name</th>
						<th>Phone number</th>
						<th>Nationality</th>
						<th>Location</th>
						<th>Ethnicity</th>
						<th>Education</th>
						<th>Research Experience</th>
						<th>Publications</th>
						<th>Postions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td> Rahul </td>
						<td> 2144568745</td>
						<td> Indian </td>
						<td> Dallas </td>
						<td> Asian </td>
						<td>masters </td>
						<td> 3</td>
						<td> xyz</td>
						<td>Post doc </td>

					</tr>
					<tr>
						<td> Shax </td>
						<td> 2144568745</td>
						<td> Indian </td>
						<td> Dallas </td>
						<td> Asian </td>
						<td>masters </td>
						<td> 3</td>
						<td> ABC</td>
						<td>Post doc </td>
					</tr>
				</tbody>
			</table>
			<div className="button-container">
            <Link to="/Deidashboard" className="button">Back to Dashboard</Link>
			</div>

		</section>
		<Footer/>

	</div>
    </div>
    )
  }
}
