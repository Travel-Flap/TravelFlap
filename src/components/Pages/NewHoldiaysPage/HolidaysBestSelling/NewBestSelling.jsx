import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./NewBestSelling.css";
import countrydata from '../../../../CountryData.json';
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleDown } from 'react-icons/fa';
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
        <div className="newBestSellingmaindiv">
            {/* <h1>Ipl</h1> */}


            <div className="newBestSellingheadingcontainer" >
                <div className="cardtextnewBestSellingDropbutton">
                    {/* <CountryDropHotel /> */}
                    <h2>Best Selling Destinations</h2>
                     {/* <div className='newHolidaysBestSellingDropContainer'>
                        <select className="form-select newHolidaysBestSellingCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ border: "3px solid #3380f2", width: "60%",appearance:"none", fontSize:"15px" }}>
                            <option value="" style={{ textAlign: "center" }}>Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='newBestSellingIcondiv'>
                        <FaAngleDown style={{fontSize:"15px"}} size={"1em"} className="newBestSellingIcon" />
                        </div>
                    </div> */}

                    <select className="newHolidaysBestSellingDropContainer" onChange={(e) => handlecounty(e)} style={{backgroundColor:"white",textAlign:"left"}}>
                        <option style={{textAlign:"Left"}}>Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>
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

            <div className="newBestSellingSlidercontainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
                    speed={2000}
                    autoplaySpeed={2000}
                    dots={true}
                    dotsclassName="slick-dots bestSellingSlickDots line-indicator"
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

                    <div className="cardtextBestSelling_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1879 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}
                        <img src="Images/NewHomeLayout/BestSelling/Brandenburg Gate, Berlin, Germany.jpg" alt="" />
                        <div className="cardBestSelling_title">Germany
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestSellingRatesdiv">
                            <p>Berlin, Brandenburg Gate.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>
                    <div className="cardtextBestSelling_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestSelling/Embarcadero, San Francisco, USA.jpg" alt="" />
                        <div className="cardBestSelling_title">USA
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestSellingRatesdiv">
                            <p>San Francisco</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>

                    <div className="cardtextBestSelling_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}
                        
                        <img src="Images/NewHomeLayout/BestSelling/Great Wall of China, China.jpg" alt="" />
                        <div className="cardBestSelling_title">China
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestSellingRatesdiv">
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
                    <div className="cardtextBestSelling_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestSelling/Laon France.jpg" alt="" />
                        <div className="cardBestSelling_title">France
                        </div>

                        <div className="newBestSellingRatesdiv">
                            <p>Laon</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextBestSelling_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestSelling/Metropolitan City of Venice, Italy.jpg" alt="" />
                        <div className="cardBestSelling_title">Italy
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestSellingRatesdiv">
                            <p>Metropolitan City of Venice.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextBestSelling_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}
                        <img src="Images/NewHomeLayout/BestSelling/Santuario de la virgen de los remedios, san pedro cholula, mexico.jpg" alt="" />
                        <div className="cardBestSelling_title">Mexico
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestSellingRatesdiv">
                            <p>Santuario de la virgen de los remedios, san pedro cholula.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextBestSelling_maindiv">
                        {/* <div className="reviewratingBestBudgetsection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestSelling/Sevilla, Spain.jpg" alt="" />
                        <div className="cardBestSelling_title">Sevilla
                            <br />
                            {/* <span className="BestBudget_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newBestSellingRatesdiv">
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

