// import { useState, useEffect } from 'react';
// import { Outlet, Link } from "react-router-dom";
// import './NewCruiseExperimentBannerForm.css';
// import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
// import { FaPlusCircle, FaMinusCircle, FaAngleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';
// import { FaShip, FaPhoneAlt, FaTags } from 'react-icons/fa';
// import { RiVisaFill } from 'react-icons/ri';
// import { GiPalmTree } from 'react-icons/gi';
// import { GrBus } from 'react-icons/gr';
// import { GiCruiser } from 'react-icons/gi';
// import { BsFillMoonFill } from 'react-icons/bs';
// import { CgMoreAlt } from 'react-icons/cg';

// import { IoCarSportSharp } from "react-icons/io5";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import { AiFillCalendar } from "react-icons/ai";
// import { BsSearch, BsPerson } from "react-icons/bs";
// import countrydata from '../../../../CountryData.json';

// export const ExperimentBannerForm = () => {

//     const [countryid, setCountryid] = useState('');
//     const [state, setState] = useState([]);
//     const [stateid, setStateid] = useState('');

//     const handlecounty = (e) => {
//         const getcountryId = e.target.value;
//         const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
//         setState(getStatedata);
//         setCountryid(getcountryId);
//     }

//     return (
//         <>
//             <div className='carouselnewExperimentbannermenu'>

//                 <Link to="/flights" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass1' id='borderLeftnewhomebanner'>
//                     <MdFlight size={"2.8em"} className="carouselFormicon" />
//                     Flight
//                 </Link>
//                 <Link to="/hotel" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass2'>
//                     <FaHotel size={"2.5em"} className="carouselFormicon" />
//                     Hotel
//                 </Link>
//                 <Link to="/visa" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass3' >
//                     <RiVisaFill size={"2.5em"} className="carouselFormicon" />
//                     Visa
//                 </Link>
//                 <Link to="/holidays" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass4' >
//                     <GiPalmTree size={"2.5em"} className="carouselFormicon" />
//                     Holidays
//                 </Link>
//                 <Link to="/staycations" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass5' >
//                     <FaLaptopHouse size={"2.5em"} className="carouselFormicon" />
//                     Staycations
//                 </Link>
//                 <Link to="/rentals" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass6' >
//                     <IoCarSportSharp size={"2.5em"} className="carouselFormicon" />
//                     Rentals
//                 </Link>
//                 <Link to="/cruise" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass7' >
//                     <GiCruiser size={"2.5em"} className="carouselFormicon" />
//                     Cruise
//                 </Link>
//                 <Link to="/activities" className='carouselnewExperimentbannermenu-icon bottomupExperimentclass8' >
//                     <MdOutlineLocalActivity size={"2.5em"} className="carouselFormicon" />
//                     Activities
//                 </Link>


//                 <div className='carouselnewExperimentbannermenu-icon bottomupExperimentclass9' id='borderrightnewhomebanner'>
//                     <CgMoreAlt size={"2.5em"} />
//                     More

//                     <div className='newHomemoredropdownbannercontent'>
//                         <div className='moreOptions'>
//                             <Link to='/contact' className='moreOptions'><FaPhoneAlt className='contactIcon' /> ContactUs</Link>
//                         </div>
//                         <div className='moreOptions '>
//                             <Link to='/mice' className='moreOptions'><GiPalmTree className='miceIcon' />  Mice </Link>
//                         </div>
//                         <div className='moreOptions'>
//                             <Link to='/offers' className='moreOptions'>   <FaTags className='offersIcon' /> Offers </Link>
//                         </div>
//                         <div className='moreOptions'>
//                             <Link to='/inspire' className='moreOptions'> <FaShip className='inspireIcon' /> Inspire </Link>
//                         </div>
//                     </div>

//                 </div>
//             </div>


//             <div id='filter-newCruisePageTrave-container'>
//                 <div className='newCruiseCountrySelect'>
//                         <select className="form-select newCruiseCountryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
//                             style={{ border: "3px solid #3380f2", width: "60%",fontWeight:"700" }}>
//                             <option value="" style={{ textAlign: "center" }}>Country</option>
//                             {
//                                 countrydata.map((getcountry, index) => (
//                                     <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
//                                 ))
//                             }
//                         </select>

//                         <select className="form-select newCruiseCityDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
//                             style={{ border: "3px solid #3380f2", width: "60%",fontWeight:"700" }}>
//                             <option value="" style={{ textAlign: "center" }}>City</option>
//                             {
//                                 countrydata.map((getcountry, index) => (
//                                     <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
//                                 ))
//                             }
//                         </select>

