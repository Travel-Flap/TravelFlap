import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './RentalsInnerBannerForm.css';
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

export const RentalInnerBannerForm = () => {
    return (
        <>
            {/* <Menu /> */}
            {/* <NewHomeNav/> */}
            {/* <div className='carouselnewRentalsbannermenu'>

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
                            <Link to='/contact' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
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
            </div> */}

            {/* <div> */}


            <div id='filter_RentalsInnerPagetrave_container'>
                <h3 style={{marginLeft:"3%", marginTop:"1%", marginBottom:"2%"}}>Please Fill Details here</h3>


                <div className='rentalsInnerPageInputnputmaindiv'>
                    <div className='newRentalsDestinationInputContainer'>
                        <p>PickUp Location</p>
                        <div className='newRentalsNameInput'>
                            <BsSearch className='newRentalsInputicon' />
                            <div className='newRentalsInputNameContainer'>
                                <input type="text" placeholder='Enter Destination' />
                            </div>

                        </div>
                    </div>


                    <div className='newRentalsCheckIn_dateContainer'>
                        <p>Pickup Date/Time</p>
                        <input type="datetime-local" placeholder='Pickup Date/Time' />
                    </div>


                    <div className='newRentalsCheckout_DateContainer'>
                        <p>Drop off Date/Time</p>
                        <input type="datetime-local" placeholder='DropOff Date/Time' />
                    </div>

                    <div className='rentalsInnerPage_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>

            </div>
        </>
    )
}


