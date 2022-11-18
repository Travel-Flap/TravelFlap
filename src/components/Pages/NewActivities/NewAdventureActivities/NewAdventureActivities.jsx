import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewAdventureActivities.css';
import { Button } from 'react-bootstrap';
// import "/src/App.css";

export default class NewAdventureActivities extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            // autoplay: true,
            // autoplaySpeed:1000,
            // speed: 1000,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <div className='newAdventureActivitycontainer'>
                <div className='newAdventureHeadingContainer'>
                    <h2>Adventure Activities</h2>
                </div>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper newAdventureActivitywrapper">
                        <div className="card newAdventure_Activityimage">
                            <div className="card-image newAdventureActivitycardImage">
                                <img src="Images/worldActivitites/Boat under Iguazu Falls.jpg" />
                            </div>
                            <div className="newAdventureActivitydetails">
                                <h2>Boating                         {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newAdventureActivitywrapper">
                        <div className="card newAdventure_Activityimage">
                            <div className="card-image newAdventureActivitycardImage">
                                <img src="Images/worldActivitites/Swim Through Mexico;s Cenotes.jpg" />
                            </div>
                            <div className="newAdventureActivitydetails">
                                <h2>Swimming                         {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newAdventureActivitywrapper">
                        <div className="card newAdventure_Activityimage">
                            <div className="card-image newAdventureActivitycardImage">
                                <img src="Images/worldActivitites/Float along the Amazon.jpg" />
                            </div>
                            <div className="newAdventureActivitydetails">
                                <h2>Amazon river                         {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newAdventureActivitywrapper">
                        <div className="card newAdventure_Activityimage">
                            <div className="card-image newAdventureActivitycardImage">
                                <img src="Images/worldActivitites/Surf The Pipeline in Oahu.jpg" />
                            </div>
                            <div className="newAdventureActivitydetails">
                                <h2>Surfing                         {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newAdventureActivitywrapper">
                        <div className="card newAdventure_Activityimage">
                            <div className="card-image newAdventureActivitycardImage">
                                <img src="Images/worldActivitites/Zipline Over Niagara Falls.jpg" />
                            </div>
                            <div className="newAdventureActivitydetails">
                                <h2>Zip Line                         {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newAdventureActivitywrapper">
                        <div className="card newAdventure_Activityimage">
                            <div className="card-image newAdventureActivitycardImage">
                                <img src="Images/worldActivitites/BungeeJump.jpg" />
                            </div>
                            <div className="newAdventureActivitydetails">
                                <h2>New Zealand                        {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
