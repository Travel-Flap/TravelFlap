import React, { Component } from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import './PopularCarHireDestinaton.css';
import { FaAngleDown } from "react-icons/fa";
import countrydata from '../../../../CountryData.json';
// import "/src/App.css";

export const NewPopularCarHireDestination = () => {
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


    return (

        <div className='newRentalsPopularCarHireouterdiv'>
            <div className='newRentalsPopularCarHireouterHeading'>
                <h2>Popular car hire Destinations</h2>

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

                {/* <div className='newRentalsPopularCarHireDropContainer'>
                    <select className="form-select newRentalsPopularCarHireCountryDrop" onChange={(e) => handlecounty(e)}
                        style={{ border: "3px solid #3380f2", width: "60%", appearance: "none" }}>
                        <option value="" style={{ textAlign: "center" }}>Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>
                    <div className='newRentalsCarHireicondiv'>
                        <FaAngleDown style={{ fontSize: "15px" }} size={"1em"} className="newCarHireicon" />
                    </div>
                </div> */}

                    <select className="newRentalsPopularCarHireDropContainer" onChange={(e) => handlecounty(e)} style={{backgroundColor:"white",textAlign:"left"}}>
                        <option style={{textAlign:"Left"}}>Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>
            </div>

            <div className='newRentalsCarHireSlideroutercontainer'>

                <div className='newRentalsCarHireContainer'>
                    <Slider
                        // dots={true}
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
                        arrows={false}
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
                        <div className="newRentalsCarHirecardwrapper">
                            <div className="card newRentalsCarHiremaindiv">
                                <div className="card-image newRentalsCarHirecardimage">
                                    <img src="Images/EasyVisaDestinations/bolivia.jpg" />
                                </div>
                                <div className="newRentalsCarHirestorydetails">
                                    <h2>Bolivia <span className="newRentalsCarHirejob-title">"Get your visa with TravelFlap Now!"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p>

                                    </span>
                                        <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newRentalsCarHirecardwrapper">
                            <div className="card newRentalsCarHiremaindiv">
                                <div className="card-image newRentalsCarHirecardimage">
                                    <img src="Images/EasyVisaDestinations/dubai.jpg" />
                                </div>
                                <div className="newRentalsCarHirestorydetails">
                                    <h2>Dubai <span className="newRentalsCarHirejob-title">"Get your visa with TravelFlap Now!"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p>
                                    </span>
                                        <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newRentalsCarHirecardwrapper">
                            <div className="card newRentalsCarHiremaindiv">
                                <div className="card-image newRentalsCarHirecardimage">
                                    <img src="Images/EasyVisaDestinations/fiji islands.jpg" />
                                </div>
                                <div className="newRentalsCarHirestorydetails">
                                    <h2>Fiji islands <span className="newRentalsCarHirejob-title">"Get your visa with TravelFlap Now!"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newRentalsCarHirecardwrapper">
                            <div className="card newRentalsCarHiremaindiv">
                                <div className="card-image newRentalsCarHirecardimage">
                                    <img src="Images/EasyVisaDestinations/jordan.jpg" />
                                </div>
                                <div className="newRentalsCarHirestorydetails">
                                    <h2>Jordan <span className="newRentalsCarHirejob-title">"Get your visa with TravelFlap Now!"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newRentalsCarHirecardwrapper">
                            <div className="card newRentalsCarHiremaindiv">
                                <div className="card-image newRentalsCarHirecardimage">
                                    <img src="Images/EasyVisaDestinations/Kenya.jpg " />
                                </div>
                                <div className="newRentalsCarHirestorydetails">
                                    <h2>Kenya <span className="newRentalsCarHirejob-title">"Get your visa with TravelFlap Now!"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newRentalsCarHirecardwrapper">
                            <div className="card newRentalsCarHiremaindiv">
                                <div className="card-image newRentalsCarHirecardimage">
                                    <img src="Images/TravelStories/river.jpg " />
                                </div>
                                <div className="newRentalsCarHirestorydetails">
                                    <h2>ladakh <span className="newRentalsCarHirejob-title">"Get your visa with TravelFlap Now!"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newRentalsCarHirecardwrapper">
                            <div className="card newRentalsCarHiremaindiv">
                                <div className="card-image newRentalsCarHirecardimage">
                                    <img src="Images/EasyVisaDestinations/madgascar.jpg" />
                                </div>
                                <div className="newRentalsCarHirestorydetails">
                                    <h2>Madgascar <span className="newRentalsCarHirejob-title">"Get your visa with TravelFlap Now!"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="newRentalsCarHirecardwrapper">
                            <div className="card newRentalsCarHiremaindiv">
                                <div className="card-image newRentalsCarHirecardimage">
                                    <img src="Images/EasyVisaDestinations/Seychelles.jpg" />
                                </div>
                                <div className="newRentalsCarHirestorydetails">
                                    <h2>Seychelles <span className="newRentalsCarHirejob-title">"Get your visa with TravelFlap Now!"
                                        <p>I love the experience with the travel Flap. I surely recommend it
                                            other for same
                                        </p></span>
                                        <Button variant="primary" style={{ marginLeft: "30%" }} >Read More</Button>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                {/* <div className='newhomeEasyVisaSlidercontentdiv'>
                        <h2>This is the random div for the content of the page</h2>
                    </div> */}

            </div>

        </div>

    )
}
