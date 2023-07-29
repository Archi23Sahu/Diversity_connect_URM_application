import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Adminviewurm extends Component {
    handleDelete = (Name) => {
		alert(`You have deleted user ${Name}`);
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

    <div className="admincontainer">
        <section className="admincard">
        <h2> URM Candidate</h2>
            <table className="ftable">
                    <thead>
                        <tr>
                            <th> Name</th>
                            <th>Phone number</th>
                            <th>Nationality</th>
                            <th>Location</th>
                            <th>Ethnicity</th>
                            <th>Education</th>
                            <th>Research Experience</th>
                            <th>Publications</th>
                            <th>Postions</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                <tbody>
                <tr>
                    <td> Rahul </td>
                    <td> 2144568745</td>
                    <td> Indian </td>
                    <td> Dallas </td>
                    <td> Asian </td>
                    <td>masters </td>
                    <td> 3</td>
                    <td> xyz</td>
                    <td>Post doc </td>
                    <td>
                        <div className="button-container"><button onClick={() => this.handleDelete('Rahul')} className="button">Delete</button></div>
                    </td>
                    <td>
                        <div className="button-container"> 
                        <Link to="/Adminupdateurm" className="button">Update</Link> 
                        </div>
                    </td>

                </tr>
                <tr>
                    <td> Anjali </td>
                    <td> 2844568788</td>
                    <td> Indian </td>
                    <td> Dallas </td>
                    <td> Asian </td>
                    <td>masters </td>
                    <td> 3</td>
                    <td> xyz</td>
                    <td>PhD </td>
                    <td>
                        <div className="button-container"> <button onClick={() => this.handleDelete('Anjali')} className="button">Delete</button> </div>
                    </td>
                    <td>
                        <div className="button-container"> 
                         <Link to="/Adminupdateurm" className="button">Update</Link> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td> Zara </td>
                    <td> 2144987745</td>
                    <td> Indian </td>
                    <td> Dallas </td>
                    <td> Asian </td>
                    <td>masters </td>
                    <td> 3</td>
                    <td> xyz</td>
                    <td>Faculty</td>
                    <td>
                        <div className="button-container"> <button onClick={() => this.handleDelete('Zara')} className="button">Delete</button> </div>
                    </td>
                    <td>
                        <div className="button-container"> 
                         <Link to="/Adminupdateurm" className="button">Update</Link> 
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>
            
        </section><br/><br/>
        <div className="button-container"> 
                <Link to="/Adminurmregistration" className="button">Create new URM Candidate</Link> 
            </div>
      

    </div>
    <Footer/>
    </div>
 
    )
  }
}
