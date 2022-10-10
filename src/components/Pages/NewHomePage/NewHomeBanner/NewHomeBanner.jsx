// Tode is from aaradhana side


import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import { Holidays } from '../Pages/Holidays/HolidayMainFile/Holidays';

// import { CarouselForm } from './Form.jsx';
// import "./Booking.css";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import "./NewHomeBanner.css";

import { BiTaxi } from "react-icons/bi";
import { FaHotel } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiDoubleStreetLights, GiCruiser, GiVillage } from "react-icons/gi";
import { TbScubaMask } from "react-icons/tb";
import { MdExpandMore } from "react-icons/md";
import NewHomeBanner from "./NewHomeBanner.gif";
// import { Nav } from '../Nav/Nav';
// import Booking from './Booking';
import { NewHomeCarouselForm } from './NewHomeBannerForm';

export const NewHomeCaruosel = () => {

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
        <div id='newhomebanner_mainsection'>

            {/* This is for the Navbar section */}

            {/* This is for the Carousel */}
            <div className='newhomebanner_main' data-interval="false">

                {/* <Services /> */}


                <Carousel className='newhomebanner_mycarousel' data-interval="false" slide={true}>

                    <Carousel.Item>
                        <div className='newhomebannerimage'>

                            <img
                                className="newhomebannervideo d-block"
                                // src="Images/NewHomeLayout/NewHomeBanner/NewHomeBanner.gif"
                                src={NewHomeBanner}
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

                <NewHomeCarouselForm />
            </div>
            <div className="newhome_bannertitle">
                <p>The whole world Awaits with 
                    <span>
                        <i>TravelFlap</i>
                    </span>
                    
                </p>
            </div>
            {/* <Services /> */}
        </div>

    );
}





