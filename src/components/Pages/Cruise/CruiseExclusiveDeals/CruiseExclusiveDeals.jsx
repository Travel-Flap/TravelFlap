import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./CruiseExclusiveDeals.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const ExclusiveDeals = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="exclusivecruisemaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="exclusivecruiseheadingcontainer" >
                <h2 className="exclusivecruiseheading1">Exclusive Deals</h2>
                <div className="exclusivecruiseheading2">
                    {/* <div className="exclusiveheading">Deals</div>
                    <div className="exclusiveheading">Flights</div>
                    <div className="exclusiveheading">Hotels</div>
                    <div className="exclusiveheading">Holidays</div>
                    <div className="exclusiveheading">Cruise</div> */}
                </div>
                <div className="viewallexclusivecruisebuttons" >
                    <p className="viewallexclusivecruisetext">view all deals</p>
                    <div className="exclusivecruiseheadingbuttons">
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
                                className="buttons exclusivecruisebutton1"
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

            <div className="exclusivecruisemaindivslider" >
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
                    rows={2}
                slidesPerRow={1}
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
                

                <div className="card mb-4 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage1.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage2.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage3.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage4.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage5.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage6.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage7.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage7.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage7.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3 exclusivecruiseouterdivtop" >
                    <div className="row g-0 exclusivecruiseimagetextcontainer">
                        <div className="col-md-8 exclusivecruisecardimage">
                            <img src="images/Cruise/ExclusiveCruise/CruiseImage7.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-4 exclusivecruisetextcard">
                            <div className="card-body exclusivecruisecarddescmain">
                                <h3 className="card-title exclusivecruisecardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                <p className="card-text exclusivecruisecard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                <Button className="exclusivecruisebutton" variant="primary" >Book Now</Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* </div> */}
                {/* </div> */}


            </Slider>
        </div>
        </div >
    );
};

