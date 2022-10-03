import "./Staycationsnavbar.css";
import { FaList } from "react-icons/fa";
import React, { useState } from 'react';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Amazingppl from "./Amazingppl.png";
import arctic from "./arctic.png";
import breakfast from "./breakfast.png";
import cabin from "./cabin.png";
import campervan from "./campervan.png";
import cave from "./cave.png";
import Countryside from "./Countryside.png";
import Designhouse from "./Designhouse.png";
import Earthhomes from "./Earthhomes.png";
import Farmhouse from "./Farmhouse.png";
import island from "./island.png";
import lakefront from "./lakefront.png";
import nationalpark from "./nationalpark.png";

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
                    autoplaySpeed={3000}
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
                <img className="staycationsnavbarimages"  src={Amazingppl}/>
                BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={arctic}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={breakfast}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={cabin}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={campervan}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={cave}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={Countryside}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={Designhouse}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={Earthhomes}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={Farmhouse}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={island}/>
               BeachFront
               </div> 
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={lakefront}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={nationalpark}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={nationalpark}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={nationalpark}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={nationalpark}/>
               BeachFront
               </div> 
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={nationalpark}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={nationalpark}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={nationalpark}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={nationalpark}/>
               BeachFront
               </div>
               <div className="staycationnavbaricons">
               <img className="staycationsnavbarimages"  src={nationalpark}/>
               BeachFront
               </div> 
               </Slider>
           </div>
           <div className="staycationsfilterdiv">
             <FaList/> Filter
           </div>
       </div>
     </>
    )
  }
