
import React, { useState } from 'react';
import "./StaycationTopCardSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import countrydata from '../../../../CountryData.json';
import { Link } from 'react-router-dom';
import SliderWrapper from "./SlickSliderStyle";

export const StaycationTopCardSLider = () => {
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
        autoplayspeed: 1000,
        speed: 1000,
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
        <div className='newStayNearYouContainer'>

            <div class="newStayNearYouMaincarddiv card text-bg-dark">
                {/* <img src="Images/NewHomeLayout/BackgroundImages/TopCitiesBackground.jpeg" class="card-img" alt="..." /> */}
                <div className='newStayNearYoubelowdiv'>

                </div>
                <div class="card-img-overlay ">
                    <div className='newStayNearYouMainheading'>

                        <div className='newStayNearYouHeadingouterdiv'>
                            <h2>Stay Near You</h2>

                            <div id='HotelsStayNearYouDropContainer'>
                                <select id="HotelsStayNearYouCountrydrop" onChange={(e) => handlecounty(e)}
                                    style={{ width: "100%", appearance: "none" }}>
                                    <option value="">Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                                <div id='HotelsStayNearYouIcondiv'>
                                    <FaAngleDown size={"1em"} id="HotelsStayNearYouicon" />
                                </div>
                            </div>

                        </div>

                        {/* <div className='newPopularbelowHeadingdiv'>
                            <h5 className='belowInternationalheading'>
                            <Link to="/internationalHotelssubpage" style={{textDecoration:"none",color:"#393939"}}> International </Link>
                            </h5>

                            <h5 className='belowDomesticHeading'>
                              <Link to="/domesticHotels" style={{textDecoration:"none",color:"#393939"}}> Domestic </Link>
                            </h5>
                        </div> */}

                        <div className='newStayNearYouSlidercontainer'>
                            {/* From here the next slider part starts */}

                            <div className='newStayNearYouSlickslidercontainer'>
                                <SliderWrapper>
                                    <Slider {...settings} className="multiCardSlider">
                                        <Link to="/hotelbookingpage">

                                            <div className="card-wrapper">
                                                <div className="card newStayNearYouDiv">
                                                    <div className="card-image newStayNearYouCardimage">
                                                        <img src="Images/NewHomeLayout/Hotels/AllCompImages/Rambagh Hotel.jpg" />
                                                    </div>
                                                    <div className="newStayNearYouDetails">
                                                        <h2> Rambagh Hotel
                                                            {/* <span> */}
                                                            <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Jaipur, Rajasthan</p>
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
                                        </Link>

                                        <div className="card-wrapper">
                                            <div className="card newStayNearYouDiv">
                                                <div className="card-image newStayNearYouCardimage">
                                                    <img src="Images/NewHomeLayout/Hotels/AllCompImages/HotelLalit.jpg" />
                                                </div>
                                                <div className="newStayNearYouDetails">
                                                    <h2> Jaipur,Rajasthan
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}>Tourist Visa</p>
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
                                            <div className="card newStayNearYouDiv">
                                                <div className="card-image newStayNearYouCardimage">
                                                    <img src="Images/NewHomeLayout/Hotels/AllCompImages/TajHotel.jpeg" />
                                                </div>
                                                <div className="newStayNearYouDetails">
                                                    <h2> Taj Hotel
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Jaipur, Rajasthan</p>
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
                                            <div className="card newStayNearYouDiv">
                                                <div className="card-image newStayNearYouCardimage">
                                                    <img src="Images/NewHomeLayout/Hotels/AllCompImages/HolidayInn.jpg" />
                                                </div>
                                                <div className="newStayNearYouDetails">
                                                    <h2> Hotel Holiday Inn
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Jaipur,Rajasthan </p>
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
                                            <div className="card newStayNearYouDiv">
                                                <div className="card-image newStayNearYouCardimage">
                                                    <img src="Images/NewHomeLayout/Hotels/AllCompImages/HotelLalit.jpg" />
                                                </div>
                                                <div className="newStayNearYouDetails">
                                                    <h2> Hotel Lalit
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Jaipur,Rajasthan  </p>
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
                                            <div className="card newStayNearYouDiv">
                                                <div className="card-image newStayNearYouCardimage">
                                                    <img src="Images/TopCities/landon.jpg" />
                                                </div>
                                                <div className="newStayNearYouDetails">
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
                                            <div className="card newStayNearYouDiv">
                                                <div className="card-image newStayNearYouCardimage">
                                                    <img src="Images/TopCities/denmark.jpg" />
                                                </div>
                                                <div className="newStayNearYouDetails">
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
                                            <div className="card newStayNearYouDiv">
                                                <div className="card-image newStayNearYouCardimage">
                                                    <img src="Images/TopCities/zambiaafrica.jpg" />
                                                </div>
                                                <div className="newStayNearYouDetails">
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
                                            <div className="card newStayNearYouDiv">
                                                <div className="card-image newStayNearYouCardimage">
                                                    <img src="Images/TopCities/swedan.jpg" />
                                                </div>
                                                <div className="newStayNearYouDetails">
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
