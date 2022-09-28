import React from "react";
import { Outlet, Link } from "react-router-dom";
import './HandPicked.css';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';

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
                    autoplaySpeed={2000}
                    // dots
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
                              <img src='https://images.unsplash.com/photo-1567888818950-737cde12f04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9tYW50aWMlMjBkZXN0aW5hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top " alt="..." />
                           </div>

                           <div className="card-body">
                              <div className='handpicked_title'>
                                 <h4 className="handpickedcard-title">Romantic Destinations</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     </Link> 

                     <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                        <div className="handpickedcard">
                           <div className='handpickedcard_img'>
                            <img src='https://images.unsplash.com/photo-1648538923547-074724ca7a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9uZXltb29uJTIwZGVzdGluYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='handpicked_title'>
                                 <h4 className="handpickedcard-title">Honeymoon Destinations</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     </Link>

                     <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                       
                        <div className="handpickedcard">
                           <div className='handpickedcard_img'><img src='https://images.unsplash.com/photo-1545252682-2d32e48111da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFkdmVudHVyZXMlMjBkZXN0aW5hdGlvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='handpicked_title'>
                                 <h4 className="handpickedcard-title ">Adventures Destinations</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     </Link>

                     <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                        
                        <div className="handpickedcard">
                           <div className='handpickedcard_img'><img src='https://images.unsplash.com/photo-1602081850531-344675d48d0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2Vla2VuZCUyMGdldGF3YXlzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='handpicked_title'>
                                 <h4 className="handpickedcard-title ">Weekend Getaways</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     </Link>

                     <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                        
                        <div className="handpickedcard">
                           <div className='handpickedcard_img'><img src='https://images.unsplash.com/photo-1655715708861-afd9593b4962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYWNoJTIwZGVzdGluYXRpb25zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='handpicked_title'>
                                 <h4 className="handpickedcard-title ">Beach Destinations</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     </Link>

                     <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                        
                        <div className="handpickedcard">
                           <div className='handpickedcard_img'><img src='https://images.unsplash.com/photo-1606220975728-f94e0d9ed642?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGlsbCUyMHN0YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='handpicked_title'>
                                 <h4 className="handpickedcard-title ">Hill Sations</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     </Link>

                     <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                        <div className="handpickedcard">
                           <div className='handpickedcard_img'><img src='https://www.planetware.com/wpimages/2019/10/malaysia-top-attractions-petronas-twin-towers.jpg' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='handpicked_title'>
                                 <h4 className="handpickedcard-title ">International Destinations</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     </Link>

                     <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                        <div className="handpickedcard">
                           <div className='handpickedcard_img'><img src='https://images.unsplash.com/photo-1606327785204-e3643c3ae3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVyaXRhZ2UlMjBkZXN0aW5hdGlvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='handpicked_title'>
                                 <h4 className="handpickedcard-title ">Heritage Destiations</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     </Link>

                     <Link to="/weekendgetaways" className="handpickedlink"><div className="card-wrapper handpickedcardwrapper">
                        <div className="handpickedcard">
                           <div className='handpickedcard_img'><img src='https://images.unsplash.com/photo-1642774667024-e9e2f37914d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFoYWRldnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="handpickedcard-img-top" alt="..." /></div>

                           <div className="card-body handpickedcardwrapper">
                              <div className='handpicked_title'>
                                 <h4 className="handpickedcard-title ">Pilgrimage Destinations</h4>
                              </div>
                           </div>
                        </div>
                     </div>
                     </Link>
                  </Slider >
               </div>
            </div>
      </>
   );
}

