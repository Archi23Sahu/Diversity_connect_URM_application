import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class ForgetPassword extends Component {
    render() {
        return (
            <div>
                <div class="about_container">
                    <section class="aboutin">
                        <div class="about">
                            <div class="about-content">
                                <h2 style={{ textAlign: 'center' }}>Forgot Password?</h2>
                                <h2 style={{ textAlign: 'center' }}>Enter your email address. You will receive a verification email with
                                    instructions.</h2>
                                <section class="card">
                                    <form action="signupconfirmation.html" method="post"> <br />

                                        <table class="form-group">
                                            <tr>
                                                <tr>
                                                    <tr>
                                                        <th><label for="username"><b>Email</b></label></th>
                                                        <td><input type="email" name="" id="username" placeholder="Enter email" required /> </td>
                                                    </tr>
                                                    <td colspan="2">
                                                        <div class="form-group">
                                                            <input type="submit" value="Get Code" />
                                                        </div><br />
                                                    </td>
                                                </tr>
                                            </tr>
                                        </table>

                                    </form>
                                </section>
                            </div>

                            <div class="button-container">
                                <Link to="/register" class="button">Create a New Account? Signup</Link>
                                <Link to="/login" class="button">Return to login</Link>

                            </div>
                        </div>

                    </section>
                </div>

                <Footer />
            </div>
        )
    }
}
