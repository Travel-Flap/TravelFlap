import React, { Component } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import './NewandHotDomestic.css';
import { FaAngleDown } from "react-icons/fa";
import countrydata from '../../../../../CountryData.json';
// import SliderWrapper from "./SlickSliderStyle";
import SliderWrapper from '../../../NewHomePage/NewHomeEasyVisaDestination/SlickSliderStyle';
import { Link } from 'react-router-dom';
// import "/src/App.css";

export const NewAndHotDomestic = () => {
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

        <div className='newDomesticNewAndHotOuterdiv'>
            <div className='newDomesticNewAndHotOuterHeading'>
                <h2>New & Hot Domestic Destinations</h2>

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

                   {/* <div className='newDomesticNewAndHotDropContainer'>
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

                    <select className="newDomesticNewAndHotDropContainer" onChange={(e) => handlecounty(e)} style={{backgroundColor:"white",textAlign:"left"}}>
                        <option style={{textAlign:"Left"}}>Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>
            </div>

            <div className='newDomesticNewAndHotSlideroutercontainer'>

                <div className='newDomesticNewAndHotContainer'>
                <SliderWrapper>
                    <Slider
                        dots={true}
                        // dotsclassName={"slick-dots line-indicator"}
                        infinite={true}
                        autoplay={true}
                        speed={2000}
                        autoplayspeed={2000}
                        slidesToShow={5}
                        slidesToScroll={1}
                        cssEase={"linear"}
                        rtl={true}
                        // arrows:true,
                        arrow={false}
                        appendDots= { dots => <ul>{dots}</ul>}
                        customPaging= { i => (
                            <div className="ft-slick__dots--custom">
                                <div className="loading"/>
                            </div>
                        )}
                        beforeChange= { (current, next) => setSlideindex(next)}
        
                        
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
                        <div className="newDomesticNewAndHotCardwrapper">
                            <div className="card newDomesticNewAndHotMaindiv">
                                <div className="card-image newDomesticNewAndHotCardimage">
                                    <img src="Images/EasyVisaDestinations/bolivia.jpg" />
                                </div>
                                <div className="newDomesticNewAndHotStorydetails">
                                    <h2>Bolivia <span className="newDomesticNewAndHotjob_title">
                                    <p style={{fontSize:"13.5px"}}>4 Nights / 5 Days</p>
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                    </span>
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <Link to="/easyvisainnerpage">
                        <div className="newDomesticNewAndHotCardwrapper">
                            <div className="card newDomesticNewAndHotMaindiv">
                                <div className="card-image newDomesticNewAndHotCardimage">
                                    <img src="Images/EasyVisaDestinations/dubai.jpg" />
                                </div>
                                <div className="newDomesticNewAndHotStorydetails">
                                    <h2>Dubai <span className="newDomesticNewAndHotjob_title">
                                    <p style={{fontSize:"13.5px"}}>4 Nights / 5 Days</p>
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                    </span>
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        </Link>
                        
                        <div className="newDomesticNewAndHotCardwrapper">
                            <div className="card newDomesticNewAndHotMaindiv">
                                <div className="card-image newDomesticNewAndHotCardimage">
                                    <img src="Images/EasyVisaDestinations/fiji islands.jpg" />
                                </div>
                                <div className="newDomesticNewAndHotStorydetails">
                                    <h2>Fiji islands <span className="newDomesticNewAndHotjob_title">
                                    <p style={{fontSize:"13.5px"}}>4 Nights / 5 Days</p>
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p></span>
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newDomesticNewAndHotCardwrapper">
                            <div className="card newDomesticNewAndHotMaindiv">
                                <div className="card-image newDomesticNewAndHotCardimage">
                                    <img src="Images/EasyVisaDestinations/jordan.jpg" />
                                </div>
                                <div className="newDomesticNewAndHotStorydetails">
                                    <h2>Jordan <span className="newDomesticNewAndHotjob_title">
                                    <p style={{fontSize:"13.5px"}}>4 Nights / 5 Days</p>
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p></span>
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newDomesticNewAndHotCardwrapper">
                            <div className="card newDomesticNewAndHotMaindiv">
                                <div className="card-image newDomesticNewAndHotCardimage">
                                    <img src="Images/EasyVisaDestinations/Kenya.jpg " />
                                </div>
                                <div className="newDomesticNewAndHotStorydetails">
                                    <h2>Kenya <span className="newDomesticNewAndHotjob_title">
                                    <p style={{fontSize:"13.5px"}}>4 Nights / 5 Days</p>
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p></span>
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newDomesticNewAndHotCardwrapper">
                            <div className="card newDomesticNewAndHotMaindiv">
                                <div className="card-image newDomesticNewAndHotCardimage">
                                    <img src="Images/TravelStories/river.jpg " />
                                </div>
                                <div className="newDomesticNewAndHotStorydetails">
                                    <h2>ladakh <span className="newDomesticNewAndHotjob_title">
                                    <p style={{fontSize:"13.5px"}}>4 Nights / 5 Days</p>
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p></span>
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newDomesticNewAndHotCardwrapper">
                            <div className="card newDomesticNewAndHotMaindiv">
                                <div className="card-image newDomesticNewAndHotCardimage">
                                    <img src="Images/EasyVisaDestinations/madgascar.jpg" />
                                </div>
                                <div className="newDomesticNewAndHotStorydetails">
                                    <h2>Madgascar <span className="newDomesticNewAndHotjob_title">
                                    <p style={{fontSize:"13.5px"}}>4 Nights / 5 Days</p>
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p></span>
                                        {/* <Button variant="primary" style={{marginLeft:"30%"}} >Read More</Button> */}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newDomesticNewAndHotCardwrapper">
                            <div className="card newDomesticNewAndHotMaindiv">
                                <div className="card-image newDomesticNewAndHotCardimage">
                                    <img src="Images/EasyVisaDestinations/Seychelles.jpg" />
                                </div>
                                <div className="newDomesticNewAndHotStorydetails">
                                    <h2>Seychelles <span className="newDomesticNewAndHotjob_title">
                                    <p style={{fontSize:"13.5px"}}>4 Nights / 5 Days</p>
                                    <p style={{fontSize:"13.5px"}}>All Inclusive Packages</p>
                                    <p style={{marginTop:"-6%"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p></span>
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
