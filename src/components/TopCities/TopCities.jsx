import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";
import './TopCities.css';
// import "/src/App.css";

export default class TopCities extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            speed: 700,
            slidesToShow: 4 ,
            slidesToScroll: 1,
            cssEase: "linear",
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
            <div className='topcitiescontainer'>
                <div className='topcities_title'>
                    <MdLocationCity />
                    <h2>
                        Top Cities to Explore
                    </h2>
                    {/* <span><p>to explore</p></span> */}
                </div>

                <div className='slickslidercontainer'>
                    <Slider {...settings} className="multiCardSlider">
                        <div className="card-wrapper">
                            <div className="card topcitiesdiv">
                                <div className="card-image topcitiescardimage">
                                    <img src="images/TopCities/abudhabhi.jpg" />
                                </div>
                                <div className="topcitiesdetails">
                                    <h2>Abu Dhabi <span className="job-title">"Best Holiday trip Ever"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p>

                                    </span>
                                        <Button variant="primary">Explore</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper">
                            <div className="card topcitiesdiv">
                                <div className="card-image topcitiescardimage">
                                    <img src="images/TopCities/africa1.jpg" />
                                </div>
                                <div className="topcitiesdetails">
                                    <h2>Epupa Falls <span className="job-title">"Best Holiday trip Ever"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p>
                                    </span>
                                        <Button variant="primary">Explore</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper">
                            <div className="card topcitiesdiv">
                                <div className="card-image topcitiescardimage">
                                    <img src="images/TopCities/america.jpg" />
                                </div>
                                <div className="topcitiesdetails">
                                    <h2>Las Vegas <span className="job-title">"Best Holiday trip Ever"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary">Explore</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper">
                            <div className="card topcitiesdiv">
                                <div className="card-image topcitiescardimage">
                                    <img src="images/TopCities/australia.jpg" />
                                </div>
                                <div className="topcitiesdetails">
                                    <h2>Sydney <span className="job-title">"Best Holiday trip Ever"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary">Explore</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper">
                            <div className="card topcitiesdiv">
                                <div className="card-image topcitiescardimage">
                                    <img src="images/TopCities/canada.jpg" />
                                </div>
                                <div className="topcitiesdetails">
                                    <h2>Toronto <span className="job-title">"Best Holiday trip Ever"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary">Explore</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* <div className="card-wrapper">
                        <div className="card topcitiesdiv">
                            <div className="card-image topcitiescardimage">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgA7NjrOyqboQBa3LLONUV8V8xUQI9i4wDSr1L4Y4jDw&s" />
                            </div>
                            <div className="topcitiesdetails">
                                <h2>Australia <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Explore</Button>
                                </h2>
                            </div>
                        </div>
                    </div> */}

                        <div className="card-wrapper">
                            <div className="card topcitiesdiv">
                                <div className="card-image topcitiescardimage">
                                    <img src="images/TopCities/landon.jpg" />
                                </div>
                                <div className="topcitiesdetails">
                                    <h2>London <span className="job-title">"Best Holiday trip Ever"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary">Explore</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper">
                            <div className="card topcitiesdiv">
                                <div className="card-image topcitiescardimage">
                                    <img src="images/TopCities/denmark.jpg" />
                                </div>
                                <div className="topcitiesdetails">
                                    <h2>Aarhus <span className="job-title">"Best Holiday trip Ever"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary">Explore</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper">
                            <div className="card topcitiesdiv">
                                <div className="card-image topcitiescardimage">
                                    <img src="images/TopCities/zambiaafrica.jpg" />
                                </div>
                                <div className="topcitiesdetails">
                                    <h2>Zambia <span className="job-title">"Best Holiday trip Ever"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary">Explore</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper">
                            <div className="card topcitiesdiv">
                                <div className="card-image topcitiescardimage">
                                    <img src="images/TopCities/swedan.jpg" />
                                </div>
                                <div className="topcitiesdetails">
                                    <h2>Stockholm <span className="job-title">"Best Holiday trip Ever"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary">Explore</Button>
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
