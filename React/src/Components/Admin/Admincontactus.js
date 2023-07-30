import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Admincontactus extends Component {
    handleResponse = (email) => {
		alert(`response send to ${email}`);
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
        <h2> User Requests</h2>
            <table className="ftable">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Comment</th>
                            <th>Response</th>
                        </tr>
                    </thead>
                <tbody>
                <tr>
                    <td> xyz@gmail.com </td>
                    <td>I am not able to upload Cover letter. </td>
                    <td>
                    
                        <div className="button-container"><button className="button" onClick={() => this.handleResponse('xyz@gmail.com ')}>   Response   </button> 
                        </div>
                    </td>

                </tr>
                <tr>
                    <td> xyz@gmail.com </td>
                    <td>I am not able to upload Cover letter. </td>
                    <td>
                    <div className="button-container"><button className="button" onClick={() => this.handleResponse('xyz@gmail.com ')}>   Response   </button> 
                        </div>
                    </td>
                </tr>
            </tbody>                
            </table>

        </section>

        <Footer/>

    </div>
      </div>
  
    )
  }
}
