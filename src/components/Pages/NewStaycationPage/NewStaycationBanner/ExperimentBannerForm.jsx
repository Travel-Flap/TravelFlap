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
// import { NewHomeNav } from '../NewHomeNavbar/NewHomeNavbar';

export const ExperimentBannerForm = () => {
    return (
        <>
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
                            <Link to='' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
                        </div>
                        <div className='moreOptions'>
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


            <div id='filter-newStaycationsPagetrave-container'>

       <div className='newStaycationsinputmaindiv'>
            <div className='newStaycationsDestinationInputContainer'>
                <p>Search</p>
                <div className='newStaycationsNameInput'>
                    <div className='newStaycationsinputNameContainer'>
                        <BsSearch size={"1.5em"} style={{color:"black",marginLeft:"4%"}}/> <input type="text" placeholder='Search for Destination' />
                    </div>

                </div>
            </div>

    <div className='newStaycationsCheckIn_dateContainer'>
        <p>Depart</p>
        <input type="datetime-local" placeholder='Check-In Date' />
    </div>

    <div className='newStaycationsCheckout_DateContainer'>
        <p>Return</p>
        <input type="datetime-local" placeholder='Check-Out Date' />
    </div>

    <div className='newStaycationsGuest_outerDiv'>
        <p>Travellers</p>
        <div id='newStaycationsPage_departure'>
            <h5>Choose Travellers </h5>
            <div className="dropdownnewStaycationPage-content">
                <div className='navbarnewStaycationPageOptions'>
                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                </div>
                <div className='navbarnewStaycationPageOptions '>
                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                </div>
                <div className='navbarnewStaycationPageOptions'>
                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                </div>
            </div>
            <BsPerson className='newStaycationHomeGuestIcon' />
        </div>
    </div>

    <div className='newStaycation_SearchButton'>
        <button type="button" class="btn btn-primary">Search</button>
    </div>
</div>

</div>
        </>
    )
}
