


import React, { Component } from 'react';
import { useRef } from "react";
import { useEffect,useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CruiseInternationalDestination.css';
import SliderWrapper from "./SlickSliderStyle";

export const CruiseInternationalDestination = () => {
    const [slideindex, setSlideindex] = useState(0);

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);


    return (
            
        <div className='newInternationalCruisecontainer'>
            <div style={{width:"90%" ,margin:"auto"}}>
            <div className='newInternationalCruiseHeadingContainer'>
                <h2>International Cruise</h2>

                <div className='newInternationalCruisedealsbutton'> 
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
                <div className="card-wrapper newInternationalCruisewrapper">
                    <div className="card newMultisection_InternationalCruiseimage">
                        <div className="card-image newInternationalCruisecardImage">
                            <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-celebrity-flora-galapagos-1024x683.jpg" />
                        </div>
                        <div className="newWorldInternationalCruisedetails">
                            <h5> Galapagos Islands                         {/* <span> */}
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                    <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                    {/* </span> */}
                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper newInternationalCruisewrapper">
                    <div className="card newMultisection_InternationalCruiseimage">
                        <div className="card-image newInternationalCruisecardImage">
                            <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-blue-lagoon-iceland-1024x684.jpg" />
                        </div>
                        <div className="newWorldInternationalCruisedetails">
                            <h5>Iceland                         {/* <span> */}
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                    <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                    {/* </span> */}
                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper newInternationalCruisewrapper">
                    <div className="card newMultisection_InternationalCruiseimage">
                        <div className="card-image newInternationalCruisecardImage">
                            <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-hubbard-glacier-alaska-1024x683.jpg" />
                        </div>
                        <div className="newWorldInternationalCruisedetails">
                            <h5>Alaska                         {/* <span> */}
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                    <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                    {/* </span> */}
                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper newInternationalCruisewrapper">
                    <div className="card newMultisection_InternationalCruiseimage">
                        <div className="card-image newInternationalCruisecardImage">
                            <img src="https://www.celebritycruises.com/blog/content/uploads/2020/05/best-cruise-destinations-sydney-skyline-1536x1151.jpg" />
                        </div>
                        <div className="newWorldInternationalCruisedetails">
                            <h5>The Great Barrier Reef                         {/* <span> */}
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                    <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                    {/* </span> */}
                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper newInternationalCruisewrapper">
                    <div className="card newMultisection_InternationalCruiseimage">
                        <div className="card-image newInternationalCruisecardImage">
                            <img src="https://www.celebritycruises.com/blog/content/uploads/2020/05/best-cruise-destinations-promenade-des-anglais-nice-france-1536x1025.jpg" />
                        </div>
                        <div className="newWorldInternationalCruisedetails">
                            <h5>Western Europe                         {/* <span> */}
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>Tourist Visa</p>
                    <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                    <p style={{marginTop:"-6%",fontSize:"15px",fontWeight:"100"}}>Starts @  <span style={{fontWeight:"700",fontSize:"20px"}}> AED 3000 </span> </p>
                    {/* </span> */}
                    {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="card-wrapper newInternationalCruisewrapper">
                    <div className="card newMultisection_InternationalCruiseimage">
                        <div className="card-image newInternationalCruisecardImage">
                            <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-kabira-bay-ishigaki-japan-1024x683.jpg" />
                        </div>
                        <div className="newWorldInternationalCruisedetails">
                            <h5>Southern Japan                         {/* <span> */}
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

