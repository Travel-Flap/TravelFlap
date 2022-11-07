import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import "./InnerHandpickedSliders.css"
// import "/src/App.css";

export default class InnerHandpickedSlider1 extends Component {
    render() {
        const settings = {
            dots: true,
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
            <div className='InnerPageSliderContainer'>
                {/* <h1 className='topcityActivity_title'>Top Cities Activities</h1> */}
                <Slider {...settings} className="multiCardSlider">
                    <div className="card-wrapper">
                        <div className="card InnerPageSliderMainDiv">
                            <div className="card-image InnerPagecardimage">
                                <img src="Images/m_krabi-landscape_l_400_640.webp" />
                            </div>
                            <div className="InnerPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerPageSliderMainDiv">
                            <div className="card-image InnerPagecardimage">
                                <img src="Images/m_krabi-landscape_l_400_640.webp" />
                            </div>
                            <div className="InnerPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerPageSliderMainDiv">
                            <div className="card-image InnerPagecardimage">
                                <img src="Images/m_krabi-landscape_l_400_640.webp" />
                            </div>
                            <div className="InnerPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerPageSliderMainDiv">
                            <div className="card-image InnerPagecardimage">
                                <img src="Images/m_krabi-landscape_l_400_640.webp" />
                            </div>
                            <div className="InnerPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerPageSliderMainDiv">
                            <div className="card-image InnerPagecardimage">
                                <img src="Images/m_krabi-landscape_l_400_640.webp" />
                            </div>
                            <div className="InnerPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper">
                        <div className="card InnerPageSliderMainDiv">
                            <div className="card-image InnerPagecardimage">
                                <img src="Images/m_krabi-landscape_l_400_640.webp" />
                            </div>
                            <div className="InnerPageSliderDetails">
                                <h2>
                                    {/* <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                    
                                    </span> */}
                                    <Button variant="primary">Read More</Button>
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
