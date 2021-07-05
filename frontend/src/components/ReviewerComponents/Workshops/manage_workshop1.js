import React, { Component } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Select from 'react-select';

class manageResearch extends Component {
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
            Conference_Name: ''
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
    OnAccept(e) {
        e.preventDefault();
        console.log(e)
        let WorkShopConductor = new FormData()
        console.log(this.state.selectedFile)
        WorkShopConductor.append('RequestId', this.props.match.params.id)
        WorkShopConductor.append('UserId', this.state.UserId)
        WorkShopConductor.append('Name', this.state.Name)
        WorkShopConductor.append('Email', this.state.Email)
        WorkShopConductor.append('Phone', this.state.Phone)
        WorkShopConductor.append('Status', this.state.Status)
        WorkShopConductor.append('TimeStamp',this.state.TimeStamp)
        WorkShopConductor.append('StatusDate', Date().toLocaleString())
        WorkShopConductor.append('StatusMaker',"Lewis")
        WorkShopConductor.append('Date', this.state.Date)
        WorkShopConductor.append('Venue', this.state.Venue)
        WorkShopConductor.append('Description', this.state.Description)
        WorkShopConductor.append('Verified', "Accepted")
        WorkShopConductor.append('Type', this.state.Type)
        WorkShopConductor.append('Title', this.state.Title)
        WorkShopConductor.append('EventType', this.state.EventType)
        WorkShopConductor.append('Conference_Name',this.state.Conference_Name)
        WorkShopConductor.append('file_name', this.state.file_name)

        axios({
            url: 'https://afwe3.herokuapp.com/reviewer/update_workshops_by_id',
            method: "PUT",
            headers: {
            },
            data: WorkShopConductor
        })
    }
    OnDecline(e) {
        e.preventDefault();
        console.log(e)
        let WorkShopConductor = new FormData()
        console.log(this.state.selectedFile)
        WorkShopConductor.append('RequestId', this.props.match.params.id)
        WorkShopConductor.append('UserId', this.state.UserId)
        WorkShopConductor.append('Name', this.state.Name)
        WorkShopConductor.append('Email', this.state.Email)
        WorkShopConductor.append('Phone', this.state.Phone)
        WorkShopConductor.append('Status', this.state.Status)
        WorkShopConductor.append('TimeStamp',this.state.TimeStamp)
        WorkShopConductor.append('StatusDate', Date().toLocaleString())
        WorkShopConductor.append('StatusMaker',"Lewis")
        WorkShopConductor.append('Date', this.state.Date)
        WorkShopConductor.append('Venue', this.state.Venue)
        WorkShopConductor.append('Venue', this.state.Venue)
        WorkShopConductor.append('Description', this.state.Description)
        WorkShopConductor.append('Verified', "Decline")
        WorkShopConductor.append('Type', this.state.Type)
        WorkShopConductor.append('Title', this.state.Title)
        WorkShopConductor.append('EventType', this.state.EventType)
        WorkShopConductor.append('Conference_Name',this.state.Conference_Name)
        WorkShopConductor.append('file_name', this.state.file_name)

        axios({
            url: 'https://afwe3.herokuapp.com/reviewer/update_workshops_by_id ',
            method: "PUT",
            headers: {
            },
            data: WorkShopConductor
        })

    }
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
        WorkShopConductor.append('UserId', "60d76fe1dcda601b344f6b44")
        WorkShopConductor.append('Name', this.state.Name)
        WorkShopConductor.append('Email', this.state.Email)
        WorkShopConductor.append('Phone', this.state.Phone)
        WorkShopConductor.append('Status', "Pending")
        WorkShopConductor.append('TimeStamp', Date().toLocaleString())
        WorkShopConductor.append('StatusDate', "Pending")
        WorkShopConductor.append('StatusMaker', "Pending")
        WorkShopConductor.append('Date', this.state.Date)
        WorkShopConductor.append('Venue', this.state.Venue)
        WorkShopConductor.append('Venue', this.state.Venue)
        WorkShopConductor.append('Description', this.state.Description)
        WorkShopConductor.append('Verified', "Pending")
        WorkShopConductor.append('Type', this.state.Type)
        WorkShopConductor.append('Title', this.state.Title)
        WorkShopConductor.append('EventType', 'Work_Shop')
        WorkShopConductor.append('Conference_Name', this.state.ConferenceList[0].Name)
        WorkShopConductor.append('file_name', "Research_Papper" + "," + "60d76fe1dcda601b344f6b44" + "," + this.state.selectedFile.name)
        console.log("Researcher:- ", WorkShopConductor)

        axios({
            url: 'https://afwe3.herokuapp.com/events/register_workshopConductor',
            method: "POST",
            headers: {
            },
            data: WorkShopConductor
        })

    }
    componentDidMount() {
        axios.get(`https://afwe3.herokuapp.com/reviewer/get_workshop_by_id/${this.props.match.params.id}`)
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
                this.setState({ Date: response.data[0].Date });
                this.setState({ Venue: response.data[0].Venue });
                this.setState({ Description: response.data[0].Description });
                this.setState({ Verified: response.data[0].Verified });
                this.setState({ Type: response.data[0].Type });
                this.setState({ Title: response.data[0].Title });
                this.setState({ EventType: response.data[0].EventType });
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


               <center> <h3 className="mainclass">View Workshop Details</h3></center>
               <form>
               <div className="mb-3">
                                        <MDBInput label="Workshop Name"
                                            type="text"
                                            icon="user"
                                            className="form-control"
                                            required
                                            value={this.state.Name}
                                            onChange={this.onChangeName}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <MDBInput label="Workshop Conductor Email"
                                            type="text"
                                            icon="envelope"
                                            className="form-control"
                                            required
                                            value={this.state.Email}
                                            onChange={this.onChangeEMail}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <MDBInput label="Workshop Conductor Phone"
                                            type="text"
                                            icon="mobile"
                                            className="form-control"
                                            required
                                            value={this.state.Phone}
                                            onChange={this.onChangePhone}
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

export default manageResearch;
