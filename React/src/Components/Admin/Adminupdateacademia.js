import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Adminupdateacademia extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const institutionName = event.target.aname.value;
        const description = event.target.adesc.value;
        const researchArea = event.target.reserachfocus.value;
        const positions = event.target.postions.value;
        const email = event.target.username.value;
        const message = `Institution Name: ${institutionName}\nDescription: ${description}\nResearch Area: ${researchArea}\nPositions: ${positions}\nEmail: ${email}`;
        alert(message);
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
            <form onSubmit={this.handleSubmit}> <br/>
            <h2> Update Academic Institution Details</h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="aname"><b>Institution Name</b></label></th>
                        <td> <input type="text" name="" id="aname" value="UTA" /></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="adesc"><b>Description</b></label></th>
                        <td>
                            <textarea rows="4" cols="54" id="adesc"
                                placeholder="Enter your institution description">Welcome to UTA University, a renowned academic institution dedicated to empowering students with knowledge and skills to thrive in a dynamic and interconnected world. With a rich heritage of academic excellence, our institution offers a diverse range of programs and courses designed to foster intellectual curiosity, critical thinking, and real-world problem-solving abilities. Our distinguished faculty comprises experts and scholars from various fields who are committed to providing a transformative learning experience. At Global University, we emphasize holistic education, nurturing students' personal growth, and preparing them to become future leaders and global citizens. Join our vibrant campus community and unlock your potential for success and impact in an ever-evolving global society.</textarea>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="reserachfocus"><b>Research Area</b></label></th>
                        <td><input type="text" name="" id="reserachfocus" placeholder="Enter research area"
                                value="Machine learning" />
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="" id="postions" placeholder="Enter positions" value="Faculty" />
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="username"><b>Email</b></label></th>
                        <td><input type="email" name="" id="username" placeholder="Enter email"
                                value="uta@mavs.uta.edu" /> </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <div className="button-container">
                                <button type="submit" className="button">Save</button>

                            </div>
                            <br/>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </form>
        </section>

        <Footer/>

    </div>
    </div>
    </div>
    )
  }
}
