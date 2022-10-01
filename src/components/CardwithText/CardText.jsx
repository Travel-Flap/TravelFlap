import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./CardText.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";
import { CountryDropHotel } from "./CountryDropHotel";

export const CardText = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="besthotelsmaindiv">
            {/* <h1>Ipl</h1> */}

            <div className="besthoteldealheadingcontainer" >
                <div className="cardtextdropbutton">
                    <CountryDropHotel />
                </div>

                <div className="cardtextendbuttons">
                    <div className="viewallactivityhotelcardbuttons" >
                        {/* <p className="viewallhomehotelcardtext" style={{ width: "45" }}>view all deals</p> */}
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

                </div>
            </div>

            <div className="activityaroundslidercontainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
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

                    {/* <div className=" cardtext_maindiv">
                        <div className="review">
                            <th>Excellent
                                <br />
                                <span style={{ fontSize: "10px" }}>198 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">8.0</span>
                        </div>
                        <img src="images/HotelsImage/HotelImage1.jpg" alt="" />
                        <div className="card_title">Novotel Phuket City Phokeethra(SHA Extra Plus)
                            <br />
                            <span className="title_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="discount_price">
                            <span className="discount_percent">48% DISCOUNT</span>
                            <span className="Price_before_discount">&#x24;8,258</span>
                            <span className="Price_after_discount">&#x24;4,280</span>
                        </div>
                    </div> */}

                    <div className="cardtext_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1879 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="Images/HotelsImage/HotelImage1.jpg" alt="" />
                        <div className="card_title">Novotel Phuket City Phokeethra(SHA Extra Plus)
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className="cardtext_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="Images/HotelsImage/HotelImage2.jpg" alt="" />
                        <div className="card_title"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>

                    <div className="cardtext_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="Images/HotelsImage/HotelImage3.jpg" alt="" />
                        <div className="card_title"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className="cardtext_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="images/HotelsImage/HotelImage4.jpg" alt="" />
                        <div className="card_title"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className="cardtext_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="Images/HotelsImage/HotelImage5.jpg" alt="" />
                        <div className="card_title"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className="cardtext_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="Images/HotelsImage/HotelImage6.jpg" alt="" />
                        <div className="card_title"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>
                    <div className="cardtext_maindiv">
                        <div className="review">
                            <th>Exeptional
                                <br />
                                <span style={{ fontSize: "10px" }}>1872 reviews</span>
                            </th>
                            <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
                        </div>
                        <img src="Images/HotelsImage/HotelImage7.jpg" alt="" />
                        <div className="card_title"> Pullman Phuket Panwa Beach Resorts(SHA Plus+)Panwa Cape
                            <br />
                            <span className="hoteltitle_rating">
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                                <BsFillStarFill className="staricon" />
                            </span>
                        </div>
                        <div className="hoteldicsountprice">
                            <span className="hoteldiscountpercent">41% DISCOUNT</span>
                            <span className="hotelPricebeforediscount">&#x24;19,662</span>
                            <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
                        </div>
                    </div>


                </Slider>
            </div>
        </div>
    );
};

