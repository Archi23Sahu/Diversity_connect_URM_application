import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Addfaculty extends Component {
     
      handleSubmit = (event) => {
        event.preventDefault();
        const facultyName = event.target.facultyName.value;
        const subject = event.target.subject.value;
        const classValue = event.target.class.value;
        const hours = event.target.hours.value;
        const message = `Faculty Name: ${facultyName}\nSubject: ${subject}\nClass: ${classValue}\nHours: ${hours}`;
        alert(message);
        event.target.reset();
        
      };
    
      
    
    render() {
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>
                <div className="container">
                    <section className="card">
                        <form onSubmit={this.handleSubmit}>
                        
                            <h2> Add Faculty</h2>
                            <table className="form-group">
                                
                                <tbody>
                                    <tr>
                                        <th><label htmlFor="fname"><b>Faculty Name</b></label></th>
                                        <td><input type="text" name="facultyName" id="fname" placeholder="Enter faculty name" required /></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="subject"><b>Subject</b></label></th>
                                        <td><input type="text" name="subject" id="subject" placeholder="Enter subject" /></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="class"><b>Class</b></label></th>
                                        <td><input type="text" name="class" id="class" placeholder="Enter class" /></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="hrs"><b>Hours</b></label></th>
                                        <td><input type="text" name="hours" id="hrs" placeholder="Enter hours" required /></td>
                                    </tr>
                                    <tr>
                                    <td colSpan="2">
                                        <div className="form-group">
                                            <button type="submit" className="button" >Add</button>	
                                        </div><br/>
                                    </td>
                                        
                                    </tr>
                                    
                                </tbody>
                                
                            </table>
                        </form>
                        <br />
                        <div className="button-container">
                            <Link to="/Academiadashboard" className="button">Back to Dashboard</Link>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        );
    }
}
 