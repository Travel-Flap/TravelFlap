import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./FavouriteStaycation.css";
import countrydata from '../../../../CountryData.json';
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleDown } from 'react-icons/fa';
import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";
// import { CountryDropHotel } from "./CountryDropHotel";

export const FavouriteStaycationSpot = () => {
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
        <div className="newFavStaycationmaindiv">
            {/* <h1>Ipl</h1> */}


            <div className="bestFavStaycationHeadingcontainer" >
                <div className="cardtextFavStaycationDropbutton" style={{marginLeft:"-1%"}}>
                    {/* <CountryDropHotel /> */}
                    <h2>Favourite Staycation spots</h2>


                    {/* <div className='newFavStaycationDropContainer'> */}
                  
                    <div id='newFavStaycationDropContainer'>
                            <select id="newFavStaycationCountryDrop" onChange={(e) => handlecounty(e)}
                                style={{ width: "100%",appearance:"none" }}>
                                <option value="">Country</option>
                                {
                                    countrydata.map((getcountry, index) => (
                                        <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                    ))
                                }
                            </select>
                            <div id='newFavStaycationicondiv'>
                            <FaAngleDown  size={"1em"} id="newFavStaycationicon" />
                            </div>
                        </div>
                    {/* <div className='newFavHotelsicondiv'>
                            <FaAngleDown style={{ fontSize: "15px" }} size={"1em"} className="favHotelsicon" />
                        </div>
                    </div> */}

                    {/* <div className='newFavStaycationDropContainer'>
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

            <div className="newFavStaycationSlidercontainer">
                <div className='newFavStaycationDotsdiv'>
                    <Slider
                        arrows={false}
                        // autoplay={true}
                        speed={1000}
                        autoplaySpeed={2000}
                        // dots={true}
                        dotsclassName="slick-dots hotelservicesslickDots line-indicator"
                        ref={sliderRef}
                        slidesToShow={4}
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

                        <div className="cardtextFavStaycation_maindiv">
                            <div className="reviewratingFavStaycationSection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1879 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"30px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/FavHotels/FavHotel1.png" alt="" />
                            <div className="cardFavStaycation_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favStaycationtitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favStaycationRatesdiv">
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
                        <div className="cardtextFavStaycation_maindiv">
                            <div className="reviewratingFavStaycationSection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"30px"} />
                                <span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/FavHotels/FavHotel2.png" alt="" />
                            <div className="cardFavStaycation_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favStaycationtitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favStaycationRatesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="cardtextFavStaycation_maindiv">
                            <div className="reviewratingFavStaycationSection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"30px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/FavHotels/FavHotel3.png" alt="" />
                            <div className="cardFavStaycation_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favStaycationtitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favStaycationRatesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="cardtextFavStaycation_maindiv">
                            <div className="reviewratingFavStaycationSection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"30px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/FavHotels/FavHotel4.png" alt="" />
                            <div className="cardFavStaycation_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favStaycationtitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favStaycationRatesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="cardtextFavStaycation_maindiv">
                            <div className="reviewratingFavStaycationSection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"30px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/FavHotels/FavHotel5.png" alt="" />
                            <div className="cardFavStaycation_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favStaycationtitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favStaycationRatesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="cardtextFavStaycation_maindiv">
                            <div className="reviewratingFavStaycationSection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"30px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/FavHotels/FavHotel6.png" alt="" />
                            <div className="cardFavStaycation_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favStaycationtitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favStaycationRatesdiv">
                                        <p>$300/ day</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className="cardtextFavStaycation_maindiv">
                            <div className="reviewratingFavStaycationSection">
                                <th>Exeptional
                                    <br />
                                    <span style={{ fontSize: "10px" }}>1872 reviews</span>
                                </th>
                                <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"30px"} /><span className="review_rating_num">9.0</span>
                            </div>
                            <img src="Images/NewHomeLayout/Hotels/FavHotels/FavHotel2.png" alt="" />
                            <div className="cardFavStaycation_title">
                                <h5>
                                    Single Room
                                </h5>
                                <br />
                                <div className="favStaycationtitle_rating">
                                    <span >
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                        <BsFillStarFill className="staricon" />
                                    </span>

                                    <div className="favStaycationRatesdiv">
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

