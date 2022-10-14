import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BestTrendingActivities.css';
// import "/src/App.css";

export default class NewTrendingActivities extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed:2000,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear"
        };
        return (
            <div className='newTrendingAtivitycontainer'>
                <div className='newTrendingActivityHeadingContainer'>
                    <h2>Trending Activities</h2>
                </div>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/TrendingActivities/bike ride spiti valley ladakh.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Bike Ride <span className="job-title">"Spiti Valley Ladakh."
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/TrendingActivities/boat ride in italy.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Boat Ride <span className="job-title">"Boat ride in Italy"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/worldActivitites/Float along the Amazon.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Amazon river <span className="job-title">"River side Viewing."
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/worldActivitites/Surf The Pipeline in Oahu.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Surfing <span className="job-title">"Best Surf experience in the pipeline of the Oahu."
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/worldActivitites/ZipLine Over Niagara Falls.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
                                <h2>Zip Line <span className="job-title">"Ziplining along the Niagar Falls."
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newWorldActivitywrapper">
                        <div className="card newMultisection_Activityimage">
                            <div className="card-image newWorldActivitycardImage">
                                <img src="Images/worldActivitites/BungeeJump.jpg" />
                            </div>
                            <div className="newWorldActivitydetails">
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
