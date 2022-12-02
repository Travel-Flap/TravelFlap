import React from 'react';
import "./StaycationBookingPageLayout.css";
import { Aboutstaycations } from './AboutStaycation/AboutStaycation';
import { StaycationAminitiesFacilities } from './StaycationAminitiesFacilities/StaycationAminitiesFacilities';
import { StaycationsBookingFaq } from './StaycationBookingFaq/StaycationBookingFaq';
import { StaycationBookingPageBanner } from './StaycationBookingPageBanner/StaycationBookingPageBanner';
import { StaycationBookingPolicy } from './StaycationsBookingPolicy/StaycationsBookingPolicy';
import { StaycationReviews } from './StaycationsReviews/StaycationsReviews';
import {  NearbyStaycationsPlaces } from './NearbyStaycationsPlaces/NearbyStaycationPlaces';
import { NewHomeNav } from '../../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { StaycationsBookingMultiImage } from './StaycationBookingMultiImage/StaycationBookingMultiImage';
import { InnerWebPageNavbar } from '../../SubPages/InnerWebPageNavbar/InnerWebPageNavbar';
import { InnerWebPageFooter } from '../../SubPages/InnerWebPageFooter/InnerWebPageFooter';

export const StaycationBookingPageLayout = () => {
  return (
    <div className='hotelBookingMainPageOuterDiv'>

      <InnerWebPageNavbar/>
      {/* <NewHomeNav/> */}

      <StaycationBookingPageBanner/>

      <Aboutstaycations/>

      <StaycationsBookingMultiImage/>

      <StaycationAminitiesFacilities/>

      <StaycationReviews/>

      <StaycationBookingPolicy/>

      <StaycationsBookingFaq/>

      <NearbyStaycationsPlaces/>

      <InnerWebPageFooter/>
    </div>
  )
}
