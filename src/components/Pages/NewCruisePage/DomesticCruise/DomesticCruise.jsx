

import React, { Component } from 'react';
import { useRef } from "react";
import { useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './DomesticCruise.css';
import SliderWrapper from "./SlickSliderStyle";

export const DomesticCruise = () => {
    const [slideindex, setSlideindex] = useState(0);

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);


    return (
        <div className='newDomesticCruisecontainer'>
        <div style={{width:"90%" ,margin:"auto"}}>
        <div className='newDomesticCruiseHeadingContainer'>
            <h2>Domestic Cruise</h2>

            <div className='newDomesticCruisedealsbutton'> 
                        View all Deals
            </div>
        </div>

            <SliderWrapper>
            <Slider 
                                            arrows={false}
                                            autoplay={true}
                                            speed={4000}
                                            autoplaySpeed={4000}
                                            dots={true}
                                            dotsclassName="slick-dots line-indicator"
                                            ref={sliderRef}
                                            slidesToShow={4}
                                            slidesToScroll={2}
                                            appendDots={dots => <ul>{dots}</ul>}
                                            customPaging={i => (
                                                <div className="ft-slick__dots--custom">
                                                    <div className="loading" />
                                                </div>
                                            )}
                                            beforeChange={(current, next) => setSlideindex(next)}
                                            responsive={[
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
                                            ]}
                                            customPagingg={(i) => (
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        top: "-10px",
                                                        opacity: 0,
                                                    }}
                                                >
                                                    {i}
                                                </div>
                                            )}
                                            
                                             className="multiCardSlider">
                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Golden-Triangle-Cruise-400x246.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5> The Golden Triangle Cruise                        {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Cochin-Cruise-400x251.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Kochi Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Brahmaputra-River-Cruise-400x224.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Brahmaputra River Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Kerala-Backwater-Cruise-400x272.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Kerala Backwater Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://images.hindustantimes.com/img/2022/09/19/1600x900/DeTXQUuVAAA3TQA_1663595154278_1663595225185_1663595225185.jfif" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Ganges River Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper newDomesticCruisewrapper">
                        <div className="card newMultisection_DomesticCruiseimage">
                            <div className="card-image newDomesticCruisecardImage">
                                <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2015/03/Dibru-Saikhowa-River-Cruise-400x204.jpg" />
                            </div>
                            <div className="newWorldDomesticCruisedetails">
                                <h5>Dibru Saikhowa River Cruise                         {/* <span> */}
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                        <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                        <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                        {/* </span> */}
                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                </h5>
                            </div>
                        </div>
                    </div> 
                </Slider>
            </SliderWrapper>
            </div>
        </div>
    )
    
}

