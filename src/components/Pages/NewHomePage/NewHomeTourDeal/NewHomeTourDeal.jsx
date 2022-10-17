import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "./NewHomeTourDeal.css"
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import countrydata from '../../../../CountryData.json';

export const NewHomeTourDeals = () => {
    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');

    const handlecounty = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);
        //console.log(getcountryId);
    }

    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Get Country id" + countryid + " And " + stateid); 
    }
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);


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
        <div class="newhomeTourDealsmainoutercontainer card text-bg-dark">
            <img src="Images/NewHomeLayout/BackgroundImages/TopCitiesBackground1.png" class="card-img" alt="..." />
            <div class="newhomeToursDealoverimagemaindiv card-img-overlay">
                <div className='tourdealsmaincontainer'>
                    <div class="card-img-overlay">
                        <div className='newhomeTourDealsheadingcontainer'>
                            <h2>Tour Deals</h2>



                   <div className='newHomeTourDealDropContainer'>
                        <select className="form-select newHomeTourDealCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ border: "3px solid #3380f2", width: "60%",appearance:"none" }}>
                            <option value="" style={{ textAlign: "center" }}>Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='newTourDealicondiv'>
                        <FaAngleRight style={{fontSize:"15px"}} size={"1em"} className="tourdealicon" />
                        </div>
                    </div>


                        </div>
                        <div className="tourdealsnewhomepagecardmaindiv">
                            <Slider
                                arrows={false}
                                // autoplay={true}
                                speed={2000}
                                autoplaySpeed={2000}
                                dots={true}
                                dotsclassName="slick-dots line-indicator"
                                ref={sliderRef}
                                slidesToShow={5}
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
                                <div onMouseLeave={cardhandleToggle} className="card-wrapper">
                                    <div className=" cardParent card newHomeToursDealsliderdiv">
                                        <div className="newHomeTourDealscardimage">
<<<<<<< HEAD
                                            <img  src='Images/NewHomeLayout/NewHomeTourDeals/Cambodia.jpg'/>
=======
                                            <img  src='Images/BestBudget/Cambodia.jpg'/>
>>>>>>> 1f5f92cd1e52f243a46271e711d93a7bb5dd2559
                                        </div>
                                        <div className={toggle ? "none" : "newHomeToursDealdetails"}>
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
                                    <div className="cardParent card newHomeToursDealsliderdiv">
                                        <div className=" newHomeTourDealscardimage">
<<<<<<< HEAD
                                            <img src='Images/NewHomeLayout/NewHomeTourDeals/Greenland.jpg' />
=======
                                            <img src='Images/BestBudget/Greenland.jpg' />
>>>>>>> 1f5f92cd1e52f243a46271e711d93a7bb5dd2559
                                        </div>
                                        <div className={toggle1 ? "none" : "newHomeToursDealdetails"}>
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
                                    <div className="card newHomeToursDealsliderdiv">
                                        <div className=" newHomeTourDealscardimage">
<<<<<<< HEAD
                                            <img src='Images/NewHomeLayout/NewHomeTourDeals/Cambodge.jpg' />
=======
                                            <img src='Images/BestBudget/Cambodge.jpg' />
>>>>>>> 1f5f92cd1e52f243a46271e711d93a7bb5dd2559
                                        </div>
                                        <div className={toggle2 ? "none" : "newHomeToursDealdetails"}>
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
                                    <div className="card newHomeToursDealsliderdiv">
                                        <div className=" newHomeTourDealscardimage">
<<<<<<< HEAD
                                            <img src='Images/NewHomeLayout/NewHomeTourDeals/paris.jpg' />
=======
                                            <img src='Images/BestBudget/paris.jpg' />
>>>>>>> 1f5f92cd1e52f243a46271e711d93a7bb5dd2559
                                        </div>
                                        <div className={toggle3 ? "none" : "newHomeToursDealdetails"}>
                                            <h2>Paris <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
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
                                    <div className="card newHomeToursDealsliderdiv">
                                        <div className=" newHomeTourDealscardimage">
<<<<<<< HEAD
                                            <img src='Images/NewHomeLayout/NewHomeTourDeals/Prague.jpg' />
=======
                                            <img src='Images/BestBudget/Prague.jpg' />
