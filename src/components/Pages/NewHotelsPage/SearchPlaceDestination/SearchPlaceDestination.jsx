import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SearchPlaceDestination.css';
import { Button } from 'react-bootstrap';
import { HotelDataFaq } from './HotelDataFaq';
// import "/src/App.css";

export default class SearchPlaceDestination extends Component {
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
            <div className='newSearchPlaceDestinationContainer'>
                <div className='newSearchPlaceDestinationHeadingContainer'>
                    <h2>Search for places for your stay comfort</h2>
                </div>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper newSearchPlaceDestinationWrapper">
                        <div className="card newSearchPlaceDestinationImage">
                            <div className="card-image newSearchPlaceDestinationCardImage">
                                <img src="Images/NewHomeLayout/Hotels/AllCompImages/CityMax Hotel.jpg" />
                            </div>
                            <div className="newSearchPlaceDestinationDetails">
                                <h2>Citymax Hotel Bru
                                    {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Dubai,UAE</p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newSearchPlaceDestinationWrapper">
                        <div className="card newSearchPlaceDestinationImage">
                            <div className="card-image newSearchPlaceDestinationCardImage">
                                <img src="Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg" />
                            </div>
                            <div className="newSearchPlaceDestinationDetails">
                                <h2> The Signature Inn
                                    {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Banglore,Karnataka </p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newSearchPlaceDestinationWrapper">
                        <div className="card newSearchPlaceDestinationImage">
                            <div className="card-image newSearchPlaceDestinationCardImage">
                                <img src="Images/NewHomeLayout/Hotels/AllCompImages/Rambuttri Village.jpg" />
                            </div>
                            <div className="newSearchPlaceDestinationDetails">
                                <h2> Rambuttri Village                         {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newSearchPlaceDestinationWrapper">
                        <div className="card newSearchPlaceDestinationImage">
                            <div className="card-image newSearchPlaceDestinationCardImage">
                                <img src="Images/NewHomeLayout/Hotels/AllCompImages/Hii Nyc Hostel.jpg" />
                            </div>
                            <div className="newSearchPlaceDestinationDetails">
                                <h2> Hill Nyc Hostel
                                    {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}> New york,USA </p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newSearchPlaceDestinationWrapper">
                        <div className="card newSearchPlaceDestinationImage">
                            <div className="card-image newSearchPlaceDestinationCardImage">
                                <img src="Images/NewHomeLayout/Hotels/AllCompImages/Kintusgi.webp" />
                            </div>
                            <div className="newSearchPlaceDestinationDetails">
                                <h2> Kintusgi
                                    {/* <span> */}
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Bangkok </p>
                                    <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                    <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newSearchPlaceDestinationWrapper">
                        <div className="card newSearchPlaceDestinationImage">
                            <div className="card-image newSearchPlaceDestinationCardImage">
                                <img src="Images/worldActivitites/BungeeJump.jpg" />
                            </div>
                            <div className="newSearchPlaceDestinationDetails">
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

                <HotelDataFaq />
            </div>


        )
    }
}
