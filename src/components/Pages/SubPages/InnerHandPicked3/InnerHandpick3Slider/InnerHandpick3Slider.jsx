import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './InnerHandpick3Slider.css';
// import { Button } from 'react-bootstrap';
import SliderWrapper11 from './_SlickSliderStyle3';

export default class InnerHandpick3Slider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed:2000,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: "linear",
            customPaging: i => (
                <div className="ft-slick__dots--custom">
                    <div className="loading" />
                </div>
            )
        };
        return (
            <div className='InnerHandpick3container'>
                <div className='InnerHandpickHeadingContainer'>
                    <h2>Best Beach Destination In India</h2>
                </div>
                <SliderWrapper11>
                    <Slider {...settings} className="multiCardSlider">
                        <div className="card-wrapper InnerHandpick3wrapper">
                            <div className="card InnerHandpick3image">
                                <div className="card-image InnerHandpick3cardImage">
                                    <img src="images/Beach2.jpg" />
                                </div>
                                <div className="InnerHandpick3details">
                                    <h2>Indonesia,Bali <span className="job-title">
                                        {/* "Under The Iguazu Falls." */}
                                        <p style={{ fontSize: "13.5px" }}>22 October 2022</p>
                                        {/* <p style={{ marginTop: "-6%", fontSize: "13px" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p> */}
                                    </span>
                                        {/* <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="card InnerHandpick3image">
                                <div className="card-image InnerHandpick3cardImage">
                                    <img src="images/Beach2.jpg" />
                                </div>
                                <div className="InnerHandpick3details">
                                    <h2>Indonesia,Bali <span className="job-title">
                                        {/* "Under The Iguazu Falls." */}
                                        <p style={{ fontSize: "13.5px" }}>22 October 2022</p>
                                        {/* <p style={{ marginTop: "-6%", fontSize: "13px" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p> */}
                                    </span>
                                        {/* <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>

                            <div className="card InnerHandpick3image">
                                <div className="card-image InnerHandpick3cardImage">
                                    <img src="images/Beach2.jpg" />
                                </div>
                                <div className="InnerHandpick3details">
                                    <h2>Indonesia,Bali <span className="job-title">
                                        {/* "Under The Iguazu Falls." */}
                                        <p style={{ fontSize: "13.5px" }}>22 October 2022</p>
                                        {/* <p style={{ marginTop: "-6%", fontSize: "13px" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p> */}
                                    </span>
                                        {/* <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                            <div className="card InnerHandpick3image">
                                <div className="card-image InnerHandpick3cardImage">
                                    <img src="images/Beach2.jpg" />
                                </div>
                                <div className="InnerHandpick3details">
                                    <h2>Indonesia,Bali <span className="job-title">
                                        {/* "Under The Iguazu Falls." */}
                                        <p style={{ fontSize: "13.5px" }}>22 October 2022</p>
                                        {/* <p style={{ marginTop: "-6%", fontSize: "13px" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p> */}
                                    </span>
                                        {/* <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>

                            <div className="card InnerHandpick3image">
                                <div className="card-image InnerHandpick3cardImage">
                                    <img src="images/Beach2.jpg" />
                                </div>
                                <div className="InnerHandpick3details">
                                    <h2>Indonesia,Bali <span className="job-title">
                                        {/* "Under The Iguazu Falls." */}
                                        <p style={{ fontSize: "13.5px" }}>22 October 2022</p>
                                        {/* <p style={{ marginTop: "-6%", fontSize: "13px" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p> */}
                                    </span>
                                        {/* <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                            <div className="card InnerHandpick3image">
                                <div className="card-image InnerHandpick3cardImage">
                                    <img src="images/Beach2.jpg" />
                                </div>
                                <div className="InnerHandpick3details">
                                    <h2>Indonesia,Bali <span className="job-title">
                                        {/* "Under The Iguazu Falls." */}
                                        <p style={{ fontSize: "13.5px" }}>22 October 2022</p>
                                        {/* <p style={{ marginTop: "-6%", fontSize: "13px" }}>Starts @ <h4 style={{ fontWeight: "700", fontSize: "22px" }}>AED 3000</h4> </p> */}
                                    </span>
                                        {/* <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                    </Slider>
                </SliderWrapper11>
            </div>
        )
    }
}
