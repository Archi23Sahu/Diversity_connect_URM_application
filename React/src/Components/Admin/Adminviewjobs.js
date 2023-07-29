import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Adminviewjobs extends Component {
    handleDelete = (position) => {
		alert(`You deleted  ${position} position.`);
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
                <tr>
                    <td> PostDoc</td>
                    <td> Software </td>
                    <td> 07/16/2023</td>
                    <td> Dallas</td>
                    <td>
                        <div className="">   <button className="button" onClick={() => this.handleDelete('PostDoc')}>   Delete   </button>  
                        </div>
                    </td>
                    <td>
                        <div className=""> 
                         <Link to="/Adminupdatejobs" className="button">Update</Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td> PhD</td>
                    <td> Software </td>
                    <td> 07/16/2023</td>
                    <td> Dallas</td>
                    <td>
                    <div className="">   <button className="button" onClick={() => this.handleDelete('PhD')}>   Delete   </button>  
                        </div>
                    </td>
                    <td>
                        <div className="">  
                         <Link to="/Adminupdatejobs" className="button">Update</Link>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td> Faculty</td>
                    <td> Software </td>
                    <td> 07/16/2023</td>
                    <td> Dallas</td>
                    <td>
                    <div className="">   <button className="button" onClick={() => this.handleDelete('Faculty')}>   Delete   </button>  
                        </div>
                    </td>
                    <td>
                        <div className=""> 
                         <Link to="/Adminupdatejobs" className="button">Update</Link>                        
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
           
        </section><br/><br/>
        <div className="button-container"> 
            <Link to="/Adminpostjob" className="button">Create new Job Posting</Link>
            
            </div>

        
    </div>
    <Footer/>
      </div>
    
    )
  }
}
