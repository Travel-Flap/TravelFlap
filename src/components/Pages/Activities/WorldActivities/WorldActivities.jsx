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
            // autoplaySpeed:1000,
            // speed: 1000,
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
                                <img src="images/worldActivitites/Boat under Iguazu Falls.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>Boating <span className="job-title">"Under The Iguazu Falls."
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
                                <img src="images/worldActivitites/Swim Through Mexico;s Cenotes.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>Swimming <span className="job-title">"Through the Mexico's Cenotes"
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
                                <img src="images/worldActivitites/Float along the Amazon.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>Amazon river <span className="job-title">"River side Viewing."
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
                                <img src="images/worldActivitites/Surf The Pipeline in Oahu.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>Surfing <span className="job-title">"Best Surf experience in the pipeline of the Oahu."
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
                                <img src="images/worldActivitites/Zipline Over Niagara Falls.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>Zip Line <span className="job-title">"Ziplining along the Niagar Falls."
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
                                <img src="images/worldActivitites/BungeeJump.jpg" />
                            </div>
                            <div className="worldactivitydetails">
                                <h2>New Zealand <span className="job-title">"Bungee Jump over the  Kawaru River."
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
