import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import axios from 'axios';
class ManageResearch extends Component {
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
            Conference_Name: '',
            Conference_ID:''
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

    OnAccept(e) {
        e.preventDefault();
        console.log(e)
        let Researcher = new FormData()
        Researcher.append('RequestId',this.props.match.params.id)
        Researcher.append('UserId',this.state.UserId)
        Researcher.append('Name', this.state.Name)
        Researcher.append('Email', this.state.Email)
        Researcher.append('Phone',this.state.Phone)
        Researcher.append('Status', this.state.Status)
        Researcher.append('TimeStamp',this.state.TimeStamp)
        Researcher.append('StatusDate', Date().toLocaleString())
        Researcher.append('StatusMaker', "lewis")
        Researcher.append('Research_title', this.state.Research_title)
        Researcher.append('Research_Type', this.state.Research_Type)
        Researcher.append('Description', this.state.Description)
        Researcher.append('Verified', "Accepted")
        Researcher.append('EventType', this.state.EventType)
        Researcher.append('Conference_ID', this.state.Conference_ID)
        Researcher.append('Conference_Name', this.state.Conference_Name)
        Researcher.append('file_name', this.state.file_name)
        console.log("Conference:- ", Researcher)

        axios({
            url: 'https://afwe3.herokuapp.com/reviewer/update_researsh_by_id',
            method: "PUT",
            headers: {
            },
            data: Researcher
        })

    }
    OnDecline(e) {
        e.preventDefault();
        console.log(e)
        let Researcher = new FormData()
        Researcher.append('RequestId',this.props.match.params.id)
        Researcher.append('UserId',this.state.UserId)
        Researcher.append('Name', this.state.Name)
        Researcher.append('Email', this.state.Email)
        Researcher.append('Phone',this.state.Phone)
        Researcher.append('Status', this.state.Status)
        Researcher.append('TimeStamp',this.state.TimeStamp)
        Researcher.append('StatusDate', Date().toLocaleString())
        Researcher.append('StatusMaker', "lewis")
        Researcher.append('Research_title', this.state.Research_title)
        Researcher.append('Research_Type', this.state.Research_Type)
        Researcher.append('Description', this.state.Description)
        Researcher.append('Verified', "Decline")
        Researcher.append('EventType', this.state.EventType)
        Researcher.append('Conference_ID', this.state.Conference_ID)
        Researcher.append('Conference_Name', this.state.Conference_Name)
        Researcher.append('file_name', this.state.file_name)
        console.log("Conference:- ", Researcher)

        axios({
            url: 'https://afwe3.herokuapp.com/reviewer/update_researsh_by_id',
            method: "PUT",
            headers: {
            },
            data: Researcher
        })

    }
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
        Researcher.append('UserId', "60d76fe1dcda601b344f6b44")
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
        Researcher.append('Conference_ID', this.state.ConferenceList[0]._id)
        Researcher.append('Conference_Name', this.state.ConferenceList[0].Name)
        Researcher.append('file_name', "Research_Papper" + "," + "60d76fe1dcda601b344f6b44" + "," + this.state.selectedFile.name)
        console.log("Researcher:- ", Researcher)

        axios({
            url: 'https://afwe3.herokuapp.com/events/register_researcher',
            method: "POST",
            headers: {
            },
            data: Researcher
        })

    }

    componentDidMount() {
        axios.get(`https://afwe3.herokuapp.com/reviewer/get_research_papper_by_id/${this.props.match.params.id}`)
            .then(response => {
                console.log(response.data)
                this.setState({ UserId: response.data[0].UserId });
                this.setState({ Name: response.data[0].Name });
                this.setState({ Email: response.data[0].Email });
                this.setState({ Phone: response.data[0].Phone });
                this.setState({ Status: response.data[0].Status });
                this.setState({ TimeStamp: response.data[0].TimeStamp });
                this.setState({ StatusDate: response.data[0].StatusDate });
                this.setState({ StatusMaker: response.data[0].StatusMaker });
                this.setState({ Research_title: response.data[0].Research_title });
                this.setState({ Research_Type: response.data[0].Research_Type });
                this.setState({ Description: response.data[0].Description });
                this.setState({ Verified: response.data[0].Verified });
                this.setState({ EventType: response.data[0].EventType });
                this.setState({ Conference_ID: response.data[0].Conference_ID });
                this.setState({ Conference_Name: response.data[0].Conference_Name });
                this.setState({ file_name: response.data[0].file_name });

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


               <center> <h3 className="mainclass">View Research Papper Details</h3></center>
               <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                    <MDBInput label=" Research Paper Name" 
                            type="text"
                            icon="user"
                            className="form-control"
                            required
                            value={this.state.Name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label=" Researcher Email" 
                            type="text"
                            icon="envelope"
                            className="form-control"
                            required
                            value={this.state.Email}
                            onChange={this.onChangeEMail}
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label=" Researcher Phone" 
                            type="text"
                            icon="mobile"
                            className="form-control"
                            required
                            value={this.state.Phone}
                            onChange={this.onChangePhone}
                        />
                    </div>
                    
                   
                    
                    <div className="mb-3">
                    <MDBInput label=" Research Type" 
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

export default ManageResearch;
