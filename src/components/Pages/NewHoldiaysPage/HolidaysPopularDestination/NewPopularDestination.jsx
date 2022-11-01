
import React, { useState } from 'react';
import "./NewPopularDestination.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";
import {FaAngleDown} from "react-icons/fa";
import countrydata from '../../../../CountryData.json';


export const NewPopularDestination = () => {
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
        dotsclassName: "slick-dots line-indicator",
        infinite: true,
        autoplay: true,
        autoplayspeed: 1000,
        speed: 1000,
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
        <div className='newPopularDestinationsContainer'>
            <div class="newPopularDestinationMaincarddiv card text-bg-dark">
                <img src="Images/NewHomeLayout/BackgroundImages/TopCitiesBackground.jpeg" class="card-img" alt="..." />
                <div className='newPopularbelowdiv'>

                </div>
                <div class="card-img-overlay ">
                    <div className='newPopularDestinationsmainheading'>

                        <div className='newPopularDestinationsHeadingouterdiv'>
                            <h2>Top Cities To Explore</h2>

                            {/* <div className='newPopularDestinationsDropContainer'>
                                <select className="form-select newPopularDestinationsCountryDrop" onChange={(e) => handlecounty(e)}
                                    style={{ border: "3px solid #3380f2", width: "60%", appearance: "none" }}>
                                    <option value="" style={{ textAlign: "center" }}>Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                                <FaAngleDown style={{ fontSize: "15px" }} className="newPopularDestinationsicon" />
                            </div> */}

                   {/* <div className='newPopularDestinationsDropContainer'>
                        <select className="form-select newPopularDestinationsCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ border: "3px solid #3380f2", width: "60%",appearance:"none", fontSize:"15px" }}>
                            <option value="" style={{ textAlign: "center" }}>Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='newPopularDestinationsicondiv'>
                        <FaAngleDown style={{fontSize:"15px"}} size={"1em"} className="newPopularDestinationsicon" />
                        </div>
                    </div> */}

                    <select className="newPopularDestinationsDropContainer" onChange={(e) => handlecounty(e)} style={{backgroundColor:"white",textAlign:"left"}}>
                        <option style={{textAlign:"Left"}}>Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>

                        </div>

                        <div className='newPopularbelowHeadingdiv'>
                            <h5 className='belowInternationalheading'>
                                International
                            </h5>
                            <h5 className='belowDomesticHeading'>
                                Domestic
                            </h5>
                        </div>

                        <div className='newPopularDestinationsSlidercontainer'>
                            {/* From here the next slider part starts */}

                            <div className='newPopularDestinationsslickslidercontainer'>
                                <Slider {...settings} className="multiCardSlider">
                                    <div className="card-wrapper">
                                        <div className="card newPopularDestinationsdiv">
                                            <div className="card-image newPopularDestinationscardimage">
                                                <img src="Images/TopCities/abudhabhi.jpg" />
                                            </div>
                                            <div className="newPopularDestinationsdetails">
                                            <h2>Abu Dhabi <span className="newhomeEasyVisajob-title">
                                                <p style={{fontSize:"13.5px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                                <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                                                <p style={{marginTop:"-6%",fontSize:"13px",fontWeight:"100"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                                </span>
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
                                        <div className="card newPopularDestinationsdiv">
                                            <div className="card-image newPopularDestinationscardimage">
                                                <img src="Images/TopCities/africa1.jpg" />
                                            </div>
                                            <div className="newPopularDestinationsdetails">
                                            <h2>Epupa Falls <span className="newhomeEasyVisajob-title">
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                                            <p style={{marginTop:"-6%",fontSize:"13px",fontWeight:"100"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                            </span>
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
                                        <div className="card newPopularDestinationsdiv">
                                            <div className="card-image newPopularDestinationscardimage">
                                                <img src="Images/TopCities/america.jpg" />
                                            </div>
                                            <div className="newPopularDestinationsdetails">
                                            <h2>Las Vegas <span className="newhomeEasyVisajob-title">
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                                            <p style={{marginTop:"-6%",fontSize:"13px",fontWeight:"100"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                            </span>
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
                                        <div className="card newPopularDestinationsdiv">
                                            <div className="card-image newPopularDestinationscardimage">
                                                <img src="Images/TopCities/australia.jpg" />
                                            </div>
                                            <div className="newPopularDestinationsdetails">
                                            <h2>Sydney <span className="newhomeEasyVisajob-title">
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                                            <p style={{marginTop:"-6%",fontSize:"13px",fontWeight:"100"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                            </span>
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
                                        <div className="card newPopularDestinationsdiv">
                                            <div className="card-image newPopularDestinationscardimage">
                                                <img src="Images/TopCities/canada.jpg" />
                                            </div>
                                            <div className="newPopularDestinationsdetails">
                                            <h2>Toronto <span className="newhomeEasyVisajob-title">
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                                            <p style={{marginTop:"-6%",fontSize:"13px",fontWeight:"100"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                            </span>
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
                                        <div className="card newPopularDestinationsdiv">
                                            <div className="card-image newPopularDestinationscardimage">
                                                <img src="Images/TopCities/landon.jpg" />
                                            </div>
                                            <div className="newPopularDestinationsdetails">
                                            <h2>London <span className="newhomeEasyVisajob-title">
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                                            <p style={{marginTop:"-6%",fontSize:"13px",fontWeight:"100"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                            </span>
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
                                        <div className="card newPopularDestinationsdiv">
                                            <div className="card-image newPopularDestinationscardimage">
                                                <img src="Images/TopCities/denmark.jpg" />
                                            </div>
                                            <div className="newPopularDestinationsdetails">
                                            <h2>Aarhus <span className="newhomeEasyVisajob-title">
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                                            <p style={{marginTop:"-6%",fontSize:"13px",fontWeight:"100"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                            </span>
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
                                        <div className="card newPopularDestinationsdiv">
                                            <div className="card-image newPopularDestinationscardimage">
                                                <img src="Images/TopCities/zambiaafrica.jpg" />
                                            </div>
                                            <div className="newPopularDestinationsdetails">
                                            <h2>Zambia <span className="newhomeEasyVisajob-title">
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                                            <p style={{marginTop:"-6%",fontSize:"13px",fontWeight:"100"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                            </span>
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
                                        <div className="card newPopularDestinationsdiv">
                                            <div className="card-image newPopularDestinationscardimage">
                                                <img src="Images/TopCities/swedan.jpg" />
                                            </div>
                                            <div className="newPopularDestinationsdetails">
                                            <h2>Stockholm <span className="newhomeEasyVisajob-title">
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>4 Nights / 5 Days</p>
                                            <p style={{fontSize:"13.5px",fontWeight:"100"}}>All Inclusive Packages</p>
                                            <p style={{marginTop:"-6%",fontSize:"13px",fontWeight:"100"}}>Starts @ <h4 style={{fontWeight:"700",fontSize:"22px"}}>AED 3000</h4> </p>
                                            </span>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
