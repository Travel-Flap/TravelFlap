import React, { useState } from 'react';
import "./NewHomeTopCitites.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";
import {FaAngleRight} from "react-icons/fa";
import countrydata from '../../../../CountryData.json';

export const NewHomeTopCitites = () => {
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
    const settings = {
        // dots: true,
        // dotsclassName: "slick-dots line-indicator",
        // infinite: true,
        // autoplay: true,
        // autoplayspeed:1000,
        // speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: false,
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
        <div>
            <div class="newhomeTopCititesMaincarddiv card text-bg-dark">
                <img src="Images/NewHomeLayout/BackgroundImages/TopCitiesBackground.jpeg" class="card-img" alt="..." />
                <div class="card-img-overlay">
                    <div className='newhomeTopCitiesmainheading'>

                        <div className='topCititesHeadingouterdiv'>
                            <h2>Top Cities To Explore</h2>
                            
                            {/* <div className='newHomeTopCititesDropContainer'>
                        <select className="form-select newTopCititesCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ border: "3px solid #3380f2", width: "60%",appearance:"none" }}>
                            <option value="" style={{ textAlign: "center" }}>Select Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <FaAngleRight style={{fontSize:"15px"}} className="newhometopcitiesicon"/>
                    </div> */}


                   <div className='newHomeTopCitiesDropContainer'>
                        <select className="form-select newHomeTopCitiesCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ border: "3px solid #3380f2", width: "60%",appearance:"none" }}>
                            <option value="" style={{ textAlign: "center" }}>Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='newTopCitiesicondiv'>
                        <FaAngleRight style={{fontSize:"15px"}} size={"1em"} className="topcitiesicon" />
                        </div>
                    </div>

                            {/* <div className='newHomeTopCititesDropContainer'>
                                <select className="form-select newTopCititesCountryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
                                    style={{ border: "3px solid #3380f2", width: "60%",fontWeight:"700", }}>
                                    <option value="" style={{ textAlign: "center" }}>Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                                <FaAngleRight style={{fontSize:"15px"}} className="newhometopcitiesicon" />
                            </div> */}
                        </div>


                        <div className='newhomeTopCititesSlidercontainer'>
                            {/* From here the next slider part starts */}

                            <div className='newhomeTopCitiesslickslidercontainer'>
                                <Slider {...settings} className="multiCardSlider">
                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/abudhabhi.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                {/* <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same
                                                </p> */}
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>

                                        {/* <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Abu Dhabi</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div> */}
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/africa1.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                {/* <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same
                                                </p> */}
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        {/* <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Epupa Falls</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div> */}
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/america.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                {/* <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same.
                                                </p> */}
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        {/* <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Las Vegas</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div> */}
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/australia.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                {/* <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same.
                                                </p> */}
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        {/* <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Sydney</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div> */}
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/canada.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                {/* <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same.
                                                </p> */}
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        {/* <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Toronto</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div> */}
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/landon.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                {/* <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same.
                                                </p> */}
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>
                                        {/* <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>London</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div> */}
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/denmark.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                {/* <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same.
                                                </p> */}
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>

                                        {/* <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Aarhus</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div> */}
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/zambiaafrica.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                {/* <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same.
                                                </p> */}
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>

                                        {/* <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Zambia</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div> */}
                                    </div>

                                    <div className="card-wrapper">
                                        <div className="card topcitiesnewHomePagediv">
                                            <div className="card-image topcitiesnewHomePagecardimage">
                                                <img src="Images/TopCities/swedan.jpg" />
                                            </div>
                                            <div className="topcitiesnewHomePagedetails">
                                                {/* <p>I love the experience with the travel Flap. I surely recommend it
                                                    other for same.
                                                </p> */}
                                                <Button variant="primary">Explore</Button>
                                            </div>
                                        </div>

                                        {/* <div className='newhomeTopCitiesBottomTexts'>
                                            <h2>Stockholm</h2>
                                            <p className="job-title">"Best Holiday trip Ever" </p>
                                        </div> */}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
