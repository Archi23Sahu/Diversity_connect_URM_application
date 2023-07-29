import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Deidashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
    <div className="content">

        <div className="left-side">
            <Link to="/Profiledeiofficer" className="dashbutton">Edit Profile</Link>
            <Link to="/Deiofficerreport" className="dashbutton">Report</Link>
            <Link to="/Deiviewurmcandidate" className="dashbutton">Search URM Candidate</Link>
            <h2>
                <p>Personal Information</p>
            </h2>
            <div className="perinfo">
                <label> Name:</label>
                <input type="text" value="DEI1" readOnly />
                <label>Organization:</label>
                <input type="text" value="XYZ" readOnly />
                <label>Goals:</label>
                <input type="text" value="goals" readOnly />
                <label>Initiatives:</label>
                <input type="text" value="initiatives" readOnly />
                <label>New Initiatives or Events:</label>
                <input type="text" value="new Initiatives or Events" readOnly />
                <label>Email:</label>
                <input type="text" value="dei@mavs.edu.in" readOnly />
                <label>Positions Offered:</label>
                <input type="text" value="Faculty" readOnly />
            </div>



        </div>
        <div className="right-side">
            <Link to="/Deipostjobs" className="dashbutton">Create Jobs</Link>
            <Link to="/Deiapprovepostjobs" className="dashbutton">Approve Jobs</Link>
            <div className="joblist">
                <div className="job-posting">
                    <h3>Job Title 1</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to="/Deiapplicant" className="button">See all Applicants</Link>
                    <Link to="/Deijobview" className="dashbutton">Details</Link>
                </div>
                <div className="job-posting">
                    <h3>Job Title 2</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to="/Deiapplicant" className="button">See all Applicants</Link>
                    <Link to="/Deijobview" className="dashbutton">Details</Link>
                </div>
                <div className="job-posting">
                    <h3>Job Title 3</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to="/Deiapplicant" className="button">See all Applicants</Link>
                    <Link to="/Deijobview" className="dashbutton">Details</Link>
                </div>
                <div className="job-posting">
                    <h3>Job Title 4</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to="/Deiapplicant" className="button">See all Applicants</Link>
                    <Link to="/Deijobview" className="dashbutton">Details</Link>
                </div>
                <div className="job-posting">
                    <h3>Job Title 5</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to="/Deiapplicant" className="button">See all Applicants</Link>
                    <Link to="/Deijobview" className="dashbutton">Details</Link>
                </div>
            </div>
        </div>
    </div>
    <div className="chatbutton chatbutton button">
        <Link to="/Chatdei" className="">Chat</Link>
    </div>
   <Footer/>
    </div>
    )
  }
}
