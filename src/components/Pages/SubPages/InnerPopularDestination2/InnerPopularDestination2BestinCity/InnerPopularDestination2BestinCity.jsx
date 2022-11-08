import "./InnerPopularDestination2BestinCity.css";
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";

export const InnerPopularDestination2BestinCity = () => {

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
        <>
          <div className="InnerPopularDestination2BestinCitymainDiv">
            <div className="InnerPopularDestination2BestinCityHeading">
                Best Places in CapeTown
            </div>
            <div className="InnerPopularDestination2BestinCitySlider">
            <Slider
                    arrows={false}
                    autoplay={true}
                    speed={4000}
                    autoplaySpeed={2000}
                    dots={true}
                    dotsclassName="slick-dots innerPopularDestination2BestinCityslickDots line-indicator"
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

                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                        {/* <div className="reviewratinginnerPopularDestination2BestinCitysection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1879 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}
                        <img src="Images/NewHomeLayout/BestSelling/Brandenburg Gate, Berlin, Germany.jpg" alt="" />
                        <div className="cardinnerPopularDestination2BestinCity_title">Germany
                            <br />
                            {/* <span className="innerPopularDestination2BestinCity_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>Berlin, Brandenburg Gate.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                        </div>
                    </div>
                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                        {/* <div className="reviewratinginnerPopularDestination2BestinCitysection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestSelling/Embarcadero, San Francisco, USA.jpg" alt="" />
                        <div className="cardinnerPopularDestination2BestinCity_title">USA
                            <br />
                            {/* <span className="innerPopularDestination2BestinCity_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>San Francisco</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>

                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                        {/* <div className="reviewratinginnerPopularDestination2BestinCitysection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}
                        
                        <img src="Images/NewHomeLayout/BestSelling/Great Wall of China, China.jpg" alt="" />
                        <div className="cardinnerPopularDestination2BestinCity_title">China
                            <br />
                            {/* <span className="innerPopularDestination2BestinCity_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
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
                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                        {/* <div className="reviewratinginnerPopularDestination2BestinCitysection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestSelling/Laon France.jpg" alt="" />
                        <div className="cardinnerPopularDestination2BestinCity_title">France
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>Laon</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                        {/* <div className="reviewratinginnerPopularDestination2BestinCitysection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestSelling/Metropolitan City of Venice, Italy.jpg" alt="" />
                        <div className="cardinnerPopularDestination2BestinCity_title">Italy
                            <br />
                            {/* <span className="innerPopularDestination2BestinCity_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>Metropolitan City of Venice.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                        {/* <div className="reviewratinginnerPopularDestination2BestinCitysection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}
                        <img src="Images/NewHomeLayout/BestSelling/Santuario de la virgen de los remedios, san pedro cholula, mexico.jpg" alt="" />
                        <div className="cardinnerPopularDestination2BestinCity_title">Mexico
                            <br />
                            {/* <span className="innerPopularDestination2BestinCity_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
                            <p>Santuario de la virgen de los remedios, san pedro cholula.</p>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">Book Now</span>
                            {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
                        </div>
                    </div>
                    <div className="cardtextinnerPopularDestination2BestinCity_maindiv">
                        {/* <div className="reviewratinginnerPopularDestination2BestinCitysection">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div> */}

                        <img src="Images/NewHomeLayout/BestSelling/Sevilla, Spain.jpg" alt="" />
                        <div className="cardinnerPopularDestination2BestinCity_title">Sevilla
                            <br />
                            {/* <span className="innerPopularDestination2BestinCity_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span> */}
                        </div>

                        <div className="newinnerPopularDestination2BestinCityratesdiv">
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
        </>
       
    );
}

