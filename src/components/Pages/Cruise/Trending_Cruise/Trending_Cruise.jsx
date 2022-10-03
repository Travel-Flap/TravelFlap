// import"../Trending_Cruise/Trending_Cruise.css";
// export const Trending_Cruise = () => {

//     return (
//         <>
//             <div className="container_Trending_cruise">
//                 <div className="Trending_title">
//                     <h1>Trending Cruise Itinerary</h1>
//                 </div>
//                 <div className="chid_trending">
//                     <div className="chid_div1">
//                         <div className="div1_chid">
//                             <h5>Carnival Cruise Line</h5>
//                             <h6>Starting @ $ 18,225</h6>
//                         </div>
//                     </div>
//                     <div className="chid_div2">
//                         <div className="div1_chid">
//                             <h5>Carnival Cruise Line</h5>
//                             <h6>Starting @ $ 18,225</h6>
//                         </div>
//                     </div>
//                     <div className="chid_div3">
//                         <div className="div1_chid">
//                             <h5>Carnival Cruise Line</h5>
//                             <h6>Starting @ $ 18,225</h6>
//                         </div>
//                     </div>
//                     <div className="chid_div4">
//                         <div className="div1_chid">
//                             <h5>Carnival Cruise Line</h5>
//                             <h6>Starting @ $ 18,225</h6>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }



// This reference is taken from the trending activities

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "./Trending_Cruise.css";
// import { ButtonBase } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


export const Trending_Cruise = () => {
    const sliderRef = useRef(null);


    // This section is for the onclick function
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);

    const handlecruiseToggle = () => {
        setToggle(false)
    }
    const handlecruiseText = () => {
        setToggle(true)
    }

    const handlecruiseText1 = () => {
        setToggle1(true)
    }
    const handlecruiseToggle1 = () => {
        setToggle1(false)
    }

    const handlecruiseText2 = () => {
        setToggle2(true)
    }
    const handlecruiseToggle2 = () => {
        setToggle2(false)
    }

    const handlecruiseText3 = () => {
        setToggle3(true)
    }
    const handlecruiseToggle3 = () => {
        setToggle3(false)
    }

    const handlecruiseText4 = () => {
        setToggle4(true)
    }
    const handlecruiseToggle4 = () => {
        setToggle4(false)
    }

    const handlecruiseText5 = () => {
        setToggle5(true)
    }
    const handlecruiseToggle5 = () => {
        setToggle5(false)
    }

    useEffect(() => {
        console.log(sliderRef);
    }, []);
    return (
        <div className="trendingcruisemaindiv">
            {/* <h1>Ipl</h1> */}
            <div className="trendingcruiseeadingcontainer" >
                <h2 className="trendingcruiseheading1">Trending Cruise Itinerary</h2>
                <div className="viewalltrendingcruisebuttons" >
                    <p className="viewalltrendingcruisetext" style={{ width: "45" }}>view all deals</p>
                    <div className="trendingcruiseheadingbuttons">
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

            <div className="trendingcruiseslidercontainer">
                <Slider
                    arrows={false}
                    // autoplay={true}
                    // speed={1000}
                    // autoplaySpeed={1000}
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

                    {/* <div className="chid_trending"> */}
                        {/* <div className="chid_div1">
                            <div className="div1_chid">
                                <h5>Carnival Cruise Line</h5>
                                <h6>Starting @ $ 18,225</h6>
                            </div>
                        </div>
                        <div className="chid_div2">
                            <div className="div1_chid">
                                <h5>Carnival Cruise Line</h5>
                                <h6>Starting @ $ 18,225</h6>
                            </div>
                        </div>
                        <div className="chid_div3">
                            <div className="div1_chid">
                                <h5>Carnival Cruise Line</h5>
                                <h6>Starting @ $ 18,225</h6>
                            </div>
                        </div>
                        <div className="chid_div4">
                            <div className="div1_chid">
                                <h5>Carnival Cruise Line</h5>
                                <h6>Starting @ $ 18,225</h6>
                            </div>
                        </div> */}
                    {/* </div> */}


                    <div onMouseLeave={handlecruiseToggle} className="card-wrapper">
                        <div className=" cardParent card trendingcruisesliderdiv">
                            <div className=" trendingcruisecardimage">
                                <img src='https://lccintl.ezeeibe.com/cruisextranet/ITPL0087_Ship_Cruise_013.jpeg' />
                            </div>
                            <div className={toggle ? "none" : "trendingcruisedetails"}>
                                <h2>Carnival Cruise Line <span className="trendingcruisejobtitle">"Starting @ $ 18,225"
                                </span>
                                    <p onClick={handlecruiseText}>Tap to read more</p>
                                </h2>
                            </div>

                            <div className={toggle ? "trendingcruiseText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>

                    <div onMouseLeave={handlecruiseToggle1} className="card-wrapper">
                        <div className="cardParent card trendingcruisesliderdiv">
                            <div className=" trendingcruisecardimage">
                                <img src='https://lccintl.ezeeibe.com/cruisextranet/ITPL0084_Ship_Cruise_086.jpeg' />
                            </div>
                            <div className={toggle1 ? "none" : "trendingcruisedetails"}>
                                <h2>Carnival Cruise Line <span className="trendingcruisejobtitle">"Starting @ $ 18,225"
                                </span>
                                    <p onClick={handlecruiseText1}>Tap to read more</p>
                                </h2>
                            </div>
                            <div className={toggle1 ? "trendingcruiseText" : "none1"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>
                    <div onMouseLeave={handlecruiseToggle2} className="card-wrapper">
                        <div className="card trendingcruisesliderdiv">
                            <div className=" trendingcruisecardimage">
                                <img src='https://lccintl.ezeeibe.com/cruisextranet/ITPL0051_Ship_Cruise_045.jpeg' />
                            </div>
                            <div className={toggle2 ? "none" : "trendingcruisedetails"}>
                                <h2>Carnival Cruise Line  <span className="trendingcruisejobtitle">"Starting @ $ 18,225"
                                </span>
                                    <p onClick={handlecruiseText2}>Tap to read more</p>
                                </h2>
                            </div>
                            <div className={toggle2 ? "trendingcruiseText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>
                    <div onMouseLeave={handlecruiseToggle3} className="card-wrapper">
                        <div className="card trendingcruisesliderdiv">
                            <div className=" trendingcruisecardimage">
                                <img src='https://lccintl.ezeeibe.com/cruisextranet/ITPL0067_Ship_Cruise_058.jpeg' />
                            </div>
                            <div className={toggle3 ? "none" : "trendingcruisedetails"}>
                                <h2>Carnival Cruise Line  <span className="trendingcruisejobtitle">"Starting @ $ 18,225"
                                </span>
                                    <p onClick={handlecruiseText3}>Tap to read more</p>
                                </h2>
                            </div>
                            <div className={toggle3 ? "trendingcruiseText" : "none"}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                            </div>
                        </div>
                    </div>
                    <div onMouseLeave={handlecruiseToggle4} className="card-wrapper">
                        <div className="card trendingcruisesliderdiv">
                            <div className=" trendingcruisecardimage">
                                <img src='https://lccintl.ezeeibe.com/cruisextranet/ITPL0051_Ship_Cruise_045.jpeg' />
                            </div>
                            <div className={toggle4 ? "none" : "trendingcruisedetails"}>
                                <h2 onClick={handlecruiseText4}>Carnival Cruise Line  <span className="trendingcruisejobtitle">"Starting @ $ 18,225"
                                </span>
                                    <p>Tap to read more</p>
                                </h2>
                            </div>
                            
                            <div className={toggle4 ? "trendingcruiseText" : "none"}>
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

