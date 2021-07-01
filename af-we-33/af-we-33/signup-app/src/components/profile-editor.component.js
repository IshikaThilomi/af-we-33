import React, { Component } from "react";

import UserService from "../services/user.service";
import Input from "react-validation/build/input";
import Select from "react-select";
import {isEmail} from "validator";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import {Row, Button} from "react-bootstrap";
import {toast} from "react-toastify";

const required = value => {
  if (!value) {
    return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
    );
  }
};


const vusername = value => {
  //username is required to be between 3 and 20 characters
  if (value.length < 3 || value.length > 20) {
    return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
    );
  }
};

const email = value => {
  //required email to be in email format
  if (!isEmail(value)) { //isEmail()-validator to verify email
    return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
    );
  }
};

const phone = value => {
    if (isNaN(value))
    {
        return (
            <div className="alert alert-danger validation-messages" role="alert">
                The phone number must be numbers
            </div>
        );
    }
    if (!value || value.length !== 10) {
        return (
            <div className="alert alert-danger validation-messages" role="alert">
                The phone number is required and it must be 10 numbers
            </div>
        );
    }
};

export default class EditorProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
        currentUser: AuthService.getCurrentUser(),
        content: "",
        username: AuthService.getCurrentUser().username,
        email: AuthService.getCurrentUser().email,
        password:AuthService.getCurrentUser().password,
        role: AuthService.getCurrentUser().role,
        phone: AuthService.getCurrentUser().phone,
        address: AuthService.getCurrentUser().address,
        roleOptions: [
            { value: 'admin', label: 'Admin' },
            { value: 'editor', label: 'Editor' },
            { value: 'reviewer', label: 'Reviewer' },
        ],
    };
  }

  componentDidMount() {
    // UserService.getEditorProfile().then(
    //   response => {
    //     this.setState({
    //       content: response.data
    //     });
    //   },
    //   error => {
    //     this.setState({
    //       content:
    //         (error.response &&
    //           error.response.data &&
    //           error.response.data.message) ||
    //         error.message ||
    //         error.toString()
    //     });
    //   }
    // );
  }

  handleOnChange = (name) => (value) => {
      this.setState({
          [name] : value.target.value
      })
  }
    toggleClearable = (value, name) => {
        this.setState(state => ({ role: value.value }))
    }

    updateUser = () => {
      const user = {
          id: AuthService.getCurrentUser().id,
          username: this.state.username,
          email: this.state.email,
          password:this.state.password,
          role: this.state.role,
          phone: this.state.phone,
          address: this.state.address,
      }
        UserService.updateProfile(user).then(
            response => {
                localStorage.setItem("user", JSON.stringify({...AuthService.getCurrentUser(), ...response.data}))
                setTimeout(()=>{
                    window.location.href="/profile"
                }, 2000)
                toast.success("Successfully updated your account", {position: toast.POSITION.TOP_CENTER})
            },
            error => {
                toast.error("Something went to wrong please try again later!", {position: toast.POSITION.TOP_CENTER})
                //alert('fail to update')
            }
        );
    }

  render() {
    return (
        <Row className="col-md-12">
            <div className=" card user-edit-container">
                <h2 className="register-title">Update Your profile</h2>
                <span className="register-sub-title">{`hi ${this.state.username} Please update with the correct details`}</span>
                {/*<header className="jumbotron">*/}
                {/*  <h3>{this.state.content}</h3>*/}
                {/*</header>*/}
                <Form
                    onSubmit={this.handleRegister}
                    ref={c => {
                        this.form = c;
                    }}
                >
                    {!this.state.successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleOnChange("username")}
                                    validations={[required, vusername]}
                                />
                            </div>


                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleOnChange("email")}
                                    validations={[required, email]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="PhoneNumber">Phone Number</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleOnChange("phone")}
                                    validations={[required, phone]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.handleOnChange("address")}
                                    validations={[required]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="role">Role</label>
                                <Select
                                    value={this.state.roleOptions.filter(option => option.value === this.state.role.toLowerCase())}
                                    //options={this.state.roleOptions}
                                    classNamePrefix="select"
                                    className="basic-single"
                                    onChange={this.toggleClearable}
                                />
                            </div>

                            <div className="form-group">
                                <Button className="btn btn-primary btn-block signup-button" onClick={this.updateUser}>Update user</Button>
                            </div>
                        </div>
                    )}
                </Form>
            </div>
        </Row>
    );
  }
}
