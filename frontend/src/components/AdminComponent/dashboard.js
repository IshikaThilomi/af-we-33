import React, { Component } from 'react';
import axios from 'axios';

class AdminDashBoard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
    
            options: [],
            Presentation_Type: '',
            Title:'',
            Date_To_Be_held:''
        };
    }
    componentDidMount() {
        console.log("test")
        const UserID="60d76fe1dcda601b344f6b44"
        axios.get('https://afwe3.herokuapp.com/admindash/getStatus')
        .then(response => {
          this.setState({ options: response.data });
          console.log(response.data)
          console.log("test11")
        })
      }


      navigateSubjectPage(e, ID) {
        window.location = `/close_conference/${ID}`
      }

    render() {
        return (
            <div className="container">
              <br></br>
                {this.state.options.length > 0 && this.state.options.map((item, index) => (

                    <div key={index} className="card mb-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                        <div className="p-3" >



                            <h4> Total Number Of Workshops : {item.TotalNumberoFWorkShops}</h4>
                            <h4> Total Number Of Accepted Workshops : {item.TotalnumberoFAcceptedWorkShops}</h4>
                            <h4> Total Number Of Declined Workshops : {item.TotalNumberOFDeclinedWorkShops}</h4>
                            <h4> Total Number Of Pending Workshops : {item.TotalNumberofPendingWorkSHops}</h4>

                            <h4> Total Number Of Research Papper : {item.TotalNumberOfReseachs}</h4>
                            <h4> Total Number Of Accepted Research Papper : {item.TotalNumberoFacceptedRearches}</h4>
                            <h4> Total Number Of Declined Research Papper : {item.TotalNumberofDeclinedResearhces}</h4>
                            <h4> Total Number Of Pending Research Papper : {item.TotalNumberofPendingResearch}</h4>
                        </div>
                        
                    </div>
                    

                ))}
            </div>
        )
    }
}

export default AdminDashBoard;