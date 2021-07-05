import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { toast } from 'toast-notification-alert';

class ManageConference extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEMail = this.onChangeEMail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeConferenceType = this.onChangeConferenceType.bind(this);
        this.onChangeVenue = this.onChangeVenue.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeConferenceDescription = this.onChangeConferenceDescription.bind(this);



        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Name: '',
            Email: '',
            Phone: '',
            Conference_Type: '',
            Venue: '',
            Date: '',
            Conference_Description: '',
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

    OnAccept(e) {
        e.preventDefault();
        console.log(e)
        const Conference = {
            EditorID: "60d898b4e43e7e1615c4c448",
            Name: this.state.Name,
            Email: this.state.Email,
            Phone: this.state.Phone,
            Conference_Type: this.state.Conference_Type,
            Venue: this.state.Venue,
            Date: this.state.Date,
            Conference_Description: this.state.Conference_Description,
            TimeStamp: Date().toLocaleString(),
            Status: "Open",
            Verified: "Verified",
            StatusDate:Date().toLocaleString(),
            StatusMaker: "Lewis",
            RequestID: this.props.match.params.id
        }
        console.log("Conference:- ", Conference)
        axios.put('https://afwe3.herokuapp.com/adminconference/ApproveConference', Conference)
            .then(res => console.log(res.data));
            toast.show({title: 'Conference Successfully Approved', position: 'topright', type: 'info'})
    }
    OnDecline(e) {
        e.preventDefault();
        console.log(e)
        const Conference = {
            EditorID: "60d898b4e43e7e1615c4c448",
            Name: this.state.Name,
            Email: this.state.Email,
            Phone: this.state.Phone,
            Conference_Type: this.state.Conference_Type,
            Venue: this.state.Venue,
            Date: this.state.Date,
            Conference_Description: this.state.Conference_Description,
            TimeStamp: Date().toLocaleString(),
            Status: "Declined",
            Verified: "Declined",
            StatusDate:Date().toLocaleString(),
            StatusMaker: "Lewis",
            RequestID: this.props.match.params.id
        }
        console.log("Conference:- ", Conference)
        axios.put('https://afwe3.herokuapp.com/adminconference/manageconference', Conference)
            .then(res => console.log(res.data));
            toast.show({title: 'Conference Successfully Rejected', position: 'topright', type: 'info'})
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(e)
        const Conference = {
            EditorID: "60d898b4e43e7e1615c4c448",
            Name: this.state.Name,
            Email: this.state.Email,
            Phone: this.state.Phone,
            Conference_Type: this.state.Conference_Type,
            Venue: this.state.Venue,
            Date: this.state.Date,
            Conference_Description: this.state.Conference_Description,
            TimeStamp: Date().toLocaleString(),
            Status: this.state.Status,
            Verified: this.state.Verified,
            StatusDate: this.state.StatusDate,
            StatusMaker: this.state.StatusMaker,
            RequestID: this.props.match.params.id
        }
        console.log("Conference:- ", Conference)
        axios.put('https://afwe3.herokuapp.com/conference/editconference', Conference)
            .then(res => console.log(res.data));
    }

    componentDidMount() {
        axios.get(`https://afwe3.herokuapp.com/adminconference/get_conferences_byid/${this.props.match.params.id}`)
            .then(response => {
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


                            <center> <h3 className="mainclass">Approve Conference Changes</h3></center>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                    <MDBInput label="Conference Name"
                                            type="text"
                                            icon="user"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}
                            disabled
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
                    <MDBInput label="Conference Date"
                                            type="text"
                                            icon="envelope"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onChangeEMail}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label="Conference Location"
                                            type="text"
                                            icon="mobile"
                            className="form-control"
                            value={this.state.Phone}
                            onChange={this.onChangePhone}
                            disabled
                        />
                    </div> 
              
              
                    <div className="mb-3">
                    <MDBInput type="textarea" label="Brief Description About The Conference" rows="3"
                                            icon="pencil-alt"
                            className="form-control"
                            value={this.state.Conference_Description}
                            onChange={this.onChangeConferenceDescription}
                            disabled
                        />
                    </div>
                    
                    <br></br>
                    <div className="form-group">
                        <input onClick={e => this.OnAccept(e)} value="Approve Changes " className="btn btn-primary" />
                    </div>
                  
                    <div className="form-group">
                        <input onClick={e => this.OnDecline(e)} value="Decline Changes " className="btn btn-primary" />
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

export default ManageConference;