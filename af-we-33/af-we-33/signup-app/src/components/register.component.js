import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Select from 'react-select';
import AuthService from "../services/auth.service";
import axios from 'axios';
import { Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";
toast.configure()

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger validation-messages" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  //required email to be in email format
  if (!isEmail(value)) { //isEmail()-validator to verify email
    return (
      <div className="alert alert-danger validation-messages" role="alert">
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

// const roles = value => {
//   if (!value) {
//     return (
//       <div className="alert alert-danger" role="alert">
//        Please select the account type
//       </div>
//     );
//   }
// };

const vusername = value => {
  //username is required to be between 3 and 20 characters
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger validation-messages" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};


const vpassword = value => {
  //required password to be 6 and 30 characters
  if (value.length < 6 || value.length > 30) {
    return (
      <div className="alert alert-danger validation-messages" role="alert">
        The password must be between 6 and 30 characters.
      </div>
    );
  }
};


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
       email: "",
       role:"",
      password: "",
      address: "",
      phone: "",
      successful: false,
      message: "",
      options:[],
      isClearable: true,
      roleOptions: [
        { value: 'admin', label: 'Admin' },
        { value: 'editor', label: 'Editor' },
        { value: 'reviewer', label: 'Reviewer' },
      ],
    };
  }
 
  componentDidMount() {
    axios.get('http://localhost:8088/profile/')
        .then(response => {
            // let data = [];
            // this.setState({ options: response.data.data }, () => {
            //     this.state.options.map((item,index) => {
              
            //         let option = {
            //             value: item._id,
            //             label: item.name
            //         }
                  
            //         data.push(option)

            //     });
            //     this.setState({ options: data });
                    
              
            // });
            
        }).catch(error => {
        
    })
}

  toggleClearable = (value, name) => {
    this.setState(state => ({ role: value.value }))
  }
    // this.setState(state => ({ isClearable: !state.isClearable }));

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeAddress = (e) => {
    this.setState({
      address: e.target.value
    });
  }

  onChangePhone = (e) => {
    this.setState({
      phone: e.target.value
    });
  }
  
  onValueChange(e) {
    this.setState({
      selectedOption: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleRegister(e) {
      e.preventDefault();

      this.setState({
        message: "",
        successful: false
      });

      this.form.validateAll();//checks validation functions in validations

      if (this.checkBtn.context._errors.length === 0) {
        //show successful or error message
        AuthService.register(
            this.state.username,
            this.state.email,
            this.state.role,
            // this.state.roleOptions,
            this.state.password,
            this.state.phone,
            this.state.address
        ).then(
            response => {
              this.setState({
                message: response.data.message,
                successful: true
              });
              toast.success("You have registered successfully, please Login", {position: toast.POSITION.TOP_CENTER})
              setTimeout(()=>{
                window.location.href="/login"
              }, 2000)
            },
            error => {
              toast.error("Something went to be wrong please try again later", {position: toast.POSITION.TOP_CENTER})
              console.log("error", error)
              this.setState({
                successful: false,
                message: 'Request failed'
              });
            }
        );
      }
  }

  render() {
    return (
      <Row className="col-md-12">
        <div className="card register-main-container">
          <h2 className="register-title">Register</h2>
          <span className="register-sub-title">Create your account. its free and only take a minute</span>
          <Form
            // onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
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
                    onChange={this.onChangeEmail}
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
                      onChange={this.onChangePhone}
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
                      onChange={this.onChangeAddress}
                      validations={[required]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="role">Role</label>
                <Select
                        options={this.state.roleOptions}
                        classNamePrefix="select"
                        className="basic-single"
                        onChange={this.toggleClearable}
                        //isClearable={isClearable}
                    />
                  </div>  
                 
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <Button className="btn btn-primary btn-block signup-button" onClick={this.handleRegister}>Sign Up</Button>
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </Row>
    );
  }
}
