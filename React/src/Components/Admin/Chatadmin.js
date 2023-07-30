import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Chatadmin extends Component {
    state = {
        message: ''
      };
    
      handleInputChange = (event) => {
        this.setState({ message: event.target.value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const { message } = this.state;
        if (message.trim() !== '') {
          alert(message);
          this.setState({ message: '' });
        }
      };
     
      render() {
        const { message } = this.state;
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>


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
    <div className="about_container">
        <div className="chatbox">
            <h2> Admin Chat</h2>
            <div className="chattxt">
                <div className="chats"><br /><br />
                  <div className="sendertxt">Anna</div><br />
                  <div className="sendertxtmsg">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">Hi Martin, How are you?</div><br />
                  <div className="message-author">Martin</div>
                  <div className="message-text">Hi Anna, I am good. What about you?</div><br />
                  <div className="message-author">Anna</div>
                  <div className="message-text">I am good. Thanks for asking. I want to know the requirements for the postdoc position?</div><br />
                </div>

            </div>
            <form className="chatbottom" onSubmit={this.handleSubmit}>
                <input type="text" name="message" id="message" placeholder="Type your message..." onChange={this.handleInputChange} value={message} />
                <button type="submit" className="button">Send</button>
            </form>
        </div>
    </div>

    <Footer/>

</div>
     
      
    )
  }
}
