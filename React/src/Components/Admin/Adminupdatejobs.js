import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'

export default class Adminupdatejobs extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const jobposition = event.target.jobposition.value;
        const description = event.target.jdesc.value;
        const date = event.target.date.value;
        const location = event.target.location.value;
        const message = `Position: ${jobposition}\nDescription: ${description}\nDate: ${date}\nLocation: ${location}`;
        alert(message);
		event.target.reset();
		 
      };
    render() {
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

    <AdminSideMenu/>

    <div className="container">
        <section className="card">
            <form onSubmit={this.handleSubmit}> <br/>
            <h2> Update Job </h2>
                <table className="form-group">
                    <tbody>
                    <tr>
                        <th><label htmlFor="jobposition"><b>Position</b></label></th>
                        <td> <input type="text" name="jobposition" id="jobposition" defaultValue="UTA"/></td>
                    </tr>
                    <tr>
                        <th><label htmlFor="jdesc"><b>Description</b></label></th>
                        <td>
                            <textarea rows="4" cols="57" id="jdesc"  name="jdesc"
                                placeholder="Enter your institution description" defaultValue="Software"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="date"><b>Date</b></label></th>
                        <td><input type="date" name="" id="date" defaultValue="07/16/2023"/>
                        </td>
                    </tr>
                    <tr>
                        <th><label htmlFor="location"><b>Location</b></label></th>
                        <td><input type="text" name="" id="location" placeholder="Enter location" defaultValue="Dallas"/>
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
