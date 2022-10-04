import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./PopularcarhireDestinations.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import countrydata from '../../../../CountryData.json';

export const PopularcarHireDestinations = () => {
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
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
        <div className="popularcarhiremaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="popularcarhireheadingcontainer">
                <h2 className="popularcarhireheading1">Popular CarHire Destinations</h2>
                <div className="popularcarhireheading2">
                    <select name='country' className="form-select countryhomecardselectdrop1" id='internationalDestinationscountryoption' onChange={(e) => handlecounty(e)} aria-label="Default select example">
                        <option id='homecarddropbox' value="">Select Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option y value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>
                   
                </div>

                <div className="viewallpopularcarhirebuttons" >
                    <p className="viewallpopularcarhiretext">view deals</p>
                    <div className="popularcarhireheadingbuttons">
                       
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

            <div className="popularcarhireslidercontainer">
                <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={1000}
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
                    {/* <div className="experimentdivcontainer" style={{display:"flex",flexDirection:"row"}}/> */}


                    <div className="card mb-3 popularcarhireouterdiv" >
                        <div className="row g-0 popularcarhireimagetextcontainer">
                            <div className="col-md-8 popularcarhirecardimage">
                                <img src="Images/country images/dubai2.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 popularcarhiretextcard">
                                <div className="card-body popularcardestinationcarddescmain">
                                    <h3 className="card-title popularcardestinationcardtitle">Car Hire in Dubai.</h3>
                                    <p className="card-text popularcardestinationcard_desc">From $100*.</p>
                                    <Button className="popularcarhiredestinationbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 popularcarhireouterdiv" >
                        <div className="row g-0 popularcarhireimagetextcontainer">
                            <div className="col-md-8 popularcarhirecardimage">
                                <img src="Images/country images/europe 2.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 popularcarhiretextcard">
                                <div className="card-body popularcardestinationcarddescmain">
                                    <h3 className="card-title popularcardestinationcardtitle">Car Hire in Europe.</h3>
                                    <p className="card-text popularcardestinationcard_desc">From $100*.</p>
                                    <Button className="popularcarhiredestinationbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 popularcarhireouterdiv" >
                        <div className="row g-0 popularcarhireimagetextcontainer">
                            <div className="col-md-8 popularcarhirecardimage">
                                <img src="Images/country images/greece 2.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 popularcarhiretextcard">
                                <div className="card-body popularcardestinationcarddescmain">
                                    <h3 className="card-title popularcardestinationcardtitle">Car Hire in Greece.</h3>
                                    <p className="card-text popularcardestinationcard_desc">From $100*.</p>
                                    <Button className="popularcarhiredestinationbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 popularcarhireouterdiv" >
                        <div className="row g-0 popularcarhireimagetextcontainer">
                            <div className="col-md-8 popularcarhirecardimage">
                                <img src="Images/country images/italy.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 popularcarhiretextcard">
                                <div className="card-body popularcardestinationcarddescmain">
                                    <h3 className="card-title popularcardestinationcardtitle">Car Hire in Italy</h3>
                                    <p className="card-text popularcardestinationcard_desc">From $100*.</p>
                                    <Button className="popularcarhiredestinationbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 popularcarhireouterdiv" >
                        <div className="row g-0 popularcarhireimagetextcontainer">
                            <div className="col-md-8 popularcarhirecardimage">
                                <img src="Images/international destinations/paris.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 popularcarhiretextcard">
                                <div className="card-body popularcardestinationcarddescmain">
                                    <h3 className="card-title popularcardestinationcardtitle">Car Hire in Paris.</h3>
                                    <p className="card-text popularcardestinationcard_desc">From $100*.</p>
                                    <Button className="popularcarhiredestinationbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 popularcarhireouterdiv" >
                        <div className="row g-0 popularcarhireimagetextcontainer">
                            <div className="col-md-8 popularcarhirecardimage">
                                <img src="Images/international destinations/rome.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 popularcarhiretextcard">
                                <div className="card-body popularcardestinationcarddescmain">
                                    <h3 className="card-title popularcardestinationcardtitle">Car Hire in Rome.</h3>
                                    <p className="card-text popularcardestinationcard_desc">From $100*.</p>
                                    <Button className="popularcarhiredestinationbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 popularcarhireouterdiv" >
                        <div className="row g-0 popularcarhireimagetextcontainer">
                            <div className="col-md-8 popularcarhirecardimage">
                                <img src="Images/international destinations/tahiti.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 popularcarhiretextcard">
                                <div className="card-body popularcardestinationcarddescmain">
                                    <h3 className="card-title popularcardestinationcardtitle">Car Hire in Tahiti.</h3>
                                    <p className="card-text popularcardestinationcard_desc">From $100*.</p>
                                    <Button className="popularcarhiredestinationbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}



                </Slider>
            </div>
        </div>
    );
};

