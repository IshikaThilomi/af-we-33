import React, { Component } from 'react';
import axios from 'axios';

class Conferences extends Component {
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
        const EditorID="60d898b4e43e7e1615c4c448"
        axios.get('https://afwe3.herokuapp.com/conference/get_all_approved_Conferences')
        .then(response => {
          this.setState({ options: response.data });
          console.log(response.data)
          console.log("test11")
        })
      }

      navigateSubjectPage(e, ID) {
        window.location = `/get_conference_by_id/${ID}`
      }
      
    render() {
        return (
            <div className="container">
              <br></br>
                {this.state.options.length > 0 && this.state.options.map((item, index) => (

                    <div key={index} className="card mb-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                        <div className="p-3" >

                            <h4> Conductor Name : {item.Name}</h4>
                            <h4> Venue : {item.Venue}</h4>
                            <h4> Date : {item.Date}</h4>
                            <h4> Conference Type : {item.Conference_Type}</h4>  
                            <h4> Status : {item.Verified}</h4>      
                        </div>
                    </div>

                ))}
            </div>
        )
    }
}

export default Conferences;