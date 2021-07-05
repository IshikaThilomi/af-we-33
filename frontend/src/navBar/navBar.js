import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="bg-dark text-center text-white">
          <div className="container-fluid">
            <a className="navbar-brand" href="/icaf"> <img className="Logo" src={process.env.PUBLIC_URL+"/logo.png"}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
            
                <li className="nav-item" >
                  
                  <a className="nav-link " aria-current="page" href="/my_events">  |My Events</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/conferences">Conferences</a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <span><a className="nav-link">All Events</a></span>
                    <div class="dropdown-content">
                      <a href="/research_papper"> <p>Research Pappers</p></a>
                      <a href="/workshops">  <p>Workshops</p></a>
                      <a href="/presentations">   <p>Presentations</p></a>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div class="dropdown">
                    <span><a className="nav-link" >Register Event</a></span>
                    <div className="dropdown-content">
                      <a href="/register_researcher"> <p>Researcher Papper</p></a>
                      <a href="/regitser_workshop_conductor">   <p>Workshops</p></a>
                      <a href="/register_presenter">     <p>Presentations</p></a>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/downloads">Downloads</a>
                </li>
              </ul>
            |
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">Dashboard</a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <span><a className="nav-link">Manage Conferences</a></span>
                    <div class="dropdown-content">
                      <a href="/approved_conferences"> <p>Approved Conferences</p></a>
                      <a href="/declined_conferences">  <p>Declined Conferences</p></a>
                      <a href="/pending_conferences">   <p>Pending Conferences</p></a>
                      <a href="/past_conferences">   <p>Past Conferences</p></a>
                    </div>
                  </div>
                </li>
              </ul>
              |
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/conferences">Conferences</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/add_conference">Add Conferences</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/manage_conference">Manage Conferences</a>
                </li>
              </ul>
              |
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
                    <span><a className="nav-link" >Presentations</a></span>
                    <div className="dropdown-content">
                      <a href="/pending_presentations"> <p>Pending Presentations</p></a>
                      <a href="/approved_presentations">   <p>Approved Presentations</p></a>
                      <a href="/declined_presentations">     <p>Declined Presentations</p></a>
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
              </ul>
            </div>
          </div>
          </div>
        </nav>
      
        <br></br>
      </div>
     
    )
  }
}

export default Navbar;