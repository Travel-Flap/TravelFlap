import "./Staycationsnavbar.css";
import { FaList } from "react-icons/fa";
import React, { useState } from 'react';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import arctic from "./arctic.png";
import iconic from "./iconic.png";
import breakfast from "./breakfast.png";
import cabin from "./cabin.png";
import campervan from "./campervan.png";
import cave from "./cave.png";
import container from "./container.png";
import Mansion from "./Mansion.png";
import nationalpark from "./nationalpark.png";
import island from "./island.png";

export const Staycationsnavbar = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
        <>
            <div className="staycationsnavbardiv">
                <div className="staycationnavbariconsdiv">
                    <Slider
                        arrows={false}
                        autoplay={true}
                        speed={2000}
                        autoplaySpeed={2000}
                        dots
                        dotsclassName="slick-dots line-indicator"
                        ref={sliderRef}
                        slidesToShow={10}
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


                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 20.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 21.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 22.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 23.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 24.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 25.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                        <div className="staycationnavbaricons">
                            <img className="staycationsnavbarimages" src="Images/NewHomeLayout/NewStaycations/BelowCarouselNavbar/Component 19.png" />
                            BeachFront
                        </div>
                    </Slider>
                </div>
                <div className="staycationsfilterdiv">
                    <div className="filterdiv">
                        Filter
                        <div className="filterIcon">
                            <FaList />
                        </div>
                    </div>
                    <div className="viewAllButton">
                        <button>See all</button>
                    </div>
                </div>
            </div>
        </>
    )
}
