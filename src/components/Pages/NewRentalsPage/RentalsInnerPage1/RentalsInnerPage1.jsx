import React from 'react';
import { NewHomeNav } from '../../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { InnerWebPageFooter } from '../../SubPages/InnerWebPageFooter/InnerWebPageFooter';
import { CarHireTrips } from './CarHireTips/CarHireTrips';
import { CarRentalsReview } from './CarRentalsReview/CarRentalsReview';
import { CheapCarRentals } from './CheapCarRentals/CheapCarRentals';
import { RentalsInnerBannerSection } from './RentalsInnerBannerSection/RentalsInnerBannerSection';
import "./RentalsInnerPage1.css";
import { RentalsSafety } from './RentalsSafety/RentalsSafety';
import { RidesOffer } from './RidesOffer/RidesOffer';
import { WhenToBookCar } from './WhenToBookCar/WhenToBookCar';

export const RentalsInnerPage1 = () => {
  return (
    <div>
      
      <NewHomeNav />
      <RentalsInnerBannerSection />
      <RidesOffer />
      <CheapCarRentals />
      <CarRentalsReview />
      <RentalsSafety />
      <WhenToBookCar />

      <InnerWebPageFooter />
    </div>
  )
}
