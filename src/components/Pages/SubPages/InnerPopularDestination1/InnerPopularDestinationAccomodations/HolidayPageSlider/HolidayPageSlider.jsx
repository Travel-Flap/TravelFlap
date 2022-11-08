import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HolidayPageSlider.css';



// import "/src/App.css";

export default class HolidayPageSlider extends Component {
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
            
            <div className='HolidayPageContainer'>
                <div style={{width:"100%" ,margin:"auto"}}>
                <div className='HolidayPageHeading'>
                    <h2>Similar Popular Destination in Turkey</h2>
                </div>

                
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper HolidayPagewrapper">
                        <div className="card newMultisection_HolidayPageimage">
                            <div className="card-image HolidayPagecardImage">
                                <img src="Images/m_Bangkok-landscape_l_400_640.webp" />
                            </div>
                            <div className="HolidayPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>22 October 2022</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper HolidayPagewrapper">
                        <div className="card newMultisection_HolidayPageimage">
                            <div className="card-image HolidayPagecardImage">
                                <img src="Images/m_Bangkok-landscape_l_400_640.webp" />
                            </div>
                            <div className="HolidayPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>22 October 2022</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper HolidayPagewrapper">
                        <div className="card newMultisection_HolidayPageimage">
                            <div className="card-image HolidayPagecardImage">
                                <img src="Images/m_Bangkok-landscape_l_400_640.webp" />
                            </div>
                            <div className="HolidayPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>22 October 2022</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper HolidayPagewrapper">
                        <div className="card newMultisection_HolidayPageimage">
                            <div className="card-image HolidayPagecardImage">
                                <img src="Images/m_Bangkok-landscape_l_400_640.webp" />
                            </div>
                            <div className="HolidayPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>22 October 2022</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper HolidayPagewrapper">
                        <div className="card newMultisection_HolidayPageimage">
                            <div className="card-image HolidayPagecardImage">
                                <img src="Images/m_Bangkok-landscape_l_400_640.webp" />
                            </div>
                            <div className="HolidayPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>22 October 2022</p></span>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper HolidayPagewrapper">
                        <div className="card newMultisection_HolidayPageimage">
                            <div className="card-image HolidayPagecardImage">
                                <img src="Images/m_Bangkok-landscape_l_400_640.webp" />
                            </div>
                            <div className="HolidayPageDestinationdetails">
                                <h5> Galapagos Islands <span className="job-title">
                                    <p style={{fontSize:"14px"}}>22 October 2022</p></span>
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
