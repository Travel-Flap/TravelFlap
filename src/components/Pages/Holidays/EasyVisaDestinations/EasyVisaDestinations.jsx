import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import './EasyVisaDestinations.css';
// import "/src/App.css";

export default class EasyVisaDestinations extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            speed: 700,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear",
            // arrows:true,
            arrows: false,
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
            <div className='easyvisadestinationscontainer'>
                <h1 className='easyvisadestinations_title'>Easy Visa Destinations</h1>
                <div className='easyvisaslidercontainer'>
                    <Slider {...settings} className="multiCardSlider">
                        <div className="card-wrapper">
                            <div className="card easyvisadestinationsdiv">
                                <div className="card-image easyvisacardimage">
                                    <img src="images/TravelStoriesImage1.jpg" />
                                </div>
                                <div className="easyvisadestinationsdetails">
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
                                <div className="card-image easyvisacardimage">
                                    <img src="images/TravelStoriesImage2.jpg" />
                                </div>
                                <div className="easyvisadestinationsdetails">
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
                                <div className="card-image easyvisacardimage">
                                    <img src="images/TravelStoriesImage3.jpg" />
                                </div>
                                <div className="easyvisadestinationsdetails">
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
                                <div className="card-image easyvisacardimage">
                                    <img src="images/TopCities/zambiaafrica.jpg" />
                                </div>
                                <div className="easyvisadestinationsdetails">
                                    <h2>Aman Gupta <span className="job-title">"Best Holiday trip Ever"
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
                                <div className="card-image easyvisacardimage">
                                    <img src="images/TravelStoriesImage5.jpg" />
                                </div>
                                <div className="easyvisadestinationsdetails">
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
                                <div className="card-image easyvisacardimage">
                                    <img src="images/TravelStoriesImage6.jpg" />
                                </div>
                                <div className="easyvisadestinationsdetails">
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
                                <div className="card-image easyvisacardimage">
                                    <img src="images/TopCities/denmark.jpg" />
                                </div>
                                <div className="easyvisadestinationsdetails">
                                    <h2>Yuvraj <span className="job-title">"Best Holiday trip Ever"
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
                                <div className="card-image easyvisacardimage">
                                    <img src="images/TopCities/swedan.jpg" />
                                </div>
                                <div className="easyvisadestinationsdetails">
                                    <h2>Charles Darvin <span className="job-title">"Best Holiday trip Ever"
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
            </div>
        )
    }
}
