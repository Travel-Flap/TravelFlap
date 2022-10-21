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
                                <h2> The Golden Triangle Cruise <span className="job-title">
                                    <p>planning a luxuriously royal 12-night cruise vacation in India is one that cannot be missed.</p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Cochin-Cruise-400x251.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h2>Kochi Cruise <span className="job-title">
                                    <p>Head to Kochi – the most popular beach cruise destination in India.
                                    </p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Brahmaputra-River-Cruise-400x224.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h2>Brahmaputra River Cruise <span className="job-title">
                                    <p>Embark on a cruise on the mighty Brahmaputra River for one of the most incredible river journeys and discover the enchanting countryside
                                        </p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Kerala-Backwater-Cruise-400x272.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h2>Kerala Backwater Cruise <span className="job-title">
                                    <p>It goes without saying that the backwaters of Kerala are a popular cruise destination in India</p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://images.hindustantimes.com/img/2022/09/19/1600x900/DeTXQUuVAAA3TQA_1663595154278_1663595225185_1663595225185.jfif" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h2>Ganges River Cruise <span className="job-title">
                                    <p>Take a cruise tour in India in the holy waters of the river Ganges between Kolkata and Farakka for a historically scenic splendor.
                                    </p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Dibru-Saikhowa-River-Cruise-400x204.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h2>Dibru Saikhowa River Cruise <span className="job-title">
                                    <p>Home to some of the rare and endemic species of India like the White-winged wood duck
                                     </p></span>
                                    <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div> 
                </Slider>
                </div>
            </div>
        )
    }
}
