import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { candidateApplicationStats } from '../../Constants'

export default class Adminapplicationstatus extends Component {
    render() {
        const candidateStatusDetails = candidateApplicationStats.map(
            (candidateAppstatus) => <tr key={candidateAppstatus.applicationId}>
                <td>{candidateAppstatus.jobId}</td>
                <td>{candidateAppstatus.applicationId}</td>
                <td>{candidateAppstatus.status}</td>
                <td>{candidateAppstatus.studentId}</td>
            </tr>)
        return (
            <div>
                <h1 className="dashhead">Admin Dashboard</h1>

                    <AdminSideMenu />
                    <div className="container">
                        <section className="card">
                            <h2> Candidates Application Status</h2>
                            <table className="ftable">
                                <thead>
                                    <tr>
                                        <th>Job Id</th>
                                        <th>Application Id</th>
                                        <th>Status</th>
                                        <th>Student Id</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {candidateStatusDetails}
                                </tbody>
                            </table>

                        </section>

                        <Footer />

                </div>
            </div>
        )
    }
}
