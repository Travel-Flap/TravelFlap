import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import "./NewRentalsBanner.css";
import { NewRentalBannerForm } from './NewRentalsBannerForm';

export const NewRentalBanner = () => {

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

            <div id='newActivitybanner_mainsection'>

                {/* This is for the Navbar section */}

                {/* This is for the Carousel */}
                <div className='newhomebanner_main' >

                    {/* <Services /> */}

                    <Carousel fade data-interval="false">
                        <Carousel.Item className='experimentTopBannerdiv'>
                            <img
                                className="d-block h-750 w-100"
                                src="Images/NewHomeLayout/Banners/Car Rental/Image 3.jpg"
                                alt="First slide"
                                style={{height:"100%"}}
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className='experimentTopBannerdiv'>
                            <img
                                className="d-block w-100"
                                src="Images/NewHomeLayout/Banners/Car Rental/image 2.jpg"
                                alt="Second slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item className='experimentTopBannerdiv'>
                            <img
                                className="d-block h-750 w-100"
                                src="Images/NewHomeLayout/Banners/Car Rental/image 1.jpg"
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

                    <NewRentalBannerForm />
                </div>

                {/* <Services /> */}
            </div>


            <div className='newHolidayBannerTexts' >
                <p> Your car rental partner -
                    <span>
                        <i>TravelFlap</i>
                    </span>
                </p>

            </div>

        </div>

    );
}





