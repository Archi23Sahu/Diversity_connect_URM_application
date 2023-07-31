import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import AdminSideMenu from './AdminSideMenu'
import { AppUrl } from '../../Constants'

export default class Admindashboard extends Component {
  render() {
    return (
      <div>
        <h1 className="dashhead">Admin Dashboard</h1>

       
            <div className="center">
                <div className="wrapper">
                <AdminSideMenu/>
                    <div className="tile-container">
                        <div className="box ">
                            Total Number of user: 100
                        </div>
                        <div className="box ">
                            Total number of jobs posted: 50
                        </div>
                        <div className="box ">
                            Total number of application submitted for the jobs: 40
                        </div>
                    </div>
            
                </div>
            </div>


            <div className="parent">
                <div className='img-container '> <img src="../Pictures/graph1.png"  width="500" height="400" /></div>
                <div className='img-container '><img src="../Pictures/graph2.png" width="500" height="400" /> </div>
            </div>
        <div className="chatbutton chatbutton button">
        <Link to={AppUrl.Chatadmin} >Chat</Link>
        </div>
    <Footer/>
    
 </div>
    )
  }
}
