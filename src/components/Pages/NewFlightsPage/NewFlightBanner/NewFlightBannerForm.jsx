import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import './NewFlightBannerForm.css';
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

export const NewFlightBannerForm = () => {
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

            {/* <div> */}


            <div id='filter-newFlightsPagetrave-container'>

                <div className='multiroundbuttons'>

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Choose</option>
                        <option value="1">One Way</option>
                        <option value="2">Two Way</option>
                        <option value="3">Round Trip</option>
                    </select>
                    {/* <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">One Way</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Two Way</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                        <label class="form-check-label" for="inlineRadio3">Round Trip</label>
                    </div> */}
                </div>

                <div className='newFlightsinputmaindiv'>
                    <div className='newFlightsDestinationInputContainer'>
                        <p>From</p>
                        <div className='newFlightsNameInput'>
                            {/* <BsSearch className='newFlightsInputicon' /> */}
                            <div className='newFlightsinputNameContainer'>
                                <input type="text" placeholder='Jaipur' />
                            </div>

                        </div>
                    </div>

                    <div className='newFlightsDestinationInputContainer1'>
                        <p>To</p>
                        <div className='newFlightsNameInput1'>
                            {/* <BsSearch className='newFlightsInputicon' /> */}
                            <div className='newFlightsinputNameContainer'>
                                <input type="text" placeholder='Delhi' />
                            </div>

                        </div>
                    </div>


                    <div className='newFlightsCheckIn_dateContainer'>
                        <p>Depart</p>
                        <input type="datetime-local" placeholder='Check-In Date' />
                    </div>

                    <div className='newFlightsCheckout_DateContainer'>
                        <p>Return</p>
                        <input type="datetime-local" placeholder='Check-Out Date' />
                    </div>

                    <div className='newFlightsGuest_outerDiv'>
                        <p>Travellers</p>
                        <div id='newFlightsPage_departure'>
                            <h5>Choose Travellers </h5>
                            {/* <FaAngleDown className='downHotelPagearrowicon' /> */}
                            <div className="dropdownnewFlightsPage-content">
                                <div className='navbarnewHotelPageOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbarnewHotelPageOptions '>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbarnewHotelPageOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                            <BsPerson className='newFlightHomeGuestIcon' />
                        </div>
                    </div>

                    <div className='newFlight_SearchButton'>
                        <button type="button" class="btn btn-primary">Search</button>
                    </div>
                </div>


                {/* <div className='choosenewhomebanneroptions'>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">One Way</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                            <label class="form-check-label" for="inlineRadio2">Round Trip</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
                            <label class="form-check-label" for="inlineRadio3">Multi Trip</label>
                    </div>
                </div>
                <div className='mainnewhomedatesections'>
                    <div className='filternewhomebanner-fromTo'>
                        <div className='fromnewhomebanner-name'>
                            <h5>FROM</h5>
                            <input className='citynewhomebannerinput1' type="search" placeholder="Jaipur" />
                        </div>
                        <div className='fromnewhomebanner-name2'>
                            <h5>TO </h5>
                            <input className='citynewhomebannerinput2' type="search" placeholder="Delhi" />
                        </div>
                    </div>


                    <div id='formnewhomepagedates'>
                        <div className='selectnewhomepagedate'>
                            <h5>Departure <AiFillCalendar /></h5>
                            <DatePicker placeholderText='Departure' id='dateonewaynewhomebannerform' />
                        </div>
                        <div id='selectnewhomepageReturndate1'>
                            <h5>Return <AiFillCalendar /></h5>
                            <DatePicker placeholderText='Return' id='dateonewaynewhomebannerform' />
                        </div>
                    </div>

                    <div id='newhomepagetrave' >
                        <div id='newhomepage_departure'>
                            <h3>Travellers <FaAngleDown className='downarrowicon' /></h3>
                            <div className="dropdownnewhomepage-content">
                                <div className='navbarnewhomepageOptions'>
                                    <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                </div>
                                <div className='navbarnewhomepageOptions '>
                                    <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                </div>
                                <div className='navbarnewhomepageOptions'>
                                    <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                </div>
                            </div>
                        </div>


                    </div>
                </div> */}

                {/* <div className='checkmark'>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'>Flights You've searched for</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'>Flights from Jaipur</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'> Direct Flight</label>
                    <input type="checkbox" className='flightscheckbox' />
                    <label className='flightscheckbox1'> Defence fare</label>
                    <button className='newhomesearchbutton'>Search Flight</button>
                </div> */}
            </div>
            {/* </div> */}
        </>
    )
}


