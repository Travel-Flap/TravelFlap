
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./DomesticDestinations.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import countrydata from '../../../../CountryData.json';


export const DomesticDestinations = () => {
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
        <div className="domesticmaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="domesticheadingcontainer" >
                <h2 className="domesticheading1">Domestic Destinations</h2>
                <div className="domesticheading2">
                    <select name='country' className="form-select countryhomecardselectdrop1" style={{ width: "56%" }} onChange={(e) => handlecounty(e)} aria-label="Default select example">
                        <option id='homecarddropbox' value="">Select Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option y value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>
                    {/* <div className="domesticheading">NorthIndia</div>
                    <div className="domesticheading">CentralIndia</div>
                    <div className="domesticheading">EastIndia</div>
                    <div className="domesticheading">WestIndia</div>
                    <div className="domesticheading">SouthIndia</div> */}
                </div>

                <div className="viewalldomesticbuttons" >
                    <p className="viewalldomestictext">view all deals</p>
                    <div className="experimentheadingbuttons">
                        {/* <div style={{ display: "flex" }}>
                            <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 10,
                                    borderRadius: 7,
                                    color:"rgb(9,32,75)",
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",

                                }}
                                className="buttons experimentbutton1"
                                onClick={() => sliderRef.current.slickPrev()}
                            >
                                <ArrowBackIos />
                            </ButtonBase>
                            <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 7,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                }}
                                className="buttons"
                                onClick={() => sliderRef.current.slickNext()}
                            >
                                <ArrowForwardIos />
                            </ButtonBase>
                        </div> */}
                        <div style={{ display: "flex" }}>
                            <FaAngleLeft size={"2.5em"}
                                onClick={() => sliderRef.current.slickPrev()}
                            />
                            {/* <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 10,
                                    borderRadius: 7,
                                    color:"blue",
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                    border:"2px solid black",
                                }}
                                className="buttons exclusivebutton1"
                                onClick={() => sliderRef.current.slickPrev()}
                            >
                                <ArrowBackIos />
                            </ButtonBase> */}
                            {/* <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 7,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",
                                }}
                                className="buttons"
                                onClick={() => sliderRef.current.slickNext()}
                            >
                                <ArrowForwardIos />
                            </ButtonBase> */}
                            <FaAngleRight size={"2.5em"}
                                onClick={() => sliderRef.current.slickNext()}
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="domesticslidercontainer">
                <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={1000}
                    // dots
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
                                // position: "absolute",
                                width: "100%",
                                top: "-10px",
                                opacity: 0,
                            }}
                        >
                            {i}
                        </div>
                    )}
                >
                    {/* <div className="experimentdivcontainer" style={{display:"flex",flexDirection:"row"}}> */}


                    <div className="card mb-3 domesticouterdivtop" >
                        <div className="row g-0 domesticimagetextcontainer">
                            <div className="col-md-8 domesticcardimage">
                                <img src="images/domestic destinations/agra.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 domestictextcard">
                                <div className="card-body domesticcarddescmain">
                                    <h3 className="card-title domesticcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text domesticcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="domesticbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 domesticouterdivtop" >
                        <div className="row g-0 domesticimagetextcontainer">
                            <div className="col-md-8 domesticcardimage">
                                <img src="images/domestic destinations/goa.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 domestictextcard">
                                <div className="card-body domesticcarddescmain">
                                    <h3 className="card-title domesticcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text domesticcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="domesticbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 domesticouterdivtop" >
                        <div className="row g-0 domesticimagetextcontainer">
                            <div className="col-md-8 domesticcardimage">
                                <img src="images/domestic destinations/jaipur.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 domestictextcard">
                                <div className="card-body domesticcarddescmain">
                                    <h3 className="card-title domesticcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text domesticcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="domesticbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 domesticouterdivtop" >
                        <div className="row g-0 domesticimagetextcontainer">
                            <div className="col-md-8 domesticcardimage">
                                <img src="images/domestic destinations/jammu and kashmir.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 domestictextcard">
                                <div className="card-body domesticcarddescmain">
                                    <h3 className="card-title domesticcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text domesticcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="domesticbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 domesticouterdivtop" >
                        <div className="row g-0 domesticimagetextcontainer">
                            <div className="col-md-8 domesticcardimage">
                                <img src="images/domestic destinations/kerela.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 domestictextcard">
                                <div className="card-body domesticcarddescmain">
                                    <h3 className="card-title domesticcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text domesticcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="domesticbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 domesticouterdivtop" >
                        <div className="row g-0 domesticimagetextcontainer">
                            <div className="col-md-8 domesticcardimage">
                                <img src="images/domestic destinations/ooty.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 domestictextcard">
                                <div className="card-body domesticcarddescmain">
                                    <h3 className="card-title domesticcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text domesticcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="domesticbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 domesticouterdivtop" >
                        <div className="row g-0 domesticimagetextcontainer">
                            <div className="col-md-8 domesticcardimage">
                                <img src="images/domestic destinations/shimla.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 domestictextcard">
                                <div className="card-body domesticcarddescmain">
                                    <h3 className="card-title domesticcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text domesticcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="domesticbutton" variant="primary" >Book Now</Button>
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

