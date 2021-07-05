import React, { Component } from 'react';
import axios from 'axios';
import AuthService from "../services/auth.service";
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

class ManageConference extends Component {
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

            options: [],
            Presentation_Type: '',
            Title: '',
            Date_To_Be_held: ''
        };
    }
    componentDidMount() {
        console.log("Suer",this.state.currentUser)
        const UserID = this.state.currentUser.id
        axios.get(`https://afwe3.herokuapp.com/events/get_user_events/${UserID}`)
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
               
               
            })
            console.log(UserID)
    }



    render() {
        return (

            <div className="container">
                <br></br>
                <center> <h3 className="mainclass">My Events</h3></center>
                <MDBContainer>
                    <MDBCard className="card-body" style={{ width: "70rem", marginTop: "1rem" }}>

                        <MDBCardText>
                            {this.state.options.length > 0 && this.state.options.map((item, index) => (


                                <div key={index} className="card mb-3">
                                    <div className="p-3" >
                                    <h4> Conductor Name: {item.Conference_ID}</h4>
                                  
                                        <h4>  Description : {item.Description}</h4>
                                       
                                        <h4> Created On : {item.TimeStamp}</h4>
                                       <h4> Status : {item.Verified}</h4>
                                       
                                    </div>
                                </div>

                            ))}
                        </MDBCardText>

                    </MDBCard>
                </MDBContainer>

            </div>
        )
    }
}

export default ManageConference;