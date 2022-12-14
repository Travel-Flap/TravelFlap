import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import './Awards.css';
// import "/src/App.css";

export default class Awards extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear",
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
            <div className='travelstoriescontainer'>

                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper awardscardwrapper">
                        <div className="awardscard card">
                            <div className='card_img'><img src="Images/AchievementsImage1.jpg" style={{ height: "100px", width: "70%" }} className="card-img-top " alt="..." /></div>

                            {/* <div className="card-body">
                                <div className='awards_title'>
                                    <h4 className="card-title">Approved IATA Agent</h4>
                                </div>
                                <div className='awards_desc'>
                                    <p className="card-text">In more than 9 countries.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="card-wrapper awardscardwrapper">
                        <div className="awardscard card">
                            <div className='card_img'><img src="Images/AchievementsImage2.jpg" style={{ height: "100px", width: "70%" }} className="card-img-top" alt="..." /></div>

                            {/* <div className="card-body">
                                <div className='awards_title'>
                                    <h4 className="card-title">GSA of Ethiopian Airlines.</h4>
                                </div>
                                <div className='awards_desc'>
                                    <p className="card-text">In more than 3 countries.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="card-wrapper awardscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardscard card">
                            <div className='card_img'><img src="Images/AchievementsImage3.jpg" style={{ height: "100px", width: "70%" }} className="card-img-top" alt="..." /></div>

                            {/* <div className="card-body">
                                <div className='awards_title'>
                                    <h4 className="card-title">GSA of Rwanda Airlines.</h4>
                                </div>
                                <div className='awards_desc'>
                                    <p className="card-text">In Kinshasa,RDC.</p>
                                </div>
                            </div> */}
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="card-wrapper awardscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awards">
                            <div className='card_img'><img src="Images/AchievementsImage4.jpg" style={{ height: "100px", width: "70%" }} className="card-img-top" alt="..." /></div>

                            {/* <div className="card-body">
                                <div className='awards_title'>
                                    <h4 className="card-title">GSA of Tchadia Airlines</h4>
                                </div>
                                <div className='awards_desc'>
                                    <p className="card-text">In Bangui Car.</p>
                                </div>
                            </div> */}
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="card-wrapper awardscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardscard card">
                            <div className='card_img'><img src="Images/AchievementsImage5.jpg" style={{ height: "100px", width: "70%" }} className="card-img-top" alt="..." /></div>

                            {/* <div className="card-body">
                                <div className='awards_title'>
                                    <h4 className="card-title">Best Agency Award</h4>
                                </div>
                                <div className='awards_desc'>
                                    <p className="card-text">From Rwanda Arilines in 2017.</p>
                                </div>
                            </div> */}
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="card-wrapper awardscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardscard card">
                            <div className='card_img'><img src="Images/AchievementsImage6.jpg" style={{ height: "100px", width: "70%" }} className="card-img-top" alt="..." /></div>

                            {/* <div className="card-body">
                                <div className='awards_title'>
                                    <h4 className="card-title">Appreciation Award</h4>
                                </div>
                                <div className='awards_desc'>
                                    <p className="card-text">In Madagascar from amadues 2018.</p>
                                </div>
                            </div> */}
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="card-wrapper awardscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardscard card">
                            <div className='card_img'><img src="Images/AchievementsImage3.jpg" style={{ height: "100px", width: "70%" }} className="card-img-top" alt="..." /></div>

                            {/* <div className="card-body">
                                <div className='awards_title'>
                                    <h4 className="card-title">People's Choice Award</h4>
                                </div>
                                <div className='awards_desc'>
                                    <p className="card-text">As Most Sympathetic Agency 2018.</p>
                                </div>
                            </div> */}
                        </div>

                        {/* </div> */}
                    </div>

                    <div className="card-wrapper awardscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardscard card">
                            <div className='card_img'><img src="Images/AchievementsImage2.jpg" style={{ height: "100px", width: "70%" }} className="card-img-top" alt="..." /></div>

                            {/* <div className="card-body">
                                <div className='awards_title'>
                                    <h4 className="card-title">Highest Growth Award</h4>
                                </div>
                                <div className='awards_desc'>
                                    <p className="card-text">from SA Airlines in Namibia(2017).</p>
                                </div>
                            </div> */}
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="card-wrapper awardscardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardscard card">
                            <div className='card_img'><img src="Images/AchievementsImage1.jpg" style={{ height: "100px", width: "70%" }} className="card-img-top" alt="..." /></div>

                            {/* <div className="card-body">
                                <div className='awards_title'>
                                    <h4 className="card-title">Highest Growth Award</h4>
                                </div>
                                <div className='awards_desc'>
                                    <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                                </div>
                            </div> */}
                        </div>
                        {/* </div> */}
                    </div>
                </Slider >
            </div >
        )
    }
}


