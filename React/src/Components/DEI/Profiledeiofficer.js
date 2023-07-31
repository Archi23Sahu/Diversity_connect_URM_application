import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'

export default class Profiledeiofficer extends Component {
	handleSaveClick = (event) => {
		event.preventDefault();
		const dnameValue = event.target.dname.value;
		const ddescValue = event.target.ddesc.value;
		const roleValue = event.target.role.value;
		const goalValue = event.target.goal.value;
		const initiativesValue = event.target.initiatives.value;
		const eventValue = event.target.event.value;
		const organizationValue = event.target.organization.value;
		const positionsValue = event.target.postions.value;
		const message = `Name: ${dnameValue}\nDescription: ${ddescValue}\nRole: ${roleValue}\nGoals: ${goalValue}\nInitiatives: ${initiativesValue}\nNew Initiatives/Events: ${eventValue}\nOrganization: ${organizationValue}\n Positions: ${positionsValue}`;
	
		alert(message);
	  };
  render() {
    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
	<div className="container">
		<section className="card">
        <h2> DEI Officer Profile</h2>
			<form onSubmit={this.handleSaveClick}> <br/>

				<table className="form-group">
                    <tbody>
					<tr>
						<th><label htmlFor="dname"><b>Name</b></label></th>
						<td> <input type="text" name="dname" id="dname" placeholder="Enter your name " defaultValue="DEI1" /></td>
					</tr>
					<tr>
						<th><label htmlFor="ddesc"><b>Description</b></label></th>
						<td> <textarea rows="3" cols="57" id="ddesc" name="ddesc"
								placeholder="Enter description" defaultValue="Description of dei officer"/></td>
					</tr>
					<tr>
						<th><label htmlFor="role"><b>Role</b></label></th>
						<td> <input type="text" name="role" id="role" placeholder="Enter role" defaultValue="XYZ" /></td>
					</tr>
					<tr>
						<th><label htmlFor="goal"><b>Goals</b></label></th>
						<td> <input type="text" name="goal" id="goal" placeholder="Enter goals" defaultValue="goals" /></td>
					</tr>
					<tr>
						<th><label htmlFor="initiatives"><b>Initiatives</b></label></th>
						<td> <input type="text" name="initiatives" id="initiatives" placeholder="Enter Initiatives"
								defaultValue="Initiatives" /></td>
					</tr>
					<tr>
						<th><label htmlFor="event"><b>new Initiatives/Events</b></label></th>
						<td> <input type="text" name="event" id="event" placeholder="Enter new Initiatives or Events"
								defaultValue="new Initiatives or Events" /></td>
					</tr>
					<tr>
						<th><label htmlFor="organization"><b>Organization</b></label></th>
						<td> <input type="text" name="organization" id="organization" placeholder="Enter your organization"
								defaultValue="Abacus" /></td>
					</tr>
					<tr>
						<th><label htmlFor="postions"><b>Postions</b></label></th>
						<td><input type="text" name="postions" id="postions" placeholder="Enter positions" defaultValue="Post doc" />
						</td>
					</tr>
					<tr>
						<td colSpan="2">
							<div className="button-container">
							<button  className="button">   Save  </button>
							</div>
							<br/>
						</td>
					</tr>
                    </tbody>
				</table>

			</form> <br />
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
