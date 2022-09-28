// import { useState, useEffect } from 'react';
// // import React, { useState } from 'react';
// import { Outlet, Link } from "react-router-dom";
// import './ActivityCarouselForm.css';
// import { BiCurrentLocation } from 'react-icons/bi';
// import { IoIosArrowDown } from 'react-icons/io';
// import { FaAccessibleIcon, FaCalendarAlt } from 'react-icons/fa';
// // import { Menu } from './Menu.jsx';
// import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
// import { FaPlusCircle, FaMinusCircle, FaArrowCircleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';
// import { FaShip, FaPhoneAlt, FaTags } from 'react-icons/fa';
// import { RiVisaFill } from 'react-icons/ri';
// import { GiPalmTree } from 'react-icons/gi';
// import { GrBus } from 'react-icons/gr';
// import { GiCruiser } from 'react-icons/gi';
// import { BsFillMoonFill } from 'react-icons/bs';
// import { CgMoreAlt } from 'react-icons/cg';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import countrydata from '../../../../CountryData.json';

// export const ActivityCarouselForm = () => {
//     const [countryid, setCountryid] = useState('');
//     const [state, setState] = useState([]);
//     const [stateid, setStateid] = useState('');

//     const handlecounty = (e) => {
//         const getcountryId = e.target.value;
//         const getStatedata = countrydata.find(country => country.country_id === getcountryId).states;
//         setState(getStatedata);
//         setCountryid(getcountryId);
//         //console.log(getcountryId);
//     }

//     const handlestate = (e) => {
//         const stateid = e.target.value;
//         //console.log(stateid);
//         setStateid(stateid);

//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert("Get Country id" + countryid + " And " + stateid);
//     }
//     return (
//         <>
//             {/* <Menu /> */}
//             <div className='carouselmenu'>

//                 <Link to="/flights" className='carouselmenu-icon' id='borderLeft'>
//                     <MdFlight size={"1.9em"} className="carouselFormicon" />
//                     Flight
//                 </Link>
//                 <Link to="/hotel" className='carouselmenu-icon'>
//                     <FaHotel size={"1.9em"} className="carouselFormicon" />
//                     Hotel
//                 </Link>
//                 <Link to="/visa" className='carouselmenu-icon' >
//                     <RiVisaFill size={"1.9em"} className="carouselFormicon" />
//                     Visa
//                 </Link>
//                 <Link to="/holidays" className='carouselmenu-icon' >
//                     <GiPalmTree size={"1.9em"} className="carouselFormicon" />
//                     Holidays
//                 </Link>
//                 <Link to="/Villa" className='carouselmenu-icon' >
//                     <FaLaptopHouse size={"1.9em"} className="carouselFormicon" />
//                     Villas
//                 </Link>
//                 <Link to="/cruise" className='carouselmenu-icon' >
//                     <GiCruiser size={"1.9em"} className="carouselFormicon" />
//                     Cruise
//                 </Link>
//                 <Link to="/activities" className='carouselmenu-icon' >
//                     <MdOutlineLocalActivity size={"1.9em"} className="carouselFormicon" />
//                     Activities
//                 </Link>


//                 <div className='carouselmenu-icon' id='borderright'>
//                     <CgMoreAlt size={"1.9em"} />
//                     More

//                     <div className='moredropdowncontent'>
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


//             <div id='filter-activity-container'>
//                 <div className='chooseoptions'>
//                     <input type="checkbox" className='chooseoptions1' />
//                     <label className='radiodesc'>Family Trip</label>
//                     <input type="checkbox" className='chooseoptions2' />
//                     <label className='radiodesc'>Romatic Trip</label>
//                     <input type="checkbox" className='chooseoptions3' />
//                     <label className='radiodesc'>Friends Trip</label>
//                     <input type="checkbox" className='chooseoptions3' />
//                     <label className='radiodesc'>Solo Trip</label>
//                 </div>

//                 <div className='dropcontainer'>
//                     <div className='innerdropdowncontiner1'>
//                         <h5>Choose Destination</h5>
//                     </div>
//                     <div className='innerdropdowncontainer2'>
//                         <div className='optionscontainer'>
//                             <div className='singledropcontainer'>
//                                 <select className="form-select" onChange={(e) => handlecounty(e)} aria-label="Default select example" style={{ border: "3px solid #3380f2" }}>

//                                     <option id='homecarddropbox' value="">Select Country</option>
//                                     {
//                                         countrydata.map((getcountry, index) => (
//                                             <option y value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
//                                         ))
//                                     }
//                                     {/* <option value>Please Select Continents</option>
//                                     <option value="1">Asia</option>
//                                     <option value="2">Africa</option>
//                                     <option value="3">North America</option>
//                                     <option value="4">South America</option>
//                                     <option value="5">Antarctica</option>
//                                     <option value="6">Europe</option>
//                                     <option value="7">Australia</option> */}
//                                 </select>
//                             </div>

//                             <div className='singledropcontainer'>
//                                 <select className="form-select" onChange={(e) => handlestate(e)} aria-label="Default select example" style={{ border: "3px solid #3380f2" }}>

//                                     <option value="" style={{ textAlign: "center" }}>Select City</option>
//                                     {
//                                         state.map((getstate, index) => (
//                                             <option className='optiondropdown' value={getstate.state_id} key={index}>{getstate.state_name}</option>
//                                         ))
//                                     }

//                                     {/* <option value>Please Select Country</option>
//                                     <option value="1">India</option>
//                                     <option value="2">UAE</option>
//                                     <option value="3">Pakistan</option>
//                                     <option value="4">France</option>
//                                     <option value="5">Spain</option>
//                                     <option value="6">Turkey</option>
//                                     <option value="7">Italy</option>
//                                     <option value="8">Thailand</option>
//                                     <option value="9">Mexico</option>
//                                     <option value="10">Germany</option>
//                                     <option value="11">United Kingdom</option>
//                                     <option value="12">China</option>
//                                     <option value="13">Korea</option> */}
//                                 </select>
//                             </div>

