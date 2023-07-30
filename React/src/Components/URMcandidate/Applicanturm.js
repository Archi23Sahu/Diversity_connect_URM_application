import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

export default class Applicanturm extends Component {
  render() {
    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
	<div className="container">
    <h2> URM Application Status</h2>
		<section className="card">

			<table className="ftable">
					<thead>
						<tr>
							<th>Job Id</th>
							<th>Application Id</th>
							<th>Status</th>
							<th>Student Id</th>
							<th>Date</th>
						</tr>
					</thead>
				<tbody>
				<tr>
					<td>1000</td>
					<td>4590</td>
					<td>Applied</td>
					<td>1001</td>
					<td>2023/01/01</td>
				</tr>
				</tbody>

			</table>
			<div className="button-container">
            <Link to="/Urmdashboard" className="button">Back to Dashboard</Link>
			</div>
		</section>

		<Footer/>

	</div>
      </div>
    )
  }
}
