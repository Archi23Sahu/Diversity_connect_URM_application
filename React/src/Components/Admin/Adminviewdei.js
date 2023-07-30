import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Adminviewdei extends Component {
    handleDelete = (Name) => {
		alert(`You deleted  ${Name} Officer.`);
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
        <h2> DEI Officers</h2>
            <table className="ftable">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Description</th>
                            <th>Role</th>
                            <th>Organization</th>
                            <th>Goals</th>
                            <th>Initiatives</th>
                            <th>New Initiatives or Events</th>
                            <th>Postions</th>
                            <th> Delete </th>
                            <th> update </th>
                        </tr>
                    </thead>
                <tbody>
                <tr>
                    <td> DEI1 </td>
                    <td> Description </td>
                    <td> XYZ </td>
                    <td> Abacus </td>
                    <td>Goal1</td>
                    <td>Initiatives1</td>
                    <td>Initiatives1, Event1</td>
                    <td>Post doc </td>
                    <td>
                        <div className=""> <button className="button" onClick={() => this.handleDelete('DEI1')}>   Delete   </button>  </div>
                    </td>
                    <td>
                        <div className=""> 
                         <Link to="/Adminupdatedei" className="button">Update</Link> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td> DEI2 </td>
                    <td> Description </td>
                    <td> XYZ </td>
                    <td> Abacus </td>
                    <td>Goal2</td>
                    <td>Initiatives2</td>
                    <td>Initiatives2, Event2</td>
                    <td>PhD </td>
                    <td>
                        <div className=""> <button className="button" onClick={() => this.handleDelete('DEI2')}>   Delete   </button>  </div>
                    </td>
                    <td>
                        <div className=""> 
                         <Link to="/Adminupdatedei" className="button">Update</Link> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>DEI3 </td>
                    <td>Description </td>
                    <td>XYZ </td>
                    <td>Abacus </td>
                    <td>Goal3</td>
                    <td>Initiatives3</td>
                    <td>Initiatives3, Event3</td>
                    <td>Faculty</td>
                    <td>
                        <div className=""> <button className="button" onClick={() => this.handleDelete('DEI3')}>   Delete   </button>  </div>
                    </td>
                    <td>
                        <div className=""> 
                         <Link to="/Adminupdatedei" className="button">Update</Link> 
                        </div>
                    </td>
                </tr>

            </tbody>
            </table>
            
        </section><br/><br/>

        <div className="button-container"> 
            <Link to="/Admindeiregister" className="button">Create New DEI Officers</Link> 
            </div>

    </div>
    <Footer/>
    </div>

    )
  }
}
