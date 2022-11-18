// import React, { useState } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useRef } from "react";
// import { useEffect } from "react";
// import "./NewBestSelling.css";
// import countrydata from '../../../../CountryData.json';
// import { Button } from "react-bootstrap";
// import { FaAngleLeft, FaAngleDown } from 'react-icons/fa';
// import { BsFillChatLeftFill, BsFillStarFill, BsStarHalf } from "react-icons/bs";
// // import { CountryDropHotel } from "./CountryDropHotel";

// export const NewHolidaysBestSelling = () => {
//     const [countryid, setCountryid] = useState('');
//     const [state, setState] = useState([]);
//     const [stateid, setStateid] = useState('');

//     const handlecounty = (e) => {
//         const getcountryId = e.target.value;
//         const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
//         setState(getStatedata);
//         setCountryid(getcountryId);
//         //console.log(getcountryId);
//     }

//     const handlestate = (e) => {
//         const stateid = e.target.value;
//         //console.log(stateid);
//         setStateid(stateid);

//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Get Country id" + countryid + " And " + stateid);
//     }

//     const sliderRef = useRef(null);
//     useEffect(() => {
//         console.log(sliderRef);
//     }, []);
//     return (
//         <div className="newBestSellingmaindiv">
//             {/* <h1>Ipl</h1> */}


//             <div className="newBestSellingheadingcontainer" >
//                 <div className="cardtextnewBestSellingDropbutton">
//                     {/* <CountryDropHotel /> */}
//                     <h2>Best Selling Destinations</h2>
//                      {/* <div className='newHolidaysBestSellingDropContainer'>
//                         <select className="form-select newHolidaysBestSellingCountryDrop" onChange={(e) => handlecounty(e)}
//                             style={{ border: "3px solid #3380f2", width: "60%",appearance:"none", fontSize:"15px" }}>
//                             <option value="" style={{ textAlign: "center" }}>Country</option>
//                             {
//                                 countrydata.map((getcountry, index) => (
//                                     <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
//                                 ))
//                             }
//                         </select>
//                         <div className='newBestSellingIcondiv'>
//                         <FaAngleDown style={{fontSize:"15px"}} size={"1em"} className="newBestSellingIcon" />
//                         </div>
//                     </div> */}


//                        <div id='newHolidaysBestSellingDropContainer'>
//                             <select id="newHolidaysBestSellingCountryDrop" onChange={(e) => handlecounty(e)}
//                                 style={{ width: "100%",appearance:"none" }}>
//                                 <option value="">Country</option>
//                                 {
//                                     countrydata.map((getcountry, index) => (
//                                         <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
//                                     ))
//                                 }
//                             </select>
//                             <div id='newHolidaysBestSellingicondiv'>
//                             <FaAngleDown  size={"1em"} id="newHolidaysBestSellingicon" />
//                             </div>
//                         </div>
//                 </div>

//                 {/* <div className="cardtextendbuttons">
//                     <div className="viewallactivityhotelcardbuttons" >
//                         <div className="activityaroundheadingbuttons">
//                             <div style={{ display: "flex" }}>
//                                 <FaAngleLeft size={"2.5em"}
//                                     onClick={() => sliderRef.current.slickPrev()}
//                                 />
//                                 <FaAngleDown size={"2.5em"}
//                                     onClick={() => sliderRef.current.slickNext()}
//                                 />
//                             </div>
//                         </div>

//                     </div>

//                 </div> */}
//             </div>