//                             <div className='singledropcontainer'>
//                                 <select className="form-select" aria-label="Default select example" style={{ border: "3px solid #3380f2" }}>
//                                     <option value>Package Category</option>
//                                     <option value="1">Family Package</option>
//                                     <option value="2">Friends Package</option>
//                                     <option value="3">Solo Travel</option>
//                                     <option value="3">Romantic Package</option>
//                                     <option value="3">Honeymoon Package</option>
//                                     {/* <option value="3">Mumbai</option>
//                                     <option value="3">Sikkim</option>
//                                     <option value="3">Uttrakhand</option>
//                                     <option value="3">Manipur</option> */}
//                                 </select>
//                             </div>
//                             <div className='singledropcontainer'>
//                                 <button type="button" className="btn btn-primary">Search</button>
//                             </div>
//                         </div>


//                     </div>
//                 </div>

//                 {/* <div className='bannersearchboxdiv'>
//                     <div className='selectcountry' style={{marginLeft:"3%"}}>
                        
//                             <select className="form-select" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
//                                 <option value>Select Country</option>
//                                 <option value="1">India Visa</option>
//                                 <option value="2">UAE Visa</option>
//                                 <option value="3">Pakistan Visa</option>
//                                 <option value="4">France Visa</option>
//                                 <option value="5">Spain Visa</option>
//                                 <option value="6">Turkey Visa</option>
//                                 <option value="7">Italy Visa</option>
//                                 <option value="8">Thailand Visa</option>
//                                 <option value="9">Mexico Visa</option>
//                                 <option value="10">Germany Visa</option>
//                                 <option value="11">United Kingdom Visa</option>
//                                 <option value="12">China Visa</option>
//                                 <option value="13">Korea Visa</option>
//                             </select>
//                         </div>
//                         <div className='selectcountry'>
                        
//                             <select className="form-select visadrop" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
//                                 <option value>Select Nationality</option>
//                                 <option value="1">India</option>
//                                 <option value="2">UAE</option>
//                                 <option value="3">Pakistan</option>
//                                 <option value="4">France</option>
//                                 <option value="5">Spain</option>
//                                 <option value="6">Turkey</option>
//                                 <option value="7">Italy</option>
//                                 <option value="8">Thailand</option>
//                                 <option value="9">Mexico</option>
//                                 <option value="10">Germany</option>
//                                 <option value="11">United Kingdom</option>
//                                 <option value="12">China</option>
//                                 <option value="13">Korea</option>
//                             </select>
//                         </div>
//                         <div className='selectcountry'>
                        
//                             <select className="form-select" aria-label="Default select example" style={{border:"3px solid #3380f2"}}>
//                                 <option value>Select Residency</option>
//                                 <option value="1">India</option>
//                                 <option value="2">UAE</option>
//                                 <option value="3">Pakistan</option>
//                                 <option value="4">France</option>
//                                 <option value="5">Spain</option>
//                                 <option value="6">Turkey</option>
//                                 <option value="7">Italy</option>
//                                 <option value="8">Thailand</option>
//                                 <option value="9">Mexico</option>
//                                 <option value="10">Germany</option>
//                                 <option value="11">United Kingdom</option>
//                                 <option value="12">China</option>
//                                 <option value="13">Korea</option>
//                             </select>
//                         </div>
//                     <button className='bannersearchbutton'>Search</button>
//                 </div> */}
//                 {/* <div className='maindatesections' style={{boreder:"10px solid red"}}>
//                     <div className='filter-fromTo'>
//                         <div className='from-name'>
//                             <h5>FROM</h5>
//                             <input className='cityinput' type="search" placeholder="Jaipur" />
                            
//                         </div>
                        
//                         <div className='from-name2'>
//                             <h5>TO </h5>
//                             <input className='cityinput' type="search" placeholder="Delhi" />
                       
//                         </div>
//                     </div>


//                     <div id='formdates'>
//                         <div className='selectdate'>
//                             <h5>Departure</h5>
//                             <DatePicker style={{ border: "none" }} placeholderText='Departure' id='dateonewayform' />
//                         </div>
//                         <div id='selectReturndate1'>
//                             <h5>Return</h5>
//                             <DatePicker placeholderText='Return' id='dateonewayform' />
//                         </div>
//                     </div>
//                     <div id='travel' >
//                         <div id='departure'>
//                             <h3>Choose Passengers <FaArrowCircleDown className='downarrowicon' /></h3>
//                             <div className="dropdown-content">
//                                 <div className='navbarOptions'>
//                                     <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
//                                 </div>
//                                 <div className='navbarOptions '>
//                                     <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
//                                 </div>
//                                 <div className='navbarOptions'>
//                                     <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
//                                 </div>
//                             </div>
//                         </div>

//                         <button className='searchbtn'>Search Flight</button>

//                     </div>
//                 </div>
                
//                 <div className='checkmark'>
//                     <input type="checkbox" className='flightscheckbox' />
//                     <label className='flightscheckbox1'>Flights You've searched for</label>
//                     <input type="checkbox" className='flightscheckbox' />
//                     <label className='flightscheckbox1'>Flights from Jaipur</label>
//                     <input type="checkbox" className='flightscheckbox' />
//                     <label className='flightscheckbox1'> Direct Flight</label>
//                     <input type="checkbox" className='flightscheckbox' />
//                     <label className='flightscheckbox1'> Defence fare</label>

//                 </div> */}
//             </div>
//         </>
//     )
// }
