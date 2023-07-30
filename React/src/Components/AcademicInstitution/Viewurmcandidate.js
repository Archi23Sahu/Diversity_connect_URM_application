import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Viewurmcandidate extends Component {
	handleSearch = (event) => {
		event.preventDefault();
		const name = event.target.uname.value;
		const fieldOfStudy = event.target.fieldOfStudy.value;
		const education = event.target.education.value;
		const message = `Name: ${name}\nField of Study: ${fieldOfStudy}\nEducation: ${education}`;
		alert(message);
		event.target.reset();
	  };
	  handleBookmark = (candidateName) => {
		alert(`You saved ${candidateName} for future reference.`);
	  };
	
	render() {
    return (
      <div>
        <h1 className="dashhead">Academia Dashboard</h1>
	<div className="container">
    <h2> View URM Candidate </h2>
		<section className="card">
		 	<form onSubmit={this.handleSearch}>	
				<table>
					<tbody>
						<tr>
							<th><label htmlFor="uname"><b> Name</b></label></th>
							<td> <input type="text" name="uname" id="uname" required/></td>
						</tr>
						<tr>
							<th><label htmlFor="fieldOfStudy"><b> Field of study</b></label></th>
							<td> <input type="text" name="fieldOfStudy" id="fieldOfStudy" required/></td>
						</tr>
						<tr>
							<th><label htmlFor="education"><b>Education</b></label></th>
							<td><input type="text" name="education" id="education"/> </td>
						</tr>
						<tr>
							<td colSpan="2">
								<div className="form-group">
								<button type="submit" className="button" >Search</button>	
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
						<th>Bookmark </th>
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
						<td>
							<div className="">
							<button className="button" onClick={() => this.handleBookmark('Rahul')}>   Bookmark   </button>
							</div>
						</td>
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
						<td>
							<div className="">
							<button className="button" onClick={() => this.handleBookmark('Shaan')}>   Bookmark   </button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<div className="button-container">
                <Link to="/Academiadashboard" className="button">Back to Dashboard</Link>
			</div>

		</section>
		<Footer/>

	</div>
      </div>
    )
  }
}
