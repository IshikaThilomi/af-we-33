import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css"
import AuthService from "./services/auth.service";

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
        showAdminProfile: user.role === "ADMIN"
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showEditorProfile, showReviewerProfile ,showAdminProfile} = this.state;

    return (
      <div className={"root-dev"}>
        <nav className="navbar navbar-expand navbar-dark bg-dark navbar-container">
          <Link to={"/"} className="navbar-brand">
            ConferenceHall
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showEditorProfile && (
              <li className="nav-item">
                <Link to={"/editor"} className="nav-link">
                Editor Profile
                </Link>
              </li>
            )}

            {showReviewerProfile && (
              <li className="nav-item">
                <Link to={"/reviewer"} className="nav-link">
               Reviewer Profile
                </Link>
              </li>
            )}
            
            {showAdminProfile && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                Admin Profile
                </Link>
              </li>
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
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
