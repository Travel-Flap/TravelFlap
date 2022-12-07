import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewFlightBannerForm.css';
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

export const NewFlightBannerForm = () => {
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
                            <Link to='/trip' className='moreOptions'><GiPalmTree className='miceIcon' /> Trips </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='/offers' className='moreOptions'>   <FaTags className='offersIcon' /> Offers </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'> <FaShip className='inspireIcon' /> Top Deals </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div> */}


            <div id='filter-newFlightsPagetrave-container'>

                <div className='multiroundbuttons'>

                    {/* <select class="form-select" aria-label="Default select example">
                        <option selected>Choose</option>
                        <option value="1">One Way</option>
                        <option value="2">Two Way</option>
                        <option value="3">Round Trip</option>
                    </select> */}

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
                </div>

                <div className='newFlightsinputmaindiv'>
                    <div className='newFlightsDestinationInputContainer'>
                        <p>From</p>
                        <div className='newFlightsNameInput'>
                            {/* <BsSearch className='newFlightsInputicon' /> */}
                            <div className='newFlightsinputNameContainer'>
                                <input type="text" placeholder='Jaipur' />
                            </div>

                        </div>
                    </div>

                    <div className='newFlightsDestinationInputContainer1'>
                        <p>To</p>
                        <div className='newFlightsNameInput1'>
                            {/* <BsSearch className='newFlightsInputicon' /> */}
                            <div className='newFlightsinputNameContainer'>
                                <input type="text" placeholder='Delhi' />
                            </div>
                        </div>
                    </div>


                    <div className='newFlightsCheckIn_dateContainer'>
                        <p>Depart</p>
                        <input type="datetime-local" placeholder='Check-In Date' />
                        <div className='newFlight_chooseClass1'>
                            <select>
                                <option value>Choose Class</option>
                                <option value="1">Economy</option>
                                <option value="2">Business</option>
                                <option value="3">Premium</option>
                                <option value="3">First Class</option>
                            </select>
                        </div>
                    </div>

                    <div className='newFlightsCheckout_DateContainer'>
                        <p>Return</p>
                        <input type="datetime-local" placeholder='Check-Out Date' />
                        <div className='newFlight_chooseClass2'>
                            <select>
                                <option value>Choose Class</option>
                                <option value="1">Economy</option>
                                <option value="2">Business</option>
                                <option value="3">Premium</option>
                                <option value="3">First Class</option>
                            </select>
                        </div>
                    </div>

                    <div className='newFlightsGuest_outerDiv'>
                        <p>Travellers</p>
                        <div id='newFlightsPage_departure'>
                            <h5>Choose Travellers </h5>
                            {/* <FaAngleDown className='downHotelPagearrowicon' /> */}
                            <div className="dropdownnewFlightsPage-content">
                                <div className='navbarnewFlightPageOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbarnewFlightPageOptions '>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbarnewFlightPageOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                            <BsPerson className='newFlightHomeGuestIcon' />
                        </div>
                    </div>

                    <div className='newFlight_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                        
                    </div>
                </div>


            </div>
        </>
    )
}

