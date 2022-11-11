import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewRentalsBannerForm.css';
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
// import { NewHomeNav } from '../NewHomeNavbar/NewHomeNavbar';

export const NewRentalBannerForm = () => {
    return (
        <>
            {/* <Menu /> */}
            {/* <NewHomeNav/> */}
            <div className='carouselnewRentalsbannermenu'>

                <Link to="/flights" className='carouselnewRentalsbannermenu-icon bottomupExperimentclass1' id='borderLeftnewhomebanner'>
                    <MdFlight size={"2.8em"} className="carouselRentalsFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselnewRentalsbannermenu-icon bottomupExperimentclass2'>
                    <FaHotel size={"2.5em"} className="carouselRentalsFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselnewRentalsbannermenu-icon bottomupExperimentclass3' >
                    <RiVisaFill size={"2.5em"} className="carouselRentalsFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselnewRentalsbannermenu-icon bottomupExperimentclass4' >
                    <GiPalmTree size={"2.5em"} className="carouselRentalsFormicon" />
                    Holidays
                </Link>
                <Link to="/staycations" className='carouselnewRentalsbannermenu-icon bottomupExperimentclass5' >
                    <FaLaptopHouse size={"2.5em"} className="carouselRentalsFormicon" />
                    Staycations
                </Link>
                <Link to="/rentals" className='carouselnewRentalsbannermenu-icon bottomupExperimentclass6' >
                    <IoCarSportSharp size={"2.5em"} className="carouselRentalsFormicon" />
                    Rentals
                </Link>
                <Link to="/cruise" className='carouselnewRentalsbannermenu-icon bottomupExperimentclass7' >
                    <GiCruiser size={"2.5em"} className="carouselRentalsFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselnewRentalsbannermenu-icon bottomupExperimentclass8' >
                    <MdOutlineLocalActivity size={"2.5em"} className="carouselRentalsFormicon" />
                    Activities
                </Link>


                <div className='carouselnewRentalsbannermenu-icon bottomupExperimentclass9' id='borderrightnewhomebanner'>
                    <CgMoreAlt size={"2.5em"} />
                    More

                    <div className='newRentalmoredropdownbannercontent'>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
                        </div>
                        <div className='moreOptions '>
                            <Link to='' className='moreOptions'><GiPalmTree className='miceIcon' />  Safe Stay </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'>   <FaTags className='offersIcon' /> Offers </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'> <FaShip className='inspireIcon' /> Top Deals </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div> */}


            <div id='filter-newRentalsPagetrave-container'>

                {/* <div className='multiroundbuttons'>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">One Way</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Two Way</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                        <label class="form-check-label" for="inlineRadio3">Round Trip</label>
                    </div>
                </div> */}

                <div className='newRentalsInputnputmaindiv'>
                    <div className='newRentalsDestinationInputContainer'>
                        <p>PickUp Location</p>
                        <div className='newRentalsNameInput'>
                            <BsSearch className='newRentalsInputicon' />
                            <div className='newRentalsInputNameContainer'>
                                <input type="text" placeholder='Enter Destination' />
                            </div>

                        </div>
                    </div>

                    {/* <div className='newRentalsDestinationInputContainer1'>
                        <p>To</p>
                        <div className='newRentalsNameInput1'>
                            <BsSearch className='newRentalsInputicon' />
                            <div className='newRentalsInputNameContainer'>
                                <input type="text" placeholder='Delhi' />
                            </div>

                        </div>
                    </div> */}


                    <div className='newRentalsCheckIn_dateContainer'>
                        <p>Pickup Date/Time</p>
                        <input type="datetime-local" placeholder='Pickup Date/Time' />
                    </div>


                    <div className='newRentalsCheckout_DateContainer'>
                        <p>Drop off Date/Time</p>
                        <input type="datetime-local" placeholder='DropOff Date/Time' />
                    </div>

                    <div className='newRentals_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>

                {/* <div className='multiCheckboxButtons'>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label class="form-check-label" for="inlineCheckbox1">Family Trip</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label class="form-check-label" for="inlineCheckbox2">Romantic Trip</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label class="form-check-label" for="inlineCheckbox3">Friends Trip</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" />
                        <label class="form-check-label" for="inlineCheckbox3">Solo Trip</label>
                    </div>
                </div> */}

            </div>
        </>
    )
}


