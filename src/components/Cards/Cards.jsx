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
                                <img src='images/BestBudget/Bolivia.jpg' />
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
                                <img src='images/BestBudget/Cambodia.jpg' />
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
                                <img src='images/BestBudget/Bulgaria.jpg' />
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
                                <img src='images/BestBudget/El Salvador.jpg' />
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
                                <img src='images/BestBudget/Nicaragua.jpg' />
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



// This is the previous one of vaibhav code
// import React from 'react';
// // import { Card, Button } from "react-bootstrap";
// // import { Link } from 'react-router-dom';
// import { useState } from "react";
// import './Cards.css';
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { IconContext } from "react-icons";
// import { CountryDropdown } from './CountryDropdown';

// export const DataCards = () => {
//     const [more, setmore] = useState(false);
//     const [num, setnum] = useState();
//     const [a, seta] = useState();

//     const arr1 = [
//         {
//             servicename: "Mauritius",
//             buttontext: "Tap for more",
//             // icons: <BsSearch />,
//             img: "images/BestBudget/Bolivia.jpg",
//             data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
//         },
//         {
//             servicename: "Greece",
//             img: "https://c4.wallpaperflare.com/wallpaper/144/949/164/nature-photography-landscape-road-wallpaper-preview.jpg",
//             buttontext: "Tap for more",
//             data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
//         },
//         {
//             servicename: "Scotland",
//             img: "https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=600",
//             buttontext: "Tap for more",
//             data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
//         },
//         {
//             servicename: "Paris",
//             img: "https://cdn.pixabay.com/photo/2019/04/11/13/59/paris-4119828__340.jpg",
//             buttontext: "Tap for more",
//             data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
//         },
//         // {
//         //     servicename: "New York",
//         //     img: "/images/CardImage1.jpg",
//         //     buttontext:"Tap for more",
//         //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
//         // },
//         // {
//         //     servicename: "Spain",
//         //     img: "/images/CardImage1.jpg",
//         //     buttontext:"Tap for more",
//         //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
//         // },
//         // {
//         //     servicename: "America",
//         //     img: "/images/CardImage1.jpg",
//         //     buttontext:"Tap for more",
//         //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
//         // },
//         // {
//         //     servicename: "Australia",
//         //     img: "/images/CardImage1.jpg",
//         //     buttontext:"Tap for more",
//         //     data: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit."
//         // },
//     ]
//     const toggle = (i) => {
//         let b = i;
//         if (b != a) {
//             // console.log(i,"upper");
//             // console.log(more);
//             setnum(i)
//             setmore(true)
//         }
//         if (b == a) {
//             // console.log(i,"lower");
//             // console.log(more);
//             // // setnum(i)
//             setmore(!more)
//         }
//         seta(i);
//         // console.log(a)
//         // console.log(b)
//     }
//     return (
//         <>
//             {/* Checking the Intent and the requirement of the documentation */}
//             <div className='outercards'>
//                 <div className='cards-container '>
                    
//                     <CountryDropdown/>
                   
//                     {/* <div>
//                         <div className='cardtourheadingdropdown'>
//                             <div className='cardfilterdrop'>
//                                 <h5>Choose your Destination</h5>
//                                 <select className="form-select datadrop" aria-label="Default select example" style={{ color: "#3380f2", fontWeight: "700", border: "2px solid #3380f2", width: "31%", height: "40px", marginLeft: "2%", borderRadius: "14px" }}>
//                                     <option className='carddropvalue' selected>select here</option>
//                                     <option className='carddropvalue' value="1">Asia</option>
//                                     <option className='carddropvalue' value="2">Africa</option>
//                                     <option className='carddropvalue' value="3">North America</option>
//                                     <option className='carddropvalue' value="4">South America</option>
//                                     <option className='carddropvalue' value="5">Antarctica</option>
//                                     <option className='carddropvalue' value="6">Europe</option>
//                                     <option className='carddropvalue' value="7">Australia</option>
//                                 </select>
//                             </div>

//                             <div className='cardtextheading'>
//                                 <h2 className='cardstop-heading text-center'>We have the best tours</h2>
//                             </div>
//                         </div>
//                     </div> */}

//                     <div className="_SeoLocalservicesmaindivcard">
//                         <div className="_SeoLocalservicesslider">
//                             {
//                                 arr1.map((items, i) => {
//                                     return (
//                                         <div className=" _SeoLocalServicesnames">

//                                             {/* <IconContext.Provider value={{ className: more && num == i ? "_SeoLocalicons2" : "_SeoLocalicons1" }}>
//                                     {items.icons}
//                                 </IconContext.Provider> */}
//                                             <div className="_Activitiescard">
//                                                 <img src={items.img} />
//                                                 <p className={more && num == i ? "_SeoLocalName2" : "_SeolocalNamebutton"}>{items.buttontext}</p>
//                                                 <div className={more && num == i ? "_SeoLocalName2" : "_SeoLocalName"}>{items.servicename}</div>
//                                             </div>
//                                             <div className={more && num == i ? "_SeoLocalservicedata1" : "_SeoLocalservicedata"} onClick={() => toggle(i)} >{items.data}</div>
//                                         </div>

//                                     )
//                                 })
//                             }
//                         </div>

//                     </div>

//                 </div>
//             </div>


//         </>
//     );
// }

// // export default DataCards;