//                         <select className="form-select newCruiseCategoryDrop" onChange={(e) => handlecounty(e)} aria-label="Default select example"
//                             style={{ border: "3px solid #3380f2", width: "60%",fontWeight:"700" }}>
//                             <option value="" style={{ textAlign: "center" }}>Category</option>
//                             {
//                                 countrydata.map((getcountry, index) => (
//                                     <option value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
//                                 ))
//                             }
//                         </select>
//                         <button className='newCruisesearchbutton'>Search</button>
//                 </div>


//                 <div className='newCruise_checkmark'>
//                     <input type="checkbox" className='flights_newCruisecheckbox' />
//                     <label className='flights_newCruisecheckbox1'>Free Cancellation</label>
//                     <input type="checkbox" className='flights_newCruisecheckbox' />
//                     <label className='flights_newCruisecheckbox1'>5 Star Hotel</label>
//                     <input type="checkbox" className='flights_newCruisecheckbox' />
//                     <label className='flights_newCruisecheckbox1'> 3 Star Hotel</label>
//                     <input type="checkbox" className='flights_newCruisecheckbox' />
//                     <label className='flights_newCruisecheckbox1'> Defence Discount</label>
//                     <button className='newCruisesearchbutton'>Search</button>
//                 </div> 


//             </div>
//         </>
//     )
// }


import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewCruiseExperimentBannerForm.css';
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

export const ExperimentBannerForm = () => {

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
            <div className='carouselnewcruisebannermenu'>

                <Link to="/flights" className='carouselnewcruisebannermenu-icon bottomupHolidaysclass1' id='borderLeftnewhomebanner'>
                    <MdFlight size={"2.8em"} className="carouselcruiseFormicon" />
                    Flight
                </Link>
                <Link to="/hotel" className='carouselnewcruisebannermenu-icon bottomupHolidaysclass2'>
                    <FaHotel size={"2.5em"} className="carouselcruiseFormicon" />
                    Hotel
                </Link>
                <Link to="/visa" className='carouselnewcruisebannermenu-icon bottomupHolidaysclass3' >
                    <RiVisaFill size={"2.5em"} className="carouselcruiseFormicon" />
                    Visa
                </Link>
                <Link to="/holidays" className='carouselnewcruisebannermenu-icon bottomupHolidaysclass4' >
                    <GiPalmTree size={"2.5em"} className="carouselcruiseFormicon" />
                    Holidays
                </Link>
                <Link to="/staycations" className='carouselnewcruisebannermenu-icon bottomupHolidaysclass5' >
                    <FaLaptopHouse size={"2.5em"} className="carouselcruiseFormicon" />
                    Staycations
                </Link>
                <Link to="/rentals" className='carouselnewcruisebannermenu-icon bottomupHolidaysclass6' >
                    <IoCarSportSharp size={"2.5em"} className="carouselcruiseFormicon" />
                    Rentals
                </Link>
                <Link to="/cruise" className='carouselnewcruisebannermenu-icon bottomupHolidaysclass7' >
                    <GiCruiser size={"2.5em"} className="carouselcruiseFormicon" />
                    Cruise
                </Link>
                <Link to="/activities" className='carouselnewcruisebannermenu-icon bottomupHolidaysclass8' >
                    <MdOutlineLocalActivity size={"2.5em"} className="carouselcruiseFormicon" />
                    Activities
                </Link>


                <div className='carouselnewcruisebannermenu-icon bottomupHolidaysclass9' id='borderrightnewhomebanner'>
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


            <div id='filter-newcruiseTrave-container'>

                <div className='newcruiseinputmaindiv'>

                    <div className='innerNewcruisedropdowncontainer2'>
                        <div className='optionsNewcruiseBannercontainer'>

                            <div className='singleNewcruiseBannerdropcontainer'>
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

                            <div className='singleNewcruiseBannerdropcontainer1'>
                                <p>Select Nationality</p>
                                <select className="form-select newcruiseform" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ width: "100%" }}>
                                    <option value="" >Select State</option>
                                    {
                                        state.map((getstate, index) => (
                                            <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className='singleNewcruiseBannerdropcontainer2'>
                                <p>Select Country at Living</p>
                                <select className="form-select newcruiseLivingdrop" aria-label="Default select example" style={{ marginLeft: "0%", width: "100%" }}>
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

                    <div className='newcruise_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>

            </div>
        </>
    )
}

