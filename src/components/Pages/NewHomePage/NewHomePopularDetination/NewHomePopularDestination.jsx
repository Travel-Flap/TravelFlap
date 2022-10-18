
import React, { useState } from 'react';
import "./NewHomePopularDestination.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaAngleRight} from "react-icons/fa";
import countrydata from '../../../../CountryData.json';

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
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode: true,
        arrows: false,
        beforeChange: (current, next) => setSlideindex(next)
    };

    const slides = [
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/italy.jpg', desc:"Italy, a European country with a long Mediterranean coastline.", solution: 'Italy' },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/indonesia.jpg', desc:"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.", solution: 'Indonesia' },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/Rome.jpg', desc :"Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome.", solution: 'Rome' },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/thailand.jpg',desc:"Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces.", solution: "Thailand" },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/vietnam.jpg', desc:"Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas.", solution: 'Vietnam' },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/italy.jpg', desc:"Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas.", solution: 'Greece' },
    ]
    return (
        <>
            <div className="popularDestinationsheadingdiv">
                <p>Popular Destinations</p>
                {/* <div className="popularDestinationsselectoptions">
                    <select class="popularDestinationselect1">
                        <option>International</option>
                        <option>Domestic</option>
                    </select> */}

                    <div className='newHomePopularDestinationDropContainer'>
                        <select className="form-select newPopularDestinationCountryDrop" onChange={(e) => handlecounty(e)}
                            style={{ border: "3px solid #3380f2", width: "60%",appearance:"none" }}>
                            <option value="" style={{ textAlign: "center" }}>Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                        <div className='populardestinationsicondiv'>
                        <FaAngleRight style={{fontSize:"15px"}} size={"1em"} className="populardestinationsicon" />
                        </div>
                    </div>
            </div>
            <div className="mainCarouselDiv">
                <div className="sliderDiv">
                    <Slider {...settings}>
                        {slides.map((item, index) => (
                            <div className={index === slideindex ? 'populardestinationsslide populardestinationsslide-active' : 'populardestinationsslide'} key={index}>
                                <img src={item.img} alt="" />
                                <p>{item.desc}</p>
                                <h5>{item.solution}</h5>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};



