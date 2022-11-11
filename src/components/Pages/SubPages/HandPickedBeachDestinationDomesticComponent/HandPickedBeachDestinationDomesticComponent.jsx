import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HandPickedBeachDestinationDomesticComponent.css';
import { Button } from 'react-bootstrap';
import countrydata from '../../../../CountryData.json';
import {FaAngleRight} from "react-icons/fa";


// import "/src/App.css";

export default class HandPickedBeachDestinationDomesticComponent extends Component {
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
            
            <div className='handpickedbeachdestinationDomesticContainer'>
                <div style={{width:"100%" ,margin:"auto"}}>
                <div className='handpickedbeachdestinationDomesticHeading'>
                    <h2>Top Domestic Beach Destination</h2>
                </div>

                
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper handPickedBeachDestinationDomesticwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationDomesticimage">
                            <div className="card-image handPickedBeachDestinationDomesticimagecardImage">
                                <img src="Images/SubpageofHandPicked/domestic/Chandipur, Odisha.webp"/>
                            </div>
                            <div className="handPickedBeachDestinationDomesticdetails">
                                <h5> Chandipur  {/* <span className="job-title"> */}
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

                    <div className="card-wrapper handPickedBeachDestinationDomesticwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationDomesticimage">
                            <div className="card-image handPickedBeachDestinationDomesticimagecardImage">
                                <img src="Images/SubpageofHandPicked/domestic/Om Beach, Gokarna, Karnataka.webp" />
                            </div>
                            <div className="handPickedBeachDestinationDomesticdetails">
                                <h5> Om Beach  {/* <span className="job-title"> */}
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

                    <div className="card-wrapper handPickedBeachDestinationDomesticwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationDomesticimage">
                            <div className="card-image handPickedBeachDestinationDomesticimagecardImage">
                                <img src="Images/SubpageofHandPicked/domestic/Palolem Beach, Goa.webp" />
                            </div>
                            <div className="handPickedBeachDestinationDomesticdetails">
                                <h5> Palolem Beach  {/* <span className="job-title"> */}
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

                    <div className="card-wrapper handPickedBeachDestinationDomesticwrapper">
                        <div className="card newMultisection_handPickedBeachDestinationDomesticimage">
                            <div className="card-image handPickedBeachDestinationDomesticimagecardImage">
                                <img src="Images/SubpageofHandPicked/domestic/Varkala, Kerala.webp" />
                            </div>
                            <div className="handPickedBeachDestinationDomesticdetails">
                                <h5> Varkala, Kerala  {/* <span className="job-title"> */}
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
