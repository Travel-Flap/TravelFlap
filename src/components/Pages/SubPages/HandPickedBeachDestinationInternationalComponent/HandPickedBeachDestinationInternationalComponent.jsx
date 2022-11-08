import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HandPickedBeachDestinationInternationalComponent.css';
import { Button } from 'react-bootstrap';
import countrydata from '../../../../CountryData.json';
import {FaAngleRight} from "react-icons/fa";


// import "/src/App.css";

export default class HandPickedBeachDestinationInternationalComponent extends Component {
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
            
            <div className='handpickedbeachdestinationContainer'>
                <div style={{width:"100%" ,margin:"auto"}}>
                <div className='handpickedbeachdestinationHeading'>
                    <h2>Top International Beach Destination</h2>
                </div>

                
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper handPickedBeachDestinationwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationimage">
                            <div className="card-image handPickedBeachDestinationimagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{marginTop:"5%",fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedBeachDestinationwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationimage">
                            <div className="card-image handPickedBeachDestinationimagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{marginTop:"5%",fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedBeachDestinationwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationimage">
                            <div className="card-image handPickedBeachDestinationimagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{marginTop:"5%",fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedBeachDestinationwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationimage">
                            <div className="card-image handPickedBeachDestinationimagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{marginTop:"5%",fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedBeachDestinationwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationimage">
                            <div className="card-image handPickedBeachDestinationimagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{marginTop:"5%",fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedBeachDestinationwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationimage">
                            <div className="card-image handPickedBeachDestinationimagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{marginTop:"5%",fontSize:"17px"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"21px"}}>AED 3000</h4> </h3></span>
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
