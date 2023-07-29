import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Admindashboard extends Component {
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
                    <div className="tile-container">
                        <div className="box ">
                            Total Number of user: 100
                        </div>
                        <div className="box ">
                            Total number of jobs posted: 50
                        </div>
                        <div className="box ">
                            Total number of application submitted for the jobs: 40
                        </div>
                    </div>
                </div>
            </div>


            <div className="parent">
                <div className='img-container '> <img src="../Pictures/graph1.png"  width="500" height="400" /></div>
                <div className='img-container '><img src="../Pictures/graph2.png" width="500" height="400" /> </div>
            </div>
        <div className="chatbutton chatbutton button">
            <Link to="/Chatadmin" >Chat</Link>
        </div>
    <Footer/>
 </div>
    )
  }
}
