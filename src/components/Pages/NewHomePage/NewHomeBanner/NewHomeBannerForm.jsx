import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewHomeBannerForm.css';
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

export const NewHomeCarouselForm = () => {
    return (
        <>
            {/* <Menu /> */}
            <div className='carouselnewhomebannermenu'>

                <Link to="/flights" className='carouselnewhomebannermenu-icon bottomupclass1' id='borderLeftnewhomebanner'>
                    <MdFlight size={"2.8em"} className="carouselFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselnewhomebannermenu-icon bottomupclass2'>
                    <FaHotel size={"2.5em"} className="carouselFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselnewhomebannermenu-icon bottomupclass3' >
                    <RiVisaFill size={"2.5em"} className="carouselFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselnewhomebannermenu-icon bottomupclass4' >
                    <GiPalmTree size={"2.5em"} className="carouselFormicon" />
                    Holidays
                </Link>
                <Link to="/staycations" className='carouselnewhomebannermenu-icon bottomupclass5' >
                    <FaLaptopHouse size={"2.5em"} className="carouselFormicon" />
                    Staycations
                </Link>
                <Link to="/rentals" className='carouselnewhomebannermenu-icon bottomupclass6' >
                    <IoCarSportSharp size={"2.5em"} className="carouselFormicon" />
                    Rentals
                </Link>
                <Link to="/cruise" className='carouselnewhomebannermenu-icon bottomupclass7' >
                    <GiCruiser size={"2.5em"} className="carouselFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselnewhomebannermenu-icon bottomupclass8' >
                    <MdOutlineLocalActivity size={"2.5em"} className="carouselFormicon" />
                    Activities
                </Link>


                <div className='carouselnewhomebannermenu-icon bottomupclass9' id='borderrightnewhomebanner'>
                    <CgMoreAlt size={"2.5em"} />
                    More

                    <div className='newHomemoredropdownbannercontent'>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
                        </div>
                        <div className='moreOptions '>
                            <Link to='' className='moreOptions'><GiPalmTree className='miceIcon' />  Mice </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'>   <FaTags className='offersIcon' /> Offers </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'> <FaShip className='inspireIcon' /> Inspire </Link>
                        </div>
                    </div>

                </div>
            </div>


            <div id='filter-newHotelPagetrave-container'>
                <div className='choosenewhomebanneroptions'>
                    {/* <button type="button" class="onewaybutton btn btn-outline-secondary">One Way</button>
                    <button type="button" class="roundtripbutton btn btn-outline-secondary">Round Trip</button>
                    <button type="button" class="multiwaybutton btn btn-outline-secondary">Multi Trip</button> */}
                    {/* <input type="radio" className='choosenewhomebanneroptions1' />
                    <label className='radiodesc' for="flexRadioDefault1">One Way</label>
                    <input type="radio" className='choosenewhomebanneroptions2' />
                    <label className='radiodesc' for="flexRadioDefault2">Round Trip</label>
                    <input type="radio" className='choosenewhomebanneroptions3' />
                    <label className='radiodesc' for="flexRadioDefault3">Multi Trip</label> */}

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
                            {/* <p>[AUH] Abu Dhabi International </p> */}
                        </div>
                        {/* <BiCurrentLocation className='location' /> */}
                        <div className='fromnewhomebanner-name2'>
                            <h5>TO </h5>
                            <input className='citynewhomebannerinput2' type="search" placeholder="Delhi" />
                            {/* <p>[DXB] Dubai</p> */}
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

                    <div id='newhomepagetrave'>
                        <div id='newhomepage_departure'>
                            <h3>Travellers <FaAngleDown className='downarrowicon' /></h3>
                            {/* <input className='newhometravellers' type="search" placeholder="5" /> */}
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

                        {/* <button className='searchbtn'>Search Flight</button> */}

                    </div>
                </div>

                <div className='checkmark'>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'>Flights You've searched for</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'>Flights from Jaipur</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'> Direct Flight</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'> Defence fare</label>
                    <button className='newhomesearchbutton'>Search Flight</button>
                </div>
            </div>
        </>
    )
}
