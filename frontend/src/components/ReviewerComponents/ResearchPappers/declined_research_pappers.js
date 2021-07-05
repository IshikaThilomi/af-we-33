import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

class PendingConferences extends Component {
    constructor(props) {
        super(props);

        this.state = {

            options: [],
            Presentation_Type: '',
            Title: '',
            Date_To_Be_held: ''
        };
    }
    componentDidMount() {
        console.log("test")
        const UserID = "60d76fe1dcda601b344f6b44"
        axios.get('https://afwe3.herokuapp.com/reviewer/get_all_declined_research_pappers')
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
                console.log("test11")
            })
    }


    navigateSubjectPage(e, ID) {
        window.location = `/manage_research1/${ID}`
    }

    render() {
        return (

            <div className="container">
                <br></br>
                <center> <h3 className="mainclass">Declined Research Papper</h3></center>
                <MDBContainer>
                    <MDBCard className="card-body" style={{ width: "70rem", marginTop: "1rem" }}>

                        <MDBCardText>
                            {this.state.options.length > 0 && this.state.options.map((item, index) => (

                                <div key={index} className="card mb-3">
                                    <div className="p-3" >

                                        <h4> Research Papper Name : {item.Name}</h4>
                                        <h4> Email : {item.Email}</h4>
                                        <h4> Research Type : {item.Research_Type}</h4>
                                        <h4> Status : {item.Verified}</h4>
                                        <div className="form-group">
                                            <input type="submit" onClick={e => this.navigateSubjectPage(e, item._id)} value="View Research Details" className="btn btn-primary" />
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