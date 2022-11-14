import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DomesticCruise.css';
import { Button } from 'react-bootstrap';
import countrydata from '../../../../CountryData.json';
import {FaAngleRight} from "react-icons/fa";


// import "/src/App.css";

export default class DomesticCruise extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed:2000,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear",
            arrows:false, 
        };
        return (
            <div className='newDomesticCruisecontainer'>
                <div style={{width:"90%" ,margin:"auto"}}>
                <div className='newDomesticCruiseHeadingContainer'>
                    <h2>Domestic Cruise</h2>

                    <div className='newDomesticCruisedealsbutton'> 
                                View all Deals
                    </div>
                </div>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Golden-Triangle-Cruise-400x246.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5> The Golden Triangle Cruise                        {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Cochin-Cruise-400x251.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Kochi Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Brahmaputra-River-Cruise-400x224.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Brahmaputra River Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Kerala-Backwater-Cruise-400x272.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Kerala Backwater Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://images.hindustantimes.com/img/2022/09/19/1600x900/DeTXQUuVAAA3TQA_1663595154278_1663595225185_1663595225185.jfif" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Ganges River Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Dibru-Saikhowa-River-Cruise-400x204.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Dibru Saikhowa River Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
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
