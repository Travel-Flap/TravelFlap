import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewHotelBannerForm.css';
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


export const NewHotelCarouselForm = () => {
    return (
        <>
            {/* <Menu /> */}
            <div className='carouselnewHotelbannermenu'>

                <Link to="/flights" className='carouselnewHotelbannermenu-icon bottomupHotelclass1' id='borderLeftnewhomebanner'>
                    <MdFlight size={"2.8em"} className="carouselFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselnewHotelbannermenu-icon bottomupHotelclass2'>
                    <FaHotel size={"2.5em"} className="carouselFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselnewHotelbannermenu-icon bottomupHotelclass3' >
                    <RiVisaFill size={"2.5em"} className="carouselFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselnewHotelbannermenu-icon bottomupHotelclass4' >
                    <GiPalmTree size={"2.5em"} className="carouselFormicon" />
                    Holidays
                </Link>
                <Link to="/staycations" className='carouselnewHotelbannermenu-icon bottomupHotelclass5' >
                    <FaLaptopHouse size={"2.5em"} className="carouselFormicon" />
                    Staycations
                </Link>
                <Link to="/rentals" className='carouselnewHotelbannermenu-icon bottomupHotelclass6' >
                    <IoCarSportSharp size={"2.5em"} className="carouselFormicon" />
                    Rentals
                </Link>
                <Link to="/cruise" className='carouselnewHotelbannermenu-icon bottomupHotelclass7' >
                    <GiCruiser size={"2.5em"} className="carouselFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselnewHotelbannermenu-icon bottomupHotelclass8' >
                    <MdOutlineLocalActivity size={"2.5em"} className="carouselFormicon" />
                    Activities
                </Link>


                <div className='carouselnewHotelbannermenu-icon bottomupHotelclass9' id='borderrightnewhomebanner'>
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


            <div id='filter-newHotelPageTrave-container'>

                <div className='newHotelinputOptions'>
                    <div className='newHotelNameInput'>
                        <div className='hotelinputNameContainer'>
                            <input type="text" placeholder='Hotel Name' />
                        </div>
                        <BsSearch className='hotelInputicon' />
                    </div>

                    <div className='newHotelCheckIn_Date'>
                        {/* <div className='checkIn_Container'> */}
                        <input type="datetime-local" placeholder='Check-In Date' />
                        {/* </div> */}
                    </div>

                    <div className='newHotelCheckOut_Date'>
                        <input type="datetime-local" placeholder='Check-Out Date' />
                    </div>

                    <div className='newHotelGuestNumber'>
                        <div id='newHotelPage_departure'>
                            <h3>Travellers </h3>
                            {/* <FaAngleDown className='downHotelPagearrowicon' /> */}
                            <div className="dropdownnewHotelPage-content">
                                <div className='navbarnewHotelPageOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbarnewHotelPageOptions'>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbarnewHotelPageOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                            <BsPerson className='hotelGuestIcon' />
                        </div>
                    </div>
                </div>
                <div className='newHotel_checkmark'>
                    <input type="checkbox" className='flights_newHotelcheckbox' />
                    <label className='flights_newHotelcheckbox1'>Free Cancellation</label>
                    <input type="checkbox" className='flights_newHotelcheckbox' />
                    <label className='flights_newHotelcheckbox1'>5 Star Hotel</label>
                    <input type="checkbox" className='flights_newHotelcheckbox' />
                    <label className='flights_newHotelcheckbox1'> 3 Star Hotel</label>
                    <input type="checkbox" className='flights_newHotelcheckbox' />
                    <label className='flights_newHotelcheckbox1'> Defence Discount</label>
                    <button className='newHotelsearchbutton'>Search Hotel</button>
                </div>
            </div>
        </>
    )
}
