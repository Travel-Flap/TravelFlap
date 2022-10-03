import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./NearFlightsInternational.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const NearFlightsInternational = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="exclusivemaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="exclusiveheadingcontainer" >
                <h2 className="internationalflightheading">Flights Near You!</h2>
                {/* <div className="exclusiveheading2">
                    <div className="exclusiveheading">Deals</div>
                    <div className="exclusiveheading">Flights</div>
                    <div className="exclusiveheading">Hotels</div>
                    <div className="exclusiveheading">Holidays</div>
                    <div className="exclusiveheading">Cruise</div>
                </div> */}
                <div className="viewallexclusivebuttons" >
                    {/* <p className="viewallexclusivetext">view all flights</p> */}
                    <div className="nearflightsheadingbuttons">
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

            <div className="exclusivemaindivslider" >
                <Slider
                    arrows={false}
                    // autoplay={true}
                    // speed={1000}
                    // autoplaySpeed={2000}
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
                    {/* 
                    <div className="exclusivedealmaincontainer"> */}
                    <div className="card mb-4 exclusiveouterdivtop" >
                        <div className="row g-0 exclusiveimagetextcontainer">
                            <div className="col-md-8 exclusivecardimage">
                                <img src="https://media.istockphoto.com/photos/dubai-marina-city-skyline-in-the-united-arab-emirates-picture-id827901014?b=1&k=20&m=827901014&s=170667a&w=0&h=5W1FeFB_rbs2lUsmT6hx1NKo8rQW-RqmudI745TlAS8=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Dubai</h3>
                                    <p className="card-text exclusivecard_desc">22 October 2022 - 29 November 2022 - Round Trip</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                    <Button className="exclusivebutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 exclusiveouterdivtop" >
                        <div className="row g-0 exclusiveimagetextcontainer">
                            <div className="col-md-8 exclusivecardimage">
                                <img src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3dpdHplcmxhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Switzerland</h3>
                                    <p className="card-text exclusivecard_desc">22 October 2022 - 29 November 2022 - Round Trip</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                    <Button className="exclusivebutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 exclusiveouterdivtop" >
                        <div className="row g-0 exclusiveimagetextcontainer">
                            <div className="col-md-8 exclusivecardimage">
                                <img src="https://media.istockphoto.com/photos/luxor-temple-famous-landmark-of-egypt-first-pylon-view-picture-id1355995823?b=1&k=20&m=1355995823&s=170667a&w=0&h=dP45ajO1YfQJz4z0K5Hf2K08q0Uvlxn0W-aZxhKn3ow=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Ezypt</h3>
                                    <p className="card-text exclusivecard_desc">22 October 2022 - 29 November 2022 - Round Trip</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                    <Button className="exclusivebutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 exclusiveouterdivtop" >
                        <div className="row g-0 exclusiveimagetextcontainer">
                            <div className="col-md-8 exclusivecardimage">
                                <img src="https://media.istockphoto.com/photos/eiffel-tower-in-paris-france-picture-id924891460?b=1&k=20&m=924891460&s=170667a&w=0&h=jo4dxl8sqUnYyVVxfVoVKbZPLmpcxuH3JABmc0r5-4Q=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle"> Jaipur to France</h3>
                                    <p className="card-text exclusivecard_desc">22 October 2022 - 29 November 2022 - Round Trip</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                    <Button className="exclusivebutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 exclusiveouterdivtop" >
                        <div className="row g-0 exclusiveimagetextcontainer">
                            <div className="col-md-8 exclusivecardimage">
                                <img src="https://images.unsplash.com/photo-1516438305764-bd2d770f94bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlzcmFlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to israel</h3>
                                    <p className="card-text exclusivecard_desc">22 October 2022 - 29 November 2022 - Round Trip</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                    <Button className="exclusivebutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 exclusiveouterdivtop" >
                        <div className="row g-0 exclusiveimagetextcontainer">
                            <div className="col-md-8 exclusivecardimage">
                                <img src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to London</h3>
                                    <p className="card-text exclusivecard_desc">22 October 2022 - 29 November 2022 - Round Trip</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                    <Button className="exclusivebutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3 exclusiveouterdivtop" >
                        <div className="row g-0 exclusiveimagetextcontainer">
                            <div className="col-md-8 exclusivecardimage">
                                <img src="https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGl0YWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Italy</h3>
                                    <p className="card-text exclusivecard_desc">22 October 2022 - 29 November 2022 - Round Trip</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                    <Button className="exclusivebutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                    {/* </div> */}


                </Slider>
            </div>
        </div>
    );
};

