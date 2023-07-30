import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Profileurm extends Component {
	handleSubmit = (event) => {
        event.preventDefault();
        const uname = event.target.uname.value;
        const phoneno = event.target.phoneno.value;
        const nationality = event.target.nationality.value;
        const location = event.target.location.value;
        const ethnicity = event.target.ethnicity.value;
        const education = event.target.education.value;
        const resexp = event.target.resexp.value;
        const publication = event.target.publication.value;
        const positions = event.target.postions.value;
        const resume = event.target.resume.value;
        const coverletter = event.target.coverletter.value;
        const email = event.target.username.value;
    
        const message = `Name: ${uname}\nPhone Number: ${phoneno}\nNationality: ${nationality}\nLocation: ${location}\nEthnicity: ${ethnicity}\nEducation: ${education}\nResearch Experience: ${resexp}\nPublications: ${publication}\nPositions: ${positions}\nResume: ${resume}\nCover Letter: ${coverletter}\nEmail: ${email}`;
        alert(message);
      };
	render() {
    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
	<div className="container">
		<header className="header">


		</header>

		<section className="card">
			<form onSubmit={this.handleSubmit}> <br/>
            <h2> URM Candidate Profile</h2>
				<table className="form-group">
					<tbody>
					<tr>
						<th><label htmlFor="uname"><b> Name</b></label></th>
						<td> <input type="text" name="uname" id="uname" placeholder="Enter your name"
								defaultValue="Harold XYZ Godwinson" required/></td>
					</tr>
					<tr>
						<th><label htmlFor="phoneno"><b>Phone number</b></label></th>
						<td>
							<input type="text" name="phoneno" id="phoneno" placeholder="Enter your phone number"
								defaultValue="6829897050" required/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="nationality"><b>Nationality</b></label></th>
						<td><input type="text" name="nationality" id="nationality" placeholder="Enter nationality" defaultValue="Indian"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="location"><b>Location</b></label></th>
						<td><input type="text" name="location" id="location" placeholder="Enter location" defaultValue="India"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="ethnicity"><b>Ethnicity</b></label></th>
						<td><input type="text" name="ethnicity" id="ethnicity" placeholder="Enter ethnicity" defaultValue="Asian"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="education"><b>Education</b></label></th>
						<td><input type="text" name="education" id="education" placeholder="Enter education" defaultValue="Masters"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="resexp"><b>Research Experience</b></label></th>
						<td><input type="text" name="resexp" id="resexp" placeholder="Enter research experience"
								defaultValue="Machine learning"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="publication"><b>Publications</b></label></th>
						<td><input type="text" name="publication" id="publication" placeholder="Enter publication"
								defaultValue="IEEE-2019 Deep learning"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="postions"><b>Postions</b></label></th>
						<td><input type="text" name="postions" id="postions" placeholder="Enter positions" defaultValue="Faculty"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="resume"><b>Resume</b></label></th>
						<td><input type="file" id="resume" name="resume"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="coverletter"><b>Cover Letter</b></label></th>
						<td><input type="file" id="coverletter" name="coverletter"/>
						</td>
					</tr>
					<tr>
						<th><label htmlFor="username"><b>Email</b></label></th>
						<td><input type="email" name="username" id="username" placeholder="Enter email" defaultValue="Harold@gmail.com"
								required/> </td>
					</tr>
					<tr>
						<th><label htmlFor="password"><b>Password</b></label></th>
						<td><input type="text" name="password" id="password" placeholder="Enter Password" defaultValue="*******"
								required /><br/></td>
					</tr>
					<tr>
						<td colSpan="2">
							<div className="button-container">
							<button type="submit" className="button" >Save</button>								
							</div>
							<br/>
						</td>
					</tr>
                    </tbody>
				</table>

			</form><br />
			<div className="button-container">
            <Link to="/Urmdashboard" className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>
	</div>
      </div>
    )
  }
}
