import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewTopCityActivity.css';
import { Button } from 'react-bootstrap';
// import "/src/App.css";

export default class NewTopCityActivities extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            // autoplay: true,
            // autoplaySpeed:1000,
            // speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <div className='newTopCityAtivitycontainer'>
                <div className='newTopCityHeadingContainer'>
                    <h2>Top City Activities</h2>
                </div>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper newTopCityActivitywrapper">
                        <div className="card newTopCity_Activityimage">
                            <div className="card-image newTopCityActivitycardImage">
                                <img src="Images/worldActivitites/Boat under Iguazu Falls.jpg" />
                            </div>
                            <div className="newTopCityActivitydetails">
                                <h2>Boating <span className="job-title">
                                    {/* "Under The Iguazu Falls." */}
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%",fontSize:"13px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                    </span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTopCityActivitywrapper">
                        <div className="card newTopCity_Activityimage">
                            <div className="card-image newTopCityActivitycardImage">
                                <img src="Images/worldActivitites/Swim Through Mexico;s Cenotes.jpg" />
                            </div>
                            <div className="newTopCityActivitydetails">
                                <h2>Swimming <span className="job-title">
                                    {/* "Through the Mexico's Cenotes" */}
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%",fontSize:"13px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                    </span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTopCityActivitywrapper">
                        <div className="card newTopCity_Activityimage">
                            <div className="card-image newTopCityActivitycardImage">
                                <img src="Images/worldActivitites/Float along the Amazon.jpg" />
                            </div>
                            <div className="newTopCityActivitydetails">
                                <h2>Amazon river <span className="job-title">
                                    {/* "River side Viewing." */}
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%",fontSize:"13px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                    </span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTopCityActivitywrapper">
                        <div className="card newTopCity_Activityimage">
                            <div className="card-image newTopCityActivitycardImage">
                                <img src="Images/worldActivitites/Surf The Pipeline in Oahu.jpg" />
                            </div>
                            <div className="newTopCityActivitydetails">
                                <h2>Surfing <span className="job-title">
                                    {/* "Best Surf experience in the pipeline of the Oahu." */}
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%",fontSize:"13px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                    </span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTopCityActivitywrapper">
                        <div className="card newTopCity_Activityimage">
                            <div className="card-image newTopCityActivitycardImage">
                                <img src="Images/worldActivitites/Zipline Over Niagara Falls.jpg" />
                            </div>
                            <div className="newTopCityActivitydetails">
                                <h2>Zip Line <span className="job-title">
                                    {/* "Ziplining along the Niagar Falls." */}
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%",fontSize:"13px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                    </span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newTopCityActivitywrapper">
                        <div className="card newTopCity_Activityimage">
                            <div className="card-image newTopCityActivitycardImage">
                                <img src="Images/worldActivitites/BungeeJump.jpg" />
                            </div>
                            <div className="newTopCityActivitydetails">
                                <h2>New Zealand <span className="job-title">
                                    {/* "Bungee Jump over the  Kawaru River." */}
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%",fontSize:"13px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                    </span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
