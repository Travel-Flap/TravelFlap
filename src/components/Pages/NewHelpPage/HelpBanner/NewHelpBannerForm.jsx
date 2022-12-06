import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewHelpBannerForm.css';
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

export const NewHelpBannerForm = () => {

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
            {/* <div className='carouselnewHelpBannermenu'>

                <Link to="/flights" className='carouselnewHelpBannermenu-icon bottomupHolidaysclass1' id='borderLeftnewhomebanner'>
                    <MdFlight size={"2.8em"} className="carouselFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselnewHelpBannermenu-icon bottomupHolidaysclass2'>
                    <FaHotel size={"2.5em"} className="carouselFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselnewHelpBannermenu-icon bottomupHolidaysclass3' >
                    <RiVisaFill size={"2.5em"} className="carouselFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselnewHelpBannermenu-icon bottomupHolidaysclass4' >
                    <GiPalmTree size={"2.5em"} className="carouselFormicon" />
                    Holidays
                </Link>
                <Link to="/staycations" className='carouselnewHelpBannermenu-icon bottomupHolidaysclass5' >
                    <FaLaptopHouse size={"2.5em"} className="carouselFormicon" />
                    Staycations
                </Link>
                <Link to="/rentals" className='carouselnewHelpBannermenu-icon bottomupHolidaysclass6' >
                    <IoCarSportSharp size={"2.5em"} className="carouselFormicon" />
                    Rentals
                </Link>
                <Link to="/cruise" className='carouselnewHelpBannermenu-icon bottomupHolidaysclass7' >
                    <GiCruiser size={"2.5em"} className="carouselFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselnewHelpBannermenu-icon bottomupHolidaysclass8' >
                    <MdOutlineLocalActivity size={"2.5em"} className="carouselFormicon" />
                    Activities
                </Link>


                <div className='carouselnewHelpBannermenu-icon bottomupHolidaysclass9' id='borderrightnewhomebanner'>
                    <CgMoreAlt size={"2.5em"} />
                    More

                    <div className='newHomemoredropdownbannercontent'>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
                        </div>
                        <div className='moreOptions '>
                            <Link to='' className='moreOptions'><GiPalmTree className='miceIcon' />  Mice </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'>   <FaTags className='HelpIcon' /> Help </Link>
                        </div>
                        <div className='moreOptions'>
                            <Link to='' className='moreOptions'> <FaShip className='inspireIcon' /> Inspire </Link>
                        </div>
                    </div>

                </div>
            </div> */}


            <div id='filter_HelpTrave_container'>

                <div className='newHelpInputmaindiv'>
                    <div className='newHelpInputContainer'>
                        <div className='newHelpNameInput'>
                            <BsSearch className='newHelpInputicon' />
                            <div className='newHelpInputNameContainer'>
                                <input type="text" placeholder='e.g. booking , cancel , offers claim' />
                            </div>
                        </div>
                    </div>

                    <div className='helpForm_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>

            </div>
        </>
    )
}
