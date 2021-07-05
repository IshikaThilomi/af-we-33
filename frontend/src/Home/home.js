import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/animate.css'
import './css/owl.theme.css'
import './css/owl.carousel.css'
import './css/style.css'

import Footer from '../footer/footer'
import axios from 'axios';




class Home extends Component {
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
        axios.get(`https://afwe3.herokuapp.com/conference/getmainConferenceDetails`)
            .then(response => {
				this.setState({ options: response.data });
                console.log(response.data)
                console.log("test11",this.state.options)
            })
    }
	render() {
		return (
			<React.Fragment>
<br></br>


<h1></h1>


				<section  className="parallax-section">
					<div>
						<div class="row">
						{this.state.options.length > 0 && this.state.options.map((item, index) => (
							<div className="text-center">
								<h1 class="wow bounceIn " data-wow-delay="0.9s">{item.Name} {item.Conference_Type}</h1>
								<br></br>
								<h3 class="wow fadeInUp" data-wow-delay="0.9s">{item.Email}</h3>
								<br></br>
								<h5 class="wow fadeInUp" data-wow-delay="1.6s">At</h5>
								<br></br>
								<h5 class="wow fadeInUp" data-wow-delay="1.6s">{item.Phone}</h5>
							
							</div>
							))}
						</div>
					</div>
				</section>
				<section id="home" className="parallax-section">
					
				</section>
				


				<section  styid="overview" class="parallax-section">
					<div class="container ">
						<div class="row w-100 p-5 shadow-lg">

						

							<div class="col-md-1"></div>
							{this.state.options.length > 0 && this.state.options.map((item, index) => (
							<div class="wow fadeInUp col-md-10 col-sm-12" data-wow-delay="1s">
								<div class="overview-detail">
								
									<h2>About Our Conference</h2>
									<p>{item.Conference_Description}</p>

								
								
								</div>
								
							</div>
	))}
							<div class="col-md-1"></div>

						</div>
					</div>
				</section>
			
				

				<Footer />

			</React.Fragment>
		)
	}
}

export default Home;