import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl, academiaFacultyDetails } from '../../Constants'
import { withRouter } from '../../withRouter';


class Addfaculty extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        //facultyDetails : academiaFacultyDetails,
        facultyName:"",
        subject:"",
        class:"",
        hours:""

      }
    }

    handleInputChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
    };

    addFacultyClick=(e)=>{
        e.preventDefault();
        const {  facultyName, subject,hours } = this.state;
        const newId = Math.max(...academiaFacultyDetails.map((faculty) => faculty.id)) + 1;
        const newFaculty = { id: newId.toString(), name: facultyName, subject: subject,
            class:this.state.class,hours:hours};

        academiaFacultyDetails.push(newFaculty);  
        this.props.navigate('/Academiadashboard');
        
        alert("Faculty details added successfully.");
    }
    
    render() {
        
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>
                <div className="container">
                    <section className="card">
                        <form onSubmit={this.addFacultyClick}>
                        
                            <h2> Add Faculty</h2>
                            <table className="form-group">
                                
                                <tbody>
                                    <tr>
                                        <th><label htmlFor="fname"><b>Faculty Name</b></label></th>
                                        <td><input type="text" name="facultyName" id="fname" placeholder="Enter faculty name" required 
                                        value={this.state.facultyName}
                                        onChange={this.handleInputChange}/></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="subject"><b>Subject</b></label></th>
                                        <td><input type="text" name="subject" id="subject" placeholder="Enter subject" 
                                        value={this.state.subject}
                                        onChange={this.handleInputChange}/></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="class"><b>Class</b></label></th>
                                        <td><input type="text" name="class" id="class" placeholder="Enter class" 
                                        value={this.state.class}
                                        onChange={this.handleInputChange}/></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="hrs"><b>Hours</b></label></th>
                                        <td><input type="text" name="hours" id="hrs" placeholder="Enter hours" required 
                                        value={this.state.hours}
                                        onChange={this.handleInputChange}/></td>
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
                            <Link to={AppUrl.Academiadashboard} className="button">Back to Dashboard</Link>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        );
    }
}


export default withRouter(Addfaculty);