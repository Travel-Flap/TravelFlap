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
import countrydata from '../../../../CountryData.json';

export const ActivityBannerForm = () => {

    const [countryid, setCountryid] = useState('');
    const [state, setState] = useState([]);
    const [stateid, setStateid] = useState('');

    const handlecounty = (e) => {
        const getcountryId = e.target.value;
        const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
        setState(getStatedata);
        setCountryid(getcountryId);
        //console.log(getcountryId);
    }

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


            <div id='filter-newActivityTrave-container'>

                {/* <div className='newCruiseinputOptions'>
                    <div className='newCruiseNameInput'>
                        <div className='cruiseinputNameContainer'>
                            <input type="text" placeholder='Cruise' />
                        </div>
                        <BsSearch className='cruiseInputicon' />
                    </div>

                    <div className='newCruiseCheckIn_Date'>
                       
                        <input type="datetime-local" placeholder='Check-In Date' />
                        
                    </div>

                    <div className='newCruiseCheckOut_Date'>
                        <input type="datetime-local" placeholder='Check-Out Date' />
                    </div>

                    <div className='newHotelGuestNumber'>
                        <div id='newCruisePage_departure'>
                            <h3>Travellers </h3>
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
                </div> */}
                <div className='filter-newActivityTrave-container'>
                        <select className="form-select newActivityCountryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
                            style={{ width: "60%",fontWeight:"700" }}>
                            <option value="" >Country</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>

                        <select className="form-select newActivityCityDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
                            style={{ width: "60%",fontWeight:"700" }}>
                            <option value="" >City</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>

                        <select className="form-select newActivityCategoryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
                            style={{ width: "60%",fontWeight:"700" }}>
                            <option value="" >Category</option>
                            {
                                countrydata.map((getcountry, index) => (
                                    <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                ))
                            }
                        </select>
                </div>


                <div className='newActivity_checkmark'>
                    <input type="checkbox" className='flights_newActivitycheckbox' />
                    <label className='flights_newActivitycheckbox1'>Free Cancellation</label>
                    <input type="checkbox" className='flights_newActivitycheckbox' />
                    <label className='flights_newActivitycheckbox1'>5 Star Hotel</label>
                    <input type="checkbox" className='flights_newActivitycheckbox' />
                    <label className='flights_newActivitycheckbox1'> 3 Star Hotel</label>
                    <input type="checkbox" className='flights_newActivitycheckbox' />
                    <label className='flights_newActivitycheckbox1'> Defence Discount</label>
                    <button className='newCruisesearchbutton'>Search</button>
                </div>
            </div>
        </>
    )
}