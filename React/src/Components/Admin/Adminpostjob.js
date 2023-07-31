import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { jobPosted } from '../../Constants'
import { withRouter } from '../../withRouter';

class Adminpostjob extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobposition: "",
            jdesc: "",
            date: "",
            location: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    postJobSumbit =(e)=>{
        e.preventDefault();
        const {jobposition,jdesc,date,location} =this.state;
        const newId = Math.max(...jobPosted.map((jobPost) => jobPost.jobId)) + 1;
        const newJobPost={
            "jobId":newId.toString,
            "position":jobposition,
            "jobDescription":jdesc,
            "date":date,
            "location":location
        }
        jobPosted.push(newJobPost);
        this.props.navigate('/Adminviewjobs');
    }

    render() {
        const {jobposition,jdesc,date,location} =this.state;
        return (
            <div>
                <h1 className="dashhead">Admin Dashboard</h1>

                    <AdminSideMenu />

                    <div className="container">
                        <section className="card">
                            <form onSubmit={this.postJobSumbit}> <br />
                                <h2> Job Posting Form</h2>
                                <table className="form-group">
                                    <tbody>
                                        <tr>
                                            <th><label htmlFor="jobposition"><b>Position</b></label></th>
                                            <td> <input type="text" name="jobposition" id="jobposition" placeholder="Enter position" required 
                                            value={jobposition}
                                            onChange={this.handleInputChange}/></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="jdesc"><b>Job Description</b></label></th>
                                            <td>
                                                <textarea rows="4" cols="57" id="jdesc" name='jdesc'
                                                    placeholder="Enter your institution description"
                                                    value={jdesc}
                                                    onChange={this.handleInputChange}></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="date"><b>Date</b></label></th>
                                            <td><input type="date" name="date" id="date" 
                                            value={date}
                                            onChange={this.handleInputChange}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="location"><b>Location</b></label></th>
                                            <td><input type="text" name="location" id="location" placeholder="Enter location" 
                                            value={location}
                                            onChange={this.handleInputChange}/> </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <div className="form-group">

                                                    <input type="submit" value="Post Job" />
                                                </div><br />
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

export default withRouter(Adminpostjob);
