import React, { Component } from 'react';
import { useRef } from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SimilarPopularDestination.css';
import SliderWrapper from "./SlickSliderStyle";


// import "/src/App.css";
export const SimilarPopularDestination = () => {
    const [slideindex, setSlideindex] = useState(0);

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);


    return (
        <div className='newSimilarPopularDestinationcontainer'>
            {/* <div style={{ width: "90%", margin: "auto" ,border:"2px solid gold"}}> */}
                <div className='newSimilarPopularDestinationHeadingContainer'>
                    <h2>Similar popular destination in turkey</h2>

                    {/* <div className='newSimilarPopularDestinationdealsbutton'> 
                                View all Deals
                            </div> */}

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
                        slidesToShow={5}
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
                        <div className="card-wrapper newSimilarPopularDestinationwrapper">
                            <div className="card newMultisection_SimilarPopularDestinationimage">
                                <div className="card-image newSimilarPopularDestinationcardImage">
                                    <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-hydra-island-greece-1024x724.jpg" />
                                </div>
                                <div className="newWorldSimilarPopularDestinationdetails">
                                    <h5> Greece Cruise                         {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper newSimilarPopularDestinationwrapper">
                            <div className="card newMultisection_SimilarPopularDestinationimage">
                                <div className="card-image newSimilarPopularDestinationcardImage">
                                    <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-st-maarten-grand-anse-beach-and-rainbow-cafe-1024x683.jpg" />
                                </div>
                                <div className="newWorldSimilarPopularDestinationdetails">
                                    <h5>The Caribbean                         {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper newSimilarPopularDestinationwrapper">
                            <div className="card newMultisection_SimilarPopularDestinationimage">
                                <div className="card-image newSimilarPopularDestinationcardImage">
                                    <img src="https://www.celebritycruises.com/blog/content/uploads/2020/05/best-cruise-destinations-el-arco-cabo-san-lucas-mexico-1536x1022.jpg" />
                                </div>
                                <div className="newWorldSimilarPopularDestinationdetails">
                                    <h5>Mexican Riviera                         {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper newSimilarPopularDestinationwrapper">
                            <div className="card newMultisection_SimilarPopularDestinationimage">
                                <div className="card-image newSimilarPopularDestinationcardImage">
                                    <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-panama-canal-1024x683.jpg" />
                                </div>
                                <div className="newWorldSimilarPopularDestinationdetails">
                                    <h5>Panama Canal                         {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper newSimilarPopularDestinationwrapper">
                            <div className="card newMultisection_SimilarPopularDestinationimage">
                                <div className="card-image newSimilarPopularDestinationcardImage">
                                    <img src="https://www.celebritycruises.com/blog/content/uploads/2020/05/best-cruise-destinations-promenade-des-anglais-nice-france-1536x1025.jpg" />
                                </div>
                                <div className="newWorldSimilarPopularDestinationdetails">
                                    <h5>Western Europe                         {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="card-wrapper newSimilarPopularDestinationwrapper">
                            <div className="card newMultisection_SimilarPopularDestinationimage">
                                <div className="card-image newSimilarPopularDestinationcardImage">
                                    <img src="https://www.celebritycruises.com/blog/content/uploads/2019/03/best-cruise-destinations-kabira-bay-ishigaki-japan-1024x683.jpg" />
                                </div>
                                <div className="newWorldSimilarPopularDestinationdetails">
                                    <h5>Southern Japan                         {/* <span> */}
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                        {/* </span> */}
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </SliderWrapper>
            {/* </div> */}
        </div>
    );

}
