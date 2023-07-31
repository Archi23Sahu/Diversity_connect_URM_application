import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'

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

        <AdminSideMenu/>

    <div className="container">
        <section className="card">
            <form onSubmit={this.handleSubmit}> <br/>
            <h2> Update Academic Institution Details</h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="aname"><b>Institution Name</b></label></th>
                        <td> <input type="text" name="" id="aname" defaultValue="UTA" /></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="adesc"><b>Description</b></label></th>
                        <td>
                            <textarea rows="4" cols="57" id="adesc"
                                placeholder="Enter your institution description" defaultValue="Welcome to UTA University, a renowned academic institution dedicated to empowering students with knowledge and skills to thrive in a dynamic and interconnected world. With a rich heritage of academic excellence, our institution offers a diverse range of programs and courses designed to foster intellectual curiosity, critical thinking, and real-world problem-solving abilities. Our distinguished faculty comprises experts and scholars from various fields who are committed to providing a transformative learning experience. At Global University, we emphasize holistic education, nurturing students' personal growth, and preparing them to become future leaders and global citizens. Join our vibrant campus community and unlock your potential for success and impact in an ever-evolving global society"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="reserachfocus"><b>Research Area</b></label></th>
                        <td><input type="text" name="" id="reserachfocus" placeholder="Enter research area"
                                defaultValue="Machine learning" />
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="" id="postions" placeholder="Enter positions" defaultValue="Faculty" />
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="username"><b>Email</b></label></th>
                        <td><input type="email" name="" id="username" placeholder="Enter email"
                                defaultValue="uta@mavs.uta.edu" /> </td>
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
    )
  }
}
