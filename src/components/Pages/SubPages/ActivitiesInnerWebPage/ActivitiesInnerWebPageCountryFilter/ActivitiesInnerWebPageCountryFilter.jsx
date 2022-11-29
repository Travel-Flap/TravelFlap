import "./ActivitiesInnerWebPageCountryFilter.css";
import { FaList } from "react-icons/fa";
import React, { useState } from 'react';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";


export const ActivitiesInnerWebPageCountryFilter = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
     <>
       <div className="activitiesInnerWebPageCountryFilterdiv">
           <div className="activitiesInnerWebPageCountryFiltericonsdiv">
           <Slider
                    arrows={true}
                    autoplay={true}
                    speed={2000}
                    autoplaySpeed={3000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={11}
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

       
               <div className="activitiesInnerWebPageCountryFiltericons">
                <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/Bangalore.png"/>
                  <h4>Bangalore</h4>
                   <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/delhi.png"/>
                  <h4>New delhi</h4>
                  <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/Goa.png"/>
                  <h4>Goa</h4>
                  <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/Bangalore.png"/>
                <h4>Bangalore</h4>
                <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/gurugram.png"/>
                <h4>GuruGram</h4>
                <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/singapore.png"/>
                <h4>Singapore</h4>
                <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/kolkata.png"/>
                <h4>Kolkata</h4>
                <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/hyderabad.png"/>
                 <h4>Hyderabad</h4>
                 <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/jaipur.png"/>
                <h4>Jaipur</h4>
                <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/gurugram.png"/>
                <h4>Gurugram</h4>
                <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/delhi.png"/>
                  <h4>New delhi</h4>
                  <p>345 Options</p>
               </div> 
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/singapore.png"/>
               <h4>Singapore</h4>
               <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/jaipur.png"/>
               <h4>Jaipur</h4>
               <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/Bangalore.png"/>
               <h4>Bangalore</h4>
               <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/kolkata.png"/>
                <h4>Kolkata</h4>
                <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/jaipur.png"/>
                 <h4>jaipur</h4>
                 <p>345 Options</p>
               </div> 
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/hyderabad.png"/>
                 <h4>Hyderabad</h4>
                 <p>345 Options</p>
               </div>
               <div className="activitiesInnerWebPageCountryFiltericons">
               <img className="activitiesInnerWebPageCountryFilterimages"  src="Images/ActivitiesInnerPage/Bangalore.png"/>
                 <h4>Bangalore</h4>
                 <p>345 Options</p>
               </div>
               </Slider>
           </div>
       </div>
     </>
    )
  }
