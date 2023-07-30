import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Adminpostjob extends Component {
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
            <form onSubmit={this.handleSubmit}> <br/>
            <h2> Job Posting Form</h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="jobposition"><b>Position</b></label></th>
                        <td> <input type="text" name="" id="jobposition" placeholder="Enter position" required/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="jdesc"><b>Job Description</b></label></th>
                        <td>
                            <textarea rows="4" cols="54" id="jdesc"
                                placeholder="Enter your institution description"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="date"><b>Date</b></label></th>
                        <td><input type="date" name="" id="date"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="location"><b>Location</b></label></th>
                        <td><input type="text" name="" id="location" placeholder="Enter location"/> </td>
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

            </form>
        </section>

        <Footer/>

    </div>
      
      </div>
    )
  }
}
