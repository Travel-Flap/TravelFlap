import "./InnerPopularDestination2BestinCity.css";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";

export const InnerPopularDestination2BestinCity = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
        <>
          <div className="InnerPopularDestination2BestinCitymainDiv">
            <div className="InnerPopularDestination2BestinCityHeading">
                Best Places in Egypt
            </div>
            <div className="InnerPopularDestination2BestinCitySlider">
            <Slider
                    arrows={false}
                    // autoplay={true}
                    speed={4000}
                    autoplaySpeed={2000}
                    dots={true}
                    dotsclassName="slick-dots innerPopularDestination2BestinCityslickDots line-indicator"
                    ref={sliderRef}
                    slidesToShow={5}
                    slidesToScroll={2}
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
                    customPaging={(i) => (
                        <div
                            style={{
                                // position: "absolute",
                                width: "100%",
                                top: "-10px",
                                opacity: 0,
                            }}
                        >
                            {i}
                        </div>
                    )}
                >

                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                        <img src="Images/SubpageofPopularDestination/firstg/cairo egypt.jpg" alt="cairo" />
                        <div className="cardinnerPopularDestination2BestinCity_title">Cairo
                            <br />
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>Cairo,Egypt</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>
                    
                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                       
                    <img src="Images/SubpageofPopularDestination/firstg/gabalya st , egypt.jpg" alt="gabalya" />
                        <div className="cardinnerPopularDestination2BestinCity_title">Gabalya
                            <br />
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>Gabalya st,Egypt</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>

                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                    <img src="Images/SubpageofPopularDestination/firstg/giza plataue.jpg" alt="giza" />
                        <div className="cardinnerPopularDestination2BestinCity_title">Giza
                            <br />
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>Giza Plataue</p>
                        </div>

                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>
                    
                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                    <img src="Images/SubpageofPopularDestination/firstg/luxor, Egypt.jpg" alt="luxor" />
                        <div className="cardinnerPopularDestination2BestinCity_title">Luxor
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>Luxor,Egypt</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>
                    
                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                    <img src="Images/SubpageofPopularDestination/firstg/pyramids of giza 2.jpg" alt="pyramids of giza " />
                        <div className="cardinnerPopularDestination2BestinCity_title">Pyramids
                            <br />
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>Pyramids of Giza</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>

                    
                </Slider>
            </div>
          </div>
        </>
       
    );
}

