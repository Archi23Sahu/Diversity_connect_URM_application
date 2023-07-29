import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <div>
                <main className="homemid">
                    <h1>DIVERSITY CONNECT</h1>
                    <p className="center">Unleash Your Remarkable Potential with URM <br/> Empowering Success, Igniting Excellence!</p>

                    <div className="button-container">
                        <Link to="/login" className="button">Login</Link>
                        <Link to="/register" className="button">Register</Link>
                    </div>
                </main>

                <Footer />
            </div>
        )
    }
}
