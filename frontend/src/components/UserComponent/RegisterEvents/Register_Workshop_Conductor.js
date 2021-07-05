import React, { Component } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import AuthService from "../services/auth.service";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { toast } from 'toast-notification-alert';

class RegisterWorkShopConductor extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEMail = this.onChangeEMail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeVenue = this.onChangeVenue.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onchangeType = this.onchangeType.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSelect = this.onSelect.bind(this);


        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Name: '',
            Email: '',
            Phone: '',
            Date: '',
            Venue: '',
            Description: '',
            Title: '',
            Type: '',
            selectedFile: null,
            options: [],
            ConferenceList: [],
            EventType: '',
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
    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        })
    }
    onChangeVenue(e) {
        this.setState({
            Venue: e.target.value
        })
    }
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }
    onchangeType(e) {
        this.setState({
            Type: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        })
    }
    onSelect(selectedList, selectedItem) {
        this.setState({
            ConferenceList: selectedList
        })
    }
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };
    onSubmit(e) {
        e.preventDefault();
        /*const WorkShopConductor ={
            UserId:"60d76fe1dcda601b344f6b44",
            Name: this.state.Name,
            Email:this.state.Email,
            Phone:this.state.Phone,
            Status:"Pending",
            TimeStamp:Date().toLocaleString(),
            StatusDate:"Pending",
            StatusMaker:"Pending",
            Date:this.state.Date,
            Venue:this.state.Venue,
            Description :this.state.Description,
            Title :this.state.Title,
            Type :this.state.Type,
            Verified:"Pending",
            EventType:'Work Shop'
                 
        };
        console.log("Workship Cinductier :-",WorkShopConductor)
        axios.post('http://localhost:8089/events/register_workshopConductor', WorkShopConductor)
            .then(res => console.log(res.data));

            */
        let WorkShopConductor = new FormData()
        console.log(this.state.selectedFile)
        WorkShopConductor.append('file', this.state.selectedFile)
        const UserID = this.state.currentUser.id
        WorkShopConductor.append('UserId',UserID)
        WorkShopConductor.append('Name', this.state.Name)
        WorkShopConductor.append('Email', this.state.Email)
        WorkShopConductor.append('Phone', this.state.Phone)
        WorkShopConductor.append('Status', "Pending")
        WorkShopConductor.append('TimeStamp', Date().toLocaleString())
        WorkShopConductor.append('StatusDate', "Pending")
        WorkShopConductor.append('StatusMaker', "Pending")
        WorkShopConductor.append('Research_title', this.state.Research_title)
        WorkShopConductor.append('Research_Type', this.state.Research_Type)
        WorkShopConductor.append('Description', this.state.Description)
        WorkShopConductor.append('Verified', "Pending")
        WorkShopConductor.append('EventType', "Research_Papper")
        WorkShopConductor.append('Conference_ID', this.state.currentUser.username)
        WorkShopConductor.append('Conference_Name', "")
        WorkShopConductor.append('file_name', "Research_Papper" + "," + "60d76fe1dcda601b344f6b44" + "," + this.state.selectedFile.name)
        console.log("Researcher:- ", WorkShopConductor)

        axios({
            url: 'https://afwe3.herokuapp.com/events/register_workshopConductor',
            method: "POST",
            headers: {
            },
            data: WorkShopConductor
        })
        toast.show({title: 'Workshop Submitted Successfully', position: 'topright', type: 'info'})

    }
    componentDidMount() {
        console.log("test")
        axios.get('https://afwe3.herokuapp.com/conference/get_all_approved_Conferences')
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
                console.log("test11")
            })
            
    }
    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="15">
                        <MDBCard>
                            <MDBCardBody>

                                <center> <h3 className="mainclass">Register  Workshop </h3></center>
                                <form onSubmit={this.onSubmit}>
                                    <div className="mb-3">
                                        <MDBInput label="Enter Workshop Name"
                                            type="text"
                                            icon="user"
                                            className="form-control"
                                            required
                                            value={this.state.Name}
                                            onChange={this.onChangeName}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <MDBInput label="Enter Workshop Conductor Email"
                                            type="text"
                                            icon="envelope"
                                            className="form-control"
                                            required
                                            value={this.state.Email}
                                            onChange={this.onChangeEMail}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <MDBInput label="Enter Workshop Conductor Phone"
                                            type="text"
                                            icon="mobile"
                                            className="form-control"
                                            required
                                            value={this.state.Phone}
                                            onChange={this.onChangePhone}
                                        />
                                    </div>
                                
                                    
                                    <div className="mb-3">
                                        <MDBInput label="Enter Workshop Type"
                                            type="text"
                                            icon="certificate"
                                            className="form-control"
                                            required
                                            value={this.state.Type}
                                            onChange={this.onchangeType}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <MDBInput type="textarea" label="Brief Description About The Workshop" rows="3"
                                            icon="pencil-alt"
                                            className="form-control"
                                            required
                                            value={this.state.Description}
                                            onChange={this.onChangeDescription}
                                        />
                                    </div>

                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroupFileAddon01">
                                                Upload
                                            </span>
                                        </div>
                                        <div className="custom-file">
                                            <input
                                                onChange={this.onFileChange}
                                                type="file"
                                                className="custom-file-input"
                                                id="inputGroupFile01"
                                                aria-describedby="inputGroupFileAddon01"
                                            />
                                            <label className="custom-file-label" htmlFor="inputGroupFile01">
                                                Choose file
                                            </label>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="form-group">
                                        <input type="submit" value="Add Workshop" className="btn btn-primary" />
                                    </div>
                                </form>
                                <br></br><br></br><br></br>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default RegisterWorkShopConductor;