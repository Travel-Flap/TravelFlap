import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CheapCarHire.css';
import { Button } from 'react-bootstrap';
import { CarDataDrop } from './CarDataDrop';
import { Link } from 'react-router-dom';
// import "/src/App.css";

export default class CheapCarHire extends Component {
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
            <div className='newCheapCarHireDestinationContainer'>
                <div className='newCheapCarHireHeadingContainer'>
                    <h2> Select cheap Car Hire Destinations</h2>
                </div>

                <div className='searchCarHireDestinationContext'>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio sit aliquid veritatis molestiae. Excepturi, voluptas. Praesentium saepe,
                        deserunt iure ducimus commodi accusantium at deleniti dolorem, impedit magnam veniam delectus perferendis!
                    </p>
                </div>
                <Slider {...settings} className="multiCardSlider">
                    <Link to="/rentalsCarDetails">
                        <div className="card-wrapper newCheapCarHireWrapper">
                            <div className="card newCheapCarHireImage">
                                <div className="card-image newCheapCarHireCardImage">
                                    <img src="Images/NewHomeLayout/NewRentals/CheapCarHire/dubai.webp" />
                                </div>
                                <div className="newCheapCarHireDetails">
                                    <h2>Dubai,UAE
                                        {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Book your Ride</p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to="/rentalsCarDetails">
                        <div className="card-wrapper newCheapCarHireWrapper">
                            <div className="card newCheapCarHireImage">
                                <div className="card-image newCheapCarHireCardImage">
                                    <img src="Images/NewHomeLayout/NewRentals/CheapCarHire/gurugram.webp" />
                                </div>
                                <div className="newCheapCarHireDetails">
                                    <h2> Gurugram,Haryana
                                        {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Book your Ride </p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/rentalsCarDetails">
                        <div className="card-wrapper newCheapCarHireWrapper">
                            <div className="card newCheapCarHireImage">
                                <div className="card-image newCheapCarHireCardImage">
                                    <img src="Images/NewHomeLayout/NewRentals/CheapCarHire/mumbai.webp" />
                                </div>
                                <div className="newCheapCarHireDetails">
                                    <h2> Mumbai,Maharashtra                    {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Book your Ride </p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to="/rentalsCarDetails">
                        <div className="card-wrapper newCheapCarHireWrapper">
                            <div className="card newCheapCarHireImage">
                                <div className="card-image newCheapCarHireCardImage">
                                    <img src="Images/NewHomeLayout/NewRentals/CheapCarHire/newyork.webp" />
                                </div>
                                <div className="newCheapCarHireDetails">
                                    <h2> New York,USA
                                        {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Book your Ride  </p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/rentalsCarDetails">
                        <div className="card-wrapper newCheapCarHireWrapper">
                            <div className="card newCheapCarHireImage">
                                <div className="card-image newCheapCarHireCardImage">
                                    <img src="Images/NewHomeLayout/NewRentals/CheapCarHire/udaipur.webp" />
                                </div>
                                <div className="newCheapCarHireDetails">
                                    <h2> Udaipur,Rajasthan
                                        {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Book your Ride </p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to="/rentalsCarDetails">
                        <div className="card-wrapper newCheapCarHireWrapper">
                            <div className="card newCheapCarHireImage">
                                <div className="card-image newCheapCarHireCardImage">
                                    <img src="Images/worldActivitites/BungeeJump.jpg" />
                                </div>
                                <div className="newCheapCarHireDetails">
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
                    </Link>
                </Slider>

                <CarDataDrop />
            </div>


        )
    }
}