>>>>>>> 1f5f92cd1e52f243a46271e711d93a7bb5dd2559
                                        </div>
                                        <div className={toggle4 ? "none" : "newHomeToursDealdetails"}>
                                            <h2 onClick={handleText4}>Prague <span className="activityexperimentjobtitle">"Best Holiday trip Ever"
                                            </span>
                                                <p>Tap to read more</p>
                                            </h2>
                                        </div>

                                        <div className={toggle4 ? "experimentText" : "none"}>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum quis explicabo quasi officiis molestiae cupiditate a libero consequatur alias.</p>
                                        </div>
                                    </div>
                                </div>

                            </Slider >
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}




                                // <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                //     <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                //         <div className="newhomeToursDealcard">
                                //             <div className='toursDealnewhomepagecard_img'>
                                //                 <img src='Images/Handpicked Destination/Romantic Destination3.jpg' className="toursDealcard-img-top " alt="..." />
                                //                 <div className="card-body">
                                //                     <div className='toursDealnewhomepage_title1'>
                                //                         <div className="toursDealnewhomepagebottomheading">
                                //                             <h2>Bolivia</h2>
                                //                             <p>"Best tour deal for current Location".</p>
                                //                         </div>
                                //                         {/* <h4 className="toursDealnewhomepagecard-title">Romantic Destinations</h4> */}
                                //                     </div>
                                //                 </div>

                                //             </div>
                                //         </div>
                                //     </div>
                                // </Link>

                                // <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                //     <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                //         <div className="newhomeToursDealcard">
                                //             <div className='toursDealnewhomepagecard_img'>
                                //                 <img src='Images/Handpicked Destination/Romantic Destination2.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />

                                //                 <div className="card-body">
                                //                     <div className='toursDealnewhomepage_title1'>
                                //                         <div className="toursDealnewhomepagebottomheading">
                                //                             <h2>Cambodia</h2>
                                //                             <p>"Best tour deal for current Location".</p>
                                //                         </div>
                                //                         {/* <h4 className="toursDealnewhomepagecard-title">Honeymoon Destinations</h4> */}
                                //                     </div>
                                //                 </div>
                                //             </div>
                                //         </div>
                                //     </div>
                                // </Link>

                                // <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                //     <div className="card-wrapper tourdealsnewhomepagecardwrapper">

                                //         <div className="newhomeToursDealcard">
                                //             <div className='toursDealnewhomepagecard_img'>
                                //                 <img src='Images/Handpicked Destination/Adventure4.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                //                 <div className="card-body">
                                //                     <div className='toursDealnewhomepage_title1'>
                                //                         <div className="toursDealnewhomepagebottomheading">
                                //                             <h2>Bulgaria</h2>
                                //                             <p>"Best tour deal for current Location".</p>
                                //                         </div>
                                //                         {/* <h4 className="toursDealnewhomepagecard-title">Adventure Destinations</h4> */}
                                //                     </div>
                                //                 </div>

                                //             </div>

                                //         </div>
                                //     </div>
                                // </Link>

                                // <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                //     <div className="card-wrapper tourdealsnewhomepagecardwrapper">

                                //         <div className="newhomeToursDealcard">
                                //             <div className='toursDealnewhomepagecard_img'>
                                //                 <img src='Images/Handpicked Destination/Weekend Getaway2.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                //                 <div className="card-body">
                                //                     <div className='toursDealnewhomepage_title1'>
                                //                         <div className="toursDealnewhomepagebottomheading">
                                //                             <h2>El Salvador</h2>
                                //                             <p>"Best tour deal for current Location".</p>
                                //                         </div>
                                //                         {/* <h4 className="toursDealnewhomepagecard-title">Weekend Getaways</h4> */}
                                //                     </div>
                                //                 </div>

                                //             </div>

                                //         </div>
                                //     </div>
                                // </Link>

                                // <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                //     <div className="card-wrapper tourdealsnewhomepagecardwrapper">

                                //         <div className="newhomeToursDealcard">
                                //             <div className='toursDealnewhomepagecard_img'>
                                //                 <img src='Images/Handpicked Destination/Beach2.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                //                 <div className="card-body">
                                //                     <div className='toursDealnewhomepage_title1'>
                                //                         <div className="toursDealnewhomepagebottomheading">
                                //                             <h2>Laos</h2>
                                //                             <p>"Best tour deal for current Location".</p>
                                //                         </div>
                                //                         {/* <h4 className="toursDealnewhomepagecard-title">Beach Destinations</h4> */}
                                //                     </div>
                                //                 </div>

                                //             </div>

                                //         </div>
                                //     </div>
                                // </Link>

                                // <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                //     <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                //         <div className="newhomeToursDealcard">
                                //             <div className='toursDealnewhomepagecard_img'>
                                //                 <img src='Images/Handpicked Destination/International Destination1.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                //                 <div className="card-body">
                                //                     <div className='toursDealnewhomepage_title1'>
                                //                         <div className="toursDealnewhomepagebottomheading">
                                //                             <h2>Bolivia</h2>
                                //                             <p>"Best tour deal for current Location".</p>
                                //                         </div>
                                //                         {/* <h4 className="toursDealnewhomepagecard-title">International Destinations</h4> */}
                                //                     </div>
                                //                 </div>

                                //             </div>

                                //         </div>
                                //     </div>
                                // </Link>

                                // <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                //     <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                //         <div className="newhomeToursDealcard">
                                //             <div className='toursDealnewhomepagecard_img'>
                                //                 <img src='Images/Handpicked Destination/Heritage TajMahal.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                //                 <div className="card-body">
                                //                     <div className='toursDealnewhomepage_title1'>
                                //                         <div className="toursDealnewhomepagebottomheading">
                                //                             <h2>Buhama</h2>
                                //                             <p>"Best tour deal for current Location".</p>
                                //                         </div>
                                //                         {/* <h4 className="toursDealnewhomepagecard-title">Heritage Destinations</h4> */}
                                //                     </div>
                                //                 </div>

                                //             </div>

                                //         </div>
                                //     </div>
                                // </Link>

                                // <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                //     <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                //         <div className="newhomeToursDealcard">
                                //             <div className='toursDealnewhomepagecard_img'>
                                //                 <img src='Images/Handpicked Destination/Pilgrimage.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                //                 <div className="card-body">
                                //                     <div className='toursDealnewhomepage_title1'>
                                //                         <div className="toursDealnewhomepagebottomheading">
                                //                             <h2>Bolivia</h2>
                                //                             <p>"Best tour deal for current Location".</p>
                                //                         </div>
                                //                         {/* <h4 className="toursDealnewhomepagecard-title">Pilgrimage Destinations</h4> */}
                                //                     </div>
                                //                 </div>
                                //             </div>

                                //         </div>
                                //     </div>
                                // </Link>