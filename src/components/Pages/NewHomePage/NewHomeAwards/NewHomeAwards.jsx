import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import './NewHomeAwards.css';
// import "/src/App.css";

export default class NewHomeAwards extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
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
            <div className='newhomeawardsstoriescontainer'>
                <h2>Awards</h2>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper awardsnewhomecardwrapper">
                        <div className="awardsnewhomecard card">
                            <div className='card_img'>
                                <img src="Images/iata.png" className="card-img-top " alt="..." />
                            </div>

                            <div className="card-body">
                                <div className='awardsnewhomecard_title'>
                                    <h4 className="card-title">Approved IATA Agent</h4>
                                </div>
                                {/* <div className='awardsnewhomecard_desc'>
                                    <p className="card-text">In more than 9 countries.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper awardsnewhomecardwrapper">
                        <div className="awardsnewhomecard card">
                            <div className='card_img'><img src="Images/Ethiopian.png"  className="card-img-top" alt="..." /></div>

                            <div className="card-body">
                                <div className='awardsnewhomecard_title'>
                                    <h4 className="card-title">GSA Ethiopian</h4>
                                </div>
                                {/* <div className='awardsnewhomecard_desc'>
                                    <p className="card-text">In more than 3 countries.</p>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper awardsnewhomecardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardsnewhomecard card">
                            <div className='card_img'><img src="Images/RwandAir.png"  className="card-img-top" alt="..." /></div>

                            <div className="card-body">
                                <div className='awardsnewhomecard_title'>
                                    <h4 className="card-title">GSA of Rwanda</h4>
                                </div>
                                {/* <div className='awardsnewhomecard_desc'>
                                    <p className="card-text">In Kinshasa,RDC.</p>
                                </div> */}
                            </div>
                        </div>
                        {/* </div> */}
                    </div>

                    {/* <div className="card-wrapper awardsnewhomecardwrapper">
                        <div className="awards">
                            <div className='card_img'><img src="Images/AchievementsImage4.jpg"  className="card-img-top" alt="..." /></div>

                            <div className="card-body">
                                <div className='awardsnewhomecard_title'>
                                    <h4 className="card-title">GSA of Tchadia Airlines</h4>
                                </div>
                                <div className='awardsnewhomecard_desc'>
                                    <p className="card-text">In Bangui Car.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="card-wrapper awardsnewhomecardwrapper">
                        <div className="awardsnewhomecard card">
                            <div className='card_img'>
                                <img src="Images/AchievementsImage5.jpg"  className="card-img-top" alt="..." /></div>

                            <div className="card-body">
                                <div className='awardsnewhomecard_title'>
                                    <h4 className="card-title">Best Agency Award</h4>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="card-wrapper awardsnewhomecardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardsnewhomecard card">
                            <div className='card_img'><img src="Images/South_African.png"  className="card-img-top" alt="..." /></div>

                            <div className="card-body">
                                <div className='awardsnewhomecard_title'>
                                    <h4 className="card-title">Appreciation Award</h4>
                                </div>
                                {/* <div className='awardsnewhomecard_desc'>
                                    <p className="card-text">In Madagascar from amadues 2018.</p>
                                </div> */}
                            </div>
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="card-wrapper awardsnewhomecardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardsnewhomecard card">
                            <div className='card_img'><img src="Images/RwandAir.png"  className="card-img-top" alt="..." /></div>

                            <div className="card-body">
                                <div className='awardsnewhomecard_title'>
                                    <h4 className="card-title">People's Choice Award</h4>
                                </div>
                                {/* <div className='awardsnewhomecard_desc'>
                                    <p className="card-text">As Most Sympathetic Agency 2018.</p>
                                </div> */}
                            </div>
                        </div>

                        {/* </div> */}
                    </div>

                    <div className="card-wrapper awardsnewhomecardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardsnewhomecard card">
                            <div className='card_img'><img src="Images/iata.png"  className="card-img-top" alt="..." /></div>

                            <div className="card-body">
                                <div className='awardsnewhomecard_title'>
                                    <h4 className="card-title">Highest Growth Award</h4>
                                </div>
                                {/* <div className='awardsnewhomecard_desc'>
                                    <p className="card-text">from SA Airlines in Namibia(2017).</p>
                                </div> */}
                            </div>
                        </div>
                        {/* </div> */}
                    </div>

                    <div className="card-wrapper awardsnewhomecardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="awardsnewhomecard card">
                            <div className='card_img'><img src="Images/iata.png"  className="card-img-top" alt="..." /></div>

                            <div className="card-body">
                                <div className='awardsnewhomecard_title'>
                                    <h4 className="card-title">Highest Growth Award</h4>
                                </div>
                                {/* <div className='awardsnewhomecard_desc'>
                                    <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                                </div> */}
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </Slider >
            </div >
        )
    }
}


