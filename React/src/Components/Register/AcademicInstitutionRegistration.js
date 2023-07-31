import React, { Component } from 'react'
import Footer from '../Footer/Footer'

export default class AcademicInstitutionRegistration extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const institutionName = event.target.aname.value;
        const description = event.target.adesc.value;
        const researchArea = event.target.reserachfocus.value;
        const positions = event.target.postions.value;
        const email = event.target.username.value;
        const message = `Institution Name: ${institutionName}\nDescription: ${description}\nResearch Area: ${researchArea}\nPositions: ${positions}\nEmail: ${email}`;
        alert(message);
        event.target.reset();

      };
    render() {
        return (
            <div>
                <div className="container">
                    <section className="card">
                        <form onSubmit={this.handleSubmit}> <br/>
                        <h2> Academic Institution Registration Form</h2>
                            <table className="form-group">  
                           
                            <tbody>                          
                                        <tr>
                                            <th><label htmlFor="aname"><b>Institution Name</b></label></th>
                                            <td> <input type="text" name="" id="aname" placeholder="Enter your institution name" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="adesc"><b>Description</b></label></th>
                                            <td>
                                                <textarea rows="4" cols="57" id="adesc"
                                                    placeholder="Enter your institution description"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="reserachfocus"><b>Research Area</b></label></th>
                                            <td><input type="text" name="" id="reserachfocus" placeholder="Enter research area" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="postions"><b>Postions</b></label></th>
                                            <td><input type="text" name="" id="postions" placeholder="Enter positions" /> </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="username"><b>Email</b></label></th>
                                            <td><input type="email" name="" id="username" placeholder="Enter email" required /> </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="password"><b>Password</b></label></th>
                                            <td><input type="text" name="" id="password" placeholder="Enter Password" required /><br/></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <div className="form-group">

                                                    <input type="submit" value="SignUp" />
                                                </div><br/>
                                            </td>
                                        </tr>
                                </tbody> 
                            </table>
                        </form>
                    </section>
                    <Footer />
                </div>
            </div>
        )
    }
}
