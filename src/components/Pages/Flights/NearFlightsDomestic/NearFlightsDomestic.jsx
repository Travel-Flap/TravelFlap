import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import "./NearFlightsDomestic.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import "./NearFlightsDomestic.css";


export const NearFlightsDomestic = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="exclusivemaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="exclusiveheadingcontainer" >
                <h2 className="domesticflightsheading">Domestic Flights Near You!</h2>
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
                                <img src="https://media.istockphoto.com/photos/growing-cities-in-india-picture-id971919418?b=1&k=20&m=971919418&s=170667a&w=0&h=SxEjN0W_zoWwRUA7BgxG3MKnAGPNtyXXeD_R0YBs2w4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Bangalore</h3>
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
                                <img src="https://images.unsplash.com/photo-1614591276564-7b3e69347a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFsJTIwbGFrZSUyMGthc2htaXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Kashmir</h3>
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
                                <img src="https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8a29sa2F0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Kolkata</h3>
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
                                <img src="https://media.istockphoto.com/photos/holy-town-varanasi-and-the-river-ganges-picture-id827065008?b=1&k=20&m=827065008&s=170667a&w=0&h=YjToqYIXDJUZvgVFjW8K_WSPAODbZhwRPNcO8SjGo14=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle"> Jaipur to Varanasi</h3>
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
                                <img src="https://images.unsplash.com/photo-1585483103289-39c79411fda9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbGhpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Delhi</h3>
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
                                <img src="https://images.unsplash.com/photo-1629200017674-ee2c5578e21a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRham1haGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Agra</h3>
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
                                <img src="https://images.unsplash.com/photo-1600112356915-089abb8fc71a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXlzb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-4 exclusivetextcard">
                                <div className="card-body exclusivecarddescmain">
                                    <h3 className="card-title exclusivecardtitle">Jaipur to Mysore</h3>
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

