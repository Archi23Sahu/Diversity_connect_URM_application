import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { AppUrl, jobPosted } from '../../Constants'


export default class Adminviewjobs extends Component {

    
    handleDeleteJobPost=(id)=>{
        alert(`You deleted  ${id} position.`);
    }
    render() {
   
        const jobPostedDetails =jobPosted.map(
            (jobPostData)=>
            <tr key={jobPostData.jobId}>
                <td>{jobPostData.position}</td>
                <td>{jobPostData.jobDescription}</td>
                <td>{jobPostData.date}</td>
                <td>{jobPostData.location}</td>
                <td>
                    <div className="">
                        <a className="button" onClick={()=>this.handleDeleteJobPost(jobPostData.jobId)}>
                            Delete
                        </a>
                    </div>
                </td>
                <td>
                    <div className="">
                        <Link to={AppUrl.Adminupdatejobs} className="button">Update</Link>
                    </div>
                </td>
            </tr>
        );

        
        return (
            <div>
              <h1 className="dashhead">Admin Dashboard</h1>

                    <AdminSideMenu />

                    <div className="container">
                        <section className="card">
                            <h2> Jobs Posted</h2>
                            <table className="ftable">
                                <thead>
                                    <tr>
                                        <th>Position</th>
                                        <th>Job Description</th>
                                        <th>Date</th>
                                        <th>Location</th>
                                        <th> Delete </th>
                                        <th> update </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobPostedDetails}
                                </tbody>
                            </table>
                            <div className="button-container">
                                <Link to={AppUrl.Adminpostjob} className="button">Create new Job Posting</Link>
                            </div>
                        </section>

                        <Footer />
                    </div>
                </div>
          
        )
    }
}
