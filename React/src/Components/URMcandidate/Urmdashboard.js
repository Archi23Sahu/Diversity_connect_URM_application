import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'

export default class Urmdashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
       <div className="content">

        <div className="left-side">
            <Link to={AppUrl.Profileurm} className="button">Edit Profile</Link>
            <h2>
                <p>Personal Information</p>
            </h2>
            <div className="perinfo">
                <label>Name:</label>
                <input type="text" value="Shax" readOnly />
                <label>Phone No:</label>
                <input type="text" value="(682)998444" readOnly />
                <label>Email:</label>
                <input type="text" value="shax@mavs.edu.in" readOnly />
                <label>Location:</label>
                <input type="text" value="USA" readOnly />
                <label>Nationality:</label>
                <input type="text" value="Indian" readOnly />
                <label>Ethnicity:</label>
                <input type="text" value="Asian" readOnly />
                <label>Education:</label>
                <input type="text" value="Masters" readOnly />
                <label>Research focus area:</label>
                <input type="text" value="Machine learning" readOnly />
                <label>Publications:</label>
                <input type="text" value="IEEE-2019-ML" readOnly />
                <label>Positions Interested:</label>
                <input type="text" value="Faculty" readOnly />
                <label>Resume:</label>
                <input type="file" value="" accept=".pdf,.doc,.docx" readOnly />
                <label>CV:</label>
                <input type="file" value="" readOnly />
            </div>
            <br/>

        </div>
        <div className="right-side">
            <Link to={AppUrl.Urmcheckjobroles} className="dashbutton">Check Available Job Roles</Link>
            <h2>Applied Jobs</h2>
            <div className="joblist">
                <div className="job-posting">
                    <h3>Job Title 1</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to={AppUrl.Applicanturm} className="button">View Job Status</Link>
                    <Link to={AppUrl.Jobviewurm} className="button">Details</Link>
                </div>
                <div className="job-posting">
                    <h3>Job Title 2</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to={AppUrl.Applicanturm} className="button">View Job Status</Link>
                    <Link to={AppUrl.Jobviewurm} className="button">Details</Link>
                </div>
                <div className="job-posting">
                    <h3>Job Title 3</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to={AppUrl.Applicanturm} className="button">View Job Status</Link>
                    <Link to={AppUrl.Jobviewurm} className="button">Details</Link>
                </div>
                <div className="job-posting">
                    <h3>Job Title 4</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to={AppUrl.Applicanturm} className="button">View Job Status</Link>
                    <Link to={AppUrl.Jobviewurm} className="button">Details</Link>
                </div>
                <div className="job-posting">
                    <h3>Job Title 5</h3>
                    <div className="noinfo">
                        <label>No of candidates applied:</label>
                        <input type="text" value="140" readOnly />
                    </div>
                    <Link to={AppUrl.Applicanturm} className="button">View Job Status</Link>
                    <Link to={AppUrl.Jobviewurm} className="button">Details</Link>
                </div>
            </div>

        </div>
        <div className="chatbutton chatbutton button">
        <Link to={AppUrl.Chaturm} >Chat</Link>
        </div>

    </div>
   <Footer/>
      </div>
    )
  }
}
