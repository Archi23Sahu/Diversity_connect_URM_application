import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Bookmarkedcandidates extends Component {
    render() {
        return (
            <div>
                <h1 className="dashhead">Academia Dashboard</h1>
                <div className="container">
                    <section className="card">
                        <h2>Bookmarked Candidates</h2>
                        <table className="ftable">
                            <thead>
                                <tr>
                                    <th>School Name</th>
                                    <th>Student Id</th>
                                    <th>Name</th>
                                    <th>Nationality</th>
                                    <th>Ethnicity</th>
                                    <th>Research topic</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>UTA</td>
                                    <td>1003</td>
                                    <td>Elon</td>
                                    <td>Indian</td>
                                    <td>Asian</td>
                                    <td>ML</td>
                                    <td>Pending</td>
                                </tr>
                                <tr>
                                    <td>UTD</td>
                                    <td>1193</td>
                                    <td>Musk</td>
                                    <td>Fijian</td>
                                    <td>Koreans</td>
                                    <td>ML</td>
                                    <td>Selected</td>
                                </tr>
                                <tr>
                                    <td>NEU</td>
                                    <td>2003</td>
                                    <td>Hisoka</td>
                                    <td>Algerian</td>
                                    <td>Filipino</td>
                                    <td>ML</td>
                                    <td>Applied</td>
                                </tr>
                                <tr>
                                    <td>SFU</td>
                                    <td>1053</td>
                                    <td>winso</td>
                                    <td>Gambian</td>
                                    <td>Irish</td>
                                    <td>ML</td>
                                    <td>Applied</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="button-container">
                            <Link to="/Academiadashboard" className="button">Back to Dashboard</Link>
                        </div>
                    </section>

                    <Footer />
                </div>
            </div>
        )
    }
}