import React from 'react';
import "./HotelBookingPageBanner.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

export const HotelBookingPageBanner = () => {
    return (
        <>
            <div className='hotelBookingPageBannerOuterDiv'>
                <div className='hotelBookingImageContentWrapper'>
                    <div className='hotelBookingBannerImageDiv'>
                        <img src='/Images/NewHomeLayout/HotelInnerPage/Banner/image1.webp' alt='Hotel Image' />
                    </div>

                    <div className='hoteBookingContextDiv'>
                        <div className='hotelBookingHotelContentDiv'>
                            <div className='hotelBookinHotelName'>
                                <div className='hotelBookingHotelHeading'>
                                    <h2>Ram Bagh Hotel</h2>
                                </div>

                                <div className='hotelBookingHotelInfoDiv'>
                                    <p><HiOutlineLocationMarker /> 4775,Main Bazar,Near 6 Tooti Chowk NewDelhi.</p>
                                    <p><BsFillTelephoneFill /> +91 112 358 7999</p>
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
                        </div>

                        <div className='hotelBookingPriceDiv'>
                            <div className='hotelBoookingPriceDisplayInnerDiv'>
                                <div className='hotelBookingPriceDisplayDiv'>
                                    <h3>$400</h3>
                                </div>

                                <div className='hotelBookingPriceDescription'>
                                    <p>Cheapest</p>
                                    <p className='minicontextPrice'>rate per night</p>
                                </div>
                            </div>

                            <div className='hotelBookingButton'></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
