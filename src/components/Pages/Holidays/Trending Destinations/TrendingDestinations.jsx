import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import './TrendingDestinations.css';
// import "/src/App.css";

export default class TrendingDestinations extends Component {
    render() {
        const settings = {
                
            className: "center",
            autoplay: true,
            centerMode: true,
            infinite: true,
            centerPadding: "100px",
            slidesToShow: 3,
            speed: 500,
            rows: 2,
            slidesPerRow: 2,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className='trendingdestinationscontainer'>
                <h1 className='trendingdestinations_title'>Easy Visa Destinations</h1>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper">
                        <div className="card trendingdestinationsdiv">
                            <div className="card-image trendingdestinationscardimage">
                                <img src="images/TravelStoriesImage1.jpg" />
                            </div>
                            <div className="trendingdestinationsdetails">
                                <h2>Olivia <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>

                                </span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card easyvisadestinationsdiv">
                            <div className="card-image trendingdestinationscardimage">
                                <img src="images/TravelStoriesImage2.jpg" />
                            </div>
                            <div className="trendingdestinationsdetails">
                                <h2>Amirt Maan <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                </span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card easyvisadestinationsdiv">
                            <div className="card-image trendingdestinationscardimage">
                                <img src="images/TravelStoriesImage3.jpg" />
                            </div>
                            <div className="trendingdestinationsdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card easyvisadestinationsdiv">
                            <div className="card-image trendingdestinationscardimage">
                                <img src="images/TravelStoriesImage4.jpg" />
                            </div>
                            <div className="trendingdestinationsdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card easyvisadestinationsdiv">
                            <div className="card-image trendingdestinationscardimage">
                                <img src="images/TravelStoriesImage5.jpg" />
                            </div>
                            <div className="trendingdestinationsdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card easyvisadestinationsdiv">
                            <div className="card-image trendingdestinationscardimage">
                                <img src="images/TravelStoriesImage6.jpg" />
                            </div>
                            <div className="trendingdestinationsdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card easyvisadestinationsdiv">
                            <div className="card-image trendingdestinationscardimage">
                                <img src="images/TravelStoriesImage7.jpg" />
                            </div>
                            <div className="trendingdestinationsdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card easyvisadestinationsdiv">
                            <div className="card-image trendingdestinationscardimage">
                                <img src="images/TravelStoriesImage8.jpg" />
                            </div>
                            <div className="trendingdestinationsdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
