import React, { Component } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import Select from 'react-select';
import { toast } from 'toast-notification-alert'

class ManagePresentaion extends Component {
    constructor(props) {
        super(props);

        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeEMail=this.onChangeEMail.bind(this);
        this.onChangePhone=this.onChangePhone.bind(this);
        this.onChangePresentationType=this.onChangePresentationType.bind(this);
        this.onChnageTitle=this.onChnageTitle.bind(this);
        this.onChangePlatform=this.onChangePlatform.bind(this);
        this.onChangeLink=this.onChangeLink.bind(this);
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onSelect=this.onSelect.bind(this);
        this.OnChangeDescription=this.OnChangeDescription.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);   
        this.state = {
            Name: '',
            Email: '',
            Phone:'',
            Presentation_Type: '',
            Title:'',
            Platform: '',
            Link: '',
            Date_To_Be_held:'',
            Brief_descriptipn:'',
            selectedFile:null,
            options: [],
            ConferenceList:[],
            EventType:'',
            Conference_Name:''
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
    onChangePresentationType(e) {
        this.setState({
            Presentation_Type: e.target.value
        })
    }
    onChnageTitle(e) {
        this.setState({
            Title: e.target.value
        })
    }
    onChangePlatform(e) {
        this.setState({
            Platform: e.target.value
        })
    }
    onChangeLink(e) {
        this.setState({
            Link: e.target.value
        })
    }
    onChangeDate(e) {
        this.setState({
            Date_To_Be_held: e.target.value
        })
    }
    OnChangeDescription(e) {
        this.setState({
            Brief_descriptipn: e.target.value
        })
    }
    onSelect(selectedList, selectedItem) {
        this.setState({
            ConferenceList:selectedList
        })
    }
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] }); 
      };

      
    OnAccept(e) {
        e.preventDefault();
        console.log(e)
        let Presenter = new FormData() 
        Presenter.append('RequestID', this.props.match.params.id)
        Presenter.append('UserId', this.state.UserId)
        Presenter.append('Name', this.state.Name)
        Presenter.append('Email', this.state.Email)
        Presenter.append('Phone', this.state.Phone)
        Presenter.append('Status', this.state.Status)
        Presenter.append('TimeStamp', this.state.TimeStamp)
        Presenter.append('StatusDate', Date().toLocaleString())
        Presenter.append('StatusMaker', "Lewis")
        Presenter.append('Presentation_Type', this.state.Presentation_Type)
        Presenter.append('Title', this.state.Title)
        Presenter.append('Platform', this.state.Platform)
        Presenter.append('Link', this.state.Link)
        Presenter.append('Date_To_Be_held', this.state.Date_To_Be_held)
        Presenter.append('Verified', "Accepted")
        Presenter.append('Brief_descriptipn', this.state.Brief_descriptipn)
        Presenter.append('Conference_ID', this.state.Conference_ID)
        Presenter.append('Conference_Name', this.state.Conference_Name)
        Presenter.append('EventType', this.state.EventType)
        Presenter.append('file_name', this.state.file_name)
        console.log("Conference:- ", Presenter)

        axios({
            url:'https://afwe3.herokuapp.com/reviewer/update_presentation_by_Id',
            method:"PUT",
            headers:{
            },
            data:Presenter
        })
        toast.show({title: 'Research Paper Successfully Approved! Email has been send to the User', position: 'topright', type: 'info'})
       
    }
    OnDecline(e) {
        e.preventDefault();
        console.log(e)
        let Presenter = new FormData() 
        Presenter.append('RequestID', this.props.match.params.id)
        Presenter.append('UserId', this.state.UserId)
        Presenter.append('Name', this.state.Name)
        Presenter.append('Email', this.state.Email)
        Presenter.append('Phone', this.state.Phone)
        Presenter.append('Status', this.state.Status)
        Presenter.append('TimeStamp', this.state.TimeStamp)
        Presenter.append('StatusDate', Date().toLocaleString())
        Presenter.append('StatusMaker', "Lewis")
        Presenter.append('Presentation_Type', this.state.Presentation_Type)
        Presenter.append('Title', this.state.Title)
        Presenter.append('Platform', this.state.Platform)
        Presenter.append('Link', this.state.Link)
        Presenter.append('Date_To_Be_held', this.state.Date_To_Be_held)
        Presenter.append('Verified', "Decline")
        Presenter.append('Brief_descriptipn', this.state.Brief_descriptipn)
        Presenter.append('Conference_ID', this.state.Conference_ID)
        Presenter.append('Conference_Name', this.state.Conference_Name)
        Presenter.append('EventType', this.state.EventType)
        Presenter.append('file_name', this.state.file_name)
        console.log("Conference:- ", Presenter)

        axios({
            url:'https://afwe3.herokuapp.com/reviewer/update_presentation_by_Id',
            method:"PUT",
            headers:{
            },
            data:Presenter
        })
        toast.show({title: 'Research Paper Successfully Rejected! Email has been send to the User', position: 'topright', type: 'info'})
       
    }
    onSubmit(e){
        e.preventDefault();
        let Presenter = new FormData() 
        Presenter.append('file', this.state.selectedFile)
        Presenter.append('UserId', "60d76fe1dcda601b344f6b44")
        Presenter.append('Name', this.state.Name)
        Presenter.append('Email', this.state.Email)
        Presenter.append('Phone', this.state.Phone)
        Presenter.append('Status', "Pending")
        Presenter.append('TimeStamp', Date().toLocaleString())
        Presenter.append('StatusDate', "Pending")
        Presenter.append('StatusMaker', "Pending")
        Presenter.append('Presentation_Type', this.state.Presentation_Type)
        Presenter.append('Title', this.state.Title)
        Presenter.append('Platform', this.state.Platform)
        Presenter.append('Link', this.state.Link)
        Presenter.append('Date_To_Be_held', this.state.Date_To_Be_held)
        Presenter.append('Verified', "Pending")
        Presenter.append('Brief_descriptipn', this.state.Brief_descriptipn)
        Presenter.append('Conference_ID', this.state.ConferenceList[0]._id)
        Presenter.append('Conference_Name', this.state.ConferenceList[0].Name)
        Presenter.append('EventType', "Presentation")
        Presenter.append('file_name', "Presentation"+","+"60d76fe1dcda601b344f6b44"+","+this.state.selectedFile.name)
       console.log("Presneterrrr",this.state.ConferenceList)

      /* var fd= new FormData();
        fd.append("dp",this.state.selectedFile)

        const Presenter ={
            UserId:"60d76fe1dcda601b344f6b44",
            Name: this.state.Name,
            Email:this.state.Email,
            Phone:this.state.Phone,
            Status:"Pending",
            TimeStamp:Date().toLocaleString(),
            StatusDate:"Pending",
            StatusMaker:"Pending",
            Presentation_Type: this.state.Presentation_Type,
            Title:this.state.Title,
            Platform: this.state.Platform,
            Link: this.state.Link,
            Date_To_Be_held:this.state.Date_To_Be_held,
            Verified:"Pending",
            Brief_descriptipn:this.state.Brief_descriptipn,
            selected_file:this.state.selectedFile
        };*/

      /*  let formData = new FormData();
        formData.append("file", this.state.selectedFile);
        console.log(formData)*/
        axios({
            url:'https://afwe3.herokuapp.com/events/register_presenter',
            method:"POST",
            headers:{
            },
            data:Presenter
        })
        
       /* console.log("Presenter:- ",Presenter)
        console.log(this.state.selectedFile);
        axios.post('http://localhost:8089/events/register_presenter',Presenter)
            .then(res => console.log(res.data));*/
       
    }
  
      componentDidMount() {
        axios.get(`https://afwe3.herokuapp.com/reviewer/get_presentation_by_id/${this.props.match.params.id}`)
            .then(response => {

                console.log(response)
                this.setState({ UserId: response.data[0].UserId });
                this.setState({ Name: response.data[0].Name });
                this.setState({ Email: response.data[0].Email });
                this.setState({ Phone: response.data[0].Phone });
                this.setState({ Status: response.data[0].Status });
                this.setState({ TimeStamp: response.data[0].TimeStamp });
                this.setState({ StatusDate: response.data[0].StatusDate });
                this.setState({ StatusMaker: response.data[0].StatusMaker });
                this.setState({ Presentation_Type: response.data[0].Presentation_Type });
                this.setState({ Title: response.data[0].Title });
                this.setState({ Platform: response.data[0].Platform });
                this.setState({ Link: response.data[0].Link });
                this.setState({ Date_To_Be_held: response.data[0].Date_To_Be_held });
                this.setState({ Verified: response.data[0].Verified });
                this.setState({ Brief_descriptipn: response.data[0].Brief_descriptipn });
                this.setState({ Conference_ID: response.data[0].Conference_ID });
                this.setState({ Conference_Name: response.data[0].Conference_Name });
                this.setState({ EventType: response.data[0].EventType });
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


               <center> <h3 className="mainclass">View Presentation Details</h3></center>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                    <MDBInput label="Enter Presenter Name" 
                            type="text"
                            icon="user"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label="Enter Presenter Email" 
                            type="text"
                            icon="envelope"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onChangeEMail}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label="Enter Presenter Phone" 
                            type="text"
                            icon="mobile"
                            className="form-control"
                            value={this.state.Phone}
                            onChange={this.onChangePhone}
                            disabled
                        />
                    </div>
                    
                    <div className="mb-3">
                    <MDBInput label="Enter Presentation Name" 
                            type="text"
                            icon="envelope"
                            className="form-control"
                            value={this.state.Conference_Name}
                            onChange={this.onChangePresentationType}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label="Enter Presentation Type" 
                            type="text"
                            icon="scroll"
                            className="form-control"
                            value={this.state.Presentation_Type}
                            onChange={this.onChangePresentationType}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                    <MDBInput label="Enter Presentation Type" 
                            type="text"
                            icon="certificate"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChnageTitle}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        
                        <MDBInput type="textarea" label="Brief Description About The Presentation" rows="3"
                        icon="pencil-alt"  
                            className="form-control"
                            value={this.state.Brief_descriptipn}
                            onChange={this.OnChangeDescription}
                            disabled
                        />
                    </div>
                   
                    <br></br>
                    <div className="form-group">
                        <input onClick={e => this.OnAccept(e)} value="Approve Presentation " className="btn btn-primary" />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input onClick={e => this.OnDecline(e)} value="Decline Presentation " className="btn btn-primary" />
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

export default ManagePresentaion;
