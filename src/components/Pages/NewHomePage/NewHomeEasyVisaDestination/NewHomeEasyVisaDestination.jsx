import React, { Component } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import './NewHomeEasyVisaDestination.css';
import { FaAngleDown } from "react-icons/fa";
import countrydata from '../../../../CountryData.json';
import SliderWrapper from "./SlickSliderStyle";
import { Link } from 'react-router-dom';
// import "/src/App.css";

export const NewHomeEasyVisaDestination = () => {
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


    return (

        <div className='newhomeeasyvisaouterdiv'>
            <div className='newEasyVisaouterHeading'>
                <h2>Easy Visa Destinations</h2>

                {/* <div className='newHomeEasyVisaDropContainer'>
                    <select className="form-select newEasyVisaCountryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
                        style={{ border: "3px solid #3380f2", width: "60%" }}>
                        <option value="" style={{ textAlign: "center" }}>Select Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>
                </div> */}

                {/* <div className='newHomeEasyvisaDropContainer'>
                        <select className="form-select newHomeEasyvisaCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ border: "3px solid #3380f2", width: "60%",appearance:"none" }}>
                            <option value="" style={{ textAlign: "center" }}>Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='newEasyvisaicondiv'>
                        <FaAngleDown style={{fontSize:"15px"}} size={"1em"} className="Easyvisaicon" />
                        </div>
                    </div> */}

                <div id='newHomeEasyvisaDropContainer'>
                    <select id="newHomeEasyvisaCountryDrop" onChange={(e) => handlecounty(e)}
                        style={{ width: "100%", appearance: "none" }}>
                        <option value="">Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>
                    <div id='newHomeEasyvisaicondiv'>
                        <FaAngleDown size={"1em"} id="newHomeEasyvisaicon" />
                    </div>
                </div>
            </div>

            <div className='newhomeEasyVisaSlideroutercontainer'>

                <div className='newhomeEasyVisaContainer'>
                    <SliderWrapper>
                        <Slider
                            dots={true}
                            // dotsclassName={"slick-dots line-indicator"}
                            infinite={true}
                            // autoplay={true}
                            speed={2000}
                            autoplayspeed={2000}
                            slidesToShow={5}
                            slidesToScroll={1}
                            cssEase={"linear"}
                            rtl={true}
                            // arrows:true,
                            arrow={false}
                            appendDots={dots => <ul>{dots}</ul>}
                            customPaging={i => (
                                <div className="ft-slick__dots--custom">
                                    <div className="loading" />
                                </div>
                            )}
                            beforeChange={(current, next) => setSlideindex(next)}

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

                            style={{}} className="multiCardSlider">
                            <div className="newhomeEasyVisacardwrapper newhomeEasyVisacardwrapper">
                                <div className="card newhomeEasyVisamaindiv">
                                    <div className="card-image newhomeEasyVisacardimage">
                                        <img src="Images/EasyVisaDestinations/bolivia.jpg" />
                                    </div>
                                    <div className="newhomeEasyVisastorydetails">
                                        <h2>Bolivia                         {/* <span> */}
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                            <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                            {/* </span> */}
                                            {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <Link to="/EasyVisaInnerPage">
                                <div className="newhomeEasyVisacardwrapper">
                                    <div className="card newhomeEasyVisamaindiv">
                                        <div className="card-image newhomeEasyVisacardimage">
                                            <img src="Images/EasyVisaDestinations/dubai.jpg" />
                                        </div>
                                        <div className="newhomeEasyVisastorydetails">
                                            <h2>Dubai                         {/* <span> */}
                                                <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                                <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                                <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                                {/* </span> */}
                                                {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <div className="newhomeEasyVisacardwrapper">
                                <div className="card newhomeEasyVisamaindiv">
                                    <div className="card-image newhomeEasyVisacardimage">
                                        <img src="Images/EasyVisaDestinations/fiji islands.jpg" />
                                    </div>
                                    <div className="newhomeEasyVisastorydetails">
                                        <h2>Fiji islands                         {/* <span> */}
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                            <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                            {/* </span> */}
                                            {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="newhomeEasyVisacardwrapper">
                                <div className="card newhomeEasyVisamaindiv">
                                    <div className="card-image newhomeEasyVisacardimage">
                                        <img src="Images/EasyVisaDestinations/jordan.jpg" />
                                    </div>
                                    <div className="newhomeEasyVisastorydetails">
                                        <h2>Jordan                         {/* <span> */}
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                            <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                            {/* </span> */}
                                            {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="newhomeEasyVisacardwrapper">
                                <div className="card newhomeEasyVisamaindiv">
                                    <div className="card-image newhomeEasyVisacardimage">
                                        <img src="Images/EasyVisaDestinations/Kenya.jpg " />
                                    </div>
                                    <div className="newhomeEasyVisastorydetails">
                                        <h2>Kenya                         {/* <span> */}
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                            <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                            {/* </span> */}
                                            {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="newhomeEasyVisacardwrapper">
                                <div className="card newhomeEasyVisamaindiv">
                                    <div className="card-image newhomeEasyVisacardimage">
                                        <img src="Images/TravelStories/river.jpg " />
                                    </div>
                                    <div className="newhomeEasyVisastorydetails">
                                        <h2>ladakh                         {/* <span> */}
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                            <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                            {/* </span> */}
                                            {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="newhomeEasyVisacardwrapper">
                                <div className="card newhomeEasyVisamaindiv">
                                    <div className="card-image newhomeEasyVisacardimage">
                                        <img src="Images/EasyVisaDestinations/madgascar.jpg" />
                                    </div>
                                    <div className="newhomeEasyVisastorydetails">
                                        <h2>Madgascar                         {/* <span> */}
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                            <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                            {/* </span> */}
                                            {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            <div className="newhomeEasyVisacardwrapper">
                                <div className="card newhomeEasyVisamaindiv">
                                    <div className="card-image newhomeEasyVisacardimage">
                                        <img src="Images/EasyVisaDestinations/Seychelles.jpg" />
                                    </div>
                                    <div className="newhomeEasyVisastorydetails">
                                        <h2>Seychelles                         {/* <span> */}
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}>All Inclusive Packages</p>
                                            <p style={{ marginTop: "-6%", fontSize: "15px", fontWeight: "100" }}>Starts @  <span style={{ fontWeight: "700", fontSize: "20px" }}> AED 3000 </span> </p>
                                            {/* </span> */}
                                            {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </SliderWrapper>
                </div>
            </div>

        </div>

    )
}
