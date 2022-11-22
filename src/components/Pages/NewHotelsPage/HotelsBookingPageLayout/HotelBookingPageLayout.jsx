import React from 'react'
import { AboutHotel } from './AboutHotel/AboutHotel'
import { AminitiesFacilities } from './AminitiesFacilities/AminitiesFacilities'
import { HotelBookingPageBanner } from './HotelBookingPageBanner/HotelBookingPageBanner'
import { HotelReviews } from './HotelReviews/HotelReviews'

export const HotelBookingPageLayout = () => {
  return (
    <div>
        <HotelBookingPageBanner/>

        <AboutHotel/> 

        <AminitiesFacilities/>

        <HotelReviews/>
    </div>
  )
}
