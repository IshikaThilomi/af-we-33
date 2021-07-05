import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import background from "../assert/background.jpeg"
import AuthService from "../services/auth.service";
import {Col, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger validation-messages" role="alert">
        This field is required!
      </div>
    );
  }
};
toast.configure()
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      //if verification is ok
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          toast.success("Login Success", {position: toast.POSITION.TOP_CENTER})
          //direct user to profile page
          this.props.history.push("/profile");
          // window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          toast.error("Username or password must me wrong", {position: toast.POSITION.TOP_CENTER})
          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <Row className="login-main-container">
        <Col lg={6} md={6} sm={6} className="login-image-container">
          <img className={"login-image"} src={background} />
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div className="login-container">
            <h2 className={"sign-title"}>Sign In</h2>
            <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
            />

            <Form
                onSubmit={this.handleLogin}
                ref={c => {
                  this.form = c;
                }}
            >
              <div className="form-group">
                <label className={"input-label"} htmlFor="username">Username</label>
                <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required]}
                />
              </div>

              <div className="form-group">
                <label className={"input-label"} htmlFor="password">Password</label>
                <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required]}
                />
              </div>

              <div className="form-group">
                <Button
                    className="btn btn-primary btn-block login-button"
                    disabled={this.state.loading}
                    onClick={this.handleLogin}
                >
                  {this.state.loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </Button>
              </div>

              <link />
              <link />
              <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
              />
            </Form>
          </div>
        </Col>
      </Row>
    );
  }
}
