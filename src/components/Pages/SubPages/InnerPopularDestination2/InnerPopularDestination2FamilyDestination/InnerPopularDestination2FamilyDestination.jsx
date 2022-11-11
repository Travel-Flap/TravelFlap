import "./InnerPopularDestination2FamilyDestination.css";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";

export const InnerPopularDestination2FamilyDestination = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
        <>
          <div className="InnerPopularDestination2FamilyDestinationmainDiv">
            <div className="InnerPopularDestination2FamilyDestinationHeading">
                Family Destination in Egypt
            </div>
            <div className="InnerPopularDestination2FamilyDestinationSlider">
            <Slider
                    arrows={false}
                    // autoplay={true}
                    speed={4000}
                    autoplaySpeed={2000}
                    dots={true}
                    dotsclassName="slick-dots innerPopularDestination2FamilyDestinationslickDots line-indicator"
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

                    <div className="cardtextinnerPopularDestination2FamilyDestination_maindiv">
                        <img src="Images/SubpageofPopularDestination/2nd/Colossi of Memnon..jpg" alt="Colossi of Memnon." />
                        <div className="cardinnerPopularDestination2FamilyDestination_title">Colossi
                            <br />
                        </div>

                        <div className="newinnerPopularDestination2FamilyDestinationratesdiv">
                            <p>Colossi of Memnon.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>
                    
                    <div className="cardtextinnerPopularDestination2FamilyDestination_maindiv">
                       
                    <img src="Images/SubpageofPopularDestination/2nd/giftun islands.jpg" alt="giftun islands" />
                        <div className="cardinnerPopularDestination2FamilyDestination_title">Giftun
                            <br />
                        </div>

                        <div className="newinnerPopularDestination2FamilyDestinationratesdiv">
                            <p>Giftun Islands</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>

                    <div className="cardtextinnerPopularDestination2FamilyDestination_maindiv">
                    <img src="Images/SubpageofPopularDestination/2nd/Giza Necropolis.jpg" alt="Giza Necropolis" />
                        <div className="cardinnerPopularDestination2FamilyDestination_title">Giza
                            <br />
                        </div>

                        <div className="newinnerPopularDestination2FamilyDestinationratesdiv">
                            <p>Giza Necropolis</p>
                        </div>

                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>
                    
                    <div className="cardtextinnerPopularDestination2FamilyDestination_maindiv">
                    <img src="Images/SubpageofPopularDestination/2nd/Hatshepsut Temple..jpg" alt="Hatshepsut Temple." />
                        <div className="cardinnerPopularDestination2FamilyDestination_title">Hatshepsut
                        </div>

                        <div className="newinnerPopularDestination2FamilyDestinationratesdiv">
                            <p>Hatshepsut Temple.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>
                    
                    <div className="cardtextinnerPopularDestination2FamilyDestination_maindiv">
                    <img src="Images/SubpageofPopularDestination/2nd/Karnak, egypt.jpg" alt="Karnak, egypt" />
                        <div className="cardinnerPopularDestination2FamilyDestination_title">Karnak
                            <br />
                        </div>

                        <div className="newinnerPopularDestination2FamilyDestinationratesdiv">
                            <p>Karnak, egypt</p>
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

