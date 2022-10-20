
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
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode: true,
        arrows: false,
        beforeChange: (current, next) => setSlideindex(next)
    };

    const slides = [
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/indonesia.jpg', days: "7 Nights / 8 Days", package:"All Inclusive Package",start:"Starts @",rate:"AED 4,199", solution: 'Indonesia' },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/indonesia.jpg', days: "7 Nights / 8 Days", package:"All Inclusive Package",start:"Starts @",rate:"AED 4,199", solution: 'Indonesia' },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/indonesia.jpg', days: "7 Nights / 8 Days", package:"All Inclusive Package",start:"Starts @",rate:"AED 4,199", solution: 'Indonesia' },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/indonesia.jpg', days: "7 Nights / 8 Days", package:"All Inclusive Package",start:"Starts @",rate:"AED 4,199", solution: 'Indonesia' },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/indonesia.jpg', days: "7 Nights / 8 Days", package:"All Inclusive Package",start:"Starts @",rate:"AED 4,199", solution: 'Indonesia' },
        { slidename: 'hello slide', img: 'Images/PopularDestinationImages/indonesia.jpg', days: "7 Nights / 8 Days", package:"All Inclusive Package",start:"Starts @",rate:"AED 4,199", solution: 'Indonesia' },
    ]
    return (
        <>
            <div className="popularDestinationsheadingdiv">
                <p>Popular Destinations</p>
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
                               
                               <div className='populardestinationimagestransition'>
                                 <img  src={item.img} alt="" /> 
                               </div>
                               <h5>{item.solution}</h5>
                               <br/>
                               <h6>{item.days}</h6>
                               <br/>
                               <br/>
                               <p>{item.package}</p>
                               <br/>
                               <h3>{item.start}</h3>
                               <br/>
                               <h4>{item.rate}</h4>
                               <br/>
                               
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};



