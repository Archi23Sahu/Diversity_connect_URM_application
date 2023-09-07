import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import URMService from '../../Services/URMService';

export default function Urmdashboard(){

    const [jobcountDetails, setJobcountDetails] = useState([]);
    const [jobDetails, setJobDetails] = useState([]);

    const { id } = useParams();

    const [userDetails, setUserDetails] = useState({
        uname:"",
            phoneno:"",
            nationality:"",
             location:"",  
             ethinicity:"",
             education:"",
             resexp:"",
             publication:"",
             postions:"",
             email:""
    });

    useEffect(() => {
        // Fetch the job details and update the state using the AdminService
        URMService.getProfileDatails(id)
            .then((response) => {
                console.log(response);
                const userData = response.data.phpresult[0]; // Extract the object from the array
                
                if (userData) {
                    setUserDetails({
                        uname: userData.Uname,
                        phoneno: userData.Phone_no,
                        nationality: userData.Nationality,
                        location: userData.Location,
                        ethinicity:userData.Ethinicity,
                        education:userData.Education,
                        resexp:userData.Res_exp,
                        publication:userData.Publications,
                        postions:userData.Positions,
                        email:userData.EMAIL,
                    });
                   
                } else {
                    // Handle the case where the array is empty or undefined
                    console.error("Profile data not found");
                }
                console.log("userDetails", userDetails);
            })
            .catch((error) => {
                alert("error " + error);
            });
    }, [id]);
    

    useEffect(() => {
        
        URMService.URMfetchAppliedJobs(id)
            .then((response)=>{
                console.log(response);
                setJobDetails(response.data.phpresult);
            }).catch((error) => {
                alert("error " + error);
            });
      }, []);

      useEffect(() => {
        
        URMService.URMfetchCountOfAppliedJob(id)
            .then((response)=>{
                console.log("URMfetchCountOfAppliedJob",response);
                setJobcountDetails(response.data.phpresult);
                console.log("URMfetchCountOfAppliedJob2",response.data.phpresult);
            }).catch((error) => {
                alert("error " + error);
            });
      }, []);
    
    
    const JobPostItem = ({ rs }) => {       
        //const count = jobcountDetails.length > 0 ? jobcountDetails[0].TotalApplicants : 0;
        let count = 0;
if(jobcountDetails.length > 0){
        for (let i = 0; i < jobcountDetails.length; i++) {
          if (jobcountDetails[i].JID === rs.JID) {
            count = parseInt(jobcountDetails[i].TotalApplicants, 10);
            break;
          }
        }
    }
    else{
        console.log("data not available");
    }
      
        return (
        <div>
            <h3>{rs.JOB_POSITIONS}</h3>
            <div className="noinfo">
            <label>No of candidates applied:</label>
            <input type="text" value={count}  readOnly />

            
            </div>
            <Link to={`/Applicanturm/${id}/${rs.JID}`} className="button">View Job Status</Link>
            <Link to={`/Jobviewurm/${id}/${rs.JID}`} className="button">Details</Link>
        </div>
        );
    };

    return (
      <div>
        <h1 className="dashhead">URM Candidate Dashboard</h1>
       <div className="content">

        <div className="left-side">
            <Link to={`/Profileurm/${id}`} className="button">Edit Profile</Link>
            <Link to={`/Reporturm/${id}`} className="button">Report</Link>
            <h2>
                <p>Personal Information</p>
            </h2>
            <div className="perinfo">
                <label>Name:</label>
                <input type="text"value={userDetails.uname} readOnly />
                <label>Phone No:</label>
                <input type="text" value={userDetails.phoneno} readOnly />
                <label>Email:</label>
                <input type="text" value={userDetails.email} readOnly />
                <label>Location:</label>
                <input type="text" value={userDetails.location} readOnly />
                <label>Nationality:</label>
                <input type="text" value={userDetails.nationality} readOnly />
                <label>Ethnicity:</label>
                <input type="text" value={userDetails.ethinicity} readOnly />
                <label>Education:</label>
                <input type="text" value={userDetails.education} readOnly />
                <label>Research focus area:</label>
                <input type="text" value={userDetails.resexp} readOnly />
                <label>Publications:</label>
                <input type="text" value={userDetails.publication} readOnly />
                <label>Positions Interested:</label>
                <input type="text" value={userDetails.postions} readOnly />
               
            </div>
            <br/>

        </div>
        <div className="right-side">
             <Link to={`/Urmcheckjobroles/${id}`} className="button">Check Available Job Roles</Link>
                                            
                                            <div className="joblist">
                                                <div className="job-posting">
                                                    
                                                {jobDetails.map((rs) => (
                                                    <JobPostItem key={rs.JID} rs={rs} /> // Use the new component and pass the data as props
                                                    ))} 
                                            </div>
                                        </div>

        </div>
        <div className="chatbutton chatbutton button">
        <a href='http://127.0.0.1:8080?name=URM'>Chat</a>
        </div>

    </div>
   <Footer/>
      </div>
    )
  }

