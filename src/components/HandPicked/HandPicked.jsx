import React from "react";
import { Outlet, Link } from "react-router-dom";
import './HandPicked.css';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const HandPicked = () => {

   const sliderRef = useRef(null);
   useEffect(() => {
      console.log(sliderRef);
   }, []);


   return (
      <>
         <div className="handpickedheadingcontainer" >
            <h2 className="handpickedheading">Hand Picked Destinations</h2>

            <div className="handpickedsliderbuttons" >

               <div className="handpickedbuttons">
                  <div style={{ display: "flex" }}>
                     <FaAngleLeft size={"2.5em"}
                        onClick={() => sliderRef.current.slickPrev()}
                     />

                     <FaAngleRight size={"2.5em"}
                        onClick={() => sliderRef.current.slickNext()}
                     />
                  </div>
               </div>

            </div>
         </div>
         <div className='data'>
            <div className="handpickedcardmaindiv">

               <Slider
                  arrows={false}
                  autoplay={true}
                  speed={1000}
                  autoplaySpeed={1000}
                  dotsclassName="slick-dots line-indicator"
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
                           width: "100%",
                           top: "-10px",
                           opacity: 0,
                        }}
                     >
                        {i}
                     </div>
                  )}
               >

                  <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                     <div className="handpickedcard">
                        <div className='handpickedcard_img'>

                           <div className="card-body">
                              <div className='handpicked_title1'>
                                 <div className="handpickedbottomheading">
                                    <h1 >Top 11</h1>
                                 </div>

                                 <h4 className="handpickedcard-title">Romantic Destinations</h4>
                              </div>
                           </div>
                           <img src='images/Handpicked Destination/Romantic Destination3.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top " alt="..." />
                        </div>
                     </div>
                  </div>
                  </Link>

                  <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                     <div className="handpickedcard">
                        <div className='handpickedcard_img'>

                           <div className="card-body">
                              <div className='handpicked_title1'>
                                 <div className="handpickedbottomheading">
                                    <h1 >Top 11</h1>
                                 </div>
                                 <h4 className="handpickedcard-title">Honeymoon Destinations</h4>
                              </div>
                           </div>
                           <img src='images/Handpicked Destination/Romantic Destination2.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." /></div>

                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickedcard-title">Honeymoon Destinations</h4>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  </Link>

                  <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">

                     <div className="handpickedcard">
                        <div className='handpickedcard_img'>

                           <div className="card-body">
                              <div className='handpicked_title1'>
                                 <div className="handpickedbottomheading">
                                    <h1 >Top 11</h1>
                                 </div>
                                 <h4 className="handpickedcard-title">Adventure Destinations</h4>
                              </div>
                           </div>
                           <img src='images/Handpicked Destination/Adventure4.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." />
                        </div>
                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickedcard-title ">Adventures Destinations</h4>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  </Link>

                  <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">

                     <div className="handpickedcard">
                        <div className='handpickedcard_img'>

                           <div className="card-body">
                              <div className='handpicked_title1'>
                                 <div className="handpickedbottomheading">
                                    <h1 >Top 11</h1>
                                 </div>
                                 <h4 className="handpickedcard-title">Weekend Getaways</h4>
                              </div>
                           </div>
                           <img src='images/Handpicked Destination/Weekend Getaway2.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." />
                        </div>
                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickedcard-title ">Weekend Getaways</h4>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  </Link>

                  <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">

                     <div className="handpickedcard">
                        <div className='handpickedcard_img'>

                           <div className="card-body">
                              <div className='handpicked_title1'>
                                 <div className="handpickedbottomheading">
                                    <h1 >Top 11</h1>
                                 </div>
                                 <h4 className="handpickedcard-title">Beach Destinations</h4>
                              </div>
                           </div>
                           <img src='images/Handpicked Destination/Beach2.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." />
                        </div>
                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickedcard-title ">Beach Destinations</h4>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  </Link>

                  <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">

                     <div className="handpickedcard">
                        <div className='handpickedcard_img'>

                           <div className="card-body">
                              <div className='handpicked_title1'>
                                 <div className="handpickedbottomheading">
                                    <h1 >Top 11</h1>
                                 </div>
                                 <h4 className="handpickedcard-title">Hill Stations</h4>
                              </div>
                           </div>
                           <img src='images/Handpicked Destination/HillStation2.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." />
                        </div>
                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickedcard-title ">Hill Sations</h4>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  </Link>

                  <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                     <div className="handpickedcard">
                        <div className='handpickedcard_img'>

                           <div className="card-body">
                              <div className='handpicked_title1'>
                                 <div className="handpickedbottomheading">
                                    <h1 >Top 11</h1>
                                 </div>
                                 <h4 className="handpickedcard-title">International Destinations</h4>
                              </div>
                           </div>
                           <img src='images/Handpicked Destination/International Destination1.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." />
                        </div>
                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickedcard-title ">International Destinations</h4>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  </Link>

                  <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                     <div className="handpickedcard">
                        <div className='handpickedcard_img'>

                           <div className="card-body">
                              <div className='handpicked_title1'>
                                 <div className="handpickedbottomheading">
                                    <h1 >Top 11</h1>
                                 </div>
                                 <h4 className="handpickedcard-title">Heritage Destinations</h4>
                              </div>
                           </div>
                           <img src='images/Handpicked Destination/Heritage TajMahal.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." />
                        </div>
                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickedcard-title ">Heritage Destiations</h4>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  </Link>

                  <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                     <div className="handpickedcard">
                        <div className='handpickedcard_img'>

                           <div className="card-body">
                              <div className='handpicked_title1'>
                                 <div className="handpickedbottomheading">
                                    <h1 >Top 11</h1>
                                 </div>
                                 <h4 className="handpickedcard-title">Pilgrimage Destinations</h4>
                              </div>
                           </div>

                           <img src='images/Handpicked Destination/Pilgrimage.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." />
                        </div>
                        {/* <div className="card-body handpickedcardwrapper">
                           <div className='handpicked_title'>
                              <h4 className="handpickedcard-title ">Pilgrimage Destinations</h4>
                           </div>
                        </div> */}
                     </div>
                  </div>
                  </Link>
               </Slider >
            </div>
         </div>
      </>
   );
}

