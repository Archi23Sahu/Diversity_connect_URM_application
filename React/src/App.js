import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/login';
import Home from './Components/Home/Home';
import Role from './Components/Register/Role';
import URMCandidateService from './Components/ServicesMenu/URMCandidateService';
import ServicesAcademia from './Components/ServicesMenu/ServicesAcademia';
import ServicesDEI from './Components/ServicesMenu/ServicesDEI';
import ServicesRecruiter from './Components/ServicesMenu/ServicesRecruiter';
import AcademicInstitutionRegistration from './Components/Register/AcademicInstitutionRegistration';
import DEIOfficerRegistration from './Components/Register/DEIOfficerRegistration';
import RecruiterRegistration from './Components/Register/RecruiterRegistration';
import URMCandidateRegistration from './Components/Register/URMCandidateRegistration';
import About from './Components/AboutUs/About';
import ContactUs from './Components/ContactUs/ContactUs';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import Academiadashboard from './Components/AcademicInstitution/Academiadashboard';
import Addfaculty from './Components/AcademicInstitution/Addfaculty';
import Applicantsacademia from './Components/AcademicInstitution/Applicantsacademia';
import Bookmarkedcandidates from './Components/AcademicInstitution/Bookmarkedcandidates';
import Chatacademia from './Components/AcademicInstitution/Chatacademia';
import Academiajobview from './Components/AcademicInstitution/Academiajobview';
import Jobposts from './Components/AcademicInstitution/Jobposts';
import Profileacademia from './Components/AcademicInstitution/Profileacademia';
import Viewurmcandidate from './Components/AcademicInstitution/Viewurmcandidate';
import Urmdashboard from './Components/URMcandidate/Urmdashboard';
import Profileurm from './Components/URMcandidate/Profileurm';
import Applicanturm from './Components/URMcandidate/Applicanturm';
import Jobviewurm from './Components/URMcandidate/Jobviewurm';
import Urmcheckjobroles from './Components/URMcandidate/Urmcheckjobroles';
import Chaturm from './Components/URMcandidate/Chaturm';
import Deidashboard from './Components/DEI/Deidashboard';
import Chatdei from './Components/DEI/Chatdei';
import Deiapplicant from './Components/DEI/Deiapplicant';
import Deiapprovepostjobs from './Components/DEI/Deiapprovepostjobs';
import Deijobview from './Components/DEI/Deijobview';
import Deiofficerreport from './Components/DEI/Deiofficerreport';
import Deiviewurmcandidate from './Components/DEI/Deiviewurmcandidate';
import Deipostjobs from './Components/DEI/Deipostjobs';
import Profiledeiofficer from './Components/DEI/Profiledeiofficer';
import Admindashboard from './Components/Admin/Admindashboard';
import Adminacademiaregistration from './Components/Admin/Adminacademiaregistration';
import Adminviewacademia from './Components/Admin/Adminviewacademia';
import Adminviewdei from './Components/Admin/Adminviewdei';
import Adminviewjobs from './Components/Admin/Adminviewjobs';
import Adminviewurm from './Components/Admin/Adminviewurm';
import Adminviewrecruiters from './Components/Admin/Adminviewrecruiters';
import Chatadmin from './Components/Admin/Chatadmin';
import Adminupdateacademia from './Components/Admin/Adminupdateacademia';
import Adminupdatedei from './Components/Admin/Adminupdatedei';
import Adminupdatejobs from './Components/Admin/Adminupdatejobs';
import Adminupdaterecruiters from './Components/Admin/Adminupdaterecruiters';
import Adminupdateurm from './Components/Admin/Adminupdateurm';
import Admincontactus from './Components/Admin/Admincontactus';
import Adminapplicationstatus from './Components/Admin/Adminapplicationstatus';
import Adminrecruiterregistration from './Components/Admin/Adminrecruiterregistration';
import Adminurmregistration from './Components/Admin/Adminurmregistration';
import Admindeiregister from './Components/Admin/Admindeiregister';
import Adminpostjob from './Components/Admin/Adminpostjob';
import Recruiterdashboard from './Components/Recruiter/Recruiterdashboard';
import Applicantrecruiter from './Components/Recruiter/Applicantrecruiter';
import Chatrecruiter from './Components/Recruiter/Chatrecruiter';
import Jobviewrecruiter from './Components/Recruiter/Jobviewrecruiter';
import Postjobsrecruiter from './Components/Recruiter/Postjobsrecruiter';
import Profilerecruiter from './Components/Recruiter/Profilerecruiter';
import Viewurmrecruiter from './Components/Recruiter/Viewurmrecruiter';


