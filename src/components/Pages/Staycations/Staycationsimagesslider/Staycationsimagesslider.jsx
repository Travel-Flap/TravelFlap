import "./Staycationsimagesslider.css";
import nationalpark from "./nationalpark.png";
import React, { useState } from 'react';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

export const Staycationsimagesslider = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
     <>
     <div className="Staycationsimagessliderouterdiv">
       <div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={2000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div>
       <div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div><div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div><div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div>
     </div>

     <div className="Staycationsimagessliderouterdiv">
       <div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div>
       <div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div><div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div><div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div>
     </div>

     <div className="Staycationsimagessliderouterdiv">
       <div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div>
       <div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div><div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div><div className="Staycationsimagesslidercontainerdiv">
       <div className="staycationimagesliderdivdiv">
           <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={6000}
                    dots
                    dotsclassName="slick-dots line-indicator"
                    ref={sliderRef}
                    slidesToShow={1}
                    slidesToScroll={1}
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

       
               <div className="staycationimagesliderdiv">
                 <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=720"/>
                 <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/0aa15357-c6ca-4043-bf05-c9971215831a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/3cc9b72f-9e92-4269-84c3-d710201d6e7a.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div>
               <div className="staycationimagesliderdiv">
               <img className="staycationimagesliderdivimages"  src="https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=720"/>
               <div className="staycationheadings">
                 <h5>Pune,India</h5>
                 <p>333 Kilometers</p>
                 <p>9-14 oct</p>
                 <h5>₹ 3,455 night</h5>
                 </div>
               </div> 
               
               </Slider>
           </div>
       </div>
     </div>
    
     
     </>
    )
  }