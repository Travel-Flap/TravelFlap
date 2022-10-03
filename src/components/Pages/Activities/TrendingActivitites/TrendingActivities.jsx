import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "./TrendingActivities.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


export const TrendingActivities = () => {
    const sliderRef = useRef(null);


    // This section is for the onclick function
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);

    const handleToggle = () => {
        setToggle(false)
    }
    const handleText = () => {
        setToggle(true)
    }

    const handleText1 = () => {
        setToggle1(true)
    }
    const handleToggle1 = () => {
        setToggle1(false)
    }

    const handleText2 = () => {
        setToggle2(true)
    }
    const handleToggle2 = () => {
        setToggle2(false)
    }

    const handleText3 = () => {
        setToggle3(true)
    }
    const handleToggle3 = () => {
        setToggle3(false)
    }
    
    const handleText4 = () => {
        setToggle4(true)
    }
    const handleToggle4 = () => {
        setToggle4(false)
    }

    const handleText5 = () => {
        setToggle5(true)
    }
    const handleToggle5 = () => {
        setToggle5(false)
    }

    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="activityexperimentmaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="activityexperimentheadingcontainer" >
                <h2 className="activityexperimentheading1">Trending Activitites</h2>
                <div className="viewallactivityaroundbuttons" >
                    <p className="viewalltrendingactivitytext" style={{ width: "45" }}>view all deals</p>
                    <div className="trendingactivityheadingbuttons">
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

            <div className="activityaroundslidercontainer">
                <Slider
                    arrows={false}
                    autoplay={true}
                    speed={1000}
                    autoplaySpeed={2000}
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

                    <div onMouseLeave={handleToggle} className="card-wrapper">
                        <div className=" cardParent card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/TrendingActivities/bike ride spiti valley ladakh.jpg' />
                            </div>
                            <div className={toggle ? "none" : "activityexperimentdetails"}>
                                <h2>Goa <span className="activityexperimentjobtitle">"Bike Ride in Hills"
                                </span>
                                    <p onClick={handleText}>Tap to read more</p>
                                </h2>
                            </div>

                            <div className={toggle ? "experimentText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>

                    <div onMouseLeave={handleToggle1} className="card-wrapper">
                        <div className="cardParent card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/TrendingActivities/boat ride in italy.jpg' />
                            </div>
                            <div className={toggle1 ? "none" : "activityexperimentdetails"}>
                                <h2>Italy <span className="activityexperimentjobtitle">"Boat ride in Italy"
                                </span>
                                    <p onClick={handleText1}>Tap to read more</p>
                                </h2>
                            </div>
                            <div className={toggle1 ? "experimentText" : "none1"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>
                    <div onMouseLeave={handleToggle2} className="card-wrapper">
                        <div className="card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/TrendingActivities/cycling in romania.jpg' />
                            </div>
                            <div className={toggle2 ? "none" : "activityexperimentdetails"}>
                                <h2>Romania <span className="activityexperimentjobtitle">"Cycling in Romania"
                                </span>
                                    <p onClick={handleText2}>Tap to read more</p>
                                </h2>
                            </div>
                            <div className={toggle2 ? "experimentText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>
                    <div onMouseLeave={handleToggle3} className="card-wrapper">
                        <div className="card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/TrendingActivities/kenai rive fly fishing usa.jpg' />
                            </div>
                            <div className={toggle3 ? "none" : "activityexperimentdetails"}>
                                <h2>USA <span className="activityexperimentjobtitle">"Kenai River fly Fishing "
                                </span>
                                    <p onClick={handleText3}>Tap to read more</p>
                                </h2>
                            </div>
                            <div className={toggle3 ? "experimentText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>
                    <div onMouseLeave={handleToggle4} className="card-wrapper">
                        <div className="card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/TrendingActivities/london eye ferros wheel.jpg' />
                            </div>
                            <div className={toggle4 ? "none" : "activityexperimentdetails"}>
                                <h2 onClick={handleText4}>London <span className="activityexperimentjobtitle">"Eye Ferros Wheel"
                                </span>
                                    <p>Tap to read more</p>
                                </h2>
                            </div>
                            
                            <div className={toggle4 ? "experimentText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>

                        </div>
                    </div>

                    {/* <div class="card mb-3 activityaroundouterdiv" >
                        <div class="row g-0 activityaroundimagetextcontainer">
                            <div class="col-md-8 activityaroundcardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 activityaroundtextcard">
                                <div class="card-body activityaroundcarddescmain">
                                    <h3 class="card-title activityaroundcardtitle">Water Sports</h3>
                                    <p class="card-text activityaroundcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="activityaroundbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 activityaroundouterdiv" >
                        <div class="row g-0 activityaroundimagetextcontainer">
                            <div class="col-md-8 activityaroundcardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 activityaroundtextcard">
                                <div class="card-body activityaroundcarddescmain">
                                    <h3 class="card-title activityaroundcardtitle">Mountain Hiking</h3>
                                    <p class="card-text activityaroundcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="activityaroundbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 activityaroundouterdiv" >
                        <div class="row g-0 activityaroundimagetextcontainer">
                            <div class="col-md-8 activityaroundcardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 activityaroundtextcard">
                                <div class="card-body activityaroundcarddescmain">
                                    <h3 class="card-title activityaroundcardtitle">Adventure Sports</h3>
                                    <p class="card-text activityaroundcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="activityaroundbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 activityaroundouterdiv" >
                        <div class="row g-0 activityaroundimagetextcontainer">
                            <div class="col-md-8 activityaroundcardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 activityaroundtextcard">
                                <div class="card-body activityaroundcarddescmain">
                                    <h3 class="card-title activityaroundcardtitle">Adventure Sports</h3>
                                    <p class="card-text activityaroundcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="activityaroundbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 activityaroundouterdiv" >
                        <div class="row g-0 activityaroundimagetextcontainer">
                            <div class="col-md-8 activityaroundcardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 activityaroundtextcard">
                                <div class="card-body activityaroundcarddescmain">
                                    <h3 class="card-title activityaroundcardtitle">Adventure Sports</h3>
                                    <p class="card-text activityaroundcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="activityaroundbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 activityaroundouterdiv" >
                        <div class="row g-0 activityaroundimagetextcontainer">
                            <div class="col-md-8 activityaroundcardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 activityaroundtextcard">
                                <div class="card-body activityaroundcarddescmain">
                                    <h3 class="card-title activityaroundcardtitle">Adventure Sports</h3>
                                    <p class="card-text activityaroundcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="activityaroundbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-3 activityaroundouterdiv" >
                        <div class="row g-0 activityaroundimagetextcontainer">
                            <div class="col-md-8 activityaroundcardimage">
                                <img src="https://media.istockphoto.com/photos/senju-fall-picture-id1400925699?b=1&k=20&m=1400925699&s=170667a&w=0&h=mJTG8jdAnbIeY8-vgYmPL3T15uSCn-owtXcqUi0gho4=" class="img-fluid rounded-start" alt="..." />
                            </div>
                            <div class="col-md-4 activityaroundtextcard">
                                <div class="card-body activityaroundcarddescmain">
                                    <h3 class="card-title activityaroundcardtitle">Adventure Sports</h3>
                                    <p class="card-text activityaroundcard_desc">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <Button className="activityaroundbutton" variant="primary" >Book Now</Button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* </div> */}



                </Slider>
            </div>
        </div>
    );
};

