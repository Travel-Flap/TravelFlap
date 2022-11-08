import "./InnerPopularDestination2BestDealinCity.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "react-bootstrap";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const InnerPopularDestination2BestDealinCity = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <>
          <div className="innerPopularDestination2BestDealinCitymainDiv">
            <div className="innerPopularDestination2BestDealinCityheading">
                Want the Best Deal in CapeTown
            </div>
            <div className="innerPopularDestination2BestDealinCityconatiner">
                <div className="innerPopularDestination2BestDealinCityslider">

                <div className="exclusivedealsmaindivslider" style={{borderLeft:"2px solid #3380F2",paddingLeft:"10px"}}>
                            <Slider
                                arrows={false}
                                autoplay={true}
                                speed={4000}
                                autoplaySpeed={4000}
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
                {/* <div className="innerPopularDestination2BestDealinCityPayment">

                </div> */}
            </div>
          </div>
        </>
       
    );
}

