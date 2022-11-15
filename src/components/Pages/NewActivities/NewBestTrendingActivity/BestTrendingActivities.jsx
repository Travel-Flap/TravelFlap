import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BestTrendingActivities.css';
import { Button } from 'react-bootstrap';


// import "/src/App.css";

export default class NewTrendingActivities extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed:2000,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <div className='newTrendingAtivitycontainer'>
                <div className='newTrendingActivityHeadingContainer'>
                    <h2>Trending Activities</h2>
                </div>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/TrendingActivities/bike ride spiti valley ladakh.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Bike Ride <span className="job-title">
                                    {/* "Spiti Valley Ladakh." */}
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%",fontSize:"13px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                    </span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/TrendingActivities/boat ride in italy.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Boat Ride                        {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/worldActivitites/Float along the Amazon.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Amazon river                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/worldActivitites/Surf The Pipeline in Oahu.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Surfing                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/worldActivitites/ZipLine Over Niagara Falls.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Zip Line                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/worldActivitites/BungeeJump.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>New Zealand                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div> 

                        {/* <div className="newWorldActivitywrapper">
                            <div className="card newMultisection_Activityimage">
                                <div className="card-image newWorldActivitycardImage">
                                    <img src="Images/EasyVisaDestinations/dubai.jpg" />
                                </div>
                                <div className="newWorldActivitydetails">
                                    <h2>Dubai <span className="job-title">"Get your visa with TravelFlap Now!"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p>
                                    </span>
                                        // <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                    </h2>
                                </div>
                            </div>
                        </div> */}
                </Slider>
            </div>
        )
    }
}
