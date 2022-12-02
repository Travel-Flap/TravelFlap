import React from 'react';
import "./CruiseDetailsBanner.css";
import { BsSearch, BsPerson } from "react-icons/bs";
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

export const CruiseDetailsBanner = () => {
    return (
        <>
            <div className='card cruiseDetailsBannerDiv '>
                <img className='cruiseDetailsinnerBannerimage' src="Images/ActivitiesInnerPage/bannerimage.webp" alt='banner image' />
                <div class="card-img-overlay ">
                    <p className='cruiseDetailsinnerbannerHeading'> Book your Cruise WITH TRAVELFLAP</p>
                    <div className="cruiseDetailsinnerbannerbutton"> Let's Plan Your Next Cruise </div>
                </div>


                <div id='cruiseDetailsinnerfilterFormContainer'>
                    <div className='cruiseDetailsinnerInputmaindiv'>
                        <div className='cruiseDetailsinnerDestinationInputContainer'>
                            <h5> Enter Location </h5>
                            <div className='cruiseDetailsinnerNameInput'>
                                <BsSearch className='cruiseDetailsinnerInputicon' />
                                <div className='cruiseDetailsinnerInputNameContainer'>
                                    <input type="text" placeholder='Search Location ' />
                                </div>

                            </div>
                        </div>

                        <div className='cruiseDetailsinnerCheckIn_dateContainer'>
                            <h5> Journey Start Date </h5>
                            <input type="datetime-local" placeholder='Check-In Date' />
                        </div>

                        <div className='cruiseDetailsinnerCheckout_DateContainer'>
                            <h5> Journey End Date </h5>
                            <input type="datetime-local" placeholder='Check-Out Date' />
                        </div>

                        <div className='cruiseDetailsinnerGuest_outerDiv'>
                            <h5> Travellers </h5>
                            <div id='cruiseDetailsinner_departure'>
                                <h3> Choose travellers </h3>
                                {/* <FaAngleDown className='downHotelPagearrowicon' /> */}
                                <div className="dropdowncruiseDetailsinner-content">
                                    <div className='navbarcruiseDetailsinnerPageOptions'>
                                        <FaPlusCircle className='contactIcon' />   <FaMinusCircle className='decrease' /> Adults
                                    </div>
                                    <div className='navbarcruiseDetailsinnerPageOptions '>
                                        <FaPlusCircle className='miceIcon' />   <FaMinusCircle className='decrease' /> Children
                                    </div>
                                    <div className='navbarcruiseDetailsinnerPageOptions'>
                                        <FaPlusCircle className='offersIcon' />  <FaMinusCircle className='decrease' /> Infants
                                    </div>
                                </div>
                                <BsPerson className='cruiseDetailsinnerGuestIcon' />
                            </div>
                        </div>

                        <div className='cruiseDetailsinner_SearchButton'>
                            <button type="button" class="btn btn-primary"> Search </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
