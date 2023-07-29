import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'


export default class Adminacademiaregistration extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const institutionName = event.target.aname.value;
        const description = event.target.adesc.value;
        const researchArea = event.target.reserachfocus.value;
        const positions = event.target.postions.value;
        const email = event.target.username.value;
        const message = `Institution Name: ${institutionName}\nDescription: ${description}\nResearch Area: ${researchArea}\nPositions: ${positions}\nEmail: ${email}`;
        alert(message);
        event.target.reset();

      };
    render() {
        return (
            <div>
                <h1 className="dashhead">Admin Dashboard</h1>

                
                    <div className="center">
                        <div className="wrapper">
                            <div className="sidenav">
                            <Link to="/Admindashboard"> Dashboard</Link>
                            <Link to="/Adminapplicationstatus"> Application Status</Link>
                            <Link to="/Adminviewjobs"> Job posted</Link>
                            <Link to="/Adminviewurm"> URM Candidates</Link>
                            <Link to="/Adminviewrecruiters"> Recruiters</Link>
                            <Link to="/Adminviewdei"> DEI Officers</Link>
                            <Link to="/Adminviewacademia"> Academic Institution</Link>
                            <Link to="/Admincontactus"> Contact Us Questions</Link>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <section className="card">
                            <form onSubmit={this.handleSubmit}> <br />
                                <h2> Academic Institution Registration Form</h2>
                                <table className="form-group">
                                    <tbody>
                                    <tr>
                                        <th><label htmlFor="aname"><b>Institution Name</b></label></th>
                                        <td> <input type="text" name="" id="aname" placeholder="Enter your institution name"
                                            required /></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="adesc"><b>Description</b></label></th>
                                        <td>
                                            <textarea rows="4" cols="54" id="adesc"
                                                placeholder="Enter your institution description"></textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="reserachfocus"><b>Research Area</b></label></th>
                                        <td><input type="text" name="" id="reserachfocus" placeholder="Enter research area" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                                        <td><input type="text" name="" id="postions" placeholder="Enter positions" /> </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="username"><b>Email</b></label></th>
                                        <td><input type="email" name="" id="username" placeholder="Enter email" required /> </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="password"><b>Password</b></label></th>
                                        <td><input type="text" name="" id="password" placeholder="Enter Password" required /><br /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="form-group">
                                                <button type="submit" className="button" >SignUp</button>
                                            </div><br />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                            </form>
                        </section>

                        <Footer />
                    </div>
                    </div>
               
                )
  }
}
