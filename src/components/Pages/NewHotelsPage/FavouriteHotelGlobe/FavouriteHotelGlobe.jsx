import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./FavouriteHotelGlobe.css";
import countrydata from '../../../../CountryData.json';
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleDown } from 'react-icons/fa';
import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";
// import { CountryDropHotel } from "./CountryDropHotel";

export const FavouriteHotelGlobe = () => {
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
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Get Country id" + countryid + " And " + stateid);
    }

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="newFavHotelsmaindiv">
            {/* <h1>Ipl</h1> */}


            <div className="bestFavHotelsheadingcontainer" >
                <div className="cardtextFavHoteldropbutton">
                    {/* <CountryDropHotel /> */}
                    <h2>Favourite Hotel Around Globe</h2>


                    {/* <div className='newFavHotelsDropContainer'> */}

                    <div id='newFavHotelsDropContainer'>
                        <select id="newFavHotelsCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ width: "100%", appearance: "none" }}>
                            <option value="">Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div id='newFavHotelsicondiv'>
                            <FaAngleDown size={"1em"} id="newFavHotelsicon" />
                        </div>
                    </div>
                    {/* <div className='newFavHotelsicondiv'>
                            <FaAngleDown style={{ fontSize: "15px" }} size={"1em"} className="favHotelsicon" />
                        </div>
                    </div> */}

                    {/* <div className='newFavHotelsDropContainer'>
                        <select className="form-select newFavHotelsCountryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
                            style={{ border: "3px solid #3380f2", width: "60%" }}>
                            <option value="" style={{ textAlign: "center" }}>Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                    </div> */}
                </div>

                {/* <div className="cardtextendbuttons">
                    <div className="viewallactivityhotelcardbuttons" >
                        <div className="activityaroundheadingbuttons">
                            <div style={{ display: "flex" }}>
                                <FaAngleLeft size={"2.5em"}
                                    onClick={() => sliderRef.current.slickPrev()}
                                />
                                <FaAngleDown size={"2.5em"}
                                    onClick={() => sliderRef.current.slickNext()}
                                />
                            </div>
                        </div>

                    </div>

                </div> */}
            </div>

            <div className="newFavHotelslidercontainer">
                <div className='newFavHotelDotsdiv'>
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

                        <div className="cardtextFavHotels_maindiv">
                            <div className="reviewratingFavHotelssection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1879 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/AllCompImages/Rambuttri Village.jpg" alt="" />
                            <div className="cardFavHotel_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favHotelstitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favHotelsratesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>


                            {/* <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div> */}
                        </div>
                        <div className="cardtextFavHotels_maindiv">
                            <div className="reviewratingFavHotelssection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/AllCompImages/TajHotel.jpeg" alt="" />
                            <div className="cardFavHotel_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favHotelstitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favHotelsratesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="cardtextFavHotels_maindiv">
                            <div className="reviewratingFavHotelssection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/AllCompImages/GlobeHotel1.jpg" alt="" />
                            <div className="cardFavHotel_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favHotelstitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favHotelsratesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="cardtextFavHotels_maindiv">
                            <div className="reviewratingFavHotelssection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/AllCompImages/GlobeHotel2.jpg" alt="" />
                            <div className="cardFavHotel_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favHotelstitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favHotelsratesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="cardtextFavHotels_maindiv">
                            <div className="reviewratingFavHotelssection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/AllCompImages/CityMax Hotel.jpg" alt="" />
                            <div className="cardFavHotel_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favHotelstitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favHotelsratesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="cardtextFavHotels_maindiv">
                            <div className="reviewratingFavHotelssection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/FavHotels/FavHotel6.png" alt="" />
                            <div className="cardFavHotel_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favHotelstitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favHotelsratesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="cardtextFavHotels_maindiv">
                            <div className="reviewratingFavHotelssection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/FavHotels/FavHotel2.png" alt="" />
                            <div className="cardFavHotel_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favHotelstitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favHotelsratesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </Slider>
                </div>
            </div>
        </div>
    );
};

