import React, { Component } from 'react';
import axios from 'axios';

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
            Status: "Ofline",
            Verified: "Verified",
            StatusDate:Date().toLocaleString(),
            StatusMaker: "Lewis",
            RequestID: this.props.match.params.id
        }
        console.log("Conference:- ", Conference)
        axios.put('https://afwe3.herokuapp.com/adminconference/manageconference', Conference)
            .then(res => console.log(res.data));
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
            <div className="container">
                <h3>Submit A Conference Request</h3><br></br>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label>Cordinator Full Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeName}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label>Email: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Email}
                            onChange={this.onChangeEMail}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label>Phone: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Phone}
                            onChange={this.onChangePhone}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label>Conference Type: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Conference_Type}
                            onChange={this.onChangeConferenceType}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label>Requested Venue: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Venue}
                            onChange={this.onChangeVenue}
                            disabled
                        />
                    </div>
                    <div className="mb-3">
                        <label>Requested Date: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.Date}
                            onChange={this.onChangeDate}
                            disabled
                        />
                    </div>

                    <div className="mb-3">
                        <label>Conference Description: </label>
                        <textarea
                            className="form-control"
                            value={this.state.Conference_Description}
                            onChange={this.onChangeConferenceDescription}
                            disabled
                        />
                    </div>

                    <br></br>
                    <div className="form-group">
                        <input onClick={e => this.OnAccept(e)} value="Close Conference" className="btn btn-primary" />
                    </div>
                    <br></br>
                    
                </form>


            </div>
        )
    }
}

export default ManageConference;