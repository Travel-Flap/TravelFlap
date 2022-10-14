import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './ExperimentBannerForm.css';
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaPlusCircle, FaMinusCircle, FaAngleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';
import { FaShip, FaPhoneAlt, FaTags } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { GrBus } from 'react-icons/gr';
import { GiCruiser } from 'react-icons/gi';
import { BsFillMoonFill } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg';

import { IoCarSportSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AiFillCalendar } from "react-icons/ai";
import { BsSearch, BsPerson } from "react-icons/bs";
import { NewHomeNav } from '../NewHomeNavbar/NewHomeNavbar';

export const ExperimentBannerForm = () => {
    return (
        <>
            {/* <Menu /> */}
            {/* <NewHomeNav/> */}
            <div className='carouselnewExperimentbannermenu'>

                <Link to="/flights" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass1' id='borderLeftnewhomebanner'>
                    <MdFlight size={"2.8em"} className="carouselFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass2'>
                    <FaHotel size={"2.5em"} className="carouselFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass3' >
                    <RiVisaFill size={"2.5em"} className="carouselFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass4' >
                    <GiPalmTree size={"2.5em"} className="carouselFormicon" />
                    Holidays
                </Link>
                <Link to="/staycations" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass5' >
                    <FaLaptopHouse size={"2.5em"} className="carouselFormicon" />
                    Staycations
                </Link>
                <Link to="/rentals" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass6' >
                    <IoCarSportSharp size={"2.5em"} className="carouselFormicon" />
                    Rentals
                </Link>
                <Link to="/cruise" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass7' >
                    <GiCruiser size={"2.5em"} className="carouselFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass8' >
                    <MdOutlineLocalActivity size={"2.5em"} className="carouselFormicon" />
                    Activities
                </Link>


                <div className='carouselnewExperimentbannermenu-icon bottomupExperimentclass9' id='borderrightnewhomebanner'>
                    <CgMoreAlt size={"2.5em"} />
                    More

                    <div className='newHomemoredropdownbannercontent'>
                        <div className='moreOptions'>
                            <Link to='/contact' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
                        </div>
                        <div className='moreOptions '>
                            <Link to='/mice' className='moreOptions'><GiPalmTree className='miceIcon' />  Mice </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='/offers' className='moreOptions'>   <FaTags className='offersIcon' /> Offers </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='/inspire' className='moreOptions'> <FaShip className='inspireIcon' /> Inspire </Link>
                        </div>
                    </div>

                </div>
            </div>


            <div id='filter-newhomepagetrave-container'>

                <div className='experimentinputmaindiv'>
                    <div className='experimentDestinationInputContainer'>
                        <div className='newExperimentNameInput'>
                            <BsSearch className='experimentInputicon' />
                            <div className='experimentinputNameContainer'>
                                <input type="text" placeholder='Search destination,Hotels' />
                            </div>

                        </div>
                    </div>

                    <div className='experimentCheckIn_dateContainer'>
                        <input type="datetime-local" placeholder='Check-In Date' />
                    </div>

                    <div className='experimentCheckout_DateContainer'>
                        <input type="datetime-local" placeholder='Check-Out Date' />
                    </div>

                    <div className='experimentGuest_outerDiv'>

                        <div id='newHomePage_departure'>
                            <h3>Travellers </h3>
                            {/* <FaAngleDown className='downHotelPagearrowicon' /> */}
                            <div className="dropdownnewHotelPage-content">
                                <div className='navbarnewHotelPageOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbarnewHotelPageOptions '>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbarnewHotelPageOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                            <BsPerson className='experimentHomeGuestIcon' />
                        </div>
                    </div>

                    <div className='experiment_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>


                {/* <div className='choosenewhomebanneroptions'>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">One Way</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Round Trip</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">Multi Trip</label>
                    </div>
                </div>
                <div className='mainnewhomedatesections'>
                    <div className='filternewhomebanner-fromTo'>
                        <div className='fromnewhomebanner-name'>
                            <h5>FROM</h5>
                            <input className='citynewhomebannerinput1' type="search" placeholder="Jaipur" />
                        </div>
                        <div className='fromnewhomebanner-name2'>
                            <h5>TO </h5>
                            <input className='citynewhomebannerinput2' type="search" placeholder="Delhi" />
                        </div>
                    </div>


                    <div id='formnewhomepagedates'>
                        <div className='selectnewhomepagedate'>
                            <h5>Departure <AiFillCalendar /></h5>
                            <DatePicker placeholderText='Departure' id='dateonewaynewhomebannerform' />
                        </div>
                        <div id='selectnewhomepageReturndate1'>
                            <h5>Return <AiFillCalendar /></h5>
                            <DatePicker placeholderText='Return' id='dateonewaynewhomebannerform' />
                        </div>
                    </div>

                    <div id='newhomepagetrave' >
                        <div id='newhomepage_departure'>
                            <h3>Travellers <FaAngleDown className='downarrowicon' /></h3>
                            <div className="dropdownnewhomepage-content">
                                <div className='navbarnewhomepageOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbarnewhomepageOptions '>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbarnewhomepageOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                        </div>


                    </div>
                </div> */}

                {/* <div className='checkmark'>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'>Flights You've searched for</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'>Flights from Jaipur</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'> Direct Flight</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'> Defence fare</label>
                    <button className='newhomesearchbutton'>Search Flight</button>
                </div> */}
            </div>
        </>
    )
}
