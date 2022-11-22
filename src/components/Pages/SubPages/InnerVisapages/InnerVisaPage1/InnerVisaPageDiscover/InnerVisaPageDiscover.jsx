import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './InnerVisaPageDiscover.css';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import SliderWrapper from "./SlickSliderStyle";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const InnerVisaPageDiscover = () => {
    const [slideindex, setSlideindex] = useState(0);

    const sliderRef = useRef(null);
    useEffect(() => {
        console.log(sliderRef);
    }, []);


    return (
        <>
            <div className="InnerVisaPageDiscoveroutercontainer">

                <div className="InnerVisaPageDiscoverHeadingContainer">
                    <h2 className="InnerVisaPageDiscoverheading">Discover more places to visit</h2>
                </div>

                <div className='datanewhomepage wow'>

                    <div className="InnerVisaPageDiscovercardmaindiv">
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
                                rows={2}
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
                                        }}
                                    >
                                        {i}
                                    </div>
                                )}
                            >

                                <Link to="/romanticDestinations" className="InnerVisaPageDiscoverlink">
                                    <div className="card-wrapper InnerVisaPageDiscovercardwrapper">
                                        <div className="handpickedcard">

                                            <div className='InnerVisaPageDiscovercard_img'>

                                                <div className="card-body">
                                                    <div className='InnerVisaPageDiscover_title1'>
                                                        {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                        <h1 >Top 11</h1>
                                                    </div> */}
                                                        <h4 className="InnerVisaPageDiscovercard-title">Romantic Destinations</h4>
                                                    </div>
                                                </div>
                                                <div className='InnerVisaPageDiscoverhover'>
                                                    <LazyLoadImage src='Images/Handpicked Destination/Romantic Destination3.jpeg' className="handpickedcard-img-top" alt="handpicked image1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/hillStations" className="InnerVisaPageDiscoverlink">
                                    <div className="card-wrapper InnerVisaPageDiscovercardwrapper">
                                        <div className="handpickedcard">
                                            <div className='InnerVisaPageDiscovercard_img'>

                                                <div className="card-body">
                                                    <div className='InnerVisaPageDiscover_title1'>
                                                        {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                        <h4 className="InnerVisaPageDiscovercard-title">Honeymoon Destinations</h4>
                                                    </div>
                                                </div>
                                                <div className='InnerVisaPageDiscoverhover'>
                                                    <LazyLoadImage src='Images/Handpicked Destination/Romantic Destination2.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/hillStations" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">

                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">Adventure Destinations</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/Adventure4.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image3" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">Adventures Destinations</h4>
                           </div>
                        </div> */}
                                    </div>
                                </div>
                                </Link>

                                <Link to="/weekend" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">

                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">Weekend Getaways</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/Weekend Getaway2.jpg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image 4" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">Weekend Getaways</h4>
                           </div>
                        </div> */}
                                    </div>

                                </div>
                                </Link>

                                <Link to="/beachDestinations" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">

                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">Beach Destinations</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/Beach2.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image 5" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">Beach Destinations</h4>
                           </div>
                        </div> */}
                                    </div>
                                </div>
                                </Link>

                                <Link to="/hillStations" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">

                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">Hill Stations</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/HillStation2.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image 6" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">Hill Sations</h4>
                           </div>
                        </div> */}
                                    </div>
                                </div>
                                </Link>

                                <Link to="/hillStations" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">
                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">International Destinations</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/International Destination1.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image 8" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">International Destinations</h4>
                           </div>
                        </div> */}
                                    </div>
                                </div>
                                </Link>

                                <Link to="/hillStations" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">
                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">Heritage Destinations</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/Heritage TajMahal.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image 9" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">Heritage Destiations</h4>
                           </div>
                        </div> */}
                                    </div>
                                </div>
                                </Link>

                                <Link to="/hillStations" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">
                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">Pilgrimage Destinations</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/Pilgrimage.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image 10" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body InnerVisaPageDiscovercardwrapper">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">Pilgrimage Destinations</h4>
                           </div>
                        </div> */}
                                    </div>
                                </div>
                                </Link>

                                <Link to="/hillStations" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">
                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">International Destinations</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/International Destination1.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image 8" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">International Destinations</h4>
                           </div>
                        </div> */}
                                    </div>
                                </div>
                                </Link>

                                <Link to="/hillStations" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">
                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">Heritage Destinations</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/Heritage TajMahal.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image 9" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">Heritage Destiations</h4>
                           </div>
                        </div> */}
                                    </div>
                                </div>
                                </Link>

                                <Link to="/hillStations" className="InnerVisaPageDiscoverlink"><div className="card-wrapper InnerVisaPageDiscovercardwrapper">
                                    <div className="handpickedcard">
                                        <div className='InnerVisaPageDiscovercard_img'>

                                            <div className="card-body">
                                                <div className='InnerVisaPageDiscover_title1'>
                                                    {/* <div className="InnerVisaPageDiscoverbottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                    <h4 className="InnerVisaPageDiscovercard-title">Pilgrimage Destinations</h4>
                                                </div>
                                            </div>
                                            <div className='InnerVisaPageDiscoverhover'>
                                                <LazyLoadImage src='Images/Handpicked Destination/Pilgrimage.jpeg' className="handpickedcard-img-top InnerVisaPageDiscoverhover" alt="handpicked image 10" />
                                            </div>
                                        </div>
                                        {/* <div className="card-body InnerVisaPageDiscovercardwrapper">
                           <div className='handpicked_title'>
                              <h4 className="InnerVisaPageDiscovercard-title ">Pilgrimage Destinations</h4>
                           </div>
                        </div> */}
                                    </div>
                                </div>
                                </Link>
                            </Slider >
                        </SliderWrapper>
                    </div>
                </div>
            </div>

        </>


    );
}

