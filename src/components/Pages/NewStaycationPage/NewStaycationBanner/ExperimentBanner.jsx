// Tode is from aaradhana side


import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { Holidays } from '../Pages/Holidays/HolidayMainFile/Holidays';

// import { CarouselForm } from './Form.jsx';
// import "./Booking.css";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import "./ExperimentBanner.css";

import { BiTaxi } from "react-icons/bi";
import { FaHotel } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiDoubleStreetLights, GiCruiser, GiVillage } from "react-icons/gi";
import { TbScubaMask } from "react-icons/tb";
import { MdExpandMore } from "react-icons/md";
import NewHomeBanner from "./NewHomeBanner.gif";
// import { Nav } from '../Nav/Nav';
// import Booking from './Booking';
import { ExperimentBannerForm, NewHomeCarouselForm } from './ExperimentBannerForm';
import { ExperimentCarouselText } from './ExperimentCarouselText';

export const ExperimentBanner = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className="main-main">

            <div id='newhomebanner_mainsection'>

                {/* This is for the Navbar section */}

                {/* This is for the Carousel */}
                <div className='newhomebanner_main'>

                    {/* <Services /> */}

                    <Carousel fade data-interval="false">
                        <Carousel.Item className='experimentTopBannerdiv'>
                            <img
                                className="d-block w-100"
                                src="Images/NewHomeLayout/ExperimentBanner/bannerimages.jpg"
                                alt="First slide"
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className='experimentTopBannerdiv'>
                            <img
                                className="d-block w-100"
                                src="Images/NewHomeLayout/ExperimentBanner/Banners1.jpg"
                                alt="Second slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className='experimentTopBannerdiv'>
                            <img
                                className="d-block w-100"
                                src="Images/NewHomeLayout/ExperimentBanner/Baneers 2.jpg"
                                alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>

                    <ExperimentBannerForm />
                </div>

                {/* <Services /> */}
            </div>

            <div className='apnatext' >
                <p>Planning a Staycation? contact 
                    <span>
                        <i>TravelFlap</i>
                    </span>
                </p>

            </div>

        </div>

    );
}





