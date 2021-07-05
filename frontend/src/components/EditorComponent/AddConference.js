import React, { Component } from 'react';
import axios from 'axios';
import AuthService from "../services/auth.service";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { toast } from 'toast-notification-alert';

class Addonferences extends Component {

    constructor(props) {
        super(props);

        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEMail=this.onChangeEMail.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangeConferenceType=this.onChangeConferenceType.bind(this);
        this.onChangeVenue=this.onChangeVenue.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onChangeConferenceDescription=this.onChangeConferenceDescription.bind(this);
       
        
        
        this.onSubmit = this.onSubmit.bind(this);   
        this.state = {
            Name: '',
            Email: '',
            Phone:'',
            Conference_Type: '',
            Venue:'',
            Date: '',
            Conference_Description: '',
            currentUser: AuthService.getCurrentUser(),
            content: "",
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

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        })
    }
    onChangeEMail(e) {
        this.setState({
            Email: e.target.value
        })
    }
    onChangePhone(e) {
        this.setState({
            Phone: e.target.value
        })
    }

    onChangeConferenceType(e) {
        this.setState({
            Conference_Type: e.target.value
        })
    }

    onChangeVenue(e) {
        this.setState({
            Venue: e.target.value
        })
    }
    onChangeConferenceDescription(e) {
        this.setState({
            Conference_Description: e.target.value
        })
    }

    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        })
    } 
    onSubmit(e) {
        e.preventDefault();
        const UserID = this.state.currentUser.id
        const Conference ={
            EditorID:UserID,
            Name: this.state.Name,
            Email:this.state.Email,
            Phone:this.state.Phone,
            Conference_Type: this.state.Conference_Type,
            Venue:this.state.Venue,
            Date:this.state.Date,
            Conference_Description: this.state.Conference_Description,
            TimeStamp:Date().toLocaleString(),
            Status:"Pending",
            Verified:"Pending",
            StatusDate:"Pending",
            StatusMaker:"Pending",       
        }
        console.log("Conference:- ",Conference)
        axios.post('https://afwe3.herokuapp.com/conference/submit_conference_request', Conference)
            .then(res => console.log(res.data));
            toast.show({title: 'Conference Successfully Submitted ! Wait for Admin Approval', position: 'topright', type: 'info'})
    
    }
    componentDidMount() {
        axios.get(`https://afwe3.herokuapp.com/conference/getmainConferenceDetails`)
            .then(response => {
                console.log("dara_",response)
                this.setState({ Name: response.data[0].Name });
                this.setState({ Email: response.data[0].Email });
                this.setState({ Phone: response.data[0].Phone });
                this.setState({ Conference_Type: response.data[0].Conference_Type });
                this.setState({ Venue: response.data[0].Venue });
                this.setState({ Date: response.data[0].Date });
                this.setState({ Conference_Description: response.data[0].Conference_Description });
                this.setState({ TimeStamp: response.data[0].TimeStamp });
                this.setState({ Status: response.data[0].Status });
                this.setState({ Verified: response.data[0].Verified });
                this.setState({ StatusDate: response.data[0].StatusDate });
                this.setState({ StatusMaker: response.data[0].StatusMaker });

            })
    }
    render() {
        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol md="15">
                    <MDBCard>
                        <MDBCardBody>
                            {/* <div style={{margi:"20px"},{position:"absolute"}}>
            <img src={process.env.PUBLIC_URL+"/reimage.jpg"}/>
            </div>*/}


                            <center> <h3 className="mainclass">Manage Conference</h3></center>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                    <MDBInput label="Enter Conference Name"
                                            type="text"
                                            icon="user"
                            className="form-control"
                            required
                            value={this.state.Name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="mb-3">
                        
                        <MDBInput label="Enter Conference Year "
                                                type="text"
                                                icon="envelope"
                                className="form-control"
                                required
                                value={this.state.Conference_Type}
                                onChange={this.onChangeConferenceType}
                            />
                        </div>
                    <div className="mb-3">
                        
                    <MDBInput label="Enter Conference Date"
                                            type="text"
                                            icon="envelope"
                            className="form-control"
                            required
                            value={this.state.Email}
                            onChange={this.onChangeEMail}
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label="Enter Conference Location"
                                            type="text"
                                            icon="mobile"
                            className="form-control"
                            required
                            value={this.state.Phone}
                            onChange={this.onChangePhone}
                        />
                    </div> 
                 
                    <div className="mb-3">
                    <MDBInput type="textarea" label="Brief Description About The Conference" rows="3"
                                            icon="pencil-alt"
                            className="form-control"
                            required
                            value={this.state.Conference_Description}
                            onChange={this.onChangeConferenceDescription}
                        />
                    </div>
                    
                    <br></br>
                    <div className="form-group">
                        <input type="submit" value="Edit Conference" className="btn btn-primary" />
                    </div>
                </form>

                <br></br><br></br><br></br><br></br>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Addonferences;