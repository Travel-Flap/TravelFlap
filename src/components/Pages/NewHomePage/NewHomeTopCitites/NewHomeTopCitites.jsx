import React from 'react';
import "./NewHomeTopCitites.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";

export const NewHomeTopCitites = () => {
    const settings = {
        dots: true,
        dotsclassName: "slick-dots line-indicator",
        infinite: true,
        autoplay: true,
        autoplayspeed:1000,
        speed: 1000,
        slidesToShow: 5,
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
        <div>
            <div class="newhomeTopCititesMaincarddiv card text-bg-dark">
                <img src="Images/NewHomeLayout/BackgroundImages/TopCitiesBackground.jpeg" class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <div className='newhomeTopCitiesmainheading'>
                        <h2>Top Cities To Explore</h2>

                        <div className='newhomeTopCititesSlidercontainer'>
                            {/* <div className='newhomeTopCititesSlidercontentdiv'>
                                <h2>This is the random layout for the content div</h2>
                            </div> */}

                            {/* From here the next slider part starts */}

                            <div className='newhomeTopCitiesslickslidercontainer'>
                                <Slider {...settings} className="multiCardSlider">
                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/abudhabhi.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same
                                                </p>
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Abu Dhabi</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/africa1.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                    <p>I love the experience with the travel Flap. I surely recommend it
                                                        other for same.
                                                    </p>
                                                    <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Epupa Falls</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/america.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                    <p>I love the experience with the travel Flap. I surely recommend it
                                                        other for same.
                                                    </p>
                                                    <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Las Vegas</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/australia.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                    <p>I love the experience with the travel Flap. I surely recommend it
                                                        other for same.
                                                    </p>
                                                    <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Sydney</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/canada.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                    <p>I love the experience with the travel Flap. I surely recommend it
                                                        other for same.
                                                    </p>
                                                    <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Toronto</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/landon.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                    <p>I love the experience with the travel Flap. I surely recommend it
                                                        other for same.
                                                    </p>
                                                    <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>London</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/denmark.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                    <p>I love the experience with the travel Flap. I surely recommend it
                                                        other for same.
                                                    </p>
                                                    <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Aarhus</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/zambiaafrica.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                    <p>I love the experience with the travel Flap. I surely recommend it
                                                        other for same.
                                                    </p>
                                                    <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Zambia</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/swedan.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                    <p>I love the experience with the travel Flap. I surely recommend it
                                                        other for same.
                                                    </p>
                                                    <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>

                                        <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Stockholm</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
