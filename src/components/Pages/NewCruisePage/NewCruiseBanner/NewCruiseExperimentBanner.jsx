import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import "./NewCruiseExperimentBanner";
import { ExperimentBannerForm, NewHomeCarouselForm } from './NewCruiseExperimentBannerForm';

export const NewCruiseExperimentBanner = () => {

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
                <div className='newhomebanner_main' >

                    {/* <Services /> */}

                    <Carousel fade data-interval="false">
                        <Carousel.Item className='experimentTopBannerdiv'>
                            <img
                                className="d-block w-100"
                                src="Images/NewHomeLayout/Banners/HomePage/worldmapbanner (2).jpg"
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
                                src="Images/NewHomeLayout/Banners/HomePage/Baneers 2.jpg"
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
                                src="Images/NewHomeLayout/Banners/HomePage/bannerimages.jpg"
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

            <div className='newHolidayBannerTexts' >
                <p> A Luxurious escape to cruise with 
                    <span>
                        <i>TravelFlap</i>
                    </span>
                </p>

            </div>

        </div>

    );
}





