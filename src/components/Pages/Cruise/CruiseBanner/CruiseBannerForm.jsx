import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './CruiseBannerForm.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { FaAccessibleIcon, FaCalendarAlt } from 'react-icons/fa';
// import { Menu } from './Menu.jsx';
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaPlusCircle, FaMinusCircle, FaArrowCircleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';
import { FaShip, FaPhoneAlt, FaTags } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { GiCruiser } from 'react-icons/gi';
import { CgMoreAlt } from 'react-icons/cg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import countrydata from '../../../../CountryData.json';

export const HolidayCarouselForm = () => {
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
            <div className='carouselcruisemenu'>

                <Link to="/flights" className='carouselcruisemenu-icon' id='borderLeft'>
                    <MdFlight size={"1.9em"} className="carouselFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselcruisemenu-icon'>
                    <FaHotel size={"1.9em"} className="carouselFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselcruisemenu-icon' >
                    <RiVisaFill size={"1.9em"} className="carouselFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselcruisemenu-icon' >
                    <GiPalmTree size={"1.9em"} className="carouselFormicon" />
                    Holidays
                </Link>
                <Link to="/Villa" className='carouselcruisemenu-icon' >
                    <FaLaptopHouse size={"1.9em"} className="carouselFormicon" />
                    Villas
                </Link>
                <Link to="/cruise" className='carouselcruisemenu-icon' >
                    <GiCruiser size={"1.9em"} className="carouselFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselcruisemenu-icon' >
                    <MdOutlineLocalActivity size={"1.9em"} className="carouselFormicon" />
                    Activities
                </Link>


                <div className='carouselcruisemenu-icon' id='borderright'>
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

                <div className='dropcontainer'>
                    <div className='innerdropdowncontiner1'>
                        <h5>Choose Destination</h5>
                    </div>
                    <div className='innerdropdowncontainer2'>
                        <div className='optionscontainer'>
                            <div className='singledropcontainer'>
                                <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example" style={{ width: "60%", border: "3px solid #3380f2" }}>
                                    <option value="" style={{ textAlign: "center" }}>Select Country</option>
                                    {
                                        countrydata.map((getcountry, index) => (
                                            <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='singledropcontainer1'>
                                <select className="form-select holidayform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%", border: "3px solid #3380f2" }}>
                                    <option value="" style={{ textAlign: "center" }}>Select State</option>
                                    {
                                        state.map((getstate, index) => (
                                            <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='singledropcontainer'>
                                <select className="form-select" aria-label="Default select example" style={{ marginLeft: "6%", width: "80%", border: "3px solid #3380f2" }}>
                                    <option value>Package Category</option>
                                    <option value="1">Family</option>
                                    <option value="2">Holiday</option>
                                    <option value="3">Solo</option>
                                    <option value="3">Friends</option>
                                    <option value="3">Romantic</option>
                                    {/* <option value="3">Mumbai</option> */}
                                </select>
                            </div>
                            <div className='singledropcontainerbutton'>
                                <button type="button" className="btn btn-primary holidayformbutton">Search</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