// import { useState, useEffect } from 'react';
// import { Outlet, Link } from "react-router-dom";
// import './NewFlightBannerForm.css';
// import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
// import { FaPlusCircle,FaArrowCircleDown, FaMinusCircle, FaAngleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';
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
// // import { NewHomeNav } from '../NewHomeNavbar/NewHomeNavbar';

// export const NewFlightBannerForm = () => {
//     return (
//         <>
//             {/* <Menu /> */}
//             {/* <NewHomeNav/> */}
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
//                             <Link to='/contact' className='moreOptions'><FaPhoneAlt className='contact_Flights_icon' /> ContactUs</Link>
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

//             <div id='filter-FlightsBanner-container'>
//                 <div className='chooseFlightsOption'>
//                     <input type="radio" className='chooseFlightsOption1' />
//                     <label className='radiodesc'>One Way</label>
//                     <input type="radio" className='chooseFlightsOption2' />
//                     <label className='radiodesc'>Round Trip</label>
//                     <input type="radio" className='chooseFlightsOption3' />
//                     <label className='radiodesc'>Multi Trip</label>
//                 </div>
//                 <div className='mainFlightsDatessection' style={{ boreder: "10px solid red" }}>
//                     <div className='filter_Flights-fromTo'>
//                         <div className='from_FlightsForm-name'>
//                             <h5>FROM</h5>
//                             <input className='flights_cityinput' type="search" placeholder="Jaipur" />
//                             {/* <p>[AUH] Abu Dhabi International </p> */}
//                         </div>
//                         {/* <BiCurrentLocation className='location' /> */}
//                         <div className='from_FlightsForm-name2'>
//                             <h5>TO </h5>
//                             <input className='flights_cityinput' type="search" placeholder="Delhi" />
//                             {/* <p>[DXB] Dubai</p> */}
//                         </div>
//                     </div>


//                     <div id='form_FlightsDates'>
//                         <div className='select_FLightsDates'>
//                             <h5>Departure</h5>
//                             <DatePicker style={{ border: "none" }} placeholderText='Departure' id='date_FlightsonewayForm' />
//                         </div>
//                         <div id='select_Flights_Returndate1'>
//                             <h5>Return</h5>
//                             <DatePicker placeholderText='Return' id='date_FlightsonewayForm' />
//                         </div>
//                     </div>
//                     <div id='flights_Travel' >
//                         <div id='flights_Departure'>
//                             <h3>Choose Passengers <FaArrowCircleDown className='downarrow_Flights_icon' /></h3>
//                             <div className="dropdown_Flights_content">
//                                 <div className='navbar_Flights_Options'>
//                                     <FaPlusCircle className='contact_Flights_icon' />   <FaMinusCircle className='decrease' /> Adults
//                                 </div>
//                                 <div className='navbar_Flights_Options '>
//                                     <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
//                                 </div>
//                                 <div className='navbar_Flights_Options'>
//                                     <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
//                                 </div>
//                             </div>
//                         </div>

//                         <button className='searchbtn'>Search Flight</button>

//                     </div>
//                 </div>

//                 <div className='flights_checkmark'>
//                     <input type="checkbox" className='newFlightscheckbox' />
//                     <label className='newFlightscheckbox1'>Flights You've searched for</label>
//                     <input type="checkbox" className='newFlightscheckbox' />
//                     <label className='newFlightscheckbox1'>Flights from Jaipur</label>
//                     <input type="checkbox" className='newFlightscheckbox' />
//                     <label className='newFlightscheckbox1'> Direct Flight</label>
//                     <input type="checkbox" className='newFlightscheckbox' />
//                     <label className='newFlightscheckbox1'> Defence fare</label>

//                 </div>
//             </div>

//         </>
//     )
// }

// // {/* <div id='filter-newhomepagetrave-container'>

// // <div className='newFlightsinputmaindiv'>
// //     <div className='newFlightsDestinationInputContainer'>
// //         <div className='newFlightsNameInput'>
// //             <BsSearch className='newFlightsInputicon' />
// //             <div className='newFlightsinputNameContainer'>
// //                 <input type="text" placeholder='Search destination,Hotels' />
// //             </div>

