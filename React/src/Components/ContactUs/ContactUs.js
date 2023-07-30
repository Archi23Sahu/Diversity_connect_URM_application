import React, { Component } from 'react'
import Footer from '../Footer/Footer'

export default class ContactUs extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const Name = event.target.aname.value;
        const dname = event.target.dname.value;
        const phoneno = event.target.phoneno.value;
        const adesc = event.target.adesc.value;
        const email = event.target.username.value;
        const message = `UserId: ${Name}\nName: ${dname}\nPhone No: ${phoneno}\nComment: ${adesc}\nEmail: ${email}`;
        alert(message);
        event.target.reset();

      };
    render() {
        return (
            <div>
                <div className="container">
                    <section className="card">
                        <form  onSubmit={this.handleSubmit}> <br />
                        <h2> Contact Us</h2>
                            <table className="form-group">
                            <tbody>
                                        <tr>
                                            <th><label htmlFor="aname"><b>User ID</b></label></th>
                                            <td> <input type="text" name="aname" id="aname" placeholder="Enter your User ID" required /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="dname"><b>Name</b></label></th>
                                            <td> <input type="text" name="dname" id="dname" placeholder="Enter your name " required /></td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="phoneno"><b>Phone number</b></label></th>
                                            <td>
                                                <input type="text" name="phoneno" id="phoneno" placeholder="Enter your phone number" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="adesc"><b>Comments</b></label></th>
                                            <td>
                                                <textarea rows="4" cols="53" id="adesc" name="adesc" placeholder="Enter your Comments"></textarea>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th><label htmlFor="username"><b>Email</b></label></th>
                                            <td><input type="email" name="username" id="username" placeholder="Enter email" required /> </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <div className="form-group">

                                                    <input type="submit" value="submit" />
                                                </div><br />
                                            </td>
                                        </tr>
                                   </tbody>
                            </table>
                        </form>
                    </section>
                    <section className="card">
                        <h3> Reach out to:</h3>
                        <p>Phone: <a href="mobile: 6822869981">(682)-286-9981</a><br />
                            Mail to us at: <a href="mailto:diversityconnect@gmail.com">diversityconnect@gmail.com</a></p><br /><br />
                    </section>
                    <Footer />
                </div>
            </div>
        )
    }
}
