import React from 'react';
import "./HotelBookingPageLayout.css"
import { AboutHotel } from './AboutHotel/AboutHotel'
import { AminitiesFacilities } from './AminitiesFacilities/AminitiesFacilities'
import { HotelBookingFaq } from './HotelBookingFaq/HotelBookingFaq'
import { HotelBookingPageBanner } from './HotelBookingPageBanner/HotelBookingPageBanner'
import { HotelBookingPolicy } from './HotelBookingPolicy/HotelBookingPolicy'
import { HotelReviews } from './HotelReviews/HotelReviews'
import { NearbyHotelPlaces } from './NearbyHotelPlaces/NearbyHotelPlaces'

export const HotelBookingPageLayout = () => {
  return (
    <div className='hotelBookingMainPageOuterDiv'>
      <HotelBookingPageBanner />

      <AboutHotel />

      <AminitiesFacilities />

      <HotelReviews />

      <HotelBookingPolicy />

      <HotelBookingFaq />

      <NearbyHotelPlaces />
    </div>
  )
}
