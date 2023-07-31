import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { academiaPersonalInfo,academiaFacultyDetails, AppUrl } from '../../Constants'


export default class Academiadashboard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        institution_name:academiaPersonalInfo.institution_name,
         email:academiaPersonalInfo.email,
         desc:academiaPersonalInfo.desc,
         research_focus_area:academiaPersonalInfo.research_focus_area,
         position:academiaPersonalInfo.positions_offered,

         facultyDetails : academiaFacultyDetails
      }
    }
    
    
    render() {
        const {institution_name,email,desc,research_focus_area,position,facultyDetails} =this.state;
        const facultyList = this.state.facultyDetails.map(faculty=> <tr key={faculty.id}>
            <td>{faculty.id}</td>
            <td>{faculty.name}</td>
            <td>{faculty.subject}</td>
            <td>{faculty.class}</td>
            <td>{faculty.hours}</td>
        </tr>)
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>
                <div className="content">

                    <div className="left-side">
                        <Link to={AppUrl.Profileacademia} className="button">Edit Profile</Link>
                        <Link to={AppUrl.Bookmarkedcandidates} className="button">Bookmarked Candidates</Link>
                        <Link to={AppUrl.Viewurmcandidate} className="button">Search</Link>
                        <h2>
                            <p>Personal Information</p>
                        </h2>
                        <div className="perinfo">
                            <label>Institution Name:</label>
                            <input type="text" value={institution_name} readOnly />
                                <label>Research focus area:</label>
                                <input type="text" value={research_focus_area} readOnly />
                                    <label>Email:</label>
                                    <input type="text" value={email} readOnly />
                                        <label>Positions Offered:</label>
                                        <input type="text" value={position} readOnly />
                                        </div>
                                        <br />
                                            <div className="Facultysec">
                                                <h2>Faculty</h2>
                                                <Link to={AppUrl.Addfaculty} className="button">Add Faculty</Link>
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
                                                    {facultyList}
                                                </tbody>

                                            </table>
                                        </div>
                                        <div className="right-side">
                                            <Link to={AppUrl.Jobposts} className="button">Post Jobs</Link>
                                            <div className="joblist">
                                                <div className="job-posting">
                                                    <h3>Job Title 1</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="140" readOnly />
                                                    </div>
                                                    <Link to={AppUrl.Applicantsacademia} className="button">See all Applicants</Link>
                                                    <Link to={AppUrl.Academiajobview} className="button">Details</Link>
                                                </div>
                                                <div className="job-posting">
                                                    <h3>Job Title 2</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="90" readOnly />
                                                    </div>
                                                    <Link to={AppUrl.Applicantsacademia} className="button">See all Applicants</Link>
                                                    <Link to={AppUrl.Academiajobview} className="button">Details</Link>
                                                </div>
                                                <div className="job-posting">
                                                    <h3>Job Title 3</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="100" readOnly />
                                                    </div>
                                                    <Link to={AppUrl.Applicantsacademia} className="button">See all Applicants</Link>
                                                    <Link to={AppUrl.Academiajobview} className="button">Details</Link>
                                                </div>
                                                <div className="job-posting">
                                                    <h3>Job Title 4</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="110" readOnly />
                                                    </div>
                                                    <Link to={AppUrl.Applicantsacademia} className="button">See all Applicants</Link>
                                                    <Link to={AppUrl.Academiajobview} className="button">Details</Link>
                                                </div>
                                                <div className="job-posting">
                                                    <h3>Job Title 5</h3>
                                                    <div className="noinfo">
                                                        <label>No of candidates applied:</label>
                                                        <input type="text" defaultValue="140" readOnly />
                                                    </div>
                                                    <Link to={AppUrl.Applicantsacademia} className="button">See all Applicants</Link>
                                                    <Link to={AppUrl.Academiajobview} className="button">Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chatbutton chatbutton button">
                                        <Link to={AppUrl.Chatacademia} >Chat</Link>
                                    </div>
                                    <Footer />
                                </div>
                                )
  }
}
