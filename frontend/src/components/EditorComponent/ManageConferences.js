import React, { Component } from 'react';
import axios from 'axios';
import AuthService from "../services/auth.service";
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

class PendingConferences extends Component {
    constructor(props) {
        super(props);

        this.state = {

            options: [],
            Presentation_Type: '',
            Title: '',
            Date_To_Be_held: '',
            currentUser: AuthService.getCurrentUser(),
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
        console.log("test")
        const UserID = this.state.currentUser.id
        const EditorID = UserID
        axios.get(`https://afwe3.herokuapp.com/conference/get_editor_conferences/${EditorID}`)
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
                console.log("test11")
            })
    }


    navigateSubjectPage(e, ID) {
        window.location = `/get_conference_by_ided/${ID}`
    }

    render() {
        return (

            <div className="container">
                <br></br>
                <center> <h3 className="mainclass">Manage Conferences</h3></center>
                <MDBContainer>
                    <MDBCard className="card-body" style={{ width: "70rem", marginTop: "1rem" }}>

                        <MDBCardText>
                            {this.state.options.length > 0 && this.state.options.map((item, index) => (

                                <div key={index} className="card mb-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                                    <div className="p-3" >

                                        <h4> Conductor Name : {item.Name}</h4>
                                        <h4> Venue : {item.Venue}</h4>
                                        <h4> Date : {item.Date}</h4>
                                        <h4> Conference Type : {item.Conference_Type}</h4>
                                        <h4> Status : {item.Verified}</h4>
                                        <div className="form-group">
                                            <input type="submit" onClick={e => this.navigateSubjectPage(e, item._id)}  value="View Conference Details" className="btn btn-primary" />
                                        </div>
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

export default PendingConferences;