// export const NewHotelCarouselForm = () => {

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
    // import { NewHomeNav } from '../NewHomeNavbar/NewHomeNavbar';
    
    export const NewHotelCarouselForm = () => {
        return (
            <>
                {/* <Menu /> */}
                {/* <NewHomeNav/> */}
                <div className='carouselnewHotelBannermenu'>
    
                    <Link to="/flights" className='carouselnewHotelBannermenu-icon bottomupExperimentclass1' id='borderLeftnewhomebanner'>
                        <MdFlight size={"2.8em"} className="carouselFormicon" />
                        Flight
                    </Link>
                    <Link to="/hotel" className='carouselnewHotelBannermenu-icon bottomupExperimentclass2'>
                        <FaHotel size={"2.5em"} className="carouselFormicon" />
                        Hotel
                    </Link>
                    <Link to="/visa" className='carouselnewHotelBannermenu-icon bottomupExperimentclass3' >
                        <RiVisaFill size={"2.5em"} className="carouselFormicon" />
                        Visa
                    </Link>
                    <Link to="/holidays" className='carouselnewHotelBannermenu-icon bottomupExperimentclass4' >
                        <GiPalmTree size={"2.5em"} className="carouselFormicon" />
                        Holidays
                    </Link>
                    <Link to="/staycations" className='carouselnewHotelBannermenu-icon bottomupExperimentclass5' >
                        <FaLaptopHouse size={"2.5em"} className="carouselFormicon" />
                        Staycations
                    </Link>
                    <Link to="/rentals" className='carouselnewHotelBannermenu-icon bottomupExperimentclass6' >
                        <IoCarSportSharp size={"2.5em"} className="carouselFormicon" />
                        Rentals
                    </Link>
                    <Link to="/cruise" className='carouselnewHotelBannermenu-icon bottomupExperimentclass7' >
                        <GiCruiser size={"2.5em"} className="carouselFormicon" />
                        Cruise
                    </Link>
                    <Link to="/activities" className='carouselnewHotelBannermenu-icon bottomupExperimentclass8' >
                        <MdOutlineLocalActivity size={"2.5em"} className="carouselFormicon" />
                        Activities
                    </Link>
    
    
                    <div className='carouselnewHotelBannermenu-icon bottomupExperimentclass9' id='borderrightnewhomebanner'>
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
    
    
                <div id='filter-newHotelTrave-container'>
                    <div className='newHotelInputmaindiv'>
                        <div className='newHotelInputContainer'>
                            <h5>Enter Destination</h5>
                            <div className='newHotelNameInput'>
                                <BsSearch className='newHotelInputicon'/>
                                <div className='newHotelInputNameContainer'>
                                    <input type="text" placeholder='Search destination,Hotels' />
                                </div>
    
                            </div>
                        </div>
    
                        <div className='newHotelCheckIn_dateContainer'>
                            <h5>Checkin Date</h5>
                            <input type="datetime-local" placeholder='Check-In Date' />
                        </div>
    
                        <div className='newHotelCheckout_DateContainer'>
                            <h5>
                                Checkout Date</h5>
                            <input type="datetime-local" placeholder='Check-Out Date' />
                        </div>
    
                        <div className='newHotelGuest_outerDiv'>
                            <h5>Travellers</h5>
                            <div id='newHotel_departure'>
                                <h3>Choose travellers </h3>
                                {/* <FaAngleDown className='downHotelPagearrowicon' /> */}
                                <div className="dropdownNewHotel-content">
                                    <div className='navbarNewHotelPageOptions'>
                                        <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                    </div>
                                    <div className='navbarNewHotelPageOptions '>
                                        <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                    </div>
                                    <div className='navbarNewHotelPageOptions'>
                                        <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                    </div>
                                </div>
                                <BsPerson className='newHotelGuestIcon' />
                            </div>
                        </div>
    
                        <div className='newHotel_SearchButton'>
                            <button type="button" class="btn btn-primary">Search</button>
                        </div>
                    </div>
    
                </div>
            </>
        )
    }
    