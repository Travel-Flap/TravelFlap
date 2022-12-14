import React from 'react';
import "./HotelBookingPageLayout.css";
import { AboutHotel } from './AboutHotel/AboutHotel';
import { AminitiesFacilities } from './AminitiesFacilities/AminitiesFacilities';
import { HotelBookingFaq } from './HotelBookingFaq/HotelBookingFaq';
import { HotelBookingPageBanner } from './HotelBookingPageBanner/HotelBookingPageBanner';
import { HotelBookingPolicy } from './HotelBookingPolicy/HotelBookingPolicy';
import { HotelReviews } from './HotelReviews/HotelReviews';
import { NearbyHotelPlaces } from './NearbyHotelPlaces/NearbyHotelPlaces';
import { NewHomeNav } from '../../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { HotelBookingMultiImage } from './HotelBookingMultiImage/HotelBookingMultiImage';
import { InnerWebPageNavbar } from '../../SubPages/InnerWebPageNavbar/InnerWebPageNavbar';
import { InnerWebPageFooter } from '../../SubPages/InnerWebPageFooter/InnerWebPageFooter';

export const HotelBookingPageLayout = () => {
  return (
    <div className='hotelBookingMainPageOuterDiv'>

      <InnerWebPageNavbar/>
      {/* <NewHomeNav/> */}

      <HotelBookingPageBanner />

      <AboutHotel />

      <HotelBookingMultiImage/>

      <AminitiesFacilities />

      <HotelReviews />

      <HotelBookingPolicy />

      <HotelBookingFaq />

      <NearbyHotelPlaces />

      <InnerWebPageFooter/>
    </div>
  )
}
