import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import "./InnerPageDiscoverPlace.css"
// import "/src/App.css";

export default class InnerPageDiscoverPlace extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            speed: 650,
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
                // {
                //     breakpoint: 480,
                //     settings: {
                //         slidesToShow: 1,
                //         slidesToScroll: 1
                //     }
                // }
            ]
        };
        return (
            <div className='InnerDiscoverPlaceSliderContainer'>
                <h1 className='InnerDiscoverPlace_title'>Discover More Place to Visit</h1>
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper">
                        <div className="card InnerDiscoverPlaceSliderMainDiv">
                            <div className="card-image InnerDiscoverPlacecardimage">
                                <img src="images/Adventure4.jpg" />
                            </div>
                            <div className="InnerDiscoverPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Paris</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerDiscoverPlaceSliderMainDiv">
                            <div className="card-image InnerDiscoverPlacecardimage">
                                <img src="images/Adventure4.jpg" />
                            </div>
                            <div className="InnerDiscoverPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Paris</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerDiscoverPlaceSliderMainDiv">
                            <div className="card-image InnerDiscoverPlacecardimage">
                                <img src="images/Adventure4.jpg" />
                            </div>
                            <div className="InnerDiscoverPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Paris</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerDiscoverPlaceSliderMainDiv">
                            <div className="card-image InnerDiscoverPlacecardimage">
                                <img src="images/Adventure4.jpg" />
                            </div>
                            <div className="InnerDiscoverPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Paris</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerDiscoverPlaceSliderMainDiv">
                            <div className="card-image InnerDiscoverPlacecardimage">
                                <img src="images/Adventure4.jpg" />
                            </div>
                            <div className="InnerDiscoverPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Paris</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerDiscoverPlaceSliderMainDiv">
                            <div className="card-image InnerDiscoverPlacecardimage">
                                <img src="images/Adventure4.jpg" />
                            </div>
                            <div className="InnerDiscoverPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Paris</Button>
                                </h2>
                            </div>
                        </div>
                    </div>


                    


                   
                
                </Slider>


                                        
                </div>
        //   </div>
           
        )
    }
}
