import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Applicantsacademia extends Component {
  handleBookmark = (candidateName) => {
		alert(`You saved ${candidateName} for future reference.`);
	  };	
  render() {
    return (
      <div>
        <h1 className="dashhead">Academia Dashboard</h1>
        <div className="container">
          <section className="card">
            <table className="ftable">
              <thead>
                <tr>
                  <th>Job Id</th>
                  <th>Application Id</th>
                  <th>Status</th>
                  <th>Student Id</th>
                  <th>Flag</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1000</td>
                  <td>4590</td>
                  <td>Applied</td>
                  <td>5550</td>
                  <td>
                    <div className="">
                      <button className="button" onClick={() => this.handleBookmark('4590')}>   Bookmark   </button>  
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>4591</td>
                  <td>Pending</td>
                  <td>1550</td>
                  <td>
                    <div className="">
                    <button className="button" onClick={() => this.handleBookmark('4591')}>   Bookmark   </button>  
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>4596</td>
                  <td>Pending</td>
                  <td>2650</td>
                  <td>
                    <div className="">
                    <button className="button" onClick={() => this.handleBookmark('4596')}>   Bookmark   </button>  
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1000</td>
                  <td>3590</td>
                  <td>Selected</td>
                  <td>1200</td>
                  <td>
                    <div className="">
                    <button className="button" onClick={() => this.handleBookmark('3590')}>Bookmark</button>  
                    </div>
                  </td>
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
    );
  }
}