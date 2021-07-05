import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

class ManageConference extends Component {
   

    render() {
        return (

            <div className="container">        
            <br></br><br></br><br></br>
               <center><img className="Logo2" src={process.env.PUBLIC_URL+"/logo.png"}/></center>
     
            </div>
        )
    }
}

export default ManageConference;