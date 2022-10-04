import { useState, useEffect } from 'react';
// import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './RentalBannerFForm.css';
// import { Menu } from './Menu.jsx';
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaPlusCircle, FaMinusCircle, FaArrowCircleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';
import { FaShip, FaPhoneAlt, FaTags } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { GiCruiser } from 'react-icons/gi';
import { BsFillMoonFill } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg';
import { IoCarSportSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import countrydata from '../../../../CountryData.json';

export const RentalBannerForm = () => {
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
            <div className='rentalsbannermenu'>

                <Link to="/flights" className='rentalsbannermenu-icon' id='borderLeft'>
                    <MdFlight size={"1.9em"} className="carouselFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='rentalsbannermenu-icon'>
                    <FaHotel size={"1.9em"} className="carouselFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='rentalsbannermenu-icon' >
                    <RiVisaFill size={"1.9em"} className="carouselFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='rentalsbannermenu-icon' >
                    <GiPalmTree size={"1.9em"} className="carouselFormicon" />
                    Holidays
                </Link>
                <Link to="/rentals" className='rentalsbannermenu-icon' >
                    <IoCarSportSharp size={"1.9em"} className="carouselFormicon" />
                    Rentals
                </Link>
                <Link to="/staycations" className='rentalsbannermenu-icon' >
                    <FaLaptopHouse size={"1.9em"} className="carouselFormicon" />
                    Staycations
                </Link>
                <Link to="/cruise" className='rentalsbannermenu-icon' >
                    <GiCruiser size={"1.9em"} className="carouselFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='rentalsbannermenu-icon' >
                    <MdOutlineLocalActivity size={"1.9em"} className="carouselFormicon" />
                    Activities
                </Link>


                <div className='rentalsbannermenu-icon' id='borderright'>
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


            <div id='filter-activity-container'>
                <div className='chooseoptions'>
                    <input type="checkbox" className='chooseoptions1' />
                    <label className='radiodesc'>Family Trip</label>
                    <input type="checkbox" className='chooseoptions2' />
                    <label className='radiodesc'>Romatic Trip</label>
                    <input type="checkbox" className='chooseoptions3' />
                    <label className='radiodesc'>Friends Trip</label>
                    <input type="checkbox" className='chooseoptions3' />
                    <label className='radiodesc'>Solo Trip</label>
                </div>

                <div className='droprentalbannercontainer'>
                    {/* <div className='innerdropdowncontiner1'>
                        <h5>Choose Destination</h5>
                    </div> */}
                    <div className='innerrentalbannerdropdowncontainer2'>
                        <div className='optionsrentalcontainer'>
                            <div className='singlerentalbannerdroprentalbannercontainer1'>
                                <div className='rentalpickupcontainer1'>
                                    <p>Pickup Location</p>
                                    <input className='bannerstyle' type="text" placeholder='Enter your pickup Location' />
                                </div>
                                {/* <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example" style={{ border: "3px solid #3380f2" }}>

                                    <option id='homecarddropbox' value="">Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option y value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select> */}
                            </div>

                            <div className='singlerentalbannerdroprentalbannercontainer'>
                                <div className='rentalpickupcontainer'>
                                    <p>Pick-up Date</p>
                                    <input type="date" name="Enter your pickup Location" />
                                </div>

                            </div>

                            <div className='singlerentalbannerdroprentalbannercontainer'>
                                <div className='rentalpickupcontainer'>
                                    <p>Pick-up Time</p>
                                    <select className="timedrop form-select" aria-label="Default select example" style={{ border: "3px solid #3380f2" }}>
                                        <option value>Time</option>
                                        <option value="00:00">00:00</option>
                                        <option value="00:30">00:30</option>
                                        <option value="01:00">01:00</option>
                                        <option value="01:30">01:30</option>
                                        <option value="02:00">02:00</option>
                                        <option value="02:30">02:30</option>
                                        <option value="03:00">03:00</option>
                                        <option value="03:30">03:30</option>
                                        <option value="04:00">04:00</option>
                                        <option value="04:30">04:30</option>
                                        <option value="05:00">05:00</option>
                                        <option value="05:30">05:30</option>
                                        <option value="06:00">06:00</option>
                                        <option value="06:30">06:30</option>
                                        <option value="07:00">07:00</option>
                                        <option value="07:30">07:30</option>
                                        <option value="08:00">08:00</option>
                                        <option value="08:30">08:30</option>
                                        <option value="09:00">09:00</option>
                                        <option value="09:30">09:30</option>
                                        <option value="10:00">10:00</option>
                                        <option value="10:30">10:30</option>
                                        <option value="11:00">11:00</option>
                                        <option value="11:30">11:30</option>
                                        <option value="12:00">12:00</option>
                                        <option value="12:30">12:30</option>
                                        <option value="13:00">13:00</option>
                                        <option value="13:30">13:30</option>
                                        <option value="14:00">14:00</option>
                                        <option value="14:30">14:30</option>
                                        <option value="15:00">15:00</option>
                                        <option value="15:30">15:30</option>
                                        <option value="16:00">16:00</option>
                                        <option value="16:30">16:30</option>
                                        <option value="17:00">17:00</option>
                                        <option value="17:30">17:30</option>
                                        <option value="18:00">18:00</option>
                                        <option value="18:30">18:30</option>
                                        <option value="19:00">19:00</option>
                                        <option value="19:30">19:30</option>
                                        <option value="20:00">20:00</option>
                                        <option value="20:30">20:30</option>
                                        <option value="21:00">21:00</option>
                                        <option value="21:30">21:30</option>
                                        <option value="22:00">22:00</option>
                                        <option value="22:30">22:30</option>
                                        <option value="23:00">23:00</option>
                                        <option value="23:30">23:30</option>
                                    </select>
                                </div>

                            </div>

                            <div className='singlerentalbannerdroprentalbannercontainer'>
                                <div className='rentalpickupcontainer'>
                                    <p>Drop-off Date</p>
                                    <input type="date" name="Enter your pickup Location" />
                                </div>

                            </div>

                            <div className='singlerentalbannerdroprentalbannercontainer'>
                                <div className='rentalpickupcontainer'>
                                    <p>Drop-off Time</p>
                                    <select className=" timedrop form-select" aria-label="Default select example" style={{ border: "3px solid #3380f2" }}>
                                        <option value>Time</option>
                                        <option value="00:00">00:00</option>
                                        <option value="00:30">00:30</option>
                                        <option value="01:00">01:00</option>
                                        <option value="01:30">01:30</option>
                                        <option value="02:00">02:00</option>
                                        <option value="02:30">02:30</option>
                                        <option value="03:00">03:00</option>
                                        <option value="03:30">03:30</option>
                                        <option value="04:00">04:00</option>
                                        <option value="04:30">04:30</option>
                                        <option value="05:00">05:00</option>
                                        <option value="05:30">05:30</option>
                                        <option value="06:00">06:00</option>
                                        <option value="06:30">06:30</option>
                                        <option value="07:00">07:00</option>
                                        <option value="07:30">07:30</option>
                                        <option value="08:00">08:00</option>
                                        <option value="08:30">08:30</option>
                                        <option value="09:00">09:00</option>
                                        <option value="09:30">09:30</option>
                                        <option value="10:00">10:00</option>
                                        <option value="10:30">10:30</option>
                                        <option value="11:00">11:00</option>
                                        <option value="11:30">11:30</option>
                                        <option value="12:00">12:00</option>
                                        <option value="12:30">12:30</option>
                                        <option value="13:00">13:00</option>
                                        <option value="13:30">13:30</option>
                                        <option value="14:00">14:00</option>
                                        <option value="14:30">14:30</option>
                                        <option value="15:00">15:00</option>
                                        <option value="15:30">15:30</option>
                                        <option value="16:00">16:00</option>
                                        <option value="16:30">16:30</option>
                                        <option value="17:00">17:00</option>
                                        <option value="17:30">17:30</option>
                                        <option value="18:00">18:00</option>
                                        <option value="18:30">18:30</option>
                                        <option value="19:00">19:00</option>
                                        <option value="19:30">19:30</option>
                                        <option value="20:00">20:00</option>
                                        <option value="20:30">20:30</option>
                                        <option value="21:00">21:00</option>
                                        <option value="21:30">21:30</option>
                                        <option value="22:00">22:00</option>
                                        <option value="22:30">22:30</option>
                                        <option value="23:00">23:00</option>
                                        <option value="23:30">23:30</option>
                                    </select>
                                </div>
                            </div>
                            <div className='singlerentalbannerdroprentalbannercontainer'>
                                <button type="button" className="bannerformbutton btn btn-primary">Search</button>
                            </div>
                        </div>


                    </div>
                </div>

                {/* <div className='bannersearchboxdiv'>
                    <div className='selectcountry' style={{marginLeft:"3%"}}>
                        
                            <select className="form-select" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
                                <option value>Select Country</option>
                                <option value="1">India Visa</option>
                                <option value="2">UAE Visa</option>
                                <option value="3">Pakistan Visa</option>
                                <option value="4">France Visa</option>
                                <option value="5">Spain Visa</option>
                                <option value="6">Turkey Visa</option>
                                <option value="7">Italy Visa</option>
                                <option value="8">Thailand Visa</option>
                                <option value="9">Mexico Visa</option>
                                <option value="10">Germany Visa</option>
                                <option value="11">United Kingdom Visa</option>
                                <option value="12">China Visa</option>
                                <option value="13">Korea Visa</option>
                            </select>
                        </div>
                        <div className='selectcountry'>
                        
                            <select className="form-select visadrop" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
                                <option value>Select Nationality</option>
                                <option value="1">India</option>
                                <option value="2">UAE</option>
                                <option value="3">Pakistan</option>
                                <option value="4">France</option>
                                <option value="5">Spain</option>
                                <option value="6">Turkey</option>
                                <option value="7">Italy</option>
                                <option value="8">Thailand</option>
                                <option value="9">Mexico</option>
                                <option value="10">Germany</option>
                                <option value="11">United Kingdom</option>
                                <option value="12">China</option>
                                <option value="13">Korea</option>
                            </select>
                        </div>
                        <div className='selectcountry'>
                        
                            <select className="form-select" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
                                <option value>Select Residency</option>
                                <option value="1">India</option>
                                <option value="2">UAE</option>
                                <option value="3">Pakistan</option>
                                <option value="4">France</option>
                                <option value="5">Spain</option>
                                <option value="6">Turkey</option>
                                <option value="7">Italy</option>
                                <option value="8">Thailand</option>
                                <option value="9">Mexico</option>
                                <option value="10">Germany</option>
                                <option value="11">United Kingdom</option>
                                <option value="12">China</option>
                                <option value="13">Korea</option>
                            </select>
                        </div>
                    <button className='bannersearchbutton'>Search</button>
                </div>
                <div className='maindatesections' style={{boreder:"10px solid red"}}>
                    <div className='filter-fromTo'>
                        <div className='from-name'>
                            <h5>FROM</h5>
                            <input className='cityinput' type="search" placeholder="Jaipur" />
                            
                        </div>
                        
                        <div className='from-name2'>
                            <h5>TO </h5>
                            <input className='cityinput' type="search" placeholder="Delhi" />
                       
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

                </div> */}
            </div>
        </>
    )
}
