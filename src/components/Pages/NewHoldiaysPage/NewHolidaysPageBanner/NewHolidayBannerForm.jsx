import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewHolidayBannerForm.css';
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
import countrydata from '../../../../CountryData.json';
// import { NewHomeNav } from '../NewHomeNavbar/NewHomeNavbar';

export const NewHolidayBannerForm = () => {

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

    const handlestate = (e) => {
        const stateid = e.target.value;
        //console.log(stateid);
        setStateid(stateid);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Get Country id" + countryid + " And " + stateid);
    }
    return (
        <>
            {/* <Menu /> */}
            {/* <NewHomeNav/> */}
            <div className='carouselnewHolidaysbannermenu'>

                <Link to="/flights" className='carouselnewHolidaysbannermenu-icon bottomupHolidaysclass1' id='borderLeftnewhomebanner'>
                    <MdFlight size={"2.8em"} className="carouselFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselnewHolidaysbannermenu-icon bottomupHolidaysclass2'>
                    <FaHotel size={"2.5em"} className="carouselFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselnewHolidaysbannermenu-icon bottomupHolidaysclass3' >
                    <RiVisaFill size={"2.5em"} className="carouselFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselnewHolidaysbannermenu-icon bottomupHolidaysclass4' >
                    <GiPalmTree size={"2.5em"} className="carouselFormicon" />
                    Holidays
                </Link>
                <Link to="/staycations" className='carouselnewHolidaysbannermenu-icon bottomupHolidaysclass5' >
                    <FaLaptopHouse size={"2.5em"} className="carouselFormicon" />
                    Staycations
                </Link>
                <Link to="/rentals" className='carouselnewHolidaysbannermenu-icon bottomupHolidaysclass6' >
                    <IoCarSportSharp size={"2.5em"} className="carouselFormicon" />
                    Rentals
                </Link>
                <Link to="/cruise" className='carouselnewHolidaysbannermenu-icon bottomupHolidaysclass7' >
                    <GiCruiser size={"2.5em"} className="carouselFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselnewHolidaysbannermenu-icon bottomupHolidaysclass8' >
                    <MdOutlineLocalActivity size={"2.5em"} className="carouselFormicon" />
                    Activities
                </Link>


                <div className='carouselnewHolidaysbannermenu-icon bottomupHolidaysclass9' id='borderrightnewhomebanner'>
                    <CgMoreAlt size={"2.5em"} />
                    More

                    <div className='newHomemoredropdownbannercontent'>
                        <div className='moreOptions'>
                            <Link to='/contact' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
                        </div>
                        <div className='moreOptions '>
                            <Link to='/mice' className='moreOptions'><GiPalmTree className='miceIcon' />  Safe Stay </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='/offers' className='moreOptions'>   <FaTags className='offersIcon' /> Offers </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='/inspire' className='moreOptions'> <FaShip className='inspireIcon' /> Top Deals </Link>
                        </div>
                    </div>

                </div>
            </div>


            <div id='filter-newHolidaysTrave-container'>

                <div className='newHolidaysinputmaindiv'>
                    <div className='newHolidayDestinationInputContainer'>
                        <div className='newHolidaysNameInput'>
                            <h5>Enter Destination</h5>
                            <div className='newHolidaysinputNameContainer'>
                                <BsSearch className='newHolidaysInputicon' />
                                <input type="text" placeholder='Search destination' />
                            </div>
                        </div>
                    </div>

                    <div className='newHolidaysBannerMultiInput'>

                        <div className='innerNewHolidaydropdowncontainer2'>
                            <div className='optionsNewHolidaysBannercontainer'>
                                <div className='singleNewHolidaysBannerdropcontainer'>
                                    <h5>Select Country</h5>
                                    <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example" style={{color:"grey",fontSize:"15px",width: "60%", border: "2px solid #dddddd78" }}>
                                        <option value="" style={{ textAlign: "center" }}>Select Country</option>
                                        {
                                            countrydata.map((getcountry, index) => (
                                                <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className='singleNewHolidaysBannerdropcontainer1'>
                                    <h5>Select State</h5>
                                    <select className="form-select holidayform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{color:"grey",fontSize:"15px", width: "100%", border: "2px solid #dddddd78" }}>
                                        <option value="" style={{ textAlign: "center" }}>Select State</option>
                                        {
                                            state.map((getstate, index) => (
                                                <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div className='singleNewHolidaysBannerdropcontainer'>
                                    <h5 style={{marginLeft:"5%"}}>Choose Category</h5>
                                    <select className="form-select" aria-label="Default select example" style={{color:"grey",fontSize:"15px",marginLeft:"5%", width: "100%", border: "2px solid #dddddd78" }}>
                                        <option value>Package Category</option>
                                        <option value="1">Family</option>
                                        <option value="2">Holiday</option>
                                        <option value="3">Solo</option>
                                        <option value="3">Friends</option>
                                        <option value="3">Romantic</option>
                                    </select>
                                </div>

                            </div>


                        </div>

                    </div>
                    <div className='newHolidays_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>

            </div>
        </>
    )
}
