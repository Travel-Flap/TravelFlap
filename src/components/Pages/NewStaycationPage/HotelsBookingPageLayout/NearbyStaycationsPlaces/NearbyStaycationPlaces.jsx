
import React, { useState } from 'react';
import "./NaerbyStaycationPlaces.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from 'react-bootstrap';
import { MdLocationCity } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import countrydata from '../../../../../CountryData.json';
import { Link } from 'react-router-dom';
import SliderWrapper from "./SlickSliderStyle";

export const NearbyStaycationsPlaces = () => {
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
        <div className='newVarietyOfStaysContainer'>

            <div class="newVarietyOfStaysMaincardDiv card text-bg-dark">
                {/* <img src="Images/NewHomeLayout/BackgroundImages/TopCitiesBackground.jpeg" class="card-img" alt="..." /> */}
                <div className='newVarietyOfStaysBelowdiv'>

                </div>
                <div class="card-img-overlay ">
                    <div className='newVarietyOfStaysMainheading'>

                        <div className='newVarietyOfStaysHeadingouterdiv'>
                            <h2> Nearby Staycations Places to Stays</h2>

                            {/* <div id='StaycationssVarietyOfStaysDropContainer'>
                                <select id="StaycationssVarietyOfStaysCountrydrop" onChange={(e) => handlecounty(e)}
                                    style={{ width: "100%", appearance: "none" }}>
                                    <option value="">Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                                <div id='StaycationssStayNearYouIcondiv'>
                                    <FaAngleDown size={"1em"} id="StaycationssStayNearYouicon" />
                                </div>
                            </div> */}

                        </div>

                        <div className='varietyButtonsSelector'>
                            <div class="btn-group varietyButtonMainDiv" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" class="btn-check " name="btnradio" id="btnradio1" autocomplete="off" />
                                <label class="btn btn-outline-primary varietyButton1" for="btnradio">Mountain Staycations</label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                <label class="btn btn-outline-primary varietyButton2" for="btnradio"> Dessert Staycations </label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                <label class="btn btn-outline-primary varietyButton3" for="btnradio"> Camping Site </label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                                <label class="btn btn-outline-primary varietyButton4" for="btnradio"> Lake Front Staycations </label>

                                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                                <label class="btn btn-outline-primary varietyButton5" for="btnradio"> Beach Staycations </label>
                            </div>
                        </div>

                        {/* <div className='newPopularbelowHeadingdiv'>
                            <h5 className='belowInternationalheading'>
                            <Link to="/internationalStaycationsssubpage" style={{textDecoration:"none",color:"#393939"}}> International </Link>
                            </h5>

                            <h5 className='belowDomesticHeading'>
                              <Link to="/domesticStaycationss" style={{textDecoration:"none",color:"#393939"}}> Domestic </Link>
                            </h5>
                        </div> */}

                        <div className='newVarietyOfStaysSlidercontainer'>
                            {/* From here the next slider part starts */}

                            <div className='newVarietyOfStaysSlickslidercontainer'>
                                <SliderWrapper>
                                    <Slider {...settings} className="multiCardSlider">
                                        <div className="card-wrapper">
                                            <div className="card newVarietyOfStaysYouDiv">
                                                <div className="card-image newVarietyOfStaysCardimage">
                                                    <img src="/Images/NewHomeLayout/Hotels/AllCompImages/Vanandhaara.webp" />
                                                </div>
                                                <div className="newVarietyOfStaysDetails">
                                                    <h2> Vanandhaara
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Karnatak,India </p>
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
                                            <div className="card newVarietyOfStaysYouDiv">
                                                <div className="card-image newVarietyOfStaysCardimage">
                                                    <img src="/Images/NewHomeLayout/Hotels/AllCompImages/Mun ki reti.webp" />
                                                </div>
                                                <div className="newVarietyOfStaysDetails">
                                                    <h2> Mun Ki Reti
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Rishikesh,India </p>
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
                                            <div className="card newVarietyOfStaysYouDiv">
                                                <div className="card-image newVarietyOfStaysCardimage">
                                                    <img src="/Images/NewHomeLayout/Hotels/AllCompImages/Kintusgi.webp" />
                                                </div>
                                                <div className="newVarietyOfStaysDetails">
                                                    <h2> Kintusgi Staycations
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Seetla,India </p>
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
                                            <div className="card newVarietyOfStaysYouDiv">
                                                <div className="card-image newVarietyOfStaysCardimage">
                                                    <img src="/Images/NewHomeLayout/Hotels/AllCompImages/Aida Villa.webp" />
                                                </div>
                                                <div className="newVarietyOfStaysDetails">
                                                    <h2> Aida Villa
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Anachal Kerala, India </p>
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
                                            <div className="card newVarietyOfStaysYouDiv">
                                                <div className="card-image newVarietyOfStaysCardimage">
                                                    <img src="/Images/NewHomeLayout/Hotels/AllCompImages/HotelLalit.jpg" />
                                                </div>
                                                <div className="newVarietyOfStaysDetails">
                                                    <h2> Staycations Lalit
                                                        {/* <span> */}
                                                        <p style={{ fontSize: "13.5px", fontWeight: "100" }}> Jaipur,India </p>
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
                                            <div className="card newVarietyOfStaysYouDiv">
                                                <div className="card-image newVarietyOfStaysCardimage">
                                                    <img src="/Images/NewHomeLayout/Hotels/AllCompImages/Mun ki reti.webp" />
                                                </div>
                                                <div className="newVarietyOfStaysDetails">
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
                                            <div className="card newVarietyOfStaysYouDiv">
                                                <div className="card-image newVarietyOfStaysCardimage">
                                                    <img src="Images/TopCities/denmark.jpg" />
                                                </div>
                                                <div className="newVarietyOfStaysDetails">
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
                                            <div className="card newVarietyOfStaysYouDiv">
                                                <div className="card-image newVarietyOfStaysCardimage">
                                                    <img src="Images/TopCities/zambiaafrica.jpg" />
                                                </div>
                                                <div className="newVarietyOfStaysDetails">
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
                                            <div className="card newVarietyOfStaysYouDiv">
                                                <div className="card-image newVarietyOfStaysCardimage">
                                                    <img src="Images/TopCities/swedan.jpg" />
                                                </div>
                                                <div className="newVarietyOfStaysDetails">
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
        </div >
    )
}
