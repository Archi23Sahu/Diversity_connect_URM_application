import React, { Component } from 'react'
import Footer from '../Footer/Footer'

export default class DEIOfficerRegistration extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const dname = event.target.dname.value;
        const description = event.target.ddesc.value;
        const role = event.target.role.value;
        const organization = event.target.organization.value;
        const goal = event.target.goal.value;
        const initiatives = event.target.initiatives.value;
        const eventInput = event.target.event.value;
        const positions = event.target.postions.value;
        const email = event.target.username.value;
        const message = `Name: ${dname}\nDescription: ${description}\nRole: ${role}\nOrganization: ${organization}\nGoals: ${goal}\nInitiatives: ${initiatives}\nNew Initiatives/Events: ${eventInput}\nPositions: ${positions}\nEmail: ${email}`;
        alert(message);
        event.target.reset();
      };
    render() {
        return (
            <div>
                <div className="container">
                    <section className="card">
                        <form  onSubmit={this.handleSubmit}> <br/>
                        <h2> DEI Officer Registration Form</h2>
                            <table className="form-group">
                                <tbody>
                                    
                                        <tr>
                                            <th><label htmlFor="dname"><b>Name</b></label></th>
                                            <td> <input type="text" name="" id="dname" placeholder="Enter your name " required /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="ddesc"><b>Description</b></label></th>
                                            <td> <textarea rows="3" cols="54" id="ddesc" placeholder="Enter description"></textarea></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="role"><b>Role</b></label></th>
                                            <td> <input type="text" name="" id="role" placeholder="Enter role" /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="organization"><b>Organization</b></label></th>
                                            <td> <input type="text" name="" id="organization" placeholder="Enter your organization" /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="goal"><b>Goals</b></label></th>
                                            <td> <input type="text" name="" id="goal" placeholder="Enter goals" /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="initiatives"><b>Initiatives</b></label></th>
                                            <td> <input type="text" name="" id="initiatives" placeholder="Enter Initiatives" /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="event"><b>New Initiatives/Events</b></label></th>
                                            <td> <input type="text" name="" id="event" placeholder="Enter new Initiatives or Events" /></td>
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
                                            <td><input type="text" name="" id="password" placeholder="Enter Password" required /><br /></td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <div className="form-group">

                                                    <input type="submit" value="SignUp" />
                                                </div><br />
                                            </td>
                                        </tr>
                                  </tbody>
                            </table>
                        </form>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}
