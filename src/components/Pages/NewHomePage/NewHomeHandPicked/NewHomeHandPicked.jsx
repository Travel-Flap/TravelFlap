import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewHomeHandPicked.css';
import Slider from "react-slick";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import {FaAngleDown} from "react-icons/fa";
import countrydata from '../../../../CountryData.json';

export const NewHomeHandPicked = () => {
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


    return (
        <>
            <div className="handpickednewhomepageoutercontainer">

                <div className="newHomeHandpickedHeadingContainer">
                    <h2 className="handpickednewhomepageheading">Hand Picked Destinations</h2>
                    {/* <div className='newHomeHandPickedDropContainer'>
                        <select className="form-select newHandPickedCountryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
                            style={{ border: "3px solid #3380f2", width: "60%",fontWeight:"700" }}>
                            <option value="" style={{ textAlign: "center" }}>Country Deals</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <FaAngleDown style={{fontSize:"15px"}} className="handmadesicon" />
                    </div> */}

                   {/* <div className='newHomehandpickedDropContainer'>
                        <select className="form-select newHomeHandpickedCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ width: "100%",appearance:"none" }}>
                            <option value="">Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='newHomehandpickedicondiv'>
                        <FaAngleDown style={{fontSize:"15px"}} size={"1em"} className="handpickedicon" />
                        </div>
                    </div> */}
                
                   <select className="newHomehandpickedDropContainer" onChange={(e) => handlecounty(e)} style={{backgroundColor:"white",textAlign:"left"}}>
                        <option style={{textAlign:"Left"}}>Country</option>
                        {
                            countrydata.map((getcountry, index) => (
                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                            ))
                        }
                    </select>

                </div>

                <div className='datanewhomepage'>

                    <div className="handpickednewhomepagecardmaindiv">

                        <Slider
                            arrows={false}
                            autoplay={true}
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

                            <Link to="/weekendgetaways" className="handpickednewhomepagelink">
                                <div className="card-wrapper handpickednewhomepagecardwrapper">
                                    <div className="handpickedcard">
                                        <div className='handpickednewhomepagecard_img'>

                                            <div className="card-body">
                                                <div className='handpickednewhomepage_title1'>
                                                    {/* <div className="handpickednewhomepagebottomheading">
                                                        <h1 >Top 11</h1>
                                                    </div> */}
                                                    <h4 className="handpickednewhomepagecard-title">Romantic Destinations</h4>
                                                </div>
                                            </div>
                                            <div className='testhover'>
                                            <img src='Images/Handpicked Destination/Romantic Destination3.jpg' className="handpickedcard-img-top" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/weekendgetaways" className="handpickednewhomepagelink">
                                <div className="card-wrapper handpickednewhomepagecardwrapper">
                                <div className="handpickedcard">
                                    <div className='handpickednewhomepagecard_img'>

                                        <div className="card-body">
                                            <div className='handpickednewhomepage_title1'>
                                                {/* <div className="handpickednewhomepagebottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                <h4 className="handpickednewhomepagecard-title">Honeymoon Destinations</h4>
                                            </div>
                                        </div>
                                        <div className='testhover'>
                                        <img src='Images/Handpicked Destination/Romantic Destination2.jpg'  className="handpickedcard-img-top testhover" alt="..." />
                                        </div>
                                        </div>
                                </div>
                            </div>
                            </Link>

                            <Link to="/weekendgetaways" className="handpickednewhomepagelink"><div className="card-wrapper handpickednewhomepagecardwrapper">

                                <div className="handpickedcard">
                                    <div className='handpickednewhomepagecard_img'>

                                        <div className="card-body">
                                            <div className='handpickednewhomepage_title1'>
                                                {/* <div className="handpickednewhomepagebottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                <h4 className="handpickednewhomepagecard-title">Adventure Destinations</h4>
                                            </div>
                                        </div>
                                        <div className='testhover'>
                                        <img src='Images/Handpicked Destination/Adventure4.jpg'  className="handpickedcard-img-top testhover" alt="..." />
                                       </div>
                                    </div>
                                    {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickednewhomepagecard-title ">Adventures Destinations</h4>
                           </div>
                        </div> */}
                                </div>
                            </div>
                            </Link>

                            <Link to="/weekendgetaways" className="handpickednewhomepagelink"><div className="card-wrapper handpickednewhomepagecardwrapper">

                                <div className="handpickedcard">
                                    <div className='handpickednewhomepagecard_img'>

                                        <div className="card-body">
                                            <div className='handpickednewhomepage_title1'>
                                                {/* <div className="handpickednewhomepagebottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                <h4 className="handpickednewhomepagecard-title">Weekend Getaways</h4>
                                            </div>
                                        </div>
                                        <div className='testhover'>
                                        <img src='Images/Handpicked Destination/Weekend Getaway2.jpg'  className="handpickedcard-img-top testhover" alt="..." />
                                    </div>
                                    </div>
                                    {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickednewhomepagecard-title ">Weekend Getaways</h4>
                           </div>
                        </div> */}
                                </div>
                                
                            </div>
                            </Link>

                            <Link to="/weekendgetaways" className="handpickednewhomepagelink"><div className="card-wrapper handpickednewhomepagecardwrapper">

                                <div className="handpickedcard">
                                    <div className='handpickednewhomepagecard_img'>

                                        <div className="card-body">
                                            <div className='handpickednewhomepage_title1'>
                                                {/* <div className="handpickednewhomepagebottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                <h4 className="handpickednewhomepagecard-title">Beach Destinations</h4>
                                            </div>
                                        </div>
                                        <div className='testhover'>
                                        <img src='Images/Handpicked Destination/Beach2.jpg'  className="handpickedcard-img-top testhover" alt="..." />
                                    </div>
                                    </div>
                                    {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickednewhomepagecard-title ">Beach Destinations</h4>
                           </div>
                        </div> */}
                                </div>
                            </div>
                            </Link>

                            <Link to="/weekendgetaways" className="handpickednewhomepagelink"><div className="card-wrapper handpickednewhomepagecardwrapper">

                                <div className="handpickedcard">
                                    <div className='handpickednewhomepagecard_img'>

                                        <div className="card-body">
                                            <div className='handpickednewhomepage_title1'>
                                                {/* <div className="handpickednewhomepagebottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                <h4 className="handpickednewhomepagecard-title">Hill Stations</h4>
                                            </div>
                                        </div>
                                        <div className='testhover'>
                                        <img src='Images/Handpicked Destination/HillStation2.jpg'  className="handpickedcard-img-top testhover" alt="..." />
                                    </div>
                                    </div>
                                    {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickednewhomepagecard-title ">Hill Sations</h4>
                           </div>
                        </div> */}
                                </div>
                            </div>
                            </Link>

                            <Link to="/weekendgetaways" className="handpickednewhomepagelink"><div className="card-wrapper handpickednewhomepagecardwrapper">
                                <div className="handpickedcard">
                                    <div className='handpickednewhomepagecard_img'>

                                        <div className="card-body">
                                            <div className='handpickednewhomepage_title1'>
                                                {/* <div className="handpickednewhomepagebottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                <h4 className="handpickednewhomepagecard-title">International Destinations</h4>
                                            </div>
                                        </div>
                                        <div className='testhover'>
                                        <img src='Images/Handpicked Destination/International Destination1.jpg'  className="handpickedcard-img-top testhover" alt="..." />
                                    </div>
                                    </div>
                                    {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickednewhomepagecard-title ">International Destinations</h4>
                           </div>
                        </div> */}
                                </div>
                            </div>
                            </Link>

                            <Link to="/weekendgetaways" className="handpickednewhomepagelink"><div className="card-wrapper handpickednewhomepagecardwrapper">
                                <div className="handpickedcard">
                                    <div className='handpickednewhomepagecard_img'>

                                        <div className="card-body">
                                            <div className='handpickednewhomepage_title1'>
                                                {/* <div className="handpickednewhomepagebottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                <h4 className="handpickednewhomepagecard-title">Heritage Destinations</h4>
                                            </div>
                                        </div>
                                        <div className='testhover'>
                                        <img src='Images/Handpicked Destination/Heritage TajMahal.jpg'  className="handpickedcard-img-top testhover" alt="..." />
                                    </div>
                                    </div>
                                    {/* <div className="card-body">
                           <div className='handpicked_title'>
                              <h4 className="handpickednewhomepagecard-title ">Heritage Destiations</h4>
                           </div>
                        </div> */}
                                </div>
                            </div>
                            </Link>

                            <Link to="/weekendgetaways" className="handpickednewhomepagelink"><div className="card-wrapper handpickednewhomepagecardwrapper">
                                <div className="handpickedcard">
                                    <div className='handpickednewhomepagecard_img'>

                                        <div className="card-body">
                                            <div className='handpickednewhomepage_title1'>
                                                {/* <div className="handpickednewhomepagebottomheading">
                                                    <h1 >Top 11</h1>
                                                </div> */}
                                                <h4 className="handpickednewhomepagecard-title">Pilgrimage Destinations</h4>
                                            </div>
                                        </div>
                                        <div className='testhover'>
                                        <img src='Images/Handpicked Destination/Pilgrimage.jpg'  className="handpickedcard-img-top testhover" alt="..." />
                                    </div>
                                    </div>
                                    {/* <div className="card-body handpickednewhomepagecardwrapper">
                           <div className='handpicked_title'>
                              <h4 className="handpickednewhomepagecard-title ">Pilgrimage Destinations</h4>
                           </div>
                        </div> */}
                                </div>
                            </div>
                            </Link>
                        </Slider >
                    </div>
                </div>
            </div>

        </>
    );
}

