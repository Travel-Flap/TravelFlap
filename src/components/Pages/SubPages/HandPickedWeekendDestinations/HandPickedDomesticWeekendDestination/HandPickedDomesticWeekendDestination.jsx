import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HandPickedDomesticWeekendDestination.css';


// import "/src/App.css";

export default class HandPickedDomesticWeekendDestination extends Component {
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
            
            <div className='handpickedWeekenddestinationContainer'>
                <div style={{width:"100%" ,margin:"auto"}}>
                <div className='handpickedWeekenddestinationHeading'>
                    <h2>Top Domestic Weekend Destination</h2>
                </div>

                
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper handPickedWeekendDestinationwrapper">
                        <div className="card newMultisection_handPickedWeekendDestinationimage">
                            <div className="card-image handPickedWeekendDestinationimagecardImage">
                                <img src="Images/SubpageofHandPicked/2/darjeeling.webp"/>
                            </div>
                            <div className="handPickedWeekendDestinationdetails">
                                <h5> darjeeling 
                                     {/* <span className="job-title"> */}
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

                    <div className="card-wrapper handPickedWeekendDestinationwrapper">
                        <div className="card newMultisection_handPickedWeekendDestinationimage">
                            <div className="card-image handPickedWeekendDestinationimagecardImage">
                                <img src="Images/SubpageofHandPicked/2/goa (1).webp" />
                            </div>
                            <div className="handPickedWeekendDestinationdetails">
                                <h5> Goa 
                                     {/* <span className="job-title"> */}
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

                    <div className="card-wrapper handPickedWeekendDestinationwrapper">
                        <div className="card newMultisection_handPickedWeekendDestinationimage">
                            <div className="card-image handPickedWeekendDestinationimagecardImage">
                                <img src="Images/SubpageofHandPicked/2/munnar.webp" />
                            </div>
                            <div className="handPickedWeekendDestinationdetails">
                                <h5> Munnar  {/* <span className="job-title"> */}
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

                    <div className="card-wrapper handPickedWeekendDestinationwrapper">
                        <div className="card newMultisection_handPickedWeekendDestinationimage">
                            <div className="card-image handPickedWeekendDestinationimagecardImage">
                                <img src="Images/SubpageofHandPicked/2/udaipur.webp" />
                            </div>
                            <div className="handPickedWeekendDestinationdetails">
                                <h5> Udaipur  {/* <span className="job-title"> */}
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
