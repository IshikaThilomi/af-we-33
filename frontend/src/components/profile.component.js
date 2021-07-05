import React, { Component } from "react";
import AuthService from "../services/auth.service";
import axios from "axios";
import {Button} from "react-bootstrap";
import {toast} from "react-toastify";



export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(), //get current user from the local storage
    };
  }
 
  
  onChangeFn(e) {
    this.setState({
        [e.target.name]: e.target.value,
    })
}

    deleteUser = (id) => () => {
      const confirm = window.confirm('do you want to delete user')
      if(confirm){
          axios.delete('https://afwe3.herokuapp.com/api/auth/user', {params: {userId: id}})
              .then((res) => {
                  console.log("user",res.data);
                  AuthService.logout();
                  setTimeout(()=>{
                      window.location.href="/login"
                  }, 2000)
                  toast.success("successfully deleted the user", {position: toast.POSITION.TOP_CENTER})
              })
              .catch((err) => {
                  alert('Item Not Saved !')
                  console.log(err);
              })
      }
  }

onSubmit(e) {
    const { currentUser } = this.state;
    let a = window.confirm("Are you sure update your details?");
    if (a === true) {
        e.preventDefault();

        if ( this.state.username === "" || this.state.email === "" ) {
            alert("Fill all blank fields");

        } else {

            const obj = {

               
                username: this.state.username,
                email: this.state.email,
               
            };

            console.log("check match.params : " + this.props.match.params.id);

            axios.get('https://afwe3.herokuapp.com/api/auth/user', {params: {userId: currentUser.id}})
            // axios.put('http://localhost:8080/users/update/' + currentUser.id, obj)
                .then((res) => {
                    window.location.href="/editor"
                    console.log(res.data);
                })
                .catch((err) => {
                    alert('Item Not Saved !')
                    console.log(err);
                })

            this.setState({
               
                username: '',
                email: '',
                
            })
        }
    }
}
  render() {
    const { currentUser } = this.state;
    console.log("currentUser", currentUser);

    return (
     
      <div className="page-content page-container" id="page-content">
        
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-xl-6 col-md-12">
              <div className="card user-card-full">
                <div className="row m-l-0 m-r-0">
                  <div className="col-sm-4 bg-c-lite-green user-profile">
                    <div className="card-block text-center text-white">
                      <div className="m-b-25">
                        {" "}
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          className="img-radius"
                          alt="User-Profile-Image"
                        />{" "}
                      </div>
                     
                      <h5>
                        {currentUser.role && <li style={{marginRight: "26px"}}>{currentUser.role}</li>}
                      </h5>{" "}
                      <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h4 className="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h4>
                      <div className="row">
                      <div className="col-sm-6">
                          <p className="m-b-10 f-w-600 profile-labels">Username</p>
                          <h6 className="text-muted f-w-400">
                            {currentUser.username}
                            {(event) => this.onChangeFn(event)}
                            
                            </h6>
                        </div><br/>
                        <div className="col-sm-6">
                          <p className="m-b-10 f-w-600 profile-labels">Email</p>
                          <h6 className="text-muted f-w-400">
                          {currentUser.email}
                          {(event) => this.onChangeFn(event)}
                          </h6>
                        </div>
                       
                      </div>
                      
                    <br/>

                    {/*<div className="form-group row mt-3">*/}
                    {/*                <div className={"col"}>*/}
                    {/*                    <input type="button"*/}
                    {/*                           id={"Update"}*/}
                    {/*                           name={"Update"}*/}
                    {/*                           value={"Update"}*/}
                    {/*                           className="btn btn-success"*/}
                    {/*                           onClick={(e) => {*/}
                        {/*                               this.onSubmit(e)*/}
                        {/*                           }}*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                        <div className="form-group">
                            <Button
                                className="profile-buttons"
                                variant="success"
                                onClick={(e) => {
                                    this.onSubmit(e)
                                }}
                            >
                                Update
                            </Button>
                        </div>

            <br/>
            <div className="form-group">
              <Button
                className="btn btn-primary btn-block profile-buttons"
                disabled={this.state.loading}
                onClick={this.deleteUser(currentUser.id)}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Delete Account</span>
              </Button>
            </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
