
import React, { useState } from 'react';
import "./NewHomePopularDestination.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import MagicSliderDots from 'react-magic-slider-dots';
// import 'react-magic-slider-dots/dist/magic-dots.css';
import { FaAngleDown } from "react-icons/fa";
import countrydata from '../../../../CountryData.json';

import SliderWrapper from "./SlickSliderStyle";

export const CenterMode = () => {
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


    const [slideindex, setSlideindex] = useState(0)
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        arrows: false,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom">
                <div className="loading"/>
            </div>
        ),
        beforeChange: (current, next) => setSlideindex(next),
        // appendDots: dots => {
        //     return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
        //   }
    };

    const slides = [
        { slidename: 'hello slide', img: 'Images/NewHomeLayout/FlightsNearYou/FlightNear1.jpg', days: "7 Nights / 8 Days", package: "All Inclusive Package", start: "Starts @", rate: "AED 4,199", solution: 'Egypt' },
        { slidename: 'hello slide', img: 'Images/NewHomeLayout/FlightsNearYou/FlightNear2Canada.jpg', days: "7 Nights / 8 Days", package: "All Inclusive Package", start: "Starts @", rate: "AED 4,199", solution: 'Canada' },
        { slidename: 'hello slide', img: 'Images/NewHomeLayout/FlightsNearYou/FlightNear2Iceland.jpg', days: "7 Nights / 8 Days", package: "All Inclusive Package", start: "Starts @", rate: "AED 4,199", solution: 'Iceland' },
        { slidename: 'hello slide', img: 'Images/NewHomeLayout/FlightsNearYou/FlightNear2Switzerland.jpg', days: "7 Nights / 8 Days", package: "All Inclusive Package", start: "Starts @", rate: "AED 4,199", solution: 'Switzerland' },
        { slidename: 'hello slide', img: 'Images/NewHomeLayout/FlightsNearYou/FlightNearIndonesia.jpg', days: "7 Nights / 8 Days", package: "All Inclusive Package", start: "Starts @", rate: "AED 4,199", solution: 'Indonesia' },
        { slidename: 'hello slide', img: 'Images/NewHomeLayout/FlightsNearYou/FlightNearMalaysia.jpg', days: "7 Nights / 8 Days", package: "All Inclusive Package", start: "Starts @", rate: "AED 4,199", solution: 'Malaysia' },
        { slidename: 'hello slide', img: 'Images/NewHomeLayout/FlightsNearYou/FlightNearSouthAfrica.jpg', days: "7 Nights / 8 Days", package: "All Inclusive Package", start: "Starts @", rate: "AED 4,199", solution: 'South Africa' },
        { slidename: 'hello slide', img: 'Images/NewHomeLayout/FlightsNearYou/FlightNearThailand.jpg', days: "7 Nights / 8 Days", package: "All Inclusive Package", start: "Starts @", rate: "AED 4,199", solution: 'Thailand' },
        { slidename: 'hello slide', img: 'Images/NewHomeLayout/FlightsNearYou/FlightNearVeitnam.jpg', days: "7 Nights / 8 Days", package: "All Inclusive Package", start: "Starts @", rate: "AED 4,199", solution: 'Veitnam' },
    ]
    return (
        <>
            <div className="popularDestinationsheadingdiv">
                <p>Popular Destinations</p>
                {/* <div className='newHomePopularDestinationDropContainer'> */}

                <select className="newHomePopularDestinationDropContainer" onChange={(e) => handlecounty(e)} >
                    <option style={{ textAlign: "Left" }}>Country</option>
                    {
                        countrydata.map((getcountry, index) => (
                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                        ))
                    }
                </select>

                {/* <div className='populardestinationsicondiv'>
                        <FaAngleDown style={{ fontSize: "15px" }} size={"1em"} className="populardestinationsicon" />
                    </div>
                </div> */}
            </div>
            <div className="mainCarouselDiv">
                <div className="sliderDiv">
                    <SliderWrapper>
                        <Slider {...settings}>
                            {slides.map((item, index) => (
                                <div className={index === slideindex ? 'populardestinationsslide populardestinationsslide-active' : 'populardestinationsslide'} key={index}>

                                    <div className='populardestinationimagestransition'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <h5>{item.solution}</h5>
                                    {/* <br/> */}
                                    <p>{item.days}</p>

                                    <h6>{item.package}</h6>

                                    <h3>{item.start}
                                        <span>
                                            <h4 className='newFlightsPrice'>{item.rate}</h4>
                                        </span>
                                    </h3>

                                </div>
                            ))}
                        </Slider>
                    </SliderWrapper>
                </div>
            </div>
        </>
    );
};



