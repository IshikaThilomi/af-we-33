import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import AuthService from "../services/auth.service";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBIcon } from 'mdbreact';
import { toast } from 'toast-notification-alert';
import axios from 'axios';

class RegitserResearcher extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEMail = this.onChangeEMail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSelect = this.onSelect.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Name: '',
            Email: '',
            Phone: '',
            Research_title: '',
            Research_Type: '',
            Description: '',
            EventType: '',
            options: [],
            ConferenceList: [],
            selectedFile: null,
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
    onChangeTitle(e) {
        this.setState({
            Research_title: e.target.value
        })
    }
    onChangeDescription(e) {
        this.setState({
            Description: e.target.value
        })
    }
    onChangeType(e) {
        this.setState({
            Research_Type: e.target.value
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

        /*
        const Researcher ={
            UserId:"60d76fe1dcda601b344f6b44s",
            Name: this.state.Name,
            Email:this.state.Email,
            Phone:this.state.Phone,
            Status:"Pending",
            TimeStamp:Date().toLocaleString(),
            StatusDate:"Pending",
            StatusMaker:"Pending",
            Research_title :this.state.NaResearch_titleme,
            Research_Type:this.state.Research_Type,
            Description :this.state.Description,
            Verified:"Pending",
            EventType:"Research Papper"
                 
        };
        */
        let Researcher = new FormData()
        console.log(this.state.selectedFile)
        Researcher.append('file', this.state.selectedFile)
        const UserID = this.state.currentUser.id
        Researcher.append('UserId',UserID)
        Researcher.append('Name', this.state.Name)
        Researcher.append('Email', this.state.Email)
        Researcher.append('Phone', this.state.Phone)
        Researcher.append('Status', "Pending")
        Researcher.append('TimeStamp', Date().toLocaleString())
        Researcher.append('StatusDate', "Pending")
        Researcher.append('StatusMaker', "Pending")
        Researcher.append('Research_title', this.state.Research_title)
        Researcher.append('Research_Type', this.state.Research_Type)
        Researcher.append('Description', this.state.Description)
        Researcher.append('Verified', "Pending")
        Researcher.append('EventType', "Research_Papper")
        Researcher.append('Conference_ID', this.state.currentUser.username)
        Researcher.append('Conference_Name', "")
        Researcher.append('file_name', "Research_Papper" + "," + "60d76fe1dcda601b344f6b44" + "," + this.state.selectedFile.name)
        console.log("Researcher:- ", Researcher)

        axios({
            url: 'https://afwe3.herokuapp.com/events/register_researcher',
            method: "POST",
            headers: {
            },
            data: Researcher
        })
        toast.show({title: 'Research Paper Submitted Successfully', position: 'topright', type: 'info'})

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
                {/* <div style={{margi:"20px"},{position:"absolute"}}>
                <img src={process.env.PUBLIC_URL+"/reimage.jpg"}/>
                </div>*/}


               <center> <h3 className="mainclass">Submit Research Papper</h3></center>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                    <MDBInput label="Enter Research Paper Name" 
                            type="text"
                            icon="user"
                            className="form-control"
                            required
                            value={this.state.Name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label="Enter Researcher Email" 
                            type="text"
                            icon="envelope"
                            className="form-control"
                            required
                            value={this.state.Email}
                            onChange={this.onChangeEMail}
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label="Enter Researcher Phone" 
                            type="text"
                            icon="mobile"
                            className="form-control"
                            required
                            value={this.state.Phone}
                            onChange={this.onChangePhone}
                        />
                    </div>
                    
                   
                    
                    <div className="mb-3">
                    <MDBInput label="Enter Research Type" 
                            type="text"
                            icon="certificate"
                            className="form-control"
                            required
                            value={this.state.Research_Type}
                            onChange={this.onChangeType}
                        />
                    </div>
                    <div className="mb-3">
                        
                        <MDBInput type="textarea" label="Brief Description About The Research" rows="3"
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
                        <input type="submit" value="Add Research" className="btn btn-primary" />
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

export default RegitserResearcher;