//             <div className="newBestSellingSlidercontainer">
//                 <Slider
//                     arrows={false}
//                     // autoplay={true}
//                     speed={2000}
//                     autoplaySpeed={2000}
//                     dots={true}
//                     dotsclassName="slick-dots bestSellingSlickDots line-indicator"
//                     ref={sliderRef}
//                     slidesToShow={5}
//                     slidesToScroll={2}
//                     responsive={[
//                         {
//                             breakpoint: 1024,
//                             settings: {
//                                 slidesToShow: 3,
//                                 slidesToScroll: 1,
//                                 infinite: true
//                             }
//                         },
//                         {
//                             breakpoint: 950,
//                             settings: {
//                                 slidesToShow: 2,
//                                 slidesToScroll: 1,
//                                 infinite: true
//                             }
//                         },
//                         {
//                             breakpoint: 800,
//                             settings: {
//                                 slidesToShow: 2,
//                                 slidesToScroll: 1,
//                                 infinite: true
//                             }
//                         },
//                         {
//                             breakpoint: 600,
//                             settings: {
//                                 slidesToShow: 2,
//                                 slidesToScroll: 2,
//                                 initialSlide: 2
//                             }
//                         },
//                         {
//                             breakpoint: 480,
//                             settings: {
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1
//                             }
//                         }
//                     ]}
//                     customPaging={(i) => (
//                         <div
//                             style={{
//                                 // position: "absolute",
//                                 width: "100%",
//                                 top: "-10px",
//                                 opacity: 0,
//                             }}
//                         >
//                             {i}
//                         </div>
//                     )}
//                 >

//                     <div className="cardtextBestSelling_maindiv">
//                         {/* <div className="reviewratingBestBudgetsection">
//                             <th>Exeptional
//                                 <br />
//                                 <span style={{ fontSize: "10px" }}>1879 reviews</span>
//                             </th>
//                             <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
//                         </div> */}
//                         <img src="Images/NewHomeLayout/BestSelling/Brandenburg Gate, Berlin, Germany.jpg" alt="" />
//                         <div className="cardBestSelling_title">Germany
//                             <br />
//                             {/* <span className="BestBudget_rating">
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                             </span> */}
//                         </div>

//                         <div className="newBestSellingRatesdiv">
//                             <p>Berlin, Brandenburg Gate.</p>
//                         </div>
//                         <div className="hoteldicsountprice">
//                             <span className="hoteldiscountpercent">Book Now</span>
//                         </div>
//                     </div>
//                     <div className="cardtextBestSelling_maindiv">
//                         {/* <div className="reviewratingBestBudgetsection">
//                             <th>Exeptional
//                                 <br />
//                                 <span style={{ fontSize: "10px" }}>1872 reviews</span>
//                             </th>
//                             <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
//                         </div> */}

//                         <img src="Images/NewHomeLayout/BestSelling/Embarcadero, San Francisco, USA.jpg" alt="" />
//                         <div className="cardBestSelling_title">USA
//                             <br />
//                             {/* <span className="BestBudget_rating">
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                             </span> */}
//                         </div>

//                         <div className="newBestSellingRatesdiv">
//                             <p>San Francisco</p>
//                         </div>
//                         <div className="hoteldicsountprice">
//                             <span className="hoteldiscountpercent">Book Now</span>
//                             {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
//                             <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
//                         </div>
//                     </div>

//                     <div className="cardtextBestSelling_maindiv">
//                         {/* <div className="reviewratingBestBudgetsection">
//                             <th>Exeptional
//                                 <br />
//                                 <span style={{ fontSize: "10px" }}>1872 reviews</span>
//                             </th>
//                             <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
//                         </div> */}

//                         <img src="Images/NewHomeLayout/BestSelling/Great Wall of China, China.jpg" alt="" />
//                         <div className="cardBestSelling_title">China
//                             <br />
//                             {/* <span className="BestBudget_rating">
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                             </span> */}
//                         </div>

//                         <div className="newBestSellingRatesdiv">
//                             <p>The Great Wall of China.</p>
//                         </div>
//                         <div className="hoteldicsountprice">
//                             <span className="hoteldiscountpercent">Book Now</span>
//                             {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
//                             <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
//                         </div>
//                         {/* <div className="hoteldicsountprice">
//                             <span className="hoteldiscountpercent">41% DISCOUNT</span>
//                             <span className="hotelPricebeforediscount">&#x24;19,662</span>
//                             <span className="hotel_Priceafterdiscount">&#x24;11,611</span>
//                         </div> */}
//                     </div>
//                     <div className="cardtextBestSelling_maindiv">
//                         {/* <div className="reviewratingBestBudgetsection">
//                             <th>Exeptional
//                                 <br />
//                                 <span style={{ fontSize: "10px" }}>1872 reviews</span>
//                             </th>
//                             <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
//                         </div> */}

