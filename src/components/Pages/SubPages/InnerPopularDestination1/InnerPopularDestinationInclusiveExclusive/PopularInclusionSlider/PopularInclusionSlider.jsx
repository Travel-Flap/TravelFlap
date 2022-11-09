import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './PopularInclusionSlider.css';
import { Button } from 'react-bootstrap';
import {FaAngleRight} from "react-icons/fa";


// import "/src/App.css";

export default class PopularInclusionSlider extends Component {
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
            
            <div className='PopularInclusionPageContainer'>
                <div style={{width:"100%" ,margin:"auto"}}>
                <div className='PopularInclusionPageHeading'>
                    <h2>Similar Popular Destiny in Turkey</h2>
                </div>

                
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper PopularInclusionPagewrapper">
                        <div className="card newMultisection_PopularInclusionPageimage">
                            <div className="card-image PopularInclusionPagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="PopularInclusionPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper PopularInclusionPagewrapper">
                        <div className="card newMultisection_PopularInclusionPageimage">
                            <div className="card-image PopularInclusionPagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="PopularInclusionPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper PopularInclusionPagewrapper">
                        <div className="card newMultisection_PopularInclusionPageimage">
                            <div className="card-image PopularInclusionPagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="PopularInclusionPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper PopularInclusionPagewrapper">
                        <div className="card newMultisection_PopularInclusionPageimage">
                            <div className="card-image PopularInclusionPagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="PopularInclusionPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper PopularInclusionPagewrapper">
                        <div className="card newMultisection_PopularInclusionPageimage">
                            <div className="card-image PopularInclusionPagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="PopularInclusionPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper PopularInclusionPagewrapper">
                        <div className="card newMultisection_PopularInclusionPageimage">
                            <div className="card-image PopularInclusionPagecardImage">
                                <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                            </div>
                            <div className="PopularInclusionPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>4 Nights / 5 Days</p></span>
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