// //         </div>
// //     </div>

// //     <div className='newFlightsCheckIn_dateContainer'>
// //         <input type="datetime-local" placeholder='Check-In Date' />
// //     </div>

// //     <div className='newFlightsCheckout_DateContainer'>
// //         <input type="datetime-local" placeholder='Check-Out Date' />
// //     </div>

// //     <div className='newFlightsGuest_outerDiv'>

// //         <div id='newHomePage_flights_Departure'>
// //             <h3>Travellers </h3>
// //             {/* <FaAngleDown className='downHotelPagearrowicon' /> */}
// //             <div className="dropdownnewFlightsPage-content">
// //                 <div className='navbarnewHotelPageOptions'>
// //                     <FaPlusCircle className='contact_Flights_icon' />   <FaMinusCircle className='decrease' /> Adults
// //                 </div>
// //                 <div className='navbarnewHotelPageOptions '>
// //                     <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
// //                 </div>
// //                 <div className='navbarnewHotelPageOptions'>
// //                     <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
// //                 </div>
// //             </div>
// //             <BsPerson className='experimentHomeGuestIcon' />
// //         </div>
// //     </div>

// //     <div className='experiment_SearchButton'>
// //         <button type="button" class="btn btn-primary">Search</button>
// //     </div>
// // </div>


// // {/* <div className='choosenewhomebanneroptions'>
// //     <div class="form-check form-check-inline">
// //         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
// //             <label class="form-check-label" for="inlineRadio1">One Way</label>
// //     </div>
// //     <div class="form-check form-check-inline">
// //         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
// //             <label class="form-check-label" for="inlineRadio2">Round Trip</label>
// //     </div>
// //     <div class="form-check form-check-inline">
// //         <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
// //             <label class="form-check-label" for="inlineRadio3">Multi Trip</label>
// //     </div>
// // </div>
// // <div className='mainnewhomedatesections'>
// //     <div className='filternewhomebanner-fromTo'>
// //         <div className='fromnewhomebanner-name'>
// //             <h5>FROM</h5>
// //             <input className='citynewhomebannerinput1' type="search" placeholder="Jaipur" />
// //         </div>
// //         <div className='fromnewhomebanner-name2'>
// //             <h5>TO </h5>
// //             <input className='citynewhomebannerinput2' type="search" placeholder="Delhi" />
// //         </div>
// //     </div>


// //     <div id='formnewhomepagedates'>
// //         <div className='selectnewhomepagedate'>
// //             <h5>Departure <AiFillCalendar /></h5>
// //             <DatePicker placeholderText='Departure' id='dateonewaynewhomebannerform' />
// //         </div>
// //         <div id='selectnewhomepageReturndate1'>
// //             <h5>Return <AiFillCalendar /></h5>
// //             <DatePicker placeholderText='Return' id='dateonewaynewhomebannerform' />
// //         </div>
// //     </div>

// //     <div id='newhomepagetrave' >
// //         <div id='newhomepage_flights_Departure'>
// //             <h3>Travellers <FaAngleDown className='downarrow_Flights_icon' /></h3>
// //             <div className="dropdownnewhomepage-content">
// //                 <div className='navbarnewhomepageOptions'>
// //                     <FaPlusCircle className='contact_Flights_icon' />   <FaMinusCircle className='decrease' /> Adults
// //                 </div>
// //                 <div className='navbarnewhomepageOptions '>
// //                     <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
// //                 </div>
// //                 <div className='navbarnewhomepageOptions'>
// //                     <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
// //                 </div>
// //             </div>
// //         </div>


// //     </div>
// // </div> */}

// // {/* <div className='flights_checkmark'>
// //     <input type="checkbox" className='newFlightscheckbox' />
// //     <label className='newFlightscheckbox1'>Flights You've searched for</label>
// //     <input type="checkbox" className='newFlightscheckbox' />
// //     <label className='newFlightscheckbox1'>Flights from Jaipur</label>
// //     <input type="checkbox" className='newFlightscheckbox' />
// //     <label className='newFlightscheckbox1'> Direct Flight</label>
// //     <input type="checkbox" className='newFlightscheckbox' />
// //     <label className='newFlightscheckbox1'> Defence fare</label>
// //     <button className='newhomesearchbutton'>Search Flight</button>
// // </div> */}
// // </div> */}