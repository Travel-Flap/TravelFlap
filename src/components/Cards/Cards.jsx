// This one is new code did with help of hemant

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "./Cards.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { CountryDropHomeCard } from "./CountryDropdHomeCard";
import { Countrystate } from "./CountrySelect";


export const DataCards = () => {
    const sliderRef = useRef(null);


    // This section is for the onclick function
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);

    const cardhandleToggle = () => {
        setToggle(false)
    }
    const handleText = () => {
        setToggle(true)
    }

    const handleText1 = () => {
        setToggle1(true)
    }
    const cardhandleToggle1 = () => {
        setToggle1(false)
    }

    const handleText2 = () => {
        setToggle2(true)
    }
    const cardhandleToggle2 = () => {
        setToggle2(false)
    }

    const handleText3 = () => {
        setToggle3(true)
    }
    const cardhandleToggle3 = () => {
        setToggle3(false)
    }
    
    const handleText4 = () => {
        setToggle4(true)
    }
    const cardhandleToggle4 = () => {
        setToggle4(false)
    }

    const handleText5 = () => {
        setToggle5(true)
    }
    const cardhandleToggle5 = () => {
        setToggle5(false)
    }

    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        
        <div className="activityexperimentmaindiv">
            {/* <h1>Ipl</h1> */}
            {/* <Countrystate/>            */}
            <div className="activityexperimentheadingcontainer" >
                <div className="carddropcontainer">
                    <CountryDropHomeCard/>
                    {/* <Countrystate/>   */}
                </div>

                <div className="cardendcontinerdiv">
                    <div className="viewallhomecardbuttons" >
                        {/* <p className="viewallhomecardtext" >view all deals</p> */}
                        <div className="homecardheadingbuttons">
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
            </div>

            <div className="activityaroundslidercontainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
                    speed={1000}
                    autoplaySpeed={2000}
                    // dots
                    pauseOnHover={true}
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

                    <div onMouseLeave={cardhandleToggle} className="card-wrapper">
                        <div className=" cardParent card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/BestBudget/Bolivia.jpg' />
                            </div>
                            <div className={toggle ? "none" : "activityexperimentdetails"}>
                                <h2>Bolivia <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
                                </span>
                                    <p onClick={handleText}>Tap to read more</p>
                                </h2>
                            </div>

                            <div className={toggle ? "experimentText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>

                    <div onMouseLeave={cardhandleToggle1} className="card-wrapper">
                        <div className="cardParent card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/BestBudget/Cambodia.jpg' />
                            </div>
                            <div className={toggle1 ? "none" : "activityexperimentdetails"}>
                                <h2>Cambodia <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
                                </span>
                                    <p onClick={handleText1}>Tap to read more</p>
                                </h2>
                            </div>
                            <div className={toggle1 ? "experimentText" : "none1"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>
                    <div onMouseLeave={cardhandleToggle2} className="card-wrapper">
                        <div className="card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/BestBudget/Bulgaria.jpg' />
                            </div>
                            <div className={toggle2 ? "none" : "activityexperimentdetails"}>
                                <h2>Bulgaria <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
                                </span>
                                    <p onClick={handleText2}>Tap to read more</p>
                                </h2>
                            </div>
                            <div className={toggle2 ? "experimentText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>
                    <div onMouseLeave={cardhandleToggle3} className="card-wrapper">
                        <div className="card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/BestBudget/El Salvador.jpg' />
                            </div>
                            <div className={toggle3 ? "none" : "activityexperimentdetails"}>
                                <h2>El Salvador <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
                                </span>
                                    <p onClick={handleText3}>Tap to read more</p>
                                </h2>
                            </div>
                            <div className={toggle3 ? "experimentText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>
                    <div onMouseLeave={cardhandleToggle4} className="card-wrapper">
                        <div className="card activityexperimentsliderdiv">
                            <div className=" activityexperimentcardimage">
                                <img src='Images/BestBudget/Nicaragua.jpg' />
                            </div>
                            <div className={toggle4 ? "none" : "activityexperimentdetails"}>
                                <h2 onClick={handleText4}>Laos <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
                                </span>
                                    <p>Tap to read more</p>
                                </h2>
                            </div>
                            
                            <div className={toggle4 ? "experimentText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    );
};

