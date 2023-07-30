import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Academiadashboard extends Component {
    render() {
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>
                <div className="content">

                    <div className="left-side">
                        <Link to="/Profileacademia" className="button">Edit Profile</Link>
                        <Link to="/Bookmarkedcandidates" className="button">Bookmarked Candidates</Link>
                        <Link to="/Viewurmcandidate" className="button">Search</Link>
                        <h2>
                            <p>Personal Information</p>
                        </h2>
                        <div className="perinfo">
                            <label>Institution Name:</label>
                            <input type="text" value="UTA" readOnly />
                                <label>Research focus area:</label>
                                <input type="text" value="Machine learning" readOnly />
                                    <label>Email:</label>
                                    <input type="text" value="UTA@mavs.edu.in" readOnly />
                                        <label>Positions Offered:</label>
                                        <input type="text" value="Faculty" readOnly />
                                        </div>
                                        <br />
                                            <div className="Facultysec">
                                                <h2>Faculty</h2>
                                                <Link to="/Addfaculty" className="button">Add Faculty</Link>
                                            </div>
                                            <table className="ftable">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Subject</th>
                                                        <th>Class</th>
                                                        <th>Hours</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1001</td>
                                                        <td>San</td>
                                                        <td>WDM</td>
                                                        <td>CSE5335</td>
                                                        <td>20</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1002</td>
                                                        <td>Ron</td>
                                                        <td>DAMT</td>
                                                        <td>CSE5353</td>
                                                        <td>20</td>
                                                    </tr>
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className="right-side">
                                            <Link to="/jobposts" className="button">Post Jobs</Link>
                                            <div className="joblist">
                                                <div className="job-posting">
                                                    <h3>Job Title 1</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="140" readOnly />
                                                    </div>
                                                    <Link to="/Applicantsacademia" className="button">See all Applicants</Link>
                                                    <Link to="/Academiajobview" className="button">Details</Link>
                                                </div>
                                                <div className="job-posting">
                                                    <h3>Job Title 2</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="90" readOnly />
                                                    </div>
                                                    <Link to="/Applicantsacademia" className="button">See all Applicants</Link>
                                                    <Link to="/Academiajobview" className="button">Details</Link>
                                                </div>
                                                <div className="job-posting">
                                                    <h3>Job Title 3</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="100" readOnly />
                                                    </div>
                                                    <Link to="/Applicantsacademia" className="button">See all Applicants</Link>
                                                    <Link to="/Academiajobview" className="button">Details</Link>
                                                </div>
                                                <div className="job-posting">
                                                    <h3>Job Title 4</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="110" readOnly />
                                                    </div>
                                                    <Link to="/Applicantsacademia" className="button">See all Applicants</Link>
                                                    <Link to="/Academiajobview" className="button">Details</Link>
                                                </div>
                                                <div className="job-posting">
                                                    <h3>Job Title 5</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="140" readOnly />
                                                    </div>
                                                    <Link to="/Applicantsacademia" className="button">See all Applicants</Link>
                                                    <Link to="/Academiajobview" className="button">Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="chatbutton chatbutton button">
                                        <Link to="/Chatacademia" className="">Chat</Link>
                                    </div>
                                    <Footer />
                                </div>
                                )
  }
}
