import React from 'react';
import "./VisadetailsSlider.css";
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";


export const VisadetailsSlider = () => {

   const sliderRef = useRef(null);
   useEffect(() => {
       console.log(sliderRef);
   }, []);
    return (
        <>
            <div className='visaslidermaindiv'>
               <div className="visasliderouterdiv">
                <Slider
                    arrows={false}
                      autoplay={true}
                    speed={1000}
                    autoplaySpeed={2000}
                    // dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={2}
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

                     <div className="visaslidercardwrapper">
                        <div className="visaslidercard">
                           <div className='visaslidercard_img'>
                              <img src='https://themysteriousworld.com/wp-content/uploads/2014/07/AL-ARAB.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>
                        </div>
                     </div>
                     <div className="visaslidercardwrapper">
                        <div className="visaslidercard">
                           <div className='visaslidercard_img'>
                              <img src='https://www.ftd.travel/upload/o_background_image/2013-03-21-03-54-38palm-island-uae.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>
                        </div>
                     </div>
                     <div className="visaslidercardwrapper">
                        <div className="visaslidercard">
                           <div className='visaslidercard_img'>
                              <img src='https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/Sheikh-Zayed-Grand-Mosque-cover.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>
                        </div>
                     </div>
                     <div className="visaslidercardwrapper">
                        <div className="visaslidercard">
                           <div className='visaslidercard_img'>
                              <img src='https://www.fleetmanagement.ae/wp-content/uploads/2019/07/Burj-Khalifa-Tourist-Attractions-In-UAE-1-1024x575.jpg' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>
                        </div>
                     </div>
                     <div className="visaslidercardwrapper">
                        <div className="visaslidercard">
                           <div className='visaslidercard_img'>
                              <img src='https://cdnholidays.blueberrygroup.org/visaimages/3.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>
                        </div>
                     </div>
                     <div className="visaslidercardwrapper">
                        <div className="visaslidercard">
                           <div className='visaslidercard_img'>
                              <img src='https://cdnholidays.blueberrygroup.org/visaimages/3.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>
                        </div>
                     </div>
                     <div className="visaslidercardwrapper">
                        <div className="visaslidercard">
                           <div className='visaslidercard_img'>
                              <img src='https://cdnholidays.blueberrygroup.org/visaimages/3.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>
                        </div>
                     </div>
                     <div className="visaslidercardwrapper">
                        <div className="visaslidercard">
                           <div className='visaslidercard_img'>
                              <img src='https://cdnholidays.blueberrygroup.org/visaimages/3.png' style={{ height: "100px", width: "90%" }} className="famousdestinationscard-img-top " alt="..." />
                           </div>
                        </div>
                     </div>

                     
                  </Slider >
               </div>
               </div>
        </>
    )
}
