import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewActivityBannerForm.css';
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

export const ActivityBannerForm = () => {
    return (
        <>
            {/* <Menu /> */}
            {/* <NewHomeNav/> */}
            <div className='carouselnewActivityBannermenu'>

                <Link to="/flights" className='carouselnewActivityBannermenu-icon bottomupExperimentclass1' id='borderLeftnewhomebanner'>
                    <MdFlight size={"2.8em"} className="carouselFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselnewActivityBannermenu-icon bottomupExperimentclass2'>
                    <FaHotel size={"2.5em"} className="carouselFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselnewActivityBannermenu-icon bottomupExperimentclass3' >
                    <RiVisaFill size={"2.5em"} className="carouselFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselnewActivityBannermenu-icon bottomupExperimentclass4' >
                    <GiPalmTree size={"2.5em"} className="carouselFormicon" />
                    Holidays
                </Link>
                <Link to="/staycations" className='carouselnewActivityBannermenu-icon bottomupExperimentclass5' >
                    <FaLaptopHouse size={"2.5em"} className="carouselFormicon" />
                    Staycations
                </Link>
                <Link to="/rentals" className='carouselnewActivityBannermenu-icon bottomupExperimentclass6' >
                    <IoCarSportSharp size={"2.5em"} className="carouselFormicon" />
                    Rentals
                </Link>
                <Link to="/cruise" className='carouselnewActivityBannermenu-icon bottomupExperimentclass7' >
                    <GiCruiser size={"2.5em"} className="carouselFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselnewActivityBannermenu-icon bottomupExperimentclass8' >
                    <MdOutlineLocalActivity size={"2.5em"} className="carouselFormicon" />
                    Activities
                </Link>


                <div className='carouselnewActivityBannermenu-icon bottomupExperimentclass9' id='borderrightnewhomebanner'>
                    <CgMoreAlt size={"2.5em"} />
                    More

                    <div className='newHomemoredropdownbannercontent'>
                        <div className='moreOptions'>
                            <Link to='/contact' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
                        </div>
                        <div className='moreOptions'>
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


            <div id='filter-newActivityTrave-container'>
                <div className='newActivityInputmaindiv'>
                    <div className='newActivityDestinationInputContainer'>
                        <div className='newActivityNameInput'>
                            <BsSearch className='newActivityInputicon'/>
                            <div className='newActivityInputNameContainer'>
                                <input type="text" placeholder='Search destination,Hotels' />
                            </div>

                        </div>
                    </div>

                    <div className='newActivityCheckIn_dateContainer'>
                        <input type="datetime-local" placeholder='Check-In Date' />
                    </div>

                    <div className='newActivityCheckout_DateContainer'>
                        <input type="datetime-local" placeholder='Check-Out Date' />
                    </div>

                    <div className='newActivityGuest_outerDiv'>
                        <div id='newActivity_departure'>
                            <h3>Travellers </h3>
                            {/* <FaAngleDown className='downHotelPagearrowicon' /> */}
                            <div className="dropdownNewActivity-content">
                                <div className='navbarNewActivityPageOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbarNewActivityPageOptions '>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbarNewActivityPageOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                            <BsPerson className='newActivityGuestIcon' />
                        </div>
                    </div>

                    <div className='newActivity_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>

            </div>
        </>
    )
}
