import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Adminapplicationstatus extends Component {
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
        <h2> Candidates Application Status</h2>
            <table className="ftable">
                    <thead>
                        <tr>
                            <th>Job Id</th>
                            <th>Application Id</th>
                            <th>Status</th>
                            <th>Student Id</th>

                        </tr>
                    </thead>
                <tbody>
                <tr>
                    <td>1000</td>
                    <td>4590</td>
                    <td>Applied</td>
                    <td>5550</td>

                </tr>
                <tr>
                    <td>1000</td>
                    <td>4591</td>
                    <td>Pending</td>
                    <td>1550</td>

                </tr>
                <tr>
                    <td>1000</td>
                    <td>4596</td>
                    <td>Pending</td>
                    <td>2650</td>

                </tr>
                <tr>
                    <td>1000</td>
                    <td>3590</td>
                    <td>Selected</td>
                    <td>1200</td>

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
