import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./NewHomeExclusiveDeals.css";
import backsideImage from "./backsideImage.jpeg";
import frontsideImage from "./frontsideImage.jpeg";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const NewHomeExclusiveDeals = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <>
            <div className="exclusivemaindiv" >

                <div className="exclusivedealsheadingcontainer">
                    <h2 className="exclusivedealsheading1">Offers</h2>
                    <div className="exclusivedealsheading2">
                        <h3>Flights</h3>
                        <h3>Hotels</h3>
                        <h3>Holidays</h3>
                        <h3>Cruise</h3>
                        <h3>Rentals</h3>
                        <h3>Staycations</h3>

                        {/* <select class="exclusivedealsselectoptions">
                        <option>Flights</option>
                        <option>Hotels</option>
                        <option>Holidays</option>
                        <option>Cruise</option>
                        <option>Rentals</option>
                        <option>Staycations</option>
                    </select>
                    <select class="exclusivedealsselectoptions">
                        <option>Offers</option>
                        <option>Hotels</option>
                        <option>Holidays</option>
                        <option>Cruise</option>
                        <option>Rentals</option>
                        <option>Staycations</option>
                    </select> */}
                    </div>
                    <div className="viewallexclusivebuttons" >
                        {/* <p className="viewallexclusivetext">view all deals</p> */}
                        <div className="exclusivedealsheadingbuttons">
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

                <div className="exclusivedealsconatinerdiv" >
                    <div className="exclusivedealsimageheading">
                        <img className="exclusivedealsimagebackside" src={backsideImage} />
                        <img className="exclusivedealsimagefrontside" src={frontsideImage} />
                        <div className="exclusivedealsheadings">
                            <p className="exclusiveheadingsboldheadings">Exclusive <br /> Deals</p>
                            <p>Most Visited and Used</p>
                        </div>

                    </div>

                    <div className="exclusivedealssliderdata">
                        <div className="exclusivedealsmaindivslider" >
                            <Slider
                                arrows={false}
                                // autoplay={true}
                                // speed={1000}
                                // autoplaySpeed={3000}
                                dots={true}
                                dotsclassName="slick-dots line-indicator"
                                ref={sliderRef}
                                slidesToShow={2}
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


                                <div className="card mb-4 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage1.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage2.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage3.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage4.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage5.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage6.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card mb-3 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage7.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage7.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage7.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-3 exclusiveouterdivtop" >
                                    <div className="row g-0 exclusiveimagetextcontainer">
                                        <div className="col-md-8 exclusivecardimage">
                                            <img src="Images/Cruise/ExclusiveCruise/CruiseImage7.jpg" class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-4 exclusivedealstextcard">
                                            <div className="card-body exclusivecarddescmain">
                                                <h3 className="card-title exclusivedealscardtitle">Save Flat Rs. 4500 on your next Holiday.</h3>
                                                <p className="card-text exclusivedealscard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                                <Button className="exclusivedealsbutton" variant="primary" >Book Now</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* </div> */}
                                {/* </div> */}


                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

