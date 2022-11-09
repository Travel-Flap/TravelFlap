
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect } from "react";
import "./InternationalHoneymoonDestination.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const InternationalHoneyMoonDestination = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="newDomesticFamilyDestinationmaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="newDomesticFamilyDestinationHeadingcontainer" >
                <h2 className="newDomesticFamilyDestinationHeading1">International Honeymoon Destinations</h2>
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

            <div className="newDomesticFamilyDestinationSliderContainer">
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


                    {/* <div class="card mb-3 newDomesticFamilyDestinationOuterdiv" >
                            <div class="row g-0 newDomesticFamilyDestinationImagetextcontainer">
                                <div class="col-md-8 newDomesticFamilyDestinationCardimage">
                                    <img src="Images/NewHomeLayout/NewStaycations/budget/Vietnam.jpg" class="img-fluid activityAroundimage" alt="..." />
                                </div>
                                <div class="col-md-4 newDomesticFamilyDestinationTextcard">
                                    <div class="card-body newDomesticFamilyDestinationCarddescmain">
                                        <div className="contentButtoninnerdiv">
                                            <h3 class="card-title newDomesticFamilyDestinationCardtitle">Ooty, India</h3>
                                            <button>See more</button>
                                        </div>
                                        <p class="card-text newDomesticFamilyDestionationCard_desc">Starting From
                                            <span>$5500</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    <div class="card mb-3 newDomesticFamilyDestinationOuterdiv" >
                        <div class="row g-0 newDomesticFamilyDestinationImagetextcontainer">
                            <div class="col-md-8 newDomesticFamilyDestinationCardimage">
                                <img src="Images/NewHomeLayout/NewStaycations/budget/Vietnam.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newDomesticFamilyDestinationTextcard">
                                <div class="card-body newDomesticFamilyDestinationCarddescmain">
                                    <div className="contentButtoninnerdiv">
                                        <h3 class="card-title newDomesticFamilyDestinationCardtitle">Ooty, India</h3>
                                    </div>
                                    <p class="card-text newDomesticFamilyDestionationCard_desc">Starting From
                                        <span>$5500</span>
                                        <button>See more</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticFamilyDestinationOuterdiv" >
                        <div class="row g-0 newDomesticFamilyDestinationImagetextcontainer">
                            <div class="col-md-8 newDomesticFamilyDestinationCardimage">
                                <img src="Images/NewHomeLayout/NewStaycations/budget/El Salvador.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newDomesticFamilyDestinationTextcard">
                                <div class="card-body newDomesticFamilyDestinationCarddescmain">
                                    <div className="contentButtoninnerdiv">
                                        <h3 class="card-title newDomesticFamilyDestinationCardtitle">Ooty, India</h3>
                                    </div>
                                    <p class="card-text newDomesticFamilyDestionationCard_desc">Starting From
                                        <span>$5500</span>
                                        <button>See more</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticFamilyDestinationOuterdiv" >
                        <div class="row g-0 newDomesticFamilyDestinationImagetextcontainer">
                            <div class="col-md-8 newDomesticFamilyDestinationCardimage">
                                <img src="Images/NewHomeLayout/NewStaycations/budget/Guatemala.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newDomesticFamilyDestinationTextcard">
                                <div class="card-body newDomesticFamilyDestinationCarddescmain">
                                    <div className="contentButtoninnerdiv">
                                        <h3 class="card-title newDomesticFamilyDestinationCardtitle">Ooty, India</h3>
                                    </div>
                                    <p class="card-text newDomesticFamilyDestionationCard_desc">Starting From
                                        <span>$5500</span>
                                        <button>See more</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticFamilyDestinationOuterdiv" >
                        <div class="row g-0 newDomesticFamilyDestinationImagetextcontainer">
                            <div class="col-md-8 newDomesticFamilyDestinationCardimage">
                                <img src="Images/NewHomeLayout/NewStaycations/budget/Nicaragua.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newDomesticFamilyDestinationTextcard">
                                <div class="card-body newDomesticFamilyDestinationCarddescmain">
                                    <div className="contentButtoninnerdiv">
                                        <h3 class="card-title newDomesticFamilyDestinationCardtitle">Ooty, India</h3>
                                    </div>
                                    <p class="card-text newDomesticFamilyDestionationCard_desc">Starting From
                                        <span>$5500</span>
                                        <button>See more</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticFamilyDestinationOuterdiv" >
                        <div class="row g-0 newDomesticFamilyDestinationImagetextcontainer">
                            <div class="col-md-8 newDomesticFamilyDestinationCardimage">
                                <img src="Images/ActivityAround/glacier hunt in greenland.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newDomesticFamilyDestinationTextcard">
                                <div class="card-body newDomesticFamilyDestinationCarddescmain">
                                    <div className="contentButtoninnerdiv">
                                        <h3 class="card-title newDomesticFamilyDestinationCardtitle">Ooty, India</h3>
                                    </div>
                                    <p class="card-text newDomesticFamilyDestionationCard_desc">Starting From
                                        <span>$5500</span>
                                        <button>See more</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticFamilyDestinationOuterdiv" >
                        <div class="row g-0 newDomesticFamilyDestinationImagetextcontainer">
                            <div class="col-md-8 newDomesticFamilyDestinationCardimage">
                                <img src="Images/ActivityAround/machu pichu climb.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newDomesticFamilyDestinationTextcard">
                                <div class="card-body newDomesticFamilyDestinationCarddescmain">
                                    <div className="contentButtoninnerdiv">
                                        <h3 class="card-title newDomesticFamilyDestinationCardtitle">Ooty, India</h3>
                                    </div>
                                    <p class="card-text newDomesticFamilyDestionationCard_desc">Starting From
                                        <span>$5500</span>
                                        <button>See more</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 newDomesticFamilyDestinationOuterdiv" >
                        <div class="row g-0 newDomesticFamilyDestinationImagetextcontainer">
                            <div class="col-md-8 newDomesticFamilyDestinationCardimage">
                                <img src="Images/ActivityAround/mountain hiking usa.jpg" class="img-fluid activityAroundimage" alt="..." />
                            </div>
                            <div class="col-md-4 newDomesticFamilyDestinationTextcard">
                                <div class="card-body newDomesticFamilyDestinationCarddescmain">
                                    <div className="contentButtoninnerdiv">
                                        <h3 class="card-title newDomesticFamilyDestinationCardtitle">Ooty, India</h3>
                                    </div>
                                    <p class="card-text newDomesticFamilyDestionationCard_desc">Starting From
                                        <span>$5500</span>
                                        <button>See more</button>
                                    </p>
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

