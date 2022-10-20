import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./FlightsNearYou.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const FlightsNearYou = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="newFlightsNearYoumaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="newFlightsNearYouHeadingcontainer" >
                <h2 className="newFlightNeearYouHeading1">Flights Near You</h2>
                {/* <div className="internationalheading2">
                    <div className="internationalheading">Asia</div>
                    <div className="internationalheading">Africa</div>
                    <div className="internationalheading">America</div>
                    <div className="internationalheading">Antarctica</div>
                    <div className="internationalheading">Australia</div>
                    <div className="internationalheading">Europe</div>
                </div> */}

                {/* <div className="newviewallActivityAroundbuttons" >
                    <p className="newviewallActivityAroundtext">view deals</p>
                    <div className="newActivityAroundHeadingbuttons">

                        <div style={{ display: "flex" }}>
                            <FaAngleLeft size={"2.5em"}
                                onClick={() => sliderRef.current.slickPrev()}
                            />
                            <FaAngleRight size={"2.5em"}
                                onClick={() => sliderRef.current.slickNext()}
                            />
                        </div>
                    </div>

                </div> */}
            </div>

            <div className="newFlightsNearYouSliderContainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
                    speed={2000}
                    autoplaySpeed={2000}
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


                    <div class="card mb-3 newFlightsNearYououterdiv" >
                        <div class="row g-0 newFlightsNearYouImagetextcontainer">
                            <div class="col-md-8 newFlightsNearYouCardimage">
                                <img src="Images/ActivityAround/boat along amazon rain forest.jpg" class="img-fluid activityAroundimage rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 newFlightsNearYouTextcard">
                                <div class="card-body newFlightsNearYouCarddescmain">
                                    <h3 class="card-title newFlightsNearYouCardtitle">Dhaka</h3>
                                    <p class="card-text newFlightsNearYouCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newFlightsNearYouButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newFlightsNearYououterdiv" >
                        <div class="row g-0 newFlightsNearYouImagetextcontainer">
                            <div class="col-md-8 newFlightsNearYouCardimage">
                                <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid activityAroundimage rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 newFlightsNearYouTextcard">
                                <div class="card-body newFlightsNearYouCarddescmain">
                                    <h3 class="card-title newFlightsNearYouCardtitle">Scuba Diving Goa</h3>
                                    <p class="card-text newFlightsNearYouCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newFlightsNearYouButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newFlightsNearYououterdiv" >
                        <div class="row g-0 newFlightsNearYouImagetextcontainer">
                            <div class="col-md-8 newFlightsNearYouCardimage">
                                <img src="Images/ActivityAround/canoe safari botswana.jpg" class="img-fluid activityAroundimage rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 newFlightsNearYouTextcard">
                                <div class="card-body newFlightsNearYouCarddescmain">
                                    <h3 class="card-title newFlightsNearYouCardtitle">Paragliding</h3>
                                    <p class="card-text newFlightsNearYouCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newFlightsNearYouButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newFlightsNearYououterdiv" >
                        <div class="row g-0 newFlightsNearYouImagetextcontainer">
                            <div class="col-md-8 newFlightsNearYouCardimage">
                                <img src="Images/ActivityAround/Dune buggy ride dubai.jpg" class="img-fluid activityAroundimage rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 newFlightsNearYouTextcard">
                                <div class="card-body newFlightsNearYouCarddescmain">
                                    <h3 class="card-title newFlightsNearYouCardtitle">Volcano trekking Indonesia</h3>
                                    <p class="card-text newFlightsNearYouCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newFlightsNearYouButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newFlightsNearYououterdiv" >
                        <div class="row g-0 newFlightsNearYouImagetextcontainer">
                            <div class="col-md-8 newFlightsNearYouCardimage">
                                <img src="Images/ActivityAround/glacier hunt in greenland.jpg" class="img-fluid activityAroundimage rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 newFlightsNearYouTextcard">
                                <div class="card-body newFlightsNearYouCarddescmain">
                                    <h3 class="card-title newFlightsNearYouCardtitle">XLine</h3>
                                    <p class="card-text newFlightsNearYouCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newFlightsNearYouButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newFlightsNearYououterdiv" >
                        <div class="row g-0 newFlightsNearYouImagetextcontainer">
                            <div class="col-md-8 newFlightsNearYouCardimage">
                                <img src="Images/ActivityAround/machu pichu climb.jpg" class="img-fluid activityAroundimage rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 newFlightsNearYouTextcard">
                                <div class="card-body newFlightsNearYouCarddescmain">
                                    <h3 class="card-title newFlightsNearYouCardtitle">Downhill Bike Riding</h3>
                                    <p class="card-text newFlightsNearYouCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newFlightsNearYouButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newFlightsNearYououterdiv" >
                        <div class="row g-0 newFlightsNearYouImagetextcontainer">
                            <div class="col-md-8 newFlightsNearYouCardimage">
                                <img src="Images/ActivityAround/mountain hiking usa.jpg" class="img-fluid activityAroundimage rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 newFlightsNearYouTextcard">
                                <div class="card-body newFlightsNearYouCarddescmain">
                                    <h3 class="card-title newFlightsNearYouCardtitle">DuneBashing Dubai</h3>
                                    <p class="card-text newFlightsNearYouCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newFlightsNearYouButton" variant="primary" >Book Now</Button>
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

