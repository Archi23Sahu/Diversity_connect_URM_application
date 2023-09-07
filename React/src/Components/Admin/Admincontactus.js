import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'
import AdmincontactService from '../../Services/AdmincontactService'
import AdminService from '../../Services/AdminService';

export default class Admincontactus extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          username:"",
          fetchcontactusdetails: []
        }
      }
  

      componentDidMount() {
        // Fetch personal information and faculty details
       // this.fetchPersonalInfo();
       
            
        this.showCandidate();
      }
    showCandidate(){
        AdminService.fetchContactData()
        .then((response)=>{
            console.log(response);
           this.setState({ fetchcontactusdetails: response.data.phpresult});
        }).catch((error) => {
            alert("error " + error);
        });
    }
      handleInputChange = (event) => {
          this.setState({
              [event.target.name]: event.target.value,
          });
      };
  
      sendEmailClick=(e)=>{
          e.preventDefault();
          const reqData={
              "email":this.state.username
          };
          AdmincontactService.requestForContact(reqData)
          .then((resp)=>{
            debugger;
              console.log(JSON.stringify(resp));
              alert(resp.data.message);
              this.setState({username:''});//reset email id after success.
          }).catch((error)=>{
            debugger;
              alert(error);
          });
      }
    render() {
        const { fetchcontactusdetails } = this.state;
        return (
            <div>
                <h1 className="dashhead">Admin Dashboard</h1>

                <div className="secondarycontent">
                    <div className="center">
                        <div className="wrapper">
                            <div className="sidenav">
                                <Link to="/Admindashboard"> Dashboard</Link>
                                <Link to="/Adminapplicationstatus"> Application Status</Link>
                                <Link to="/Adminviewjobs"> Job posted</Link>
                                <Link to="/Adminviewurm"> URM Candidates</Link>
                                <Link to="/Adminviewrecruiters"> Recruiters</Link>
                                <Link to="/Adminviewdei"> DEI Officers</Link>
                                <Link to="/Adminviewacademia"> Academic Institution</Link>
                                <Link to="/Admincontactus"> Contact Us Questions</Link>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <section className="card">
                            <h2> User Requests</h2>
                            <table className="ftable">
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                        <th>Email</th>
                                        <th>Comment</th>    
                                        <th>Phone Number</th>                                           
                                    </tr>
                                </thead>
                                <tbody>
                                {fetchcontactusdetails.map(
                                        (candidateAppstatus) => <tr key={candidateAppstatus.CONTACTID}>
                                             <td >{candidateAppstatus.CONTACTID}</td>
                                            <td >{candidateAppstatus.EMAIL}</td>
                                            <td>{candidateAppstatus.COMMENTS}</td>
                                            <td>{candidateAppstatus.PHONENO}</td>
                                        </tr>)}
                                    
                                </tbody>  
                            </table>
                            <form onSubmit={this.sendEmailClick}> <br />

                                        <table class="form-group">
                                            <tr>
                                                <tr>
                                                    <tr>
                                                        <th><label for="username"><b>User Email</b></label></th>
                                                        <td><input type="email" name="username" id="username" placeholder="Enter email" required
                                                            value={this.state.username}
                                                            onChange={this.handleInputChange} /> </td>
                                                    </tr>
                                                    <td colspan="2">
                                                        <div class="form-group">
                                                            <input type="submit" value="Send Email" />
                                                        </div><br />
                                                    </td>
                                                </tr>
                                            </tr>
                                        </table>

                                    </form>
                        </section>

                        <Footer />

                    </div>
                </div>
            </div>
        )
    }
}
