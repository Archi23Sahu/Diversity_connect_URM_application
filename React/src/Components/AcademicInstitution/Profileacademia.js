import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link, Navigate } from 'react-router-dom'
import { AppUrl, academiaPersonalInfo } from '../../Constants'
import { withRouter } from '../../withRouter';


class Profileacademia extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         institution_name:academiaPersonalInfo.institution_name,
         email:academiaPersonalInfo.email,
         desc:academiaPersonalInfo.desc,
         research_focus_area:academiaPersonalInfo.research_focus_area,
         position:academiaPersonalInfo.positions_offered
      }
    }

    profileSubmitClick=(e)=>{
        e.preventDefault();
        const {institution_name,email,desc,research_focus_area,position} =this.state;
        academiaPersonalInfo.institution_name = institution_name;
        academiaPersonalInfo.email=email;
        academiaPersonalInfo.desc=desc;
        academiaPersonalInfo.research_focus_area=research_focus_area;
        academiaPersonalInfo.positions_offered=position;

        this.props.navigate('/Academiadashboard');
        alert("Profile updated successfully.");
    }
    
    render() {
        const {institution_name,email,desc,research_focus_area,position} =this.state;
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>

                <div className="container">
                    <section className="card">
                        <form onSubmit={this.profileSubmitClick}> <br />
                            <h2> Academia Profile</h2>
                            <table className="form-group">
                                <tbody>
                                    <tr>
                                        <th><label htmlFor="aname"><b>Institution Name</b></label></th>
                                        <td> <input type="text" name="" id="aname" value={institution_name} 
                                        onChange={e=> this.setState({institution_name:e.target.value})}/></td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="adesc"><b>Description</b></label></th>
                                        <td>
                                            <textarea rows="4" cols="57" id="adesc"
                                                placeholder="Enter your institution description"
                                                onChange={e=> this.setState({desc:e.target.value})}
                                                value={desc}>                                                    
                                            </textarea>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="reserachfocus"><b>Research Area</b></label></th>
                                        <td><input type="text" name="" id="reserachfocus" placeholder="Enter research area"
                                            value={research_focus_area} 
                                            onChange={e=> this.setState({research_focus_area:e.target.value})}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="postions"><b>Postions</b></label></th>
                                        <td><input type="text" name="" id="postions" placeholder="Enter positions" 
                                        value={position}
                                        onChange={e=> this.setState({position:e.target.value})} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th><label htmlFor="username"><b>Email</b></label></th>
                                        <td><input type="email" name="" id="username" placeholder="Enter email"
                                            value={email} 
                                            onChange={e=> this.setState({email:e.target.value})}/> </td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2">
                                            <div className="button-container">
                                                <button type="submit" href="" className="button">save</button>
                                            </div>
                                            <br />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </form> <br />
                        <div className="button-container">
                            <Link to={AppUrl.Academiadashboard} className="button">Back to Dashboard</Link>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default withRouter(Profileacademia);