import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./NewBestActivityAroundWorld.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const NewActivitiesAroundWorld = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="newActivityAroundWorldmaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="newActivityWorldHeadingcontainer" >
                <h2 className="newWorldActivityHeading1">Activity Around World</h2>
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

            <div className="newWorldActivitySliderContainer">
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


                    <div class="card mb-3 newWorldActivityouterdiv" >
                        <div class="row g-0 newWorldActivityImagetextcontainer">
                            <div class="col-md-8 newWorldActivityCardimage">
                                <img src="Images/AdventureSportsActivity/wakeboarding maldives.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newWorldActivityTextcard">
                                <div class="card-body newWorldActivityCarddescmain">
                                    <h3 class="card-title newWorldActivityCardtitle">WakeBoarding Maldives</h3>
                                    <p class="card-text newWorldActivityCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newWorldActivityButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newWorldActivityouterdiv" >
                        <div class="row g-0 newWorldActivityImagetextcontainer">
                            <div class="col-md-8 newWorldActivityCardimage">
                                <img src="Images/AdventureSportsActivity/scubadivinggoa.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newActivityAroundTextcard">
                                <div class="card-body newWorldActivityCarddescmain">
                                    <h3 class="card-title newWorldActivityCardtitle">Scuba Diving Goa</h3>
                                    <p class="card-text newWorldActivityCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newWorldActivityButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newWorldActivityouterdiv" >
                        <div class="row g-0 newWorldActivityImagetextcontainer">
                            <div class="col-md-8 newWorldActivityCardimage">
                                <img src="Images/AdventureSportsActivity/Paragliding2.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newActivityAroundTextcard">
                                <div class="card-body newWorldActivityCarddescmain">
                                    <h3 class="card-title newWorldActivityCardtitle">Paragliding</h3>
                                    <p class="card-text newWorldActivityCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newWorldActivityButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newWorldActivityouterdiv" >
                        <div class="row g-0 newWorldActivityImagetextcontainer">
                            <div class="col-md-8 newWorldActivityCardimage">
                                <img src="Images/AdventureSportsActivity/volcanotrekking indonesia.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newActivityAroundTextcard">
                                <div class="card-body newWorldActivityCarddescmain">
                                    <h3 class="card-title newWorldActivityCardtitle">Volcano trekking Indonesia</h3>
                                    <p class="card-text newWorldActivityCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newWorldActivityButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newWorldActivityouterdiv" >
                        <div class="row g-0 newWorldActivityImagetextcontainer">
                            <div class="col-md-8 newWorldActivityCardimage">
                                <img src="Images/AdventureSportsActivity/ZipLine.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newActivityAroundTextcard">
                                <div class="card-body newWorldActivityCarddescmain">
                                    <h3 class="card-title newWorldActivityCardtitle">XLine</h3>
                                    <p class="card-text newWorldActivityCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newWorldActivityButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newWorldActivityouterdiv" >
                        <div class="row g-0 newWorldActivityImagetextcontainer">
                            <div class="col-md-8 newWorldActivityCardimage">
                                <img src="Images/AdventureSportsActivity/DownhillBikeRide.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newActivityAroundTextcard">
                                <div class="card-body newWorldActivityCarddescmain">
                                    <h3 class="card-title newWorldActivityCardtitle">Downhill Bike Riding</h3>
                                    <p class="card-text newWorldActivityCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newWorldActivityButton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newWorldActivityouterdiv" >
                        <div class="row g-0 newWorldActivityImagetextcontainer">
                            <div class="col-md-8 newWorldActivityCardimage">
                                <img src="Images/AdventureSportsActivity/dunebashing dubai.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newActivityAroundTextcard">
                                <div class="card-body newWorldActivityCarddescmain">
                                    <h3 class="card-title newWorldActivityCardtitle">DuneBashing Dubai</h3>
                                    <p class="card-text newWorldActivityCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="newWorldActivityButton" variant="primary" >Book Now</Button>
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

