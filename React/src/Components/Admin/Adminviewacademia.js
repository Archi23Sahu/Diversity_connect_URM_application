import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Adminviewacademia extends Component {
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
        <h2>Academic Institution </h2>
            <table className="ftable">
                    <thead>
                        <tr>
                            <th>Institution</th>
                            <th>Description</th>
                            <th>Research Area</th>
                            <th>Postions</th>
                            <th>Delete </th>
                            <th>Update </th>
                        </tr>
                    </thead>

                <tr>
                    <td> UTA </td>
                    <td> Founded in 1895, The University of Texas at Arlington is a Carnegie Research 1 institution
                        with more than 100 years of academic excellence and tradition. </td>
                    <td> Computer Science, Electrical </td>
                    <td>Post doc </td>
                    <td>
                        <div className="button-container"> <button className="button" onClick={() => this.handleDelete('UTA')}>   Delete   </button>   </div>
                    </td>
                    <td>
                        <div className="button-container"> 
                        <Link to="/Adminupdateacademia" className="button">Update</Link>
                         </div>
                    </td>
                </tr>
                <tr>
                    <td> UTD </td>
                    <td> Founded in 1895, The University of Texas at Arlington is a Carnegie Research 1 institution
                        with more than 100 years of academic excellence and tradition. </td>
                    <td> Computer Science, Electrical </td>
                    <td>Phd </td>
                    <td>
                        <div className="button-container"> <button className="button" onClick={() => this.handleDelete('UTD')}>   Delete   </button>   </div>
                    </td>
                    <td>
                        <div className="button-container"> 
                        <Link to="/Adminupdateacademia" className="button">Update</Link>
                         </div>
                    </td>
                </tr>
                <tr>
                    <td> ASU </td>
                    <td> Founded in 1895, The University of Texas at Arlington is a Carnegie Research 1 institution
                        with more than 100 years of academic excellence and tradition. </td>
                    <td> Computer Science, Electrical </td>
                    <td>Faculty </td>
                    <td>
                        <div className="button-container"> <button className="button" onClick={() => this.handleDelete('ASU')}>   Delete   </button>   </div>
                    </td>
                    <td>
                        <div className="button-container"> 
                        <Link to="/Adminupdateacademia" className="button">Update</Link>
                         </div>

                    </td>
                </tr>


            </table>
           
        </section>
        <div className="button-container"> 
            <Link to="/Adminacademiaregistration" className="button">Create new Academic Institution</Link>
            </div>
        <Footer/>

    </div>
      </div>

    )
  }
}
