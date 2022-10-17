import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './CruiseInternationalDestination.css';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import {FaAngleRight} from "react-icons/fa";
import countrydata from '../../../../CountryData.json';

export const CruiseInternationalDestination = () => {
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
        <>
            <div className="cruisePopularDestinationoutercontainer">

                <div className="cruiseInternationalDestinationHeadingContainer">
                    <h2 className="cruiseInternationalDestinationpageheading">International Destination</h2>
                   <div className='cruiseInternationalDestinationDropContainer'>
                        <select className="form-select cruiseInternationalDestinationCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ width: "60%",appearance:"none" }}>
                            <option value="" style={{ textAlign: "center" }}>Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='cruiseInternationalDestinationicondiv'>
                        <FaAngleRight style={{fontSize:"15px"}} size={"1em"} className="cruiseInternationalDestinationicon" />
                        </div>
                    </div>

                </div>

                <div className='datanewhomepage'>

                    <div className="cruiseInternationalDestinationcardmaindiv">

                        <Slider
                            arrows={false}
                            autoplay={true}
                            speed={1000}
                            autoplaySpeed={1000}
                            dots={true}
                            dotsclassName="slick-dots line-indicator"
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
                                        width: "100%",
                                        top: "-10px",
                                        opacity: 0,
                                    }}
                                >
                                    {i}
                                </div>
                            )}
                        >

                            <Link to="/cruiseinternational" className="cuiseInternationalDestinationpagelink">
                             <div className="card-wrapper cruiseInternationalDestinationcardwrapper">
                                <div className="cruiseInternationalDestinationcard">
                                    <div className='cruiseInternationalDestinationcard_img'>
                                        <div className="card-body">
                                            <div className='trendingCruisenewhomepage_title1'>
                                                    <div className="cruiseInternationalDestinationbottomheading">
                                                        <h1>Cruise</h1>
                                                    </div>
                                                {/* <h4 className="trendingCruisenewhomepagecard-title">Cruise</h4> */}
                                            </div>
                                        </div>
                                        <img src='https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="trendingCruisecard-img-top" alt="..." />
                                    </div>
                                </div>
                             </div>
                            </Link>

                            <Link to="/cruiseinternational" className="cuiseInternationalDestinationpagelink">
                             <div className="card-wrapper cruiseInternationalDestinationcardwrapper">
                                <div className="cruiseInternationalDestinationcard">
                                    <div className='cruiseInternationalDestinationcard_img'>
                                        <div className="card-body">
                                            <div className='trendingCruisenewhomepage_title1'>
                                                    <div className="cruiseInternationalDestinationbottomheading">
                                                        <h1>Cruise</h1>
                                                    </div>
                                                {/* <h4 className="trendingCruisenewhomepagecard-title">Cruise</h4> */}
                                            </div>
                                        </div>
                                        <img src='https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="trendingCruisecard-img-top" alt="..." />
                                    </div>
                                </div>
                             </div>
                            </Link>
                            <Link to="/cruiseinternational" className="cuiseInternationalDestinationpagelink">
                             <div className="card-wrapper cruiseInternationalDestinationcardwrapper">
                                <div className="cruiseInternationalDestinationcard">
                                    <div className='cruiseInternationalDestinationcard_img'>
                                        <div className="card-body">
                                            <div className='trendingCruisenewhomepage_title1'>
                                                    <div className="cruiseInternationalDestinationbottomheading">
                                                        <h1>Cruise</h1>
                                                    </div>
                                                {/* <h4 className="trendingCruisenewhomepagecard-title">Cruise</h4> */}
                                            </div>
                                        </div>
                                        <img src='https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="trendingCruisecard-img-top" alt="..." />
                                    </div>
                                </div>
                             </div>
                            </Link>
                            <Link to="/cruiseinternational" className="cuiseInternationalDestinationpagelink">
                             <div className="card-wrapper cruiseInternationalDestinationcardwrapper">
                                <div className="cruiseInternationalDestinationcard">
                                    <div className='cruiseInternationalDestinationcard_img'>
                                        <div className="card-body">
                                            <div className='trendingCruisenewhomepage_title1'>
                                                    <div className="cruiseInternationalDestinationbottomheading">
                                                        <h1>Cruise</h1>
                                                    </div>
                                                {/* <h4 className="trendingCruisenewhomepagecard-title">Cruise</h4> */}
                                            </div>
                                        </div>
                                        <img src='https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="trendingCruisecard-img-top" alt="..." />
                                    </div>
                                </div>
                             </div>
                            </Link>
                            <Link to="/cruiseinternational" className="cuiseInternationalDestinationpagelink">
                             <div className="card-wrapper cruiseInternationalDestinationcardwrapper">
                                <div className="cruiseInternationalDestinationcard">
                                    <div className='cruiseInternationalDestinationcard_img'>
                                        <div className="card-body">
                                            <div className='trendingCruisenewhomepage_title1'>
                                                    <div className="cruiseInternationalDestinationbottomheading">
                                                        <h1>Cruise</h1>
                                                    </div>
                                                {/* <h4 className="trendingCruisenewhomepagecard-title">Cruise</h4> */}
                                            </div>
                                        </div>
                                        <img src='https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="trendingCruisecard-img-top" alt="..." />
                                    </div>
                                </div>
                             </div>
                            </Link>
                            <Link to="/cruiseinternational" className="cuiseInternationalDestinationpagelink">
                             <div className="card-wrapper cruiseInternationalDestinationcardwrapper">
                                <div className="cruiseInternationalDestinationcard">
                                    <div className='cruiseInternationalDestinationcard_img'>
                                        <div className="card-body">
                                            <div className='trendingCruisenewhomepage_title1'>
                                                    <div className="cruiseInternationalDestinationbottomheading">
                                                        <h1>Cruise</h1>
                                                    </div>
                                                {/* <h4 className="trendingCruisenewhomepagecard-title">Cruise</h4> */}
                                            </div>
                                        </div>
                                        <img src='https://images.unsplash.com/photo-1578530332818-6ba472e67b9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y3J1aXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' style={{ height: "100px", width: "90%" }} className="trendingCruisecard-img-top" alt="..." />
                                    </div>
                                </div>
                             </div>
                            </Link>
                           

                           

                        </Slider >
                    </div>
                </div>
            </div>

        </>
    );
}

