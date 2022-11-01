// Tode is from aaradhana side


import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { Holidays } from '../Pages/Holidays/HolidayMainFile/Holidays';

// import { CarouselForm } from './Form.jsx';
// import "./Booking.css";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import "./NewHotelBanner.css";

import { BiTaxi } from "react-icons/bi";
import { FaHotel } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiDoubleStreetLights, GiCruiser, GiVillage } from "react-icons/gi";
import { TbScubaMask } from "react-icons/tb";
import { MdExpandMore } from "react-icons/md";
import NewHotelBanner from "./NewHotelBanner.gif";
// import { Nav } from '../Nav/Nav';
// import Booking from './Booking';
import { NewHotelCarouselForm } from './NewHotelBannerForm';

export const NewHotelCaruosel = () => {

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
        <div id='newHotelbanner_mainsection'>

            {/* This is for the Navbar section */}

            {/* This is for the Carousel */}
            <div className='newHotelbanner_main' data-interval="false">

                {/* <Services /> */}


                <Carousel className='newHotelbanner_mycarousel' data-interval="false" slide={true}>

                    <Carousel.Item>
                        <div className='newHotelbannerimage'>

                            <img
                                className="newHotelbannervideo d-block"
                                // src="Images/NewHomeLayout/NewHotelBanner/NewHotelBanner.gif"
                                src="Images/NewHomeLayout/Banners/Hotels/Image 3.jpg" 
                                alt="First slide"
                            />
                            
                        </div>
                        <Carousel.Caption>
                            {/* <h1>Travel</h1> */}
                            {/* <h2 className='bottomheading'>the world</h2>
              <div className="carouselbtn">Explore...</div> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='newHotelbannerimage'>

                            <img
                                className="newHotelbannervideo d-block"
                                // src="Images/NewHomeLayout/NewHotelBanner/NewHotelBanner.gif"
                                src="Images/NewHomeLayout/Banners/Hotels/Image 2.jpg" 
                                alt="First slide"
                            />
                            
                        </div>
                        <Carousel.Caption>
                            {/* <h1>Travel</h1> */}
                            {/* <h2 className='bottomheading'>the world</h2>
              <div className="carouselbtn">Explore...</div> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className='newHotelbannerimage'>

                            <img
                                className="newHotelbannervideo d-block"
                                // src="Images/NewHomeLayout/NewHotelBanner/NewHotelBanner.gif"
                                src="Images/NewHomeLayout/Banners/Hotels/Image 1.jpg" 
                                alt="First slide"
                            />
                            
                        </div>
                        <Carousel.Caption>
                            {/* <h1>Travel</h1> */}
                            {/* <h2 className='bottomheading'>the world</h2>
              <div className="carouselbtn">Explore...</div> */}
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

                <NewHotelCarouselForm />
            </div>
            <div className="newHotel_bannertitle">
                <p>Your comfort is our priority at -
                    <span>
                        <i>TravelFlap</i>
                    </span>
                    {/* Today. */}
                </p>
            </div>
            {/* <Services /> */}
        </div>

    );
}