//                         <img src="Images/NewHomeLayout/BestSelling/Laon France.jpg" alt="" />
//                         <div className="cardBestSelling_title">France
//                         </div>

//                         <div className="newBestSellingRatesdiv">
//                             <p>Laon</p>
//                         </div>
//                         <div className="hoteldicsountprice">
//                             <span className="hoteldiscountpercent">Book Now</span>
//                             {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
//                             <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
//                         </div>
//                     </div>
//                     <div className="cardtextBestSelling_maindiv">
//                         {/* <div className="reviewratingBestBudgetsection">
//                             <th>Exeptional
//                                 <br />
//                                 <span style={{ fontSize: "10px" }}>1872 reviews</span>
//                             </th>
//                             <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
//                         </div> */}

//                         <img src="Images/NewHomeLayout/BestSelling/Metropolitan City of Venice, Italy.jpg" alt="" />
//                         <div className="cardBestSelling_title">Italy
//                             <br />
//                             {/* <span className="BestBudget_rating">
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                             </span> */}
//                         </div>

//                         <div className="newBestSellingRatesdiv">
//                             <p>Metropolitan City of Venice.</p>
//                         </div>
//                         <div className="hoteldicsountprice">
//                             <span className="hoteldiscountpercent">Book Now</span>
//                             {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
//                             <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
//                         </div>
//                     </div>
//                     <div className="cardtextBestSelling_maindiv">
//                         {/* <div className="reviewratingBestBudgetsection">
//                             <th>Exeptional
//                                 <br />
//                                 <span style={{ fontSize: "10px" }}>1872 reviews</span>
//                             </th>
//                             <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
//                         </div> */}
//                         <img src="Images/NewHomeLayout/BestSelling/Santuario de la virgen de los remedios, san pedro cholula, mexico.jpg" alt="" />
//                         <div className="cardBestSelling_title">Mexico
//                             <br />
//                             {/* <span className="BestBudget_rating">
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                             </span> */}
//                         </div>

//                         <div className="newBestSellingRatesdiv">
//                             <p>Santuario de la virgen de los remedios, san pedro cholula.</p>
//                         </div>
//                         <div className="hoteldicsountprice">
//                             <span className="hoteldiscountpercent">Book Now</span>
//                             {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
//                             <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
//                         </div>
//                     </div>
//                     <div className="cardtextBestSelling_maindiv">
//                         {/* <div className="reviewratingBestBudgetsection">
//                             <th>Exeptional
//                                 <br />
//                                 <span style={{ fontSize: "10px" }}>1872 reviews</span>
//                             </th>
//                             <BsFillChatLeftFill style={{ color: "#3380F2" }} fontSize={"40px"} /><span className="review_rating_num">9.0</span>
//                         </div> */}

//                         <img src="Images/NewHomeLayout/BestSelling/Sevilla, Spain.jpg" alt="" />
//                         <div className="cardBestSelling_title">Sevilla
//                             <br />
//                             {/* <span className="BestBudget_rating">
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                                 <BsFillStarFill className="staricon" />
//                             </span> */}
//                         </div>

//                         <div className="newBestSellingRatesdiv">
//                             <p>Spain</p>
//                         </div>
//                         <div className="hoteldicsountprice">
//                             <span className="hoteldiscountpercent">Book Now</span>
//                             {/* <span className="hotelPricebeforediscount">&#x24;19,662</span>
//                             <span className="hotel_Priceafterdiscount">&#x24;11,611</span> */}
//                         </div>
//                     </div>


//                 </Slider>
//             </div>
//         </div>
//     );
// };


import React, { useState } from 'react';
import "./NewBestSelling.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import countrydata from '../../../../CountryData.json';
import { Link } from 'react-router-dom';
import SliderWrapper from "./SlickSliderStyle";

