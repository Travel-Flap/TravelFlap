// export const NewPopularCarHireDestination = () => {

    import Slider from "react-slick";
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";
    // import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
    import { useRef } from "react";
    import { useEffect } from "react";
    import "./PopularCarHireDestinaton.css";
    // import { ButtonBase } from "@material-ui/core";
    import { Button } from "react-bootstrap"
    import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
    
    export const NewPopularCarHireDestination = () => {
        const sliderRef = useRef(null);
        useEffect(() => {
            console.log(sliderRef);
        }, []);
        return (
            <div className="newBudgetfriendlymaindiv">
                {/* <h1>Ipl</h1> */}
                <div className="newBudgetFriendlyHeadingcontainer" >
                    <h2 className="newBudgetFriendlyHeading1">Popular Carhire Destinations</h2>
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
    
                <div className="newBudgetFriendlySliderContainer">
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
                </div>
            </div>
        );
    };
    
    