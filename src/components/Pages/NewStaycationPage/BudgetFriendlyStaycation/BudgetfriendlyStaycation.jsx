import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "./BudgetFriendlyStaycation.css";
import SliderWrapper from "./SlickSliderStyle";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const BudgetFriendlyStaycations = () => {
    const [slideindex, setSlideindex] = useState(0);
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="newBudgetfriendlyStaycationmaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="newBudgetFriendlyStaycationHeadingcontainer" >
                <h2 className="newBudgetFriendlyStaycationHeading1">Budget Friendly Staycations</h2>
            </div>

            <div className="newBudgetFriendlySliderContainer">
                <SliderWrapper>
                    <Slider
                        arrows={false}
                        autoplay={true}
                        speed={2000}
                        autoplaySpeed={2000}
                        dots={true}
                        dotsclassName="slick-dots line-indicator"
                        ref={sliderRef}
                        slidesToShow={4}
                        slidesToScroll={2}
                        appendDots={dots => <ul>{dots}</ul>}
                        customPaging={i => (
                            <div className="ft-slick__dots--custom">
                                <div className="loading" />
                            </div>
                        )}
                        beforeChange={(current, next) => setSlideindex(next)}

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
                        customPagingg={(i) => (
                            <div
                                style={{
                                    width: "100%",
                                    top: "-10px",
                                    opacity: 0,
                                    border: "2px solid red",
                                }}
                            >
                                {i}
                            </div>
                        )}
                    >
                        {/* <div className="experimentdivcontainer" style={{display:"flex",flexDirection:"row"}}/> */}


                        <div class="card mb-3 newBudgetFriendlyOuterdiv" >
                            <div class="row g-0 newBudgetFriendlyImagetextcontainer">
                                <div class="col-md-8 newBudgetFriendlyCardimage">
                                    <img src="Images/NewHomeLayout/NewStaycations/budget/Vietnam.jpg" class="img-fluid activityAroundimage" alt="..." />
                                </div>
                                <div class="col-md-4 newBudgetFriendlyTextcard">
                                    <div class="card-body newBudgetFriendlyCarddescmain">
                                        <div className="contentButtoninnerdiv">
                                            <h3 class="card-title newBudgetFriendlyCardtitle">Travel Talk</h3>
                                            <button>See more</button>
                                        </div>
                                        <p class="card-text newBudgetFriendlyCard_desc">Travel Community</p>
                                        <p class="card-text newBudgetFriendlyCard_desc">155,073 travellers</p>
                                        {/* <Button className="newBudgetFriendlyButton" variant="primary" >Book Now</Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newBudgetFriendlyOuterdiv" >
                            <div class="row g-0 newBudgetFriendlyImagetextcontainer">
                                <div class="col-md-8 newBudgetFriendlyCardimage">
                                    <img src="Images/NewHomeLayout/NewStaycations/budget/El Salvador.jpg" class="img-fluid activityAroundimage" alt="..." />
                                </div>
                                <div class="col-md-4 newBudgetFriendlyTextcard">
                                    <div class="card-body newBudgetFriendlyCarddescmain">
                                        <div className="contentButtoninnerdiv">
                                            <h3 class="card-title newBudgetFriendlyCardtitle">Travel Talk</h3>
                                            <button>See more</button>
                                        </div>
                                        <p class="card-text newBudgetFriendlyCard_desc">Travel Community</p>
                                        <p class="card-text newBudgetFriendlyCard_desc">155,073 travellers</p>
                                        {/* <Button className="newBudgetFriendlyButton" variant="primary" >Book Now</Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newBudgetFriendlyOuterdiv" >
                            <div class="row g-0 newBudgetFriendlyImagetextcontainer">
                                <div class="col-md-8 newBudgetFriendlyCardimage">
                                    <img src="Images/NewHomeLayout/NewStaycations/budget/Guatemala.jpg" class="img-fluid activityAroundimage" alt="..." />
                                </div>
                                <div class="col-md-4 newBudgetFriendlyTextcard">
                                    <div class="card-body newBudgetFriendlyCarddescmain">
                                        <div className="contentButtoninnerdiv">
                                            <h3 class="card-title newBudgetFriendlyCardtitle">Travel Talk</h3>
                                            <button>See more</button>
                                        </div>
                                        <p class="card-text newBudgetFriendlyCard_desc">Travel Community</p>
                                        <p class="card-text newBudgetFriendlyCard_desc">155,073 travellers</p>
                                        {/* <Button className="newBudgetFriendlyButton" variant="primary" >Book Now</Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newBudgetFriendlyOuterdiv" >
                            <div class="row g-0 newBudgetFriendlyImagetextcontainer">
                                <div class="col-md-8 newBudgetFriendlyCardimage">
                                    <img src="Images/NewHomeLayout/NewStaycations/budget/Nicaragua.jpg" class="img-fluid activityAroundimage" alt="..." />
                                </div>
                                <div class="col-md-4 newBudgetFriendlyTextcard">
                                    <div class="card-body newBudgetFriendlyCarddescmain">
                                        <div className="contentButtoninnerdiv">
                                            <h3 class="card-title newBudgetFriendlyCardtitle">Travel Talk</h3>
                                            <button>See more</button>
                                        </div>
                                        <p class="card-text newBudgetFriendlyCard_desc">Travel Community</p>
                                        <p class="card-text newBudgetFriendlyCard_desc">155,073 travellers</p>
                                        {/* <Button className="newBudgetFriendlyButton" variant="primary" >Book Now</Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newBudgetFriendlyOuterdiv" >
                            <div class="row g-0 newBudgetFriendlyImagetextcontainer">
                                <div class="col-md-8 newBudgetFriendlyCardimage">
                                    <img src="Images/ActivityAround/glacier hunt in greenland.jpg" class="img-fluid activityAroundimage" alt="..." />
                                </div>
                                <div class="col-md-4 newBudgetFriendlyTextcard">
                                    <div class="card-body newBudgetFriendlyCarddescmain">
                                        <div className="contentButtoninnerdiv">
                                            <h3 class="card-title newBudgetFriendlyCardtitle">Travel Talk</h3>
                                            <button>See more</button>
                                        </div>
                                        <p class="card-text newBudgetFriendlyCard_desc">Travel Community</p>
                                        <p class="card-text newBudgetFriendlyCard_desc">155,073 travellers</p>
                                        {/* <Button className="newBudgetFriendlyButton" variant="primary" >Book Now</Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newBudgetFriendlyOuterdiv" >
                            <div class="row g-0 newBudgetFriendlyImagetextcontainer">
                                <div class="col-md-8 newBudgetFriendlyCardimage">
                                    <img src="Images/ActivityAround/machu pichu climb.jpg" class="img-fluid activityAroundimage" alt="..." />
                                </div>
                                <div class="col-md-4 newBudgetFriendlyTextcard">
                                    <div class="card-body newBudgetFriendlyCarddescmain">
                                        <div className="contentButtoninnerdiv">
                                            <h3 class="card-title newBudgetFriendlyCardtitle">Travel Talk</h3>
                                            <button>See more</button>
                                        </div>
                                        <p class="card-text newBudgetFriendlyCard_desc">Travel Community</p>
                                        <p class="card-text newBudgetFriendlyCard_desc">155,073 travellers</p>
                                        {/* <Button className="newBudgetFriendlyButton" variant="primary" >Book Now</Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card mb-3 newBudgetFriendlyOuterdiv" >
                            <div class="row g-0 newBudgetFriendlyImagetextcontainer">
                                <div class="col-md-8 newBudgetFriendlyCardimage">
                                    <img src="Images/ActivityAround/mountain hiking usa.jpg" class="img-fluid activityAroundimage" alt="..." />
                                </div>
                                <div class="col-md-4 newBudgetFriendlyTextcard">
                                    <div class="card-body newBudgetFriendlyCarddescmain">
                                        <div className="contentButtoninnerdiv">
                                            <h3 class="card-title newBudgetFriendlyCardtitle">Travel Talk</h3>
                                            <button>See more</button>
                                        </div>
                                        <p class="card-text newBudgetFriendlyCard_desc">Travel Community</p>
                                        <p class="card-text newBudgetFriendlyCard_desc">155,073 travellers</p>
                                        {/* <Button className="newBudgetFriendlyButton" variant="primary" >Book Now</Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}



                    </Slider>
                </SliderWrapper>
            </div>
        </div>
    );
};