export const NewHolidaysBestSelling = () => {
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');
    const [slideindex, setSlideindex] = useState(0);

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
    const settings = {
        dots: true,
        dotsclassName: "slick-dots line-indicator",
        infinite: true,
        // autoplay: true,
        autoplayspeed: 2000,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: false,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading" />
            </div>
        ),
        beforeChange: (current, next) => setSlideindex(next),
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
        <div className='newBestSellingHolidaysContainer'>

            <div class="newBestSellingHolidaysMaincardDiv card text-bg-dark">
                {/* <img src="Images/NewHomeLayout/BackgroundImages/TopCitiesBackground.jpeg" class="card-img" alt="..." /> */}
                <div className='newBestSellingbelowdiv'>

                </div>
                <div class="card-img-overlay ">
                    <div className='newBestSellingHolidaysMainheading'>

                        <div className='newBestSellingHolidaysHeadingouterdiv'>
                            <h2> Best Selling Destination </h2>

                            <div id='bestSellingHoolidaysDropContainer'>
                                <select id="bestSellingHolidaysCountrydrop" onChange={(e) => handlecounty(e)}
                                    style={{ width: "100%", appearance: "none" }}>
                                    <option value="">Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                                <div id='bestSellingHolidaysIcondiv'>
                                    <FaAngleDown size={"1em"} id="bestSellingHolidaysIcon" />
                                </div>
                            </div>

                        </div>

                        {/* <div className='newPopularbelowHeadingdiv'>
                            <h5 className='belowInternationalheading'>
                                <Link to="/internationalHolidayssubpage" style={{ textDecoration: "none", color: "#393939" }}> International </Link>
                            </h5> 
                            
                            <h5 className='belowDomesticHeading'>
                                <Link to="/domesticHolidays" style={{ textDecoration: "none", color: "#393939" }}> Domestic </Link>
                            </h5>
                        </div> */}

                        <div className='newBestSellingDestinationSlidercontainer'>

                            <div className='newBestSellingHolidaysSlickslidercontainer'>
                                <SliderWrapper>
                                    <Slider {...settings} className="multiCardSlider">
                                        <div className="card-wrapper">
                                            <div className="card newBestSellingHolidaysDiv">
                                                <div className="card-image newBestSellingHolidaysCardimage">
                                                    <img src="Images/NewHomeLayout/BestSelling/Brandenburg Gate, Berlin, Germany.jpg" />
                                                </div>
                                                <div className="newBestSellingHolidaysDetails">
                                                    <h2> Brandenburg Gate
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Germany </p>
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                        {/* </span> */}
                                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className='newhomeTopCitiesBottomTexts'>
                                                <h2>Abu Dhabi</h2>
                                                <p className="job-title">"Best Holiday trip Ever" </p>
                                            </div>
                                        </div>

                                        <div className="card-wrapper">
                                            <div className="card newBestSellingHolidaysDiv">
                                                <div className="card-image newBestSellingHolidaysCardimage">
                                                    <img src="Images/NewHomeLayout/BestSelling/Embarcadero, San Francisco, USA.jpg" alt="" />
                                                </div>
                                                <div className="newBestSellingHolidaysDetails">
                                                    <h2>  Embarcadero
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> San Francisco, USA </p>
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                        {/* </span> */}
                                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className='newhomeTopCitiesBottomTexts'>
                                                <h2>Epupa Falls</h2>
                                                <p className="job-title">"Best Holiday trip Ever" </p>
                                            </div>
                                        </div>

                                        <div className="card-wrapper">
                                            <div className="card newBestSellingHolidaysDiv">
                                                <div className="card-image newBestSellingHolidaysCardimage">
                                                    <img src="Images/NewHomeLayout/BestSelling/Great Wall of China, China.jpg" alt="" />
                                                </div>
                                                <div className="newBestSellingHolidaysDetails">
                                                    <h2> Great Wall of China
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> China </p>
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                        {/* </span> */}
                                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className='newhomeTopCitiesBottomTexts'>
                                                <h2>Las Vegas</h2>
                                                <p className="job-title">"Best Holiday trip Ever" </p>
                                            </div>
                                        </div>

                                        <div className="card-wrapper">
                                            <div className="card newBestSellingHolidaysDiv">
                                                <div className="card-image newBestSellingHolidaysCardimage">
                                                    <img src="Images/NewHomeLayout/BestSelling/Laon France.jpg" alt="" />
                                                </div>
                                                <div className="newBestSellingHolidaysDetails">
                                                    <h2> Laon
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> France </p>
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                        {/* </span> */}
                                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className='newhomeTopCitiesBottomTexts'>
                                                <h2>Sydney</h2>
                                                <p className="job-title">"Best Holiday trip Ever" </p>
                                            </div>
                                        </div>

                                        <div className="card-wrapper">
                                            <div className="card newBestSellingHolidaysDiv">
                                                <div className="card-image newBestSellingHolidaysCardimage">
                                                    <img src="Images/NewHomeLayout/BestSelling/Metropolitan City of Venice, Italy.jpg" alt="" />
                                                </div>
                                                <div className="newBestSellingHolidaysDetails">
                                                    <h2> Metropolitan Cirty of Venice
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Italy </p>
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                        {/* </span> */}
                                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className='newhomeTopCitiesBottomTexts'>
                                                <h2>Toronto</h2>
                                                <p className="job-title">"Best Holiday trip Ever" </p>
                                            </div>
                                        </div>

                                        <div className="card-wrapper">
                                            <div className="card newBestSellingHolidaysDiv">
                                                <div className="card-image newBestSellingHolidaysCardimage">
                                                    <img src="Images/TopCities/landon.jpg" />
                                                </div>
                                                <div className="newBestSellingHolidaysDetails">
                                                    <h2>London                         {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                        {/* </span> */}
                                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className='newhomeTopCitiesBottomTexts'>
                                                <h2>London</h2>
                                                <p className="job-title">"Best Holiday trip Ever" </p>
                                            </div>
                                        </div>

                                        <div className="card-wrapper">
                                            <div className="card newBestSellingHolidaysDiv">
                                                <div className="card-image newBestSellingHolidaysCardimage">
                                                    <img src="Images/TopCities/denmark.jpg" />
                                                </div>
                                                <div className="newBestSellingHolidaysDetails">
                                                    <h2>Aarhus                         {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                        {/* </span> */}
                                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className='newhomeTopCitiesBottomTexts'>
                                                <h2>Aarhus</h2>
                                                <p className="job-title">"Best Holiday trip Ever" </p>
                                            </div>
                                        </div>

                                        <div className="card-wrapper">
                                            <div className="card newBestSellingHolidaysDiv">
                                                <div className="card-image newBestSellingHolidaysCardimage">
                                                    <img src="Images/TopCities/zambiaafrica.jpg" />
                                                </div>
                                                <div className="newBestSellingHolidaysDetails">
                                                    <h2>Zambia                         {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                        {/* </span> */}
                                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className='newhomeTopCitiesBottomTexts'>
                                                <h2>Zambia</h2>
                                                <p className="job-title">"Best Holiday trip Ever" </p>
                                            </div>
                                        </div>

                                        <div className="card-wrapper">
                                            <div className="card newBestSellingHolidaysDiv">
                                                <div className="card-image newBestSellingHolidaysCardimage">
                                                    <img src="Images/TopCities/swedan.jpg" />
                                                </div>
                                                <div className="newBestSellingHolidaysDetails">
                                                    <h2>Stockholm                         {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                        <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                        {/* </span> */}
                                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                                    </h2>
                                                </div>
                                            </div>

                                            <div className='newhomeTopCitiesBottomTexts'>
                                                <h2>Stockholm</h2>
                                                <p className="job-title">"Best Holiday trip Ever" </p>
                                            </div>
                                        </div>
                                    </Slider>
                                </SliderWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
