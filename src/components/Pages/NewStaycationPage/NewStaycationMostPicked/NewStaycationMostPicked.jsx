import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./NewStaycationMostPicked.css";
import countrydata from '../../../../CountryData.json';
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";

export const NewStaycationMostPicked = () => {
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');

    const handlecounty = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);
        //console.log(getcountryId);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);

    }
  

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="newflightsnearyoumaindiv">
            <div className="besthoteldealheadingcontainer" >
                <div className="cardtextnewHomedropbutton">
                    <h2>Most Picked</h2>
                </div>
            </div>

            <div className="newHomeHotelServicesslidercontainer">
                <div className='newHomeHotelDotsdiv'>
                    <Slider
                        arrows={false}
                        // autoplay={true}
                        speed={1000}
                        autoplaySpeed={2000}
                        // dots={true}
                        dotsclassName="slick-dots hotelservicesslickDots line-indicator"
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

                        <div className="cardtexthotelservices_maindiv">
                            <img src="Images/HotelsImage/HotelImage1.jpg" alt="" />
                            <div className="hotelservicesdetails" style={{color:"white"}}>Travel Talk
                                <br />
                                <span className="hoteltitle_rating">
                                 <p style={{marginLeft:"0%",marginTop:"-11%"}}>Travel Community </p>
                                 <p style={{marginLeft:"0%",marginTop:"-8%"}}>2,366 Travellers</p>
                                </span>
                            </div>
                        </div>
                        <div className="cardtexthotelservices_maindiv">
                            <img src="Images/HotelsImage/HotelImage2.jpg" alt="" />
                            <div className="hotelservicesdetails" style={{color:"white"}}>Travel Talk
                                <br />
                                <span className="hoteltitle_rating">
                                <p style={{marginLeft:"0%",marginTop:"-11%"}}>Travel Community </p>
                                 <p style={{marginLeft:"0%",marginTop:"-8%"}}>2,366 Travellers</p>
                                </span>
                            </div>
                        </div>

                        <div className="cardtexthotelservices_maindiv">
                            <img src="Images/HotelsImage/HotelImage3.jpg" alt="" />
                           <div className="hotelservicesdetails" style={{color:"white"}}>Travel Talk
                                <br />
                                <span className="hoteltitle_rating">
                                    <p style={{marginLeft:"0%",marginTop:"-11%"}}>Travel Community </p>
                                 <p style={{marginLeft:"0%",marginTop:"-8%"}}>2,366 Travellers</p>
                                </span>
                            </div>
                        </div>
                        <div className="cardtexthotelservices_maindiv">
                            <img src="Images/HotelsImage/HotelImage4.jpg" alt="" />
                           <div className="hotelservicesdetails" style={{color:"white"}}>Travel Talk
                                <br />
                                <span className="hoteltitle_rating">
                                <p style={{marginLeft:"0%",marginTop:"-11%"}}>Travel Community </p>
                                 <p style={{marginLeft:"0%",marginTop:"-8%"}}>2,366 Travellers</p>
                                </span>
                            </div>
                        </div>
                        <div className="cardtexthotelservices_maindiv">
                            <img src="Images/HotelsImage/HotelImage5.jpg" alt="" />
                           <div className="hotelservicesdetails" style={{color:"white"}}>Travel Talk
                                <br />
                                <span className="hoteltitle_rating">
                                 <p style={{marginLeft:"0%",marginTop:"-11%"}}>Travel Community </p>
                                 <p style={{marginLeft:"0%",marginTop:"-8%"}}>2,366 Travellers</p>
                                </span>
                            </div>
                        </div>
                        <div className="cardtexthotelservices_maindiv">
                            <img src="Images/HotelsImage/HotelImage6.jpg" alt="" />
                           <div className="hotelservicesdetails" style={{color:"white"}}>Travel Talk
                                <br />
                                <span className="hoteltitle_rating">
                                <p style={{marginLeft:"0%",marginTop:"-11%"}}>Travel Community </p>
                                 <p style={{marginLeft:"0%",marginTop:"-8%"}}>2,366 Travellers</p>
                                </span>
                            </div>
                        </div>
                        <div className="cardtexthotelservices_maindiv">
                            <img src="Images/HotelsImage/HotelImage7.jpg" alt="" />
                           <div className="hotelservicesdetails" style={{color:"white"}}>Travel Talk
                                <br />
                                <span className="hoteltitle_rating">
                                 Travel Community 
                                 12,366 Travellers
                                </span>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

