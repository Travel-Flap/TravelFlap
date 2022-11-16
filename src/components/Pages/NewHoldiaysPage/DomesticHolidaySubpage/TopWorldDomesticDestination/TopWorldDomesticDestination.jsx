import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useEffect } from "react";
import "./TopWorldDomesticDestination.css";
import { Button } from "react-bootstrap"

export const DomesticSubpageWorldTop = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="newDomesticWorldTopmaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="newDomesticWorldTopHeadingcontainer" >
                <h2 className="newDomesticWorldTopHeading1">Top of the world Domestic Destinations</h2>
            </div>

            <div className="newDomesticWorldTopSliderContainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
                    rows={2}
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


                    <div class="card mb-3 newDomesticWorldTopOuterdiv" >
                        <div class="row g-0 newDomesticWorldTopImagetextcontainer">
                            <div class="col-md-8 newDomesticWorldTopCardimage">
                                <img src="Images/ActivityAround/boat along amazon rain forest.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 newDomesticWorldTopTextcard">
                                <div class="card-body newDomesticWorldTopCarddescmain">
                                    <h3 class="card-title newDomesticWorldTopCardtitle">Jaipur</h3>
                                    <p class="card-text newDomesticWorldTopCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="newDomesticWorldTopButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticWorldTopOuterdiv" >
                        <div class="row g-0 newDomesticWorldTopImagetextcontainer">
                            <div class="col-md-8 newDomesticWorldTopCardimage">
                                <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 newDomesticWorldTopTextcard">
                                <div class="card-body newDomesticWorldTopCarddescmain">
                                    <h3 class="card-title newDomesticWorldTopCardtitle">Scuba Diving Goa</h3>
                                    <p class="card-text newDomesticWorldTopCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="newDomesticWorldTopButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticWorldTopOuterdiv" >
                        <div class="row g-0 newDomesticWorldTopImagetextcontainer">
                            <div class="col-md-8 newDomesticWorldTopCardimage">
                                <img src="Images/ActivityAround/canoe safari botswana.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 newDomesticWorldTopTextcard">
                                <div class="card-body newDomesticWorldTopCarddescmain">
                                    <h3 class="card-title newDomesticWorldTopCardtitle">Paragliding</h3>
                                    <p class="card-text newDomesticWorldTopCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="newDomesticWorldTopButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticWorldTopOuterdiv" >
                        <div class="row g-0 newDomesticWorldTopImagetextcontainer">
                            <div class="col-md-8 newDomesticWorldTopCardimage">
                                <img src="Images/ActivityAround/Dune buggy ride dubai.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 newDomesticWorldTopTextcard">
                                <div class="card-body newDomesticWorldTopCarddescmain">
                                    <h3 class="card-title newDomesticWorldTopCardtitle">Volcano trekking Indonesia</h3>
                                    <p class="card-text newDomesticWorldTopCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="newDomesticWorldTopButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticWorldTopOuterdiv" >
                        <div class="row g-0 newDomesticWorldTopImagetextcontainer">
                            <div class="col-md-8 newDomesticWorldTopCardimage">
                                <img src="Images/ActivityAround/glacier hunt in greenland.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 newDomesticWorldTopTextcard">
                                <div class="card-body newDomesticWorldTopCarddescmain">
                                    <h3 class="card-title newDomesticWorldTopCardtitle">XLine</h3>
                                    <p class="card-text newDomesticWorldTopCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="newDomesticWorldTopButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticWorldTopOuterdiv" >
                        <div class="row g-0 newDomesticWorldTopImagetextcontainer">
                            <div class="col-md-8 newDomesticWorldTopCardimage">
                                <img src="Images/ActivityAround/machu pichu climb.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 newDomesticWorldTopTextcard">
                                <div class="card-body newDomesticWorldTopCarddescmain">
                                    <h3 class="card-title newDomesticWorldTopCardtitle">Downhill Bike Riding</h3>
                                    <p class="card-text newDomesticWorldTopCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="newDomesticWorldTopButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticWorldTopOuterdiv" >
                        <div class="row g-0 newDomesticWorldTopImagetextcontainer">
                            <div class="col-md-8 newDomesticWorldTopCardimage">
                                <img src="Images/ActivityAround/mountain hiking usa.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 newDomesticWorldTopTextcard">
                                <div class="card-body newDomesticWorldTopCarddescmain">
                                    <h3 class="card-title newDomesticWorldTopCardtitle">DuneBashing Dubai</h3>
                                    <p class="card-text newDomesticWorldTopCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="newDomesticWorldTopButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticWorldTopOuterdiv" >
                        <div class="row g-0 newDomesticWorldTopImagetextcontainer">
                            <div class="col-md-8 newDomesticWorldTopCardimage">
                                <img src="Images/ActivityAround/boat along amazon rain forest.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 newDomesticWorldTopTextcard">
                                <div class="card-body newDomesticWorldTopCarddescmain">
                                    <h3 class="card-title newDomesticWorldTopCardtitle">WakeBoarding Maldives</h3>
                                    <p class="card-text newDomesticWorldTopCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="newDomesticWorldTopButton" variant="primary" >Book Now</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticWorldTopOuterdiv" >
                        <div class="row g-0 newDomesticWorldTopImagetextcontainer">
                            <div class="col-md-8 newDomesticWorldTopCardimage">
                                <img src="Images/ActivityAround/boat racing norway.jpg" class="img-fluid activityAroundimage" alt="domestic world topImage" />
                            </div>
                            <div class="col-md-4 newDomesticWorldTopTextcard">
                                <div class="card-body newDomesticWorldTopCarddescmain">
                                    <h3 class="card-title newDomesticWorldTopCardtitle">Scuba Diving Goa</h3>
                                    <p class="card-text newDomesticWorldTopCard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <div className="domesticWorldButtonDiv">
                                        <h5>Starting from
                                            <span>$5500</span>
                                        </h5>
                                        <Button className="newDomesticWorldTopButton" variant="primary" >Book Now</Button>
                                    </div>
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

