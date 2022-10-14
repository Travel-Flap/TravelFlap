import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./NewBestBudget.css";
import countrydata from '../../../../CountryData.json';
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";
// import { CountryDropHotel } from "./CountryDropHotel";

export const NewHolidaysBestBudget = () => {
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
        <div className="newBestBudgetmaindiv">
            {/* <h1>Ipl</h1> */}


            <div className="newBestBudgetheadingcontainer" >
                <div className="cardtextnewBestBudgetdropbutton">
                    {/* <CountryDropHotel /> */}
                    <h2>Best Budget Destinations</h2>
                     <div className='newHolidaysBestBudgetDropContainer'>
                        <select className="form-select newHolidaysBestBudgetCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ border: "3px solid #3380f2", width: "60%",appearance:"none", fontSize:"15px" }}>
                            <option value="" style={{ textAlign: "center" }}>Select Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='newBestBudgeticondiv'>
                        <FaAngleRight style={{fontSize:"15px"}} size={"1em"} className="newBestBudgeticon" />
                        </div>
                    </div>
                </div>

                {/* <div className="cardtextendbuttons">
                    <div className="viewallactivityhotelcardbuttons" >
                        <div className="activityaroundheadingbuttons">
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

                </div> */}
            </div>

            <div className="newBestBudgetslidercontainer">
                <Slider
                    arrows={false}
                    autoplay={true}
                    speed={2000}
                    autoplaySpeed={2000}
                    dots={true}
                    dotsclassName="slick-dots bestBudgetslickDots line-indicator"
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

                    <div className="cardtextBestBudget_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1879 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}
                        <img src="Images/NewHomeLayout/BestBudgetDestination/Belogradchik, Bulgaria.jpg" alt="" />
                        <div className="cardBestBudget_title">Bulgaria
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestBudgetratesdiv">
                            <p>Belogradchik.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>
                    <div className="cardtextBestBudget_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestBudgetDestination/Greece.jpg" alt="" />
                        <div className="cardBestBudget_title">Greece
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestBudgetratesdiv">
                            <p>Best Place to visit.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>

                    <div className="cardtextBestBudget_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}
                        
                        <img src="Images/NewHomeLayout/BestBudgetDestination/Millennium Bridge, London, United Kingdom.jpg" alt="" />
                        <div className="cardBestBudget_title">UK
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestBudgetratesdiv">
                            <p>Millenium Bridge, London.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextBestBudget_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestBudgetDestination/Nepal.jpg" alt="" />
                        <div className="cardBestBudget_title">Nepal
                        </div>

                        <div className="newBestBudgetratesdiv">
                            <p>Best neighbouring country to visit.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextBestBudget_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestBudgetDestination/Phi Phi Islands, Thailand.jpg" alt="" />
                        <div className="cardBestBudget_title">Thailand
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestBudgetratesdiv">
                            <p>Phi Phi Islands.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextBestBudget_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}
                        <img src="Images/NewHomeLayout/BestBudgetDestination/Porto, Portugal.jpg" alt="" />
                        <div className="cardBestBudget_title">Portugal
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestBudgetratesdiv">
                            <p>Porto beautifull place to visit.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextBestBudget_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestBudgetDestination/Unnamed Road, Cuba, Mayari.jpg" alt="" />
                        <div className="cardBestBudget_title">Cuba
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestBudgetratesdiv">
                            <p>Unnamed Road, Mayari.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>


                </Slider>
            </div>
        </div>
    );
};

