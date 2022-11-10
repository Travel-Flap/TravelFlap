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
                                <img src="Images/SubpageofHandPicked/Inter/galapagos islands.webp"/>
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> Galapagos Islands  {/* <span className="job-title"> */}
                                    <p style={{fontSize:"14px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{fontSize:"17px",marginTop:"-3%"}}>Starts @ 
                                       <span style={{fontWeight:"700",fontSize:"21px"}}>AED 300</span> 
                                    </h3>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedBeachDestinationwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationimage">
                            <div className="card-image handPickedBeachDestinationimagecardImage">
                                <img src="Images/SubpageofHandPicked/Inter/GRACE BAY, TURKS & CAICOS_11zon.webp" />
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> GRACE BAY  {/* <span className="job-title"> */}
                                    <p style={{fontSize:"14px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{fontSize:"17px",marginTop:"-3%"}}>Starts @ 
                                       <span style={{fontWeight:"700",fontSize:"21px"}}>AED 300</span> 
                                    </h3>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedBeachDestinationwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationimage">
                            <div className="card-image handPickedBeachDestinationimagecardImage">
                                <img src="Images/SubpageofHandPicked/Inter/Ko Hong, Thailand_11zon.webp" />
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> Ko Hong  {/* <span className="job-title"> */}
                                    <p style={{fontSize:"14px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{fontSize:"17px",marginTop:"-3%"}}>Starts @ 
                                       <span style={{fontWeight:"700",fontSize:"21px"}}>AED 300</span> 
                                    </h3>
                                    {/* </span> */}
                                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper handPickedBeachDestinationwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationimage">
                            <div className="card-image handPickedBeachDestinationimagecardImage">
                                <img src="Images/SubpageofHandPicked/Inter/CAMPS BAY, CAPE TOWN, SOUTH AFRICA.webp" />
                            </div>
                            <div className="handPickedBeachDestinationdetails">
                                <h5> CAMPS BAY  {/* <span className="job-title"> */}
                                    <p style={{fontSize:"14px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                    <h6 style={{fontSize:"14px"}}>All Inclusive Packages</h6>
                                    <h3 style={{fontSize:"17px",marginTop:"-3%"}}>Starts @ 
                                       <span style={{fontWeight:"700",fontSize:"21px"}}>AED 300</span> 
                                    </h3>
                                    {/* </span> */}
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
