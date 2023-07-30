import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Adminviewrecruiters extends Component {
    handleDelete = (name) => {
		alert(`You deleted  ${name} recruiter.`);
	  };
    render() {
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

<div className="secondarycontent">
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
        <h2> Recruiters</h2>
            <table className="ftable">
                    <thead> 
                        <tr>
                            <th> Name</th>
                            <th>Description</th>
                            <th>Agency</th>
                            <th>Client</th>
                            <th>Postions</th>
                            <th> Delete </th>
                            <th> update </th>
                        </tr>
                    </thead>
                <tbody>
                <tr>
                    <td> Recruiters1 </td>
                    <td> Description </td>
                    <td> XYZ </td>
                    <td> Abacus </td>
                    <td>Post doc </td>
                    <td>
                    <div className="">   <button className="button" onClick={() => this.handleDelete('Recruiter1')}>   Delete   </button>  </div>
                    </td>
                    <td>
                        <div className=""> <Link to="/Adminupdaterecruiters" className="button">Update</Link> </div>
                    </td>
                </tr>
                <tr>
                    <td> Recruiters2 </td>
                    <td> Description </td>
                    <td> XYZ </td>
                    <td> Abacus </td>
                    <td>PhD </td>
                    <td>
                    <div className="">   <button className="button" onClick={() => this.handleDelete('Recruiter2')}>   Delete   </button>  </div>
                    </td>
                    <td>
                        <div className=""> <Link to="/Adminupdaterecruiters" className="button">Update</Link> </div>
                    </td>
                </tr>
                <tr>
                    <td> Recruiters3 </td>
                    <td> Description </td>
                    <td> XYZ </td>
                    <td> Abacus </td>
                    <td>Faculty</td>
                    <td>
                    <div className="">   <button className="button" onClick={() => this.handleDelete('Recruiter3')}>   Delete   </button>  </div>
                    </td>
                    <td>
                        <div className=""> <Link to="/Adminupdaterecruiters" className="button">Update</Link> </div>
                    </td>
                </tr>

                </tbody>
            </table>
            <div className="button-container"> 
            <Link to="/Adminrecruiterregistration" className="button">Create new Recruiter</Link>
            </div>
        </section>

        <Footer/>
    </div>
      </div>
      </div>
    )
  }
}
