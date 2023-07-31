import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'

export default class Adminurmregistration extends Component {
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
        event.target.reset();
      };
    render() {
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

<div className="secondarycontent">
    <AdminSideMenu/>

    <div className="container">
        <section className="card">
            <form onSubmit={this.handleSubmit}> <br/>
             <h2> URM Candidate Registration Form</h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="uname"><b> Name</b></label></th>
                        <td> <input type="text" name="" id="uname" placeholder="Enter your name" required/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                        <td>
                            <input type="text" name="" id="phoneno" placeholder="Enter your phone number" required/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="nationality"><b>Nationality</b></label></th>
                        <td><input type="text" name="" id="nationality" placeholder="Enter nationality"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="location"><b>Location</b></label></th>
                        <td><input type="text" name="" id="location" placeholder="Enter location"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="ethnicity"><b>Ethnicity</b></label></th>
                        <td><input type="text" name="" id="ethnicity" placeholder="Enter ethnicity"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="education"><b>Education</b></label></th>
                        <td><input type="text" name="" id="education" placeholder="Enter education"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="resexp"><b>Research Experience</b></label></th>
                        <td><input type="text" name="" id="resexp" placeholder="Enter research experience"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="publication"><b>Publications</b></label></th>
                        <td><input type="text" name="" id="publication" placeholder="Enter publication"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="" id="postions" placeholder="Enter positions"/> </td>
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
                        <td><input type="email" name="" id="username" placeholder="Enter email" required/> </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="password"><b>Password</b></label></th>
                        <td><input type="text" name="" id="password" placeholder="Enter Password" required/><br/></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="form-group">
                              <button className="button"   type="submit"  >   SignUp   </button>  
                               
                            </div><br/>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </form>
        </section>

        <Footer/>

    </div>
    </div>
    </div>
    )
  }
}
