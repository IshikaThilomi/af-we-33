import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css"
import AuthService from "./services/auth.service";

import Footer from './Home/footer';
import './index.css';
import NavBar from '../src/navBar/navBar';
import Downloads from './components/UserComponent/Downloads';
import Index from './components/UserComponent/indexpage';
import MyEvents from './components/UserComponent/My_Events';
import RegisterPresenter from './components/UserComponent/RegisterEvents/Register_Presenter';
import RegisterResearcher from './components/UserComponent/RegisterEvents/Register_Researcher';
import RegitserWorkShopConductor from './components/UserComponent/RegisterEvents/Register_Workshop_Conductor';
import Presentations from './components/UserComponent/AllEvents/Presentations';
import ResearchPappers from './components/UserComponent/AllEvents/Researcher_Papper';
import WorkShops from './components/UserComponent/AllEvents/WorkShops';
import Conferences from './components/UserComponent/Conference_Management/Conferences';
import ApprovedConferences from './components/AdminComponent/ApprovedConferences';
import DeclinedConferences from './components/AdminComponent/DeclinedConferences';
import PendingConferences from './components/AdminComponent/PendingConferences';
import PastConferences from './components/AdminComponent/PastConferences';
import MangeConference from './components/AdminComponent/ManageConferences';
import MangeConference2 from './components/AdminComponent/ManageConferences1';
import ManageConferencesClose from './components/AdminComponent/ManageConferencesClose';
import CloseConference from './components/AdminComponent/CloseConference';
import AdminDashBoard from './components/AdminComponent/dashboard';
import AddConference from './components/EditorComponent/AddConference';
import ManageConference from './components/EditorComponent/ManageConferences';
import Conference from './components/EditorComponent/Conferences';
import EditConference from './components/EditorComponent/EditConference';
import ApprovedPresentations from './components/ReviewerComponents/Presentations/approved_presentations';
import DeclinedPresentations from './components/ReviewerComponents/Presentations/declined_presentations';
import PendingPresentations from './components/ReviewerComponents/Presentations/pending_presentations';
import ApprovedReseachPappers from './components/ReviewerComponents/ResearchPappers/approved_research_pappers';
import DeclinedReseachpappers from './components/ReviewerComponents/ResearchPappers/declined_research_pappers';
import PendingReseachPappers from './components/ReviewerComponents/ResearchPappers/pending_research_pappers';
import ApprovedWorkshops from './components/ReviewerComponents/Workshops/approved_workshops';
import declined_workshops from './components/ReviewerComponents/Workshops/declined_workshops';
import pending_workshops from './components/ReviewerComponents/Workshops/pending_workshops';
import Manage_workshops from './components/ReviewerComponents/Workshops/manage_workshop';
import Manage_workshops1 from './components/ReviewerComponents/Workshops/manage_workshop1';
import Manage_reseach from './components/ReviewerComponents/ResearchPappers/manage_research';
import Manage_reseach1 from './components/ReviewerComponents/ResearchPappers/manage_research1';
import manage_presenations from './components/ReviewerComponents/Presentations/manage_presetations';
import manage_presenations1 from './components/ReviewerComponents/Presentations/manage_presetations1';
import Home1 from '../src/Home/home'

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import AdminProfile from "./components/profile-admin.component";
import EditorProfile from "./components/profile-editor.component";
import ReviewerProfile from "./components/profile-reviewer.component";


