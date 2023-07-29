import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Role extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <header className="header">
                    </header>
                    <section>
                        <div className="center">
                            <h2>Select your role</h2>
                        </div>

                        <br />
                        <div className="links">
                            <Link to="/URMCandidateRegistreation">URM Candidate</Link>
                            <Link to="/AcademicInstitutionRegistreation">Academic Institution</Link>
                            <Link to="/RecruiterRegistreation">Recruiter</Link>
                            <Link to="/DEIOfficerRegistreation">DEI Officer</Link>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        )
    }
}
