import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './CarouselForm.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaAccessibleIcon, FaCalendarAlt } from 'react-icons/fa';
import { Menu } from './Menu.jsx';
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaPlusCircle, FaMinusCircle, FaArrowCircleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';
import { FaShip, FaPhoneAlt, FaTags } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { GrBus } from 'react-icons/gr';
import { GiCruiser } from 'react-icons/gi';
import { BsFillMoonFill } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const CarouselForm = () => {
    return (
        <>
            {/* <Menu /> */}
            <div className='carouselmenu'>

                <Link to="/flights" className='carouselmenu-icon' id='borderLeft'>
                    <MdFlight size={"1.9em"} className="carouselFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselmenu-icon'>
                    <FaHotel size={"1.9em"} className="carouselFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselmenu-icon' >
                    <RiVisaFill size={"1.9em"} className="carouselFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselmenu-icon' >
                    <GiPalmTree size={"1.9em"} className="carouselFormicon" />
                    Holidays
                </Link>
                <Link to="/Villa" className='carouselmenu-icon' >
                    <FaLaptopHouse size={"1.9em"} className="carouselFormicon" />
                    Villas
                </Link>
                <Link to="/cruise" className='carouselmenu-icon' >
                    <GiCruiser size={"1.9em"} className="carouselFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselmenu-icon' >
                    <MdOutlineLocalActivity size={"1.9em"} className="carouselFormicon" />
                    Activities
                </Link>


                <div className='carouselmenu-icon' id='borderright'>
                    <CgMoreAlt size={"1.9em"} />
                    More

                    <div className='moredropdowncontent'>
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


            <div id='filter-travel-container'>
                <div className='chooseoptions'>
                    <input type="radio" className='chooseoptions1' />
                    <label className='radiodesc'>One Way</label>
                    <input type="radio" className='chooseoptions2' />
                    <label className='radiodesc'>Round Trip</label>
                    <input type="radio" className='chooseoptions3' />
                    <label className='radiodesc'>Multi Trip</label>
                </div>
                <div className='maindatesections' style={{ boreder: "10px solid red" }}>
                    <div className='filter-fromTo'>
                        <div className='from-name'>
                            <h5>FROM</h5>
                            <input className='cityinput' type="search" placeholder="Jaipur" />
                            {/* <p>[AUH] Abu Dhabi International </p> */}
                        </div>
                        {/* <BiCurrentLocation className='location' /> */}
                        <div className='from-name2'>
                            <h5>TO </h5>
                            <input className='cityinput' type="search" placeholder="Delhi" />
                            {/* <p>[DXB] Dubai</p> */}
                        </div>
                    </div>


                    <div id='formdates'>
                        <div className='selectdate'>
                            <h5>Departure</h5>
                            <DatePicker style={{ border: "none" }} placeholderText='Departure' id='dateonewayform' />
                        </div>
                        <div id='selectReturndate1'>
                            <h5>Return</h5>
                            <DatePicker placeholderText='Return' id='dateonewayform' />
                        </div>
                    </div>
                    <div id='travel' >
                        <div id='departure'>
                            <h3>Choose Passengers <FaArrowCircleDown className='downarrowicon' /></h3>
                            <div className="dropdown-content">
                                <div className='navbarOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbarOptions '>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbarOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                        </div>

                        <button className='searchbtn'>Search Flight</button>

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

                </div>
            </div>
        </>
    )
}