// function App() {
  class App extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isLogin:false
      }
      this.handleIsLogin =this.handleIsLogin.bind();
    }
  
    
    handleIsLogin=(isLoginFromLoginComponent)=>{
      console.log('isLogin '+isLoginFromLoginComponent);
      this.setState({isLogin:isLoginFromLoginComponent})
    }
    render(){
    return (
    <>
    <Router>
    <Header isLogin={this.state.isLogin}/>
    <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login onLogin={this.handleIsLogin}/>}></Route>
          <Route path="/register" element={<Role/>}></Route>
          <Route path="/urmCandidateService" element={<URMCandidateService/>}></Route>
          <Route path="/servicesAcademia" element={<ServicesAcademia/>}></Route>
          <Route path="/servicesDEI" element={<ServicesDEI/>}></Route>
          <Route path="/serviceRecruiter" element={<ServicesRecruiter/>}></Route>
          <Route path="/AcademicInstitutionRegistreation" element={<AcademicInstitutionRegistration/>}></Route>
          <Route path="/DEIOfficerRegistreation" element={<DEIOfficerRegistration/>}></Route>
          <Route path="/RecruiterRegistreation" element={<RecruiterRegistration/>}></Route>
          <Route path="/URMCandidateRegistreation" element={<URMCandidateRegistration/>}></Route>
          <Route path="/aboutUs" element={<About/>}></Route>
          <Route path="/contactUs" element={<ContactUs/>}></Route>
          <Route path="/forgetPassword" element={<ForgetPassword/>}></Route>
          <Route path="/Academiadashboard" element={<Academiadashboard/>}></Route>
          <Route path="/Addfaculty" element={<Addfaculty/>}></Route>
          <Route path="/Applicantsacademia" element={<Applicantsacademia/>}></Route>
          <Route path="/Bookmarkedcandidates" element={<Bookmarkedcandidates/>}></Route>
          <Route path="/Chatacademia" element={<Chatacademia/>}></Route>
          <Route path="/Academiajobview" element={<Academiajobview/>}></Route>
          <Route path="/Jobposts" element={<Jobposts/>}></Route>
          <Route path="/Profileacademia" element={<Profileacademia/>}></Route>
          <Route path="/Viewurmcandidate" element={<Viewurmcandidate/>}></Route>
          <Route path="/Urmdashboard" element={<Urmdashboard/>}></Route>
          <Route path="/Profileurm" element={<Profileurm/>}></Route>
          <Route path="/Applicanturm" element={<Applicanturm/>}></Route>
          <Route path="/Jobviewurm" element={<Jobviewurm/>}></Route>
          <Route path="/Urmcheckjobroles" element={<Urmcheckjobroles/>}></Route>
          <Route path="/Chaturm" element={<Chaturm/>}></Route>
          <Route path="/Deidashboard" element={<Deidashboard/>}></Route>
          <Route path="/Chatdei" element={<Chatdei/>}></Route>
          <Route path="/Deiapplicant" element={<Deiapplicant/>}></Route>
          <Route path="/Deiapprovepostjobs" element={<Deiapprovepostjobs/>}></Route>
          <Route path="/Deijobview" element={<Deijobview/>}></Route>
          <Route path="/Deiofficerreport" element={<Deiofficerreport/>}></Route>
          <Route path="/Deiviewurmcandidate" element={<Deiviewurmcandidate/>}></Route>
          <Route path="/Deipostjobs" element={<Deipostjobs/>}></Route>
          <Route path="/Profiledeiofficer" element={<Profiledeiofficer/>}></Route>
          <Route path="/Admindashboard" element={<Admindashboard/>}></Route>
          <Route path="/Adminviewacademia" element={<Adminviewacademia/>}></Route>
          <Route path="/Adminacademiaregistration" element={<Adminacademiaregistration/>}></Route>
          <Route path="/Adminviewdei" element={<Adminviewdei/>}></Route>
          <Route path="/Adminviewjobs" element={<Adminviewjobs/>}></Route>
          <Route path="/Adminviewurm" element={<Adminviewurm/>}></Route>
          <Route path="/Adminviewrecruiters" element={<Adminviewrecruiters/>}></Route>
          <Route path="/Chatadmin" element={<Chatadmin/>}></Route>
          <Route path="/Adminupdateacademia" element={<Adminupdateacademia/>}></Route>
          <Route path="/Adminupdatedei" element={<Adminupdatedei/>}></Route>
          <Route path="/Adminupdatejobs" element={<Adminupdatejobs/>}></Route>
          <Route path="/Adminupdaterecruiters" element={<Adminupdaterecruiters/>}></Route>
          <Route path="/Adminupdateurm" element={<Adminupdateurm/>}></Route>
          <Route path="/Admincontactus" element={<Admincontactus/>}></Route>
          <Route path="/Adminapplicationstatus" element={<Adminapplicationstatus/>}></Route>
          <Route path="/Adminrecruiterregistration" element={<Adminrecruiterregistration/>}></Route>
          <Route path="/Adminurmregistration" element={<Adminurmregistration/>}></Route>
          <Route path="/Admindeiregister" element={<Admindeiregister/>}></Route>
          <Route path="/Adminpostjob" element={<Adminpostjob/>}></Route>
          <Route path="/Recruiterdashboard" element={<Recruiterdashboard/>}></Route>
          <Route path="/Applicantrecruiter" element={<Applicantrecruiter/>}></Route>
          <Route path="/Chatrecruiter" element={<Chatrecruiter/>}></Route>
          <Route path="/Jobviewrecruiter" element={<Jobviewrecruiter/>}></Route>
          <Route path="/Postjobsrecruiter" element={<Postjobsrecruiter/>}></Route>
          <Route path="/Profilerecruiter" element={<Profilerecruiter/>}></Route>
          <Route path="/Viewurmrecruiter" element={<Viewurmrecruiter/>}></Route>
          
          
          
          
        </Routes>
    </Router>

    </>
  );
}
}

export default App;
