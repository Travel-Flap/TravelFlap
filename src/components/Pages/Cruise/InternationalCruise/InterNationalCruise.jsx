import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./InternationalCruise.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const InternationalCruise = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="internationalcruisemaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="internationalcruiseheadingcontainer" >
                <h2 className="internationalcruiseheading1">InterNational Destinations</h2>
                <div className="internationalcruiseheading2">
                    <div className="internationalcruiseheading">Asia</div>
                    <div className="internationalcruiseheading">Africa</div>
                    <div className="internationalcruiseheading">America</div>
                    <div className="internationalcruiseheading">Antarctica</div>
                    <div className="internationalcruiseheading">Australia</div>
                    <div className="internationalcruiseheading">Europe</div>
                </div>

                <div className="viewallinternationalcruisebuttons" >
                    <p className="viewallinternationalcruisetext">view deals</p>
                    <div className="internationalcruiseheadingbuttons">
                        {/* <div style={{ display: "flex" }}>
                            <ButtonBase
                                style={{
                                    width: 35,
                                    height: 35,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginRight: 10,
                                    marginTop:8,
                                    borderRadius: 7,
                                    boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
                                    cursor: "pointer",

                                }}
                                className="buttons internationalbutton1"
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
                                    marginTop:8,
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

            <div className="internationalslidercontainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
                    // speed={1000}
                    // autoplaySpeed={1000}
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


                    <div className="card-wrapper internaltioncruisecardmain">
                        <div className="card internationalcruisedestinationsdiv">
                            <div className="card-image internationalcruisecardimage">
                                <img src="https://lccintl.ezeeibe.com/cruisextranet/ITPL0071_Ship_Cruise_468.jpeg" />
                            </div>
                            <div className="internationalcruisedestinationsdetails">
                                <h2>Olivia <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>

                                </span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper internaltioncruisecardmain">
                        <div className="card internationalcruisedestinationsdiv">
                            <div className="card-image internationalcruisecardimage">
                                <img src="https://lccintl.ezeeibe.com/cruisextranet/ITPL0073_Ship_Cruise_277.jpeg" />
                            </div>
                            <div className="internationalcruisedestinationsdetails">
                                <h2>Amirt Maan <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p>
                                </span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper internaltioncruisecardmain">
                        <div className="card internationalcruisedestinationsdiv">
                            <div className="card-image internationalcruisecardimage">
                                <img src="https://lccintl.ezeeibe.com/cruisextranet/ITPL0073_Ship_Cruise_973.jpeg" />
                            </div>
                            <div className="internationalcruisedestinationsdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper internaltioncruisecardmain">
                        <div className="card internationalcruisedestinationsdiv">
                            <div className="card-image internationalcruisecardimage">
                                <img src="https://lccintl.ezeeibe.com/cruisextranet/ITPL0033_Ship_Cruise_570.jpeg" />
                            </div>
                            <div className="internationalcruisedestinationsdetails">
                                <h2>Aman Gupta <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper internaltioncruisecardmain">
                        <div className="card internationalcruisedestinationsdiv">
                            <div className="card-image internationalcruisecardimage">
                                <img src="https://lccintl.ezeeibe.com/cruisextranet/ITPL0073_Ship_Cruise_663.jpeg" />
                            </div>
                            <div className="internationalcruisedestinationsdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper internaltioncruisecardmain">
                        <div className="card internationalcruisedestinationsdiv">
                            <div className="card-image internationalcruisecardimage">
                                <img src="https://lccintl.ezeeibe.com/cruisextranet/ITPL0033_Ship_Cruise_570.jpeg" />
                            </div>
                            <div className="internationalcruisedestinationsdetails">
                                <h2>John Doe <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper internaltioncruisecardmain">
                        <div className="card internationalcruisedestinationsdiv">
                            <div className="card-image internationalcruisecardimage">
                                <img src="https://lccintl.ezeeibe.com/cruisextranet/ITPL0033_Ship_Cruise_570.jpeg" />
                            </div>
                            <div className="internationalcruisedestinationsdetails">
                                <h2>Yuvraj <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="card-wrapper internaltioncruisecardmain">
                        <div className="card internationalcruisedestinationsdiv">
                            <div className="card-image internationalcruisecardimage">
                                <img src="https://lccintl.ezeeibe.com/cruisextranet/ITPL0033_Ship_Cruise_570.jpeg" />
                            </div>
                            <div className="internationalcruisedestinationsdetails">
                                <h2>Charles Darvin <span className="job-title">"Best Holiday trip Ever"
                                    <p>I love the experience with the travel Flap. I surely recommend it
                                        other for same
                                    </p></span>
                                    <Button variant="primary">Read More</Button>
                                </h2>
                            </div>
                        </div>
                    </div>


                    {/* <div className="card mb-3 internationalouterdiv" >
                        <div className="row g-0 internationalimagetextcontainer">
                            <div className="col-md-8 internationalcardimage">
                                <img src="images/international destinations/banff.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 internationaltextcard">
                                <div className="card-body internationalcarddescmain">
                                    <h3 className="card-title internationalcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text internationalcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="internationalbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 internationalouterdiv" >
                        <div className="row g-0 internationalimagetextcontainer">
                            <div className="col-md-8 internationalcardimage">
                                <img src="images/international destinations/barcelona.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 internationaltextcard">
                                <div className="card-body internationalcarddescmain">
                                    <h3 className="card-title internationalcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text internationalcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="internationalbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 internationalouterdiv" >
                        <div className="row g-0 internationalimagetextcontainer">
                            <div className="col-md-8 internationalcardimage">
                                <img src="images/international destinations/bora bora.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 internationaltextcard">
                                <div className="card-body internationalcarddescmain">
                                    <h3 className="card-title internationalcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text internationalcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="internationalbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 internationalouterdiv" >
                        <div className="row g-0 internationalimagetextcontainer">
                            <div className="col-md-8 internationalcardimage">
                                <img src="images/international destinations/maui hawaii.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 internationaltextcard">
                                <div className="card-body internationalcarddescmain">
                                    <h3 className="card-title internationalcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text internationalcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="internationalbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 internationalouterdiv" >
                        <div className="row g-0 internationalimagetextcontainer">
                            <div className="col-md-8 internationalcardimage">
                                <img src="images/international destinations/paris.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 internationaltextcard">
                                <div className="card-body internationalcarddescmain">
                                    <h3 className="card-title internationalcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text internationalcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="internationalbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 internationalouterdiv" >
                        <div className="row g-0 internationalimagetextcontainer">
                            <div className="col-md-8 internationalcardimage">
                                <img src="images/international destinations/rome.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 internationaltextcard">
                                <div className="card-body internationalcarddescmain">
                                    <h3 className="card-title internationalcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text internationalcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="internationalbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 internationalouterdiv" >
                        <div className="row g-0 internationalimagetextcontainer">
                            <div className="col-md-8 internationalcardimage">
                                <img src="images/international destinations/tahiti.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 internationaltextcard">
                                <div className="card-body internationalcarddescmain">
                                    <h3 className="card-title internationalcardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                    <p className="card-text internationalcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="internationalbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* </div> */}



                </Slider>
            </div>
        </div>
    );
};

