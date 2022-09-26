import React from "react";
import './PopularDestinations.css';
import { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";

export const PopularDestinations = () => {


   const settings1 = {
      // dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      slidesToShow: 7,
      slidesToScroll: 1,
      cssEase: "linear",
      arrows: false,
      responsive: [
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
      ]
   };

   const settings = {
      // dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "linear",
      // arrows: false,
      responsive: [
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
      ]
   };

   return (
      <>
         <div className="main">
            <div className='head'>
               <div className='title'>
                  <div className='populartitle1'>Popular</div>
                  <div className='populartitle2'>Destinations</div>
               </div>
               <div className='populartitle3'>DESTINATIONS</div>
               <div className='populartitle3_inner1'>INTERNATIONAL</div>
               <div className='populartitle3_inner2'>DOMESTIC</div>
               <div className='title4_viewall'>View All Destinations</div>
            </div>

            <div className='data'>
              
               <div className="countrycardmaindiv">
                  <Slider {...settings1} className="multiCardSlider">
                     <div className="card-wrapper maincountrycardwrapper">
                        <div className="countrycard">
                           <div className='countrycard_img'>
                              <img src='images/country images/europe 2.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top " alt="..." />
                           </div>

                           <div className="card-body">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Europe</h4>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper maincountrycardwrapper">
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/turkey.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Turkey</h4>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper maincountrycardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/dubai 3.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Dubai</h4>
                              </div>
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper maincountrycardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/thailand 2.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Thailand</h4>
                              </div>
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper maincountrycardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/maldives 2.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Maldives</h4>
                              </div>
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper maincountrycardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/switzerland 2.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Switzerland</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">In Madagascar from amadues 2018.</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper maincountrycardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/mauritius.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Mauritius</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">As Most Sympathetic Agency 2018.</p>
                           </div> */}
                           </div>
                        </div>

                        {/* </div> */}
                     </div>

                     <div className="card-wrapper maincountrycardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/srilanka 3.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Srilanka</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Namibia(2017).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper maincountrycardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/uk 2.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body maincountrycardwrapper">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">UK</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>

                     <div className="card-wrapper maincountrycardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/italy.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Italy</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>
                     <div className="card-wrapper maincountrycardwrapper">
                        {/* <div className="card travelstoriesdiv"> */}
                        <div className="countrycard">
                           <div className='countrycard_img'><img src='images/country images/serbia 1.jpg' style={{ height: "100px", width: "90%" }} className="countrycard-img-top" alt="..." /></div>

                           <div className="card-body maincountrycardwrapper">
                              <div className='country_title'>
                                 <h4 className="countrycard-title ">Serbia</h4>
                              </div>
                              {/* <div className='awards_desc'>
                              <p className="card-text">from SA Airlines in Zimbabwe(2018).</p>
                           </div> */}
                           </div>
                        </div>
                        {/* </div> */}
                     </div>
                  </Slider >
               </div>

               {/* Below carousel component */}

               <div className='populardestinationscontainer'>
                  <Slider {...settings} className="multiCardSlider">
                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src='images/domestic destinations/agra.jpg' />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Agra <span className="job-title">"Best Holiday trip Ever"
                              </span>

                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src='images/domestic destinations/Goa.jpg' />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Goa <span className="job-title">"Best Holiday trip Ever"
                              </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src='images/domestic destinations/jaipur.jpg' />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Jaipur <span className="job-title">"Best Holiday trip Ever"
                              </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src='images/domestic destinations/Kerela.jpg' />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Kerala <span className="job-title">"Best Holiday trip Ever"
                              </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src='images/domestic destinations/lonavala mumbai.jpg' />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Lonaval Pune <span className="job-title">"Best Holiday trip Ever"
                              </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src='images/domestic destinations/jammu and kashmir.jpg' />
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>Jammu & Kashmir <span className="job-title">"Best Holiday trip Ever"
                              </span>
                              </h2>
                           </div>
                        </div>
                     </div>

                     <div className="card-wrapper">
                        <div className="card populardestinationssliderdiv">
                           <div className=" populardestinationcardimage">
                              <img src='images/PopularDestinationImages/destination9.jpg'/>
                           </div>
                           <div className="populardestinationsdetails">
                              <h2>France <span className="job-title">"Best Holiday trip Ever"
                              </span>
                              </h2>
                           </div>
                        </div>
                     </div>
                  </Slider>
               </div>
            </div>
         </div>
      </>
   );
}
