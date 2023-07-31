import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'

export default class Adminupdatedei extends Component {
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
        const message = `Name: ${dname}\nDescription: ${description}\nRole: ${role}\nOrganization: ${organization}\nGoals: ${goal}\nInitiatives: ${initiatives}\nNew Initiatives/Events: ${eventInput}\nPositions: ${positions}`;
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
            <h2> Update DEI Officer Details</h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="dname"><b>Name</b></label></th>
                        <td> <input type="text" name="" id="dname" placeholder="Enter your name " defaultValue="DEI1"/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="ddesc"><b>Description</b></label></th>
                        <td> <textarea rows="3" cols="57" id="ddesc"
                                placeholder="Enter description" defaultValue="Description of dei officer"/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="role"><b>Role</b></label></th>
                        <td> <input type="text" name="" id="role" placeholder="Enter role" defaultValue="XYZ"/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="organization"><b>Organization</b></label></th>
                        <td> <input type="text" name="" id="organization" placeholder="Enter your organization"
                                defaultValue="Abacus"/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="goal"><b>Goals</b></label></th>
                        <td> <input type="text" name="" id="goal" placeholder="Enter goals" defaultValue="goal1, goal2"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="initiatives"><b>Initiatives</b></label></th>
                        <td> <input type="text" name="" id="initiatives" placeholder="Enter Initiatives"
                                defaultValue="Initiatives1, Initiatives2"/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="event"><b>new Initiatives/Events</b></label></th>
                        <td> <input type="text" name="" id="event" placeholder="Enter new Initiatives or Events"
                                defaultValue="new Initiatives, new Events"/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                        <td><input type="text" name="" id="postions" placeholder="Enter positions" defaultValue="Post doc"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <div className="button-container">
                                <button type="submit" className="button">Update</button>
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
