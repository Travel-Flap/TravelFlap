// export const ActivityBannerForm = () => {


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
    import countrydata from '../../../../CountryData.json';
    // import { NewHomeNav } from '../NewHomeNavbar/NewHomeNavbar';
    
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
                <div className='carouselnewActivityBannermenu'>
    
                    <Link to="/flights" className='carouselnewActivityBannermenu-icon bottomupHolidaysclass1' id='borderLeftnewhomebanner'>
                        <MdFlight size={"2.8em"} className="carouselVisaFormicon" />
                        Flight
                    </Link>
                    <Link to="/hotel" className='carouselnewActivityBannermenu-icon bottomupHolidaysclass2'>
                        <FaHotel size={"2.5em"} className="carouselVisaFormicon" />
                        Hotel
                    </Link>
                    <Link to="/visa" className='carouselnewActivityBannermenu-icon bottomupHolidaysclass3' >
                        <RiVisaFill size={"2.5em"} className="carouselVisaFormicon" />
                        Visa
                    </Link>
                    <Link to="/holidays" className='carouselnewActivityBannermenu-icon bottomupHolidaysclass4' >
                        <GiPalmTree size={"2.5em"} className="carouselVisaFormicon" />
                        Holidays
                    </Link>
                    <Link to="/staycations" className='carouselnewActivityBannermenu-icon bottomupHolidaysclass5' >
                        <FaLaptopHouse size={"2.5em"} className="carouselVisaFormicon" />
                        Staycations
                    </Link>
                    <Link to="/rentals" className='carouselnewActivityBannermenu-icon bottomupHolidaysclass6' >
                        <IoCarSportSharp size={"2.5em"} className="carouselVisaFormicon" />
                        Rentals
                    </Link>
                    <Link to="/cruise" className='carouselnewActivityBannermenu-icon bottomupHolidaysclass7' >
                        <GiCruiser size={"2.5em"} className="carouselVisaFormicon" />
                        Cruise
                    </Link>
                    <Link to="/activities" className='carouselnewActivityBannermenu-icon bottomupHolidaysclass8' >
                        <MdOutlineLocalActivity size={"2.5em"} className="carouselVisaFormicon" />
                        Activities
                    </Link>
    
    
                    <div className='carouselnewActivityBannermenu-icon bottomupHolidaysclass9' id='borderrightnewhomebanner'>
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
    
                    <div className='newActivityInputmaindiv'>
                        {/* <div className='newHolidayDestinationInputContainer'>
                            <div className='newHolidaysNameInput'>
                                <BsSearch className='newHolidaysInputicon' />
                                <div className='newHolidaysinputNameContainer'>
                                    <input type="text" placeholder='Search destination,Hotels' />
                                </div>
                            </div>
    
                        </div> */}
    
                        <div className='innerNewActivitydropdowncontainer2'>
                            <div className='optionsNewActivityBannercontainer'>
    
                                <div className='singleNewActivityBannerdropcontainer'>
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
    
                                <div className='singleNewActivityBannerdropcontainer1'>
                                    <p>Select Cities</p>
                                    <select className="form-select newVisaform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                                        <option value="" >Select City</option>
                                        {
                                            state.map((getstate, index) => (
                                                <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
    
                                <div className='singleNewActivityBannerdropcontainer2'>
                                    <p>Select Category</p>
                                    <select className="form-select newActivityLivingdrop" aria-label="Default select example" style={{ marginLeft: "0%", width: "100%" }}>
                                        <option value>Category</option>
                                        <option value="1">Family</option>
                                        <option value="2">Holiday</option>
                                        <option value="3">Solo</option>
                                        <option value="3">Friends</option>
                                        <option value="3">Romantic</option>
                                        {/* <option value="3">Mumbai</option> */}
                                    </select>
                                </div>
                                {/* <div className='singleNewActivityBannerdropcontainerbutton'>
                                    <button type="button" className="btn btn-primary holidayformbutton">Search</button>
                                </div> */}
                            </div>
    
    
                        </div>
    
                        <div className='newActivity_SearchButton'>
                            <button type="button" class="btn btn-primary">Search</button>
                        </div>
                    </div>
    
                </div>
            </>
        )
    }
    