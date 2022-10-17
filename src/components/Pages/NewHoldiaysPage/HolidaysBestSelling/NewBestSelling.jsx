import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./NewBestSelling.css";
import countrydata from '../../../../CountryData.json';
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";
// import { CountryDropHotel } from "./CountryDropHotel";

export const NewHolidaysBestSelling = () => {
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
                            <option value="" style={{ textAlign: "center" }}>Country</option>
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
                    // autoplay={true}
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
                        <img src="Images/NewHOmeLayout/BestSelling/Brandenburg Gate, Berlin, Germany.jpg" alt="" />
                        <div className="cardBestBudget_title">Germany
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
                            <p>Berlin, Brandenburg Gate.</p>
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

                        <img src="Images/NewHOmeLayout/BestSelling/Embarcadero, San Francisco, USA.jpg" alt="" />
                        <div className="cardBestBudget_title">USA
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
                            <p>San Francisco</p>
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
                        
                        <img src="Images/NewHOmeLayout/BestSelling/Great Wall of China, China.jpg" alt="" />
                        <div className="cardBestBudget_title">China
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
                            <p>The Great Wall of China.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                        {/* <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div> */}
                    </div>
                    <div className="cardtextBestBudget_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHOmeLayout/BestSelling/Laon France.jpg" alt="" />
                        <div className="cardBestBudget_title">France
                        </div>

                        <div className="newBestBudgetratesdiv">
                            <p>Laon</p>
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

                        <img src="Images/NewHOmeLayout/BestSelling/Metropolitan City of Venice, Italy.jpg" alt="" />
                        <div className="cardBestBudget_title">Italy
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
                            <p>Metropolitan City of Venice.</p>
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
                        <img src="Images/NewHOmeLayout/BestSelling/Santuario de la virgen de los remedios, san pedro cholula, mexico.jpg" alt="" />
                        <div className="cardBestBudget_title">Mexico
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
                            <p>Santuario de la virgen de los remedios, san pedro cholula.</p>
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

                        <img src="Images/NewHOmeLayout/BestSelling/Sevilla, Spain.jpg" alt="" />
                        <div className="cardBestBudget_title">Sevilla
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
                            <p>Spain</p>
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

