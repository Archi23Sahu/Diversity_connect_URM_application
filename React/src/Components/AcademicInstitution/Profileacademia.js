import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Profileacademia extends Component {
    handleSaveButtonClick = (event) => {
        event.preventDefault();
    
        // Extract values from the form fields
        const institutionName = document.getElementById('aname').value;
        const description = document.getElementById('adesc').value;
        const researchArea = document.getElementById('reserachfocus').value;
        const positions = document.getElementById('postions').value;
        const email = document.getElementById('username').value;
    
        // Display the values in an alert
        const message = `Institution Name: ${institutionName}\nDescription: ${description}\nResearch Area: ${researchArea}\nPositions: ${positions}\nEmail: ${email}`;
        alert(message);
      };
  render() {
    return (
      <div>
        <h1 className="dashhead">Academia Dashboard</h1>

<div className="container">
    <section className="card">
        <form onClick={this.handleSaveButtonClick}> <br/>
        <h2> Academia Profile</h2>
            <table className="form-group">
                <tbody>
                <tr>
                    <th><label htmlFor="aname"><b>Institution Name</b></label></th>
                    <td> <input type="text" name="aname" id="aname" defaultValue="UTA"/></td>
                </tr>
                <tr>
                    <th><label htmlFor="adesc"><b>Description</b></label></th>
                    <td>
                        <textarea rows="4" cols="54" id="adesc" name="adesc"
                            placeholder="Enter your institution description" defaultValue="Welcome to UTA University, a renowned academic institution dedicated to empowering students with knowledge and skills to thrive in a dynamic and interconnected world. With a rich heritage of academic excellence, our institution offers a diverse range of programs and courses designed to foster intellectual curiosity, critical thinking, and real-world problem-solving abilities. Our distinguished faculty comprises experts and scholars from various fields who are committed to providing a transformative learning experience. At Global University, we emphasize holistic education, nurturing students' personal growth, and preparing them to become future leaders and global citizens. Join our vibrant campus community and unlock your potential for success and impact in an ever-evolving global society"/>
                    </td>
                </tr>
                <tr>
                    <th><label htmlFor="reserachfocus"><b>Research Area</b></label></th>
                    <td><input type="text" name="reserachfocus" id="reserachfocus" placeholder="Enter research area"
                            defaultValue="Machine learning"/>
                    </td>
                </tr>
                <tr>
                    <th><label htmlFor="postions"><b>Postions</b></label></th>
                    <td><input type="text" name="postions" id="postions" placeholder="Enter positions" defaultValue="Faculty"/>
                    </td>
                </tr>
                <tr>
                    <th><label htmlFor="username"><b>Email</b></label></th>
                    <td><input type="email" name="username" id="username" placeholder="Enter email"
                            defaultValue="uta@mavs.uta.edu" /> </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <div className="button-container">
                                <button type="submit" className="button" >Save</button>	
                        </div>
                        <br/>
                    </td>
                </tr>
                </tbody>
            </table>

        </form> <br />
        <div className="button-container">
           <Link to="/Academiadashboard" className="button">Back to Dashboard</Link>
        </div>
    </section>

    <Footer/>
</div>
      </div>
    )
  }
}
