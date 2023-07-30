import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
import {loginReponse} from '../../Constants';
import { withRouter } from '../../withRouter';

class login extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           email:"",
           password:"",
           role:"",
           isLogin:false
        }
      }
  
      LoginBtnClick =(e)=>{
          e.preventDefault();
          const {email,password}=this.state;
          let isValid=this.validateLoginFormData(email,password);
          if(isValid === undefined){
              this.setState({role:"",isLogin:false},
              ()=>this.props.onLogin(this.state.isLogin));
              alert('Invalid user credentials');            
          }else {
              console.log('valid user');
              this.setState({role:isValid.role,isLogin:true},
                  ()=>this.props.onLogin(this.state.isLogin)
              );
          }
      }
  
      validateLoginFormData(email,pass){
          //api call to db to get role details if present in db.
          let response = loginReponse;//data from constant file
          const checkIfPresent = response.find((user) => user.email === email && user.pass === pass);
          return checkIfPresent;
  
      }
  
      componentDidUpdate(prevProps, prevState) {
          // Check if the user is logged in and then redirect
          if (this.state.isLogin && !prevState.isLogin) {
              if(this.state.role === "Academia"){
                  //this.props.history.push('/academiaDashboard');
                  this.props.navigate('/Academiadashboard');
              }
            
          }
        }
    render() {
        return (
            <div>
                <div className="container">
                    <section className="card">
                        <h2 className="loginheader">Login</h2>
                        <form onSubmit={this.LoginBtnClick}>
                            <div className="form-group">
                                <label htmlFor="username">Email</label>
                                <input type="email" id="username" placeholder="Enter your email"
                                value={this.state.email} 
                                onChange={e=> this.setState({email:e.target.value})} required />
                            </div>
                            <br />
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" 
                                value={this.state.password} 
                                onChange={e=> this.setState({password:e.target.value})}required />
                            </div>
                            <br />
                            <br />
                            <div className="form-group">
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                        <br />
                        <div className="button-container">
                            <Link to="/register" className="button">Register</Link>
                            <Link to="/forgetPassword" className="button">Forgot Password</Link>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(login);
