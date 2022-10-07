import React from 'react';
import { Outlet, Link } from "react-router-dom";
import "./NewHomeTourDeal.css"
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";

export const NewHomeTourDeals = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);

    return (
        <div class="newhomeTourDealsmainoutercontainer card text-bg-dark">
            <img src="Images/NewHomeLayout/BackgroundImages/TourDealsBackgroundImage.jpeg" class="card-img" alt="..." />
            <div class="newhomeToursDealoverimagemaindiv card-img-overlay">
                <div className='tourdealsmaincontainer'>
                    <div class="card-img-overlay">
                        <div className='newhomeTourDealsheadingcontainer'>
                            <h2>Tour Deals</h2>
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

                                <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                    <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                        <div className="newhomeToursDealcard">
                                            <div className='toursDealnewhomepagecard_img'>
                                                <img src='Images/Handpicked Destination/Romantic Destination3.jpg' className="toursDealcard-img-top " alt="..." />
                                                <div className="card-body">
                                                    <div className='toursDealnewhomepage_title1'>
                                                        <div className="toursDealnewhomepagebottomheading">
                                                            <h2>Bolivia</h2>
                                                            <p>"Best tour deal for current Location".</p>
                                                        </div>
                                                        {/* <h4 className="toursDealnewhomepagecard-title">Romantic Destinations</h4> */}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                    <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                        <div className="newhomeToursDealcard">
                                            <div className='toursDealnewhomepagecard_img'>
                                                <img src='Images/Handpicked Destination/Romantic Destination2.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />

                                                <div className="card-body">
                                                    <div className='toursDealnewhomepage_title1'>
                                                        <div className="toursDealnewhomepagebottomheading">
                                                            <h2>Cambodia</h2>
                                                            <p>"Best tour deal for current Location".</p>
                                                        </div>
                                                        {/* <h4 className="toursDealnewhomepagecard-title">Honeymoon Destinations</h4> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                    <div className="card-wrapper tourdealsnewhomepagecardwrapper">

                                        <div className="newhomeToursDealcard">
                                            <div className='toursDealnewhomepagecard_img'>
                                                <img src='Images/Handpicked Destination/Adventure4.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                                <div className="card-body">
                                                    <div className='toursDealnewhomepage_title1'>
                                                        <div className="toursDealnewhomepagebottomheading">
                                                            <h2>Bulgaria</h2>
                                                            <p>"Best tour deal for current Location".</p>
                                                        </div>
                                                        {/* <h4 className="toursDealnewhomepagecard-title">Adventure Destinations</h4> */}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </Link>

                                <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                    <div className="card-wrapper tourdealsnewhomepagecardwrapper">

                                        <div className="newhomeToursDealcard">
                                            <div className='toursDealnewhomepagecard_img'>
                                                <img src='Images/Handpicked Destination/Weekend Getaway2.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                                <div className="card-body">
                                                    <div className='toursDealnewhomepage_title1'>
                                                        <div className="toursDealnewhomepagebottomheading">
                                                            <h2>El Salvador</h2>
                                                            <p>"Best tour deal for current Location".</p>
                                                        </div>
                                                        {/* <h4 className="toursDealnewhomepagecard-title">Weekend Getaways</h4> */}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </Link>

                                <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                    <div className="card-wrapper tourdealsnewhomepagecardwrapper">

                                        <div className="newhomeToursDealcard">
                                            <div className='toursDealnewhomepagecard_img'>
                                                <img src='Images/Handpicked Destination/Beach2.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                                <div className="card-body">
                                                    <div className='toursDealnewhomepage_title1'>
                                                        <div className="toursDealnewhomepagebottomheading">
                                                            <h2>Laos</h2>
                                                            <p>"Best tour deal for current Location".</p>
                                                        </div>
                                                        {/* <h4 className="toursDealnewhomepagecard-title">Beach Destinations</h4> */}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </Link>

                                <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                    <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                        <div className="newhomeToursDealcard">
                                            <div className='toursDealnewhomepagecard_img'>
                                                <img src='Images/Handpicked Destination/International Destination1.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                                <div className="card-body">
                                                    <div className='toursDealnewhomepage_title1'>
                                                        <div className="toursDealnewhomepagebottomheading">
                                                            <h2>Bolivia</h2>
                                                            <p>"Best tour deal for current Location".</p>
                                                        </div>
                                                        {/* <h4 className="toursDealnewhomepagecard-title">International Destinations</h4> */}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </Link>

                                <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                    <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                        <div className="newhomeToursDealcard">
                                            <div className='toursDealnewhomepagecard_img'>
                                                <img src='Images/Handpicked Destination/Heritage TajMahal.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                                <div className="card-body">
                                                    <div className='toursDealnewhomepage_title1'>
                                                        <div className="toursDealnewhomepagebottomheading">
                                                            <h2>Buhama</h2>
                                                            <p>"Best tour deal for current Location".</p>
                                                        </div>
                                                        {/* <h4 className="toursDealnewhomepagecard-title">Heritage Destinations</h4> */}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </Link>

                                <Link to="/weekendgetaways" className="tourDealsnewhomepagelink">
                                    <div className="card-wrapper tourdealsnewhomepagecardwrapper">
                                        <div className="newhomeToursDealcard">
                                            <div className='toursDealnewhomepagecard_img'>
                                                <img src='Images/Handpicked Destination/Pilgrimage.jpg' style={{ height: "100px", width: "90%" }} className="toursDealcard-img-top" alt="..." />
                                                <div className="card-body">
                                                    <div className='toursDealnewhomepage_title1'>
                                                        <div className="toursDealnewhomepagebottomheading">
                                                            <h2>Bolivia</h2>
                                                            <p>"Best tour deal for current Location".</p>
                                                        </div>
                                                        {/* <h4 className="toursDealnewhomepagecard-title">Pilgrimage Destinations</h4> */}
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Link>
                            </Slider >
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


