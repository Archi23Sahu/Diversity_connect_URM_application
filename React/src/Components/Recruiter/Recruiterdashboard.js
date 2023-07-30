import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';

export default class Recruiterdashboard extends Component {
    handleDelete = (Name) => {
		alert(`You have deleted user ${Name}`);
	  };
    render() {
    return (
      <div>
        <h1 className="dashhead">Recruiter Dashboard</h1>
    <div className="content">

        <div className="left-side">
            <Link to="/Profilerecruiter" className="dashbutton">Edit Profile</Link>
            <Link to="/Viewurmrecruiter" className="dashbutton">Search Matched Candidates</Link>
            <h2>
                <p>Personal Information</p>
            </h2>
            <div className="perinfo">
                <label>Name:</label>
                <input type="text" value="Chartwells" readOnly/>
                <label>Agency:</label>
                <input type="text" value="vervali" readOnly/>
                <label>Clients:</label>
                <input type="text" value="UTA" readOnly/>
                <label>Positions Offered:</label>
                <input type="text" value="Faculty" readOnly/>
                <label>Email:</label>
                <input type="text" value="chart@gmail.com" readOnly/>
            </div>
            <br/>


        </div>
        <div className="right-side">
            <Link to="/Postjobsrecruiter" className="dashbutton"> Create New JobPosting</Link>
            <div className="noinfo">
                <label>No of Job Postings:</label>
                <input type="text" defaultValue="5" readOnly/>
            </div>
            <div className="joblist">
                <div className="job-posting">
                    <h3>Job Title 1</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" defaultValue="140" readOnly/>
                    </div>
                    <Link to="/Applicantrecruiter" className="dashbutton"> See Applicants</Link>
                    <Link to="/Jobviewrecruiter" className="dashbutton"> Details</Link>
                    <a href=""><button className="dashbutton" onClick={() => this.handleDelete('job1')}>Delete</button></a>
                </div>
                <div className="job-posting">
                    <h3>Job Title 2</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" defaultValue="100" readOnly/>
                    </div>
                    <Link to="/Applicantrecruiter" className="dashbutton"> See Applicants</Link>
                    <Link to="/Jobviewrecruiter" className="dashbutton"> Details</Link>
                    <a href=""><button className="dashbutton" onClick={() => this.handleDelete('job2')}>Delete</button></a>
                </div>
                <div className="job-posting">
                    <h3>Job Title 3</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" defaultValue="80" readOnly/>
                    </div>
                    <Link to="/Applicantrecruiter" className="dashbutton"> See Applicants</Link>
                    <Link to="/Jobviewrecruiter" className="dashbutton"> Details</Link>
                    <a href=""><button className="dashbutton" onClick={() => this.handleDelete('job3')}>Delete</button></a>
                </div>
                <div className="job-posting">
                    <h3>Job Title 4</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" defaultValue="90" readOnly/>
                    </div>
                    <Link to="/Applicantrecruiter" className="dashbutton"> See Applicants</Link>
                    <Link to="/Jobviewrecruiter" className="dashbutton"> Details</Link>
                    <a href=""><button className="dashbutton"onClick={() => this.handleDelete('job4')}>Delete</button></a>
                </div>
                <div className="job-posting">
                    <h3>Job Title 5</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" defaultValue="10" readOnly/>
                    </div>
                    <Link to="/Applicantrecruiter" className="dashbutton"> See Applicants</Link>
                    <Link to="/Jobviewrecruiter" className="dashbutton"> Details</Link>
                    <a href=""><button className="dashbutton" onClick={() => this.handleDelete('job5')}>Delete</button></a>
                </div>
            </div>
        </div>
    </div>
    <div className="chatbutton chatbutton button">
    <Link to="/Chatrecruiter" >Chat</Link>
    </div>
    <Footer/>
      </div>
    )
  }
}
