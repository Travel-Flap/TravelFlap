import React from 'react';
import "./HotelBookingPageBanner.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaPlusCircle, FaMinusCircle, FaAngleDown, FaHotel, FaLaptopHouse } from 'react-icons/fa';
import { BsSearch, BsPerson } from "react-icons/bs";
import { IoBedSharp } from "react-icons/io5";

import { BiPhone } from "react-icons/bi";

import { FaShip, FaPhoneAlt, FaTags } from 'react-icons/fa';
import { RiVisaFill } from 'react-icons/ri';
import { GiPalmTree } from 'react-icons/gi';
import { GrBus } from 'react-icons/gr';
import { GiCruiser } from 'react-icons/gi';
import { BsFillMoonFill } from 'react-icons/bs';
import { CgMoreAlt } from 'react-icons/cg';

import { IoCarSportSharp } from "react-icons/io5";

export const HotelBookingPageBanner = () => {
    return (
        <>
            <div className='hotelBookingPageBannerOuterDiv'>
                <div className='hotelBookingImageContentWrapper'>
                    <div className='hotelBookingBannerImageDiv'>
                        <img src='/Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp' alt='Hotel Image' />
                    </div>

                    <div className='hoteBookingContextDiv'>

                        <div className='hotelBookingCalenderOuterDiv'>

                            <div className='hotelBookingCalenderContainer'>
                                <div className='hotelBookingCalenderInnerDiv'>
                                    <input type="datetime-local" placeholder='Check-Out Date' />
                                </div>

                                <div className='hotelBookingCalenderInnerDiv1'>
                                    <input type="datetime-local" placeholder='Check-Out Date' />
                                </div>
                            </div>

                            <div className='hotelBookingPersonsInnerDiv'>
                                <div id='hotelBooking_departure'>
                                    <h3>Choose travellers </h3>
                                    <div className="hotelBoookingdropdown_content">
                                        <div className='navbarHotelBookingPageOptions'>
                                            <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                        </div>
                                        <div className='navbarHotelBookingPageOptions '>
                                            <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                        </div>
                                        <div className='navbarHotelBookingPageOptions'>
                                            <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                        </div>
                                    </div>
                                    <BsPerson className='hotelBookingGuestIcon' />
                                </div>
                                <div className='hotelBookingSearchButtonOuterDiv'>
                                    <div className='hotelBookingSearchButtonInnerDiv'>
                                        <BsSearch style={{ fontSize: 33, paddingLeft: 10, marginTop: 3 }} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='hotelBookingHotelContentDiv'>
                            <div className='hotelBookinHotelName'>
                                <div className='hotelBookingHotelHeading'>
                                    <h3>Hotel Hari Piorko </h3>
                                </div>

                                <div className='hotelBookingHotelInfoDiv'>
                                    <p><HiOutlineLocationMarker style={{ fontSize: 25 }} /> 4775,Main Bazar,Near 6 Tooti Chowk NewDelhi.</p>
                                    <p><BiPhone style={{ fontSize: 25, marginLeft: 3 }} /> +91 112 358 7999</p>
                                </div>
                            </div>
                        </div>

                        <div className='hotelBookingRatingDiv'>
                            <div className='hotelBookingRatingNumber'>
                                <h3>4.5</h3>
                            </div>
                            <div className='hotelBookingHotelReview'>
                                <p>Good</p>
                                <p className='miniContext'>based on 476 reviews</p>
                            </div>

                            <div className='hoteBoookingRatingExtraDiv'>
                                <h3>Hygenic Stay,Entertainment-Activities</h3>
                                {/* <p className='miniContext'>based on 476 reviews</p> */}
                            </div>
                        </div>

                        <div className='hotelBookingPriceDiv'>
                            <div className='hotelBoookingPriceDisplayInnerDiv'>
                                <div className='hotelBookingPriceDisplayDiv'>
                                    <h3>₹400</h3>
                                </div>

                                <div className='hotelBookingPriceDescription'>
                                    {/* <p>Cheapest</p> */}
                                    <p className='minicontextPrice'> Cheapest rate per night. </p>
                                </div>

                                <div className='hotelBookingButton'>
                                    <button type="button" class="btn btn-primary hotelBookingMainBookingButton"> Book Now </button>
                                </div>
                            </div>

                        </div>

                        <div className='hotelBookingOtherHotelsDiv'>
                            <h5>Provider</h5>

                            <div className='hotelBookingOtherHotelInnerDiv'>
                                <div className='hotelBookingOtherHotelSubDiv1'>

                                    <div className='hotelBookingOtherHotelChildDiv1' >
                                        <IoBedSharp style={{ fontSize: 20, marginLeft: 10, marginTop: 15 }} />
                                    </div>
                                    <div className='hotelBookingOtherHotelChildDiv2'>
                                        <p>Provider for Hotel Hari Piorko</p>
                                    </div>
                                    <div className='hotelBookingOtherHotelChildDiv3'>
                                        <button type="button" class="btn btn-primary hotelBookingChildButton"> Book Now </button>
                                    </div>
                                </div>

                                <div className='hotelBookingOtherHotelSubDiv2'>

                                    <div className='hotelBookingOtherHotelChildDiv1' >
                                        <IoBedSharp style={{ fontSize: 20, marginLeft: 10, marginTop: 15 }} />
                                    </div>
                                    <div className='hotelBookingOtherHotelChildDiv2'>
                                        <p>Provider for Hotel Hari Piorko</p>
                                    </div>
                                    <div className='hotelBookingOtherHotelChildDiv3'>
                                        <button type="button" class="btn btn-primary hotelBookingChildButton"> Book Now </button>
                                    </div>
                                </div>

                                <div className='hotelBookingOtherHotelSubDiv3'>

                                    <div className='hotelBookingOtherHotelChildDiv1' >
                                        <IoBedSharp style={{ fontSize: 20, marginLeft: 10, marginTop: 15 }} />
                                    </div>
                                    <div className='hotelBookingOtherHotelChildDiv2'>
                                        <p>Provider for Hotel Hari Piorko</p>
                                    </div>
                                    <div className='hotelBookingOtherHotelChildDiv3'>
                                        <button type="button" class="btn btn-primary hotelBookingChildButton"> Book Now </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