class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showEditorProfile: false,
      showReviewerProfile: false,
      showAdminProfile: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showEditorProfile: user.role === "EDITOR",
        showReviewerProfile: user.role === "REVIEWER",
        showAdminProfile: user.role === "ADMIN",
        showUserProfile: user.role === "USER"
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showEditorProfile, showReviewerProfile, showAdminProfile, showUserProfile } = this.state;

    return (
      <div className={"root-dev"}>
       
        <nav className="navbar navbar-expand navbar-dark bg-dark navbar-container">
          <Link to={"/icaf"} className="navbar-brand">
          <img className="Logo" src={process.env.PUBLIC_URL+"/logo.png"}/> ICAF
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">

              <li className="nav-item">
                <div className="dropdown">
                  <span><a className="nav-link">All Events</a></span>
                  <div class="dropdown-content">
                    <a href="/research_papper"> <p>Research Pappers<Link to={"/research_papper"} className="nav-link"></Link></p></a>
                    <a href="/workshops"> <p>Workshops<Link to={"/workshops"} className="nav-link"></Link></p></a>
                 

                  </div>
                </div>
              </li>

            </li>

            {showEditorProfile && (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
              
                  <li className="nav-item">
                    <a className="nav-link" href="/add_conference"> Manage Conferences<Link to={"/add_conference"} ></Link></a>

                  </li>
          
                  <li className="nav-item">
                    <Link to={"/editor"} className="nav-link">
                      Editor Profile
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            {showUserProfile && (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/my_events">My Events</a>
                  </li>
                 
                  {/* <li className="nav-item">
                    <div className="dropdown">
                      <span><a className="nav-link">All Events</a></span>
                      <div class="dropdown-content">
                        <a href="/research_papper"> <p>Research Pappers</p></a>
                        <a href="/workshops">  <p>Workshops</p></a>
                        <a href="/presentations">   <p>Presentations</p></a>
                      </div>
                    </div>
                  </li> */}
                  <li className="nav-item">
                    <div class="dropdown">
                      <span><a className="nav-link" >Register Event</a></span>
                      <div className="dropdown-content">
                        <a href="/register_researcher"> <p>Researcher Papper</p></a>
                        <a href="/regitser_workshop_conductor">   <p>Workshops</p></a>
                      
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/downloads">Downloads</a>
                  </li>
                  
                </ul>
              </div>

            )}


            {showReviewerProfile && (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                  <li className="nav-item">
                    <div className="dropdown">
                      <span><a className="nav-link">Research Pappers</a></span>
                      <div class="dropdown-content">
                        <a href="/pending_reseach_pappers"> <p>Pending Research Pappers</p></a>
                        <a href="/approved_reseach_pappers">  <p>Approved Research Pappers</p></a>
                        <a href="/declined_research_pappers">   <p>Declined Research Pappers</p></a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                  <div class="dropdown">
                    <span><a className="nav-link" >Workshops</a></span>
                    <div className="dropdown-content">
                      <a href="/pending_workshops"> <p>Pending Workshops</p></a>
                      <a href="/approved_workshops">   <p>Approved Workshops</p></a>
                      <a href="/declined_workshops">     <p>Declined Workshops</p></a>
                    </div>
                  </div>
                </li>
                 
                  <li className="nav-item">
                    <Link to={"/reviewer"} className="nav-link">
                      Reviewer Profile
                    </Link>
                  </li>
                </ul>
              </div>

            )}

            {showAdminProfile && (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/dashboard">Dashboard</a>
                  </li>
                  <li className="nav-item">
                    <div className="dropdown">
                      <span><a className="nav-link">Manage Conference</a></span>
                      <div class="dropdown-content">
                        <a href="/approved_conferences"> <p>Approved Conferences Changes</p></a>
                        <a href="/declined_conferences">  <p>Declined Conferences Changes</p></a>
                        <a href="/pending_conferences">   <p>Pending Conferences Changes</p></a>
                      
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Admin Profile
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
             
            </div>
            
          )}
          
        </nav>

        <div className="container">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/admin" component={AdminProfile} />
            <Route path="/editor" component={EditorProfile} />
            <Route path="/reviewer" component={ReviewerProfile} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/icaf" component={Home1} />

            <Route path="/my_events" component={MyEvents} />
            <Route path="/register_presenter" component={RegisterPresenter} />
            <Route path="/register_researcher" component={RegisterResearcher} />
            <Route path="/regitser_workshop_conductor" component={RegitserWorkShopConductor} />
            <Route path="/presentations" component={Presentations} />
            <Route path="/research_papper" component={ResearchPappers} />
            <Route path="/workshops" component={WorkShops} />
            <Route path="/conferences" component={Conferences} />
            <Route path="/approved_conferences" component={ApprovedConferences} />
            <Route path="/declined_conferences" component={DeclinedConferences} />
            <Route path="/pending_conferences" component={PendingConferences} />
            <Route path="/past_conferences" component={PastConferences} />
            <Route path="/get_conference_by_id/:id" component={MangeConference} exact />
            <Route path="/get_conference_by_idx/:id" component={MangeConference2} exact />
            <Route path="/get_conference_by_idy/:id" component={ManageConferencesClose} exact />
            <Route path="/close_conference/:id" component={CloseConference} exact />
            <Route path="/dashboard" component={AdminDashBoard} exact />
            <Route path="/add_conference" component={AddConference} />
            <Route path="/manage_conference" component={ManageConference} />
            <Route path="/conferences" component={Conference} />
            <Route path="/get_conference_by_ided/:id" component={EditConference} exact />
            <Route path="/approved_presentations" component={ApprovedPresentations} />
            <Route path="/declined_presentations" component={DeclinedPresentations} />
            <Route path="/pending_presentations" component={PendingPresentations} />
            <Route path="/approved_reseach_pappers" component={ApprovedReseachPappers} />
            <Route path="/declined_research_pappers" component={DeclinedReseachpappers} />
            <Route path="/pending_reseach_pappers" component={PendingReseachPappers} />
            <Route path="/approved_workshops" component={ApprovedWorkshops} />
            <Route path="/declined_workshops" component={declined_workshops} />
            <Route path="/pending_workshops" component={pending_workshops} />
            <Route path="/manage_workshops/:id" component={Manage_workshops} exact />
            <Route path="/manage_workshops1/:id" component={Manage_workshops1} exact />
            <Route path="/manage_research/:id" component={Manage_reseach} exact />
            <Route path="/manage_research1/:id" component={Manage_reseach1} exact />
            <Route path="/manage_presenations/:id" component={manage_presenations} exact />
            <Route path="/manage_presenations1/:id" component={manage_presenations1} exact />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
