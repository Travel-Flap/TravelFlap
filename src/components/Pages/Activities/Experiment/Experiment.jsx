import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "./Experiment.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


export const ActivityExperiment = () => {
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
                    <p className="viewallactivityaroundtext" style={{ width: "45" }}>view all deals</p>
                    <div className="activityaroundheadingbuttons">
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
                                <img src='https://images.unsplash.com/photo-1513415563383-4e580ed27a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hdXJpdGl1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                            </div>
                            <div className={toggle ? "none" : "activityexperimentdetails"}>
                                <h2>Goa <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
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
                                <img src='https://c4.wallpaperflare.com/wallpaper/144/949/164/nature-photography-landscape-road-wallpaper-preview.jpg' />
                            </div>
                            <div className={toggle1 ? "none" : "activityexperimentdetails"}>
                                <h2>Goa <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
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
                                <img src='https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=600' />
                            </div>
                            <div className={toggle2 ? "none" : "activityexperimentdetails"}>
                                <h2>Goa <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
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
                                <img src='https://cdn.pixabay.com/photo/2019/04/11/13/59/paris-4119828__340.jpg' />
                            </div>
                            <div className={toggle3 ? "none" : "activityexperimentdetails"}>
                                <h2>Goa <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
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
                                <img src='https://c4.wallpaperflare.com/wallpaper/144/949/164/nature-photography-landscape-road-wallpaper-preview.jpg' />
                            </div>
                            <div className={toggle4 ? "none" : "activityexperimentdetails"}>
                                <h2 onClick={handleText4}>Goa <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
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

