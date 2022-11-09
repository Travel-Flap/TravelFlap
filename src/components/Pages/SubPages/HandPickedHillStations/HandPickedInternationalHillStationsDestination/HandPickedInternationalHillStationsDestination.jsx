import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HandPickedInternationalHillStationsDestination.css';


// import "/src/App.css";

export default class HandPickedInternationalHillStationsDestination extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            // autoplay: true,
            autoplaySpeed:2000,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear",
            arrows:false,
        };
        return (
            
            <div className='handpickedHillStationsdestinationContainer'>
                <div style={{width:"100%" ,margin:"auto"}}>
                <div className='handpickedHillStationsdestinationHeading'>
                    <h2>Top International HillStations Destination</h2>
                </div>

                
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper handPickedHillStationsDestinationwrapper">
                        <div className="card newMultisection_handPickedHillStationsDestinationimage">
                            <div className="card-image handPickedHillStationsDestinationimagecardImage">
                                <img src="Images/SubpageofHAndPicked/3/bali (1).webp"/>
                            </div>
                            <div className="handPickedHillStationsDestinationdetails">
                                <h5> bali <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedHillStationsDestinationwrapper">
                        <div className="card newMultisection_handPickedHillStationsDestinationimage">
                            <div className="card-image handPickedHillStationsDestinationimagecardImage">
                                <img src="Images/SubpageofHAndPicked/3/greece.webp" />
                            </div>
                            <div className="handPickedHillStationsDestinationdetails">
                                <h5> Greece <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedHillStationsDestinationwrapper">
                        <div className="card newMultisection_handPickedHillStationsDestinationimage">
                            <div className="card-image handPickedHillStationsDestinationimagecardImage">
                                <img src="Images/SubpageofHAndPicked/3/maldives.webp" />
                            </div>
                            <div className="handPickedHillStationsDestinationdetails">
                                <h5> Maldives <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedHillStationsDestinationwrapper">
                        <div className="card newMultisection_handPickedHillStationsDestinationimage">
                            <div className="card-image handPickedHillStationsDestinationimagecardImage">
                                <img src="Images/SubpageofHAndPicked/3/mauritius1.webp" />
                            </div>
                            <div className="handPickedHillStationsDestinationdetails">
                                <h5> Mauritius <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    
                    
                </Slider>
                </div>
            </div>
        )
    }
}
