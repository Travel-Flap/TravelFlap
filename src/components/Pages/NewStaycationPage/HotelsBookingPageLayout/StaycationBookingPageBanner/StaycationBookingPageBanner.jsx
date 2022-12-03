import React from 'react';
import "./StaycationBookingPageBanner.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdFlight, MdOutlineLocalActivity } from 'react-icons/md';
import { FaPlusCircle, FaMinusCircle, FaAngleDown, FaStaycations, FaLaptopHouse } from 'react-icons/fa';
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

export const StaycationBookingPageBanner = () => {
    return (
        <>
            <div className='StaycationsBookingPageBannerOuterDiv'>
                <div className='StaycationsBookingImageContentWrapper'>
                    <div className='StaycationsBookingBannerImageDiv'>
                        {/* <img src='/Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp' alt='Staycations Image' /> */}
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp" class="d-block w-100" alt="carousel image" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/Images/NewHomeLayout/HotelInnerPage/Banner/image3.webp" class="d-block w-100" alt="carousel image" />
                                </div>
                                <div class="carousel-item">
                                    <img src="/Images/NewHomeLayout/HotelInnerPage/Banner/image2.webp" class="d-block w-100" alt="carousel image" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className='hoteBookingContextDiv'>

                        <div className='StaycationsBookingCalenderOuterDiv'>

                            <div className='StaycationsBookingCalenderContainer'>
                                <div className='StaycationsBookingCalenderInnerDiv'>
                                    <input type="datetime-local" placeholder='Check-Out Date' />
                                </div>

                                <div className='StaycationsBookingCalenderInnerDiv1'>
                                    <input type="datetime-local" placeholder='Check-Out Date' />
                                </div>
                            </div>

                            <div className='StaycationsBookingPersonsInnerDiv'>
                                <div id='StaycationsBooking_departure'>
                                    <h3>Choose travellers </h3>
                                    <div className="StaycationsBoookingdropdown_content">
                                        <div className='navbarStaycationsBookingPageOptions'>
                                            <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                        </div>
                                        <div className='navbarStaycationsBookingPageOptions '>
                                            <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                        </div>
                                        <div className='navbarStaycationsBookingPageOptions'>
                                            <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                        </div>
                                    </div>
                                    <BsPerson className='StaycationsBookingGuestIcon' />
                                </div>
                                <div className='StaycationsBookingSearchButtonOuterDiv'>
                                    <div className='StaycationsBookingSearchButtonInnerDiv'>
                                        <BsSearch style={{ fontSize: 33, paddingLeft: 10, marginTop: 3 }} />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='StaycationsBookingStaycationsContentDiv'>
                            <div className='StaycationsBookinStaycationsName'>
                                <div className='StaycationsBookingStaycationsHeading'>
                                    <h3>Staycations Hari Piorko </h3>
                                </div>

                                <div className='StaycationsBookingStaycationsInfoDiv'>
                                    <p><HiOutlineLocationMarker style={{ fontSize: 25, color: "#3380f2" }} /> 4775,Main Bazar,Near 6 Tooti Chowk NewDelhi.</p>
                                    <p><BiPhone style={{ fontSize: 25, marginLeft: 3, color: "#3380f2" }} /> +91 112 358 7999, +91 142 678 4239</p>
                                </div>
                            </div>
                        </div>

                        <div className='StaycationsBookingRatingDiv'>
                            <div className='StaycationsBookingRatingNumber'>
                                <h3>4.5</h3>
                            </div>
                            <div className='StaycationsBookingStaycationsReview'>
                                <p>Good</p>
                                <p className='miniContext'>based on 476 reviews</p>
                            </div>

                            <div className='hoteBoookingRatingExtraDiv'>
                                <h3>Hygenic Stay,Entertainment-Activities</h3>
                                {/* <p className='miniContext'>based on 476 reviews</p> */}
                            </div>
                        </div>

                        <div className='StaycationsBookingPriceDiv'>
                            <div className='StaycationsBoookingPriceDisplayInnerDiv'>
                                <div className='StaycationsBookingPriceDisplayDiv'>
                                    <h3>₹400</h3>
                                </div>

                                <div className='StaycationsBookingPriceDescription'>
                                    {/* <p>Cheapest</p> */}
                                    <p className='minicontextPrice'> Cheapest rate per night. </p>
                                </div>

                                <div className='StaycationsBookingButton'>
                                    <button type="button" class="btn btn-primary StaycationsBookingMainBookingButton"> Book Now </button>
                                </div>
                            </div>

                        </div>

                        <div className='StaycationsBookingOtherStaycationssDiv'>
                            <h5>Provider</h5>

                            <div className='StaycationsBookingOtherStaycationsInnerDiv'>
                                <div className='StaycationsBookingOtherStaycationsSubDiv1'>

                                    <div className='StaycationsBookingOtherStaycationsChildDiv1' >
                                        <IoBedSharp style={{ fontSize: 20, marginLeft: 20, marginTop: 15 }} />
                                    </div>
                                    <div className='StaycationsBookingOtherStaycationsChildDiv2'>
                                        <p>Provider for Staycations Hari Piorko</p>
                                    </div>
                                    <div className='StaycationsBookingOtherStaycationsChildDiv3'>
                                        <button type="button" class="btn btn-primary StaycationsBookingChildButton"> Book Now </button>
                                    </div>
                                </div>

                                <div className='StaycationsBookingOtherStaycationsSubDiv2'>

                                    <div className='StaycationsBookingOtherStaycationsChildDiv1' >
                                        <IoBedSharp style={{ fontSize: 20, marginLeft: 20, marginTop: 15 }} />
                                    </div>
                                    <div className='StaycationsBookingOtherStaycationsChildDiv2'>
                                        <p>Provider for Staycations Hari Piorko</p>
                                    </div>
                                    <div className='StaycationsBookingOtherStaycationsChildDiv3'>
                                        <button type="button" class="btn btn-primary StaycationsBookingChildButton"> Book Now </button>
                                    </div>
                                </div>

                                <div className='StaycationsBookingOtherStaycationsSubDiv3'>

                                    <div className='StaycationsBookingOtherStaycationsChildDiv1' >
                                        <IoBedSharp style={{ fontSize: 20, marginLeft: 20, marginTop: 15 }} />
                                    </div>
                                    <div className='StaycationsBookingOtherStaycationsChildDiv2'>
                                        <p>Provider for Staycations Hari Piorko</p>
                                    </div>
                                    <div className='StaycationsBookingOtherStaycationsChildDiv3'>
                                        <button type="button" class="btn btn-primary StaycationsBookingChildButton"> Book Now </button>
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
