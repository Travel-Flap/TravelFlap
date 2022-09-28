import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import './TopActivity.css';
// import "/src/App.css";

export default class TopActivities extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            speed:700,
            slidesToShow: 5,
            slidesToScroll: 1,
            cssEase: "linear",
            // arrows:true,
            arrows : false, 
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
                    breakpoint:800,
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
            <div className='topactivitycontainer'>
                <h1 className='topcityActivity_title'>Top Cities Activities</h1>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper">
                        <div className="card topactivitymaindiv">
                            <div className="card-image topactivitycardimage">
                                <img src="images/TopCity Activities/White Water Rafting Bovec Slovenia.jpg" />
                            </div>
                            <div className="topactivitydetails">
                                <h2>Bovec Slovania <span className="job-title">"White Water River Rafting"
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
                        <div className="card topactivitymaindiv">
                            <div className="card-image topactivitycardimage">
                                <img src="images/TopCity Activities/1Kolimeter Zipline Kielce Central Poland.jpg" />
                            </div>
                            <div className="topactivitydetails">
                                <h2>Central Poland <span className="job-title">"1 Kilometer Long Zipline"
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
                        <div className="card topactivitymaindiv">
                            <div className="card-image topactivitycardimage">
                                <img src="images/TopCity Activities/Ice Sking Whistler Blackcomb Cannada.jpg" />
                            </div>
                            <div className="topactivitydetails">
                                <h2>Whistler  Blackcomb, Canada <span className="job-title">"Best place for the ice skating."
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topactivitymaindiv">
                            <div className="card-image topactivitycardimage">
                                <img src="images/TopCity Activities/SkyDiving Duabi.jpg" />
                            </div>
                            <div className="topactivitydetails">
                                <h2>Dubai <span className="job-title">"Best sky diving experience in Dubai."
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topactivitymaindiv">
                            <div className="card-image topactivitycardimage">
                                <img src="images/TopCity Activities/DownHill Cycling Moab USA.jpg" />
                            </div>
                            <div className="topactivitydetails">
                                <h2>Moab,USA <span className="job-title">"Best place to do downhill cycling."
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topactivitymaindiv">
                            <div className="card-image topactivitycardimage">
                                <img src="images/TopCity Activities/SnowBoarding Lake Tahoe California.jpg" />
                            </div>
                            <div className="topactivitydetails">
                                <h2>Lake Tahoe, California <span className="job-title">"Best snowboarding experience in tahoe."
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topactivitymaindiv">
                            <div className="card-image topactivitycardimage">
                                <img src="images/TopCity Activities/Canyoning Jordan.jpg" />
                            </div>
                            <div className="topactivitydetails">
                                <h2>Jordan <span className="job-title">"Canyoning is best activity for mental peace."
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper">
                        <div className="card topactivitymaindiv">
                            <div className="card-image topactivitycardimage">
                                <img src="images/TopCity Activities/WhiteWater Kayaking Canada.jpg" />
                            </div>
                            <div className="topactivitydetails">
                                <h2>Canada <span className="job-title">"White Water Kayaking."
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
