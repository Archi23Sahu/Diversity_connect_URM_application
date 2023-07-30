import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           
        }
      }
    render() {
        return (
            <div>
                <div className="navbar">
                    <ul>
                        {!this.props.isLogin && <li><Link to="/">HOME</Link></li>}
                        <li><Link to="/">BLOG</Link></li>
                        <li className="dropdown">
                            <a href="#">SERVICES</a>
                            <div className="dropdown-content">
                                <Link to="/urmCandidateService">CANDIDATE</Link>
                                <Link to="/servicesAcademia">ACADEMIA</Link>
                                <Link to="/servicesDEI">DEI</Link>
                                <Link to="/serviceRecruiter">RECRUITER</Link>
                                <Link to="/Academiadashboard">ACADEMIA test</Link>
                                <Link to="/Urmdashboard">Candidate test</Link>
                                <Link to="/Deidashboard">Dei test</Link>
                                <Link to="/Admindashboard">Admin test</Link>
                                <Link to="/Recruiterdashboard">Recruiter test</Link>
                            </div>
                        </li>
                        <li><Link to="/aboutUs">ABOUT US</Link></li>
                        <li><Link to="/contactUs">CONTACT US</Link></li>
                        {this.props.isLogin && <li><Link to="/">LOGOUT</Link></li>}

                    </ul>
                </div>
            </div>
        )
    }
}
