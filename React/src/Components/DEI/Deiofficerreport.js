import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { AppUrl } from '../../Constants'

export default class Deiofficerreport extends Component {
  render() {
    return (
      <div>
        <h1 className="dashhead">DEI Officer Dashboard</h1>
	    <div className="container">
		<section className="card">
			<h2>Report</h2>
			<div className="image-container">
				<div> <img src="../Pictures/graph1.png" width="600px" height="400px" /></div>
				<div><img src="../Pictures/graph3.png" width="600px" height="400px" /> </div>
			</div>
			<br /><br />

			<div className="button-container">
            <Link to={AppUrl.Deidashboard} className="button">Back to Dashboard</Link>
			</div>

		</section>
		<Footer/>

	</div>

    </div>
    )
  }
}
