import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './WorldActivities.css';
// import "/src/App.css";

export default class WorldActivities extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            // autoplay: true,
            // speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <div className='worldactivitycontainer'>
                
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper worldactivitywrapper">
                        <div className="card multisection-image">
                            <div className="card-image worldactivitycardimage">
                                <img src="images/ExclusiveDeals/jaipur.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card multisection-image">
                            <div className="card-image worldactivitycardimage">
                                <img src="images/ExclusiveDeals/russisa.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>Amirt Maan <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card multisection-image">
                            <div className="card-image worldactivitycardimage">
                                <img src="images/ExclusiveDeals/China.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card multisection-image">
                            <div className="card-image " id='worldactivitycardimage'>
                                <img src="images/ExclusiveDeals/kashmir.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
