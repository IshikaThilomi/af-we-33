import React, { Component } from 'react';
import axios from 'axios';
import { Multiselect } from 'multiselect-react-dropdown';
import Select from 'react-select';
import AuthService from "../services/auth.service";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';
import { toast } from 'toast-notification-alert';

class Presenter extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEMail = this.onChangeEMail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePresentationType = this.onChangePresentationType.bind(this);
        this.onChnageTitle = this.onChnageTitle.bind(this);
        this.onChangePlatform = this.onChangePlatform.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.OnChangeDescription = this.OnChangeDescription.bind(this);


        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            Name: '',
            Email: '',
            Phone: '',
            Presentation_Type: '',
            Title: '',
            Platform: '',
            Link: '',
            Date_To_Be_held: '',
            Brief_descriptipn: '',
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
            ConferenceList: selectedList
        })
    }
    onFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };
    onSubmit(e) {
        e.preventDefault();
        let Presenter = new FormData()
        console.log("Suer",this.state.currentUser)
        const UserID = this.state.currentUser.id
        Presenter.append('UserId',UserID)
        Presenter.append('file', this.state.selectedFile)
      
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
        Presenter.append('file_name', "Presentation" + "," + "60d76fe1dcda601b344f6b44" + "," + this.state.selectedFile.name)
        console.log("Presneterrrr", this.state.ConferenceList)
        

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
            url: 'https://afwe3.herokuapp.com/events/register_presenter',
            method: "POST",
            headers: {
            },
            data: Presenter
        })
        toast.show({title: 'Presentation Submitted Successfully', position: 'topright', type: 'info'})
        

        /* console.log("Presenter:- ",Presenter)
         console.log(this.state.selectedFile);
         axios.post('http://localhost:8089/events/register_presenter',Presenter)
             .then(res => console.log(res.data));*/

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


                                <center> <h3 className="mainclass">Submit Presentation</h3></center>
                                <form onSubmit={this.onSubmit}>
                                    <div className="mb-3">
                                        <MDBInput label="Enter Presenter Name"
                                            type="text"
                                            icon="user"
                                            className="form-control"
                                            required
                                            value={this.state.Name}
                                            onChange={this.onChangeName}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <MDBInput label="Enter Presenter Email"
                                            type="text"
                                            icon="envelope"
                                            className="form-control"
                                            required
                                            value={this.state.Email}
                                            onChange={this.onChangeEMail}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <MDBInput label="Enter Presenter Phone"
                                            type="text"
                                            icon="mobile"
                                            className="form-control"
                                            required
                                            value={this.state.Phone}
                                            onChange={this.onChangePhone}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Conference: </label>
                                        <Multiselect
                                            options={this.state.options}
                                            selectedValues={this.state.selectedValue}
                                            onSelect={this.onSelect}
                                            onRemove={this.onRemove}
                                            displayValue="Name"
                                            value={this.state.selectedValue}
                                            onSelect={this.onSelect}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <MDBInput label="Enter Presentation Title"
                                            type="text"
                                            icon="scroll"
                                            className="form-control"
                                            required
                                            value={this.state.Research_title}
                                            onChange={this.onChangeTitle}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <MDBInput label="Enter Presentation Type"
                                            type="text"
                                            icon="certificate"
                                            className="form-control"
                                            required
                                            value={this.state.Research_Type}
                                            onChange={this.onChangeType}
                                        />
                                    </div>
                                    <div className="mb-3">

                                        <MDBInput type="textarea" label="Brief Description About The Presentation" rows="3"
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
                                        <input type="submit" value="Add Presentation" className="btn btn-primary" />
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

export default Presenter;