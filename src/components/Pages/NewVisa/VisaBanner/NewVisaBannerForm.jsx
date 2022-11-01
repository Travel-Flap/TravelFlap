import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewVisaBannerform.css';
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
// export const NewVisaBannerForm = () => {
// import { NewHomeNav } from '../NewHomeNavbar/NewHomeNavbar';

export const NewVisaBannerForm = () => {

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
            <div className='carouselnewVisabannermenu'>

                <Link to="/flights" className='carouselnewVisabannermenu-icon bottomupHolidaysclass1' id='borderLeftnewhomebanner'>
                    <MdFlight size={"2.8em"} className="carouselVisaFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselnewVisabannermenu-icon bottomupHolidaysclass2'>
                    <FaHotel size={"2.5em"} className="carouselVisaFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselnewVisabannermenu-icon bottomupHolidaysclass3' >
                    <RiVisaFill size={"2.5em"} className="carouselVisaFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselnewVisabannermenu-icon bottomupHolidaysclass4' >
                    <GiPalmTree size={"2.5em"} className="carouselVisaFormicon" />
                    Holidays
                </Link>
                <Link to="/staycations" className='carouselnewVisabannermenu-icon bottomupHolidaysclass5' >
                    <FaLaptopHouse size={"2.5em"} className="carouselVisaFormicon" />
                    Staycations
                </Link>
                <Link to="/rentals" className='carouselnewVisabannermenu-icon bottomupHolidaysclass6' >
                    <IoCarSportSharp size={"2.5em"} className="carouselVisaFormicon" />
                    Rentals
                </Link>
                <Link to="/cruise" className='carouselnewVisabannermenu-icon bottomupHolidaysclass7' >
                    <GiCruiser size={"2.5em"} className="carouselVisaFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselnewVisabannermenu-icon bottomupHolidaysclass8' >
                    <MdOutlineLocalActivity size={"2.5em"} className="carouselVisaFormicon" />
                    Activities
                </Link>


                <div className='carouselnewVisabannermenu-icon bottomupHolidaysclass9' id='borderrightnewhomebanner'>
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


            <div id='filter-newVisaTrave-container'>

                <div className='newVisainputmaindiv'>

                    <div className='innerNewVisadropdowncontainer2'>
                        <div className='optionsNewVisaBannercontainer'>

                            <div className='singleNewVisaBannerdropcontainer'>
                                <p>Select Country</p>
                                <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example" style={{ width: "50" }}>
                                    <option value="" >Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='singleNewVisaBannerdropcontainer1'>
                                <p>Select City</p>
                                <select className="form-select newVisaform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                                    <option value="" >Select City</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='singleNewVisaBannerdropcontainer2'>
                                <p>Select Visa Category</p>
                                <select className="form-select newVisaLivingdrop" aria-label="Default select example" style={{ marginLeft: "0%", width: "100%" }}>
                                    <option value>Category</option>
                                    <option value="1">Family</option>
                                    <option value="2">Holiday</option>
                                    <option value="3">Solo</option>
                                    <option value="3">Friends</option>
                                    <option value="3">Romantic</option>
                                    {/* <option value="3">Mumbai</option> */}
                                </select>
                            </div>
                            {/* <div className='singleNewVisaBannerdropcontainerbutton'>
                                <button type="button" className="btn btn-primary holidayformbutton">Search</button>
                            </div> */}
                        </div>


                    </div>

                    <div className='newVisa_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>

            </div>
        </>
    )
}
