import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'

export default class Adminupdateurm extends Component {
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
        const email = event.target.username.value;
    
        const message = `Name: ${uname}\nPhone Number: ${phoneno}\nNationality: ${nationality}\nLocation: ${location}\nEthnicity: ${ethnicity}\nEducation: ${education}\nResearch Experience: ${resexp}\n Publications: ${publication}\nPositions: ${positions}\nEmail: ${email}`;
        alert(message);
      };
    render() {
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>


    <AdminSideMenu/>

    <div className="container">
        <section className="card">
            <form onSubmit={this.handleSubmit}> <br/>
            <h2> Update URM Candidate </h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="uname"><b> Name</b></label></th>
                        <td> <input type="text" name="uname" id="uname" placeholder="Enter your name" defaultValue="Rahul"/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                        <td>
                            <input type="text" name="phoneno" id="phoneno" placeholder="Enter your phone number"
                                defaultValue="2144568745"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="nationality"><b>Nationality</b></label></th>
                        <td><input type="text" name="nationality" id="nationality" placeholder="Enter nationality"
                                defaultValue="Indian"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="location"><b>Location</b></label></th>
                        <td><input type="text" name="location" id="location" placeholder="Enter location" defaultValue="Dallas"/>
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
                                defaultValue="3"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="publication"><b>Publications</b></label></th>
                        <td><input type="text" name="publication" id="publication" placeholder="Enter publication" defaultValue="xyz"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="postions" id="postions" placeholder="Enter positions" defaultValue="Post doc"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="username"><b>Email</b></label></th>
                        <td><input type="email" name="username" id="username" placeholder="Enter email"
                                defaultValue="rahul@gmail.com"/> </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="password"><b>Password</b></label></th>
                        <td><input type="text" name="password" id="password" placeholder="Enter Password"
                                defaultValue="*******"/><br/></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="button-container">
                                <button type="Submit" className="button">Save</button>

                            </div>
                            <br/>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </form>
        </section>

        <footer className="foot">
            <p>&copy; Group 9-CSE5335. ALL Rights Reserved. Diversity Connect</p>
        </footer>

    </div>
      </div>
 
    )
  }
}
