import React from 'react';
import { BottomBar } from '../../BottomBar/BottomBar';
import { ExclusiveDeals } from '../../ExclusiveDeals/ExclusiveDeals';
import { Footer } from '../../Footer/Footer';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Nav } from '../../Nav/Nav';
import Newsletter from '../../NewsLetter/NewsLetter';
import { Experiment } from '../../Tags/Tags';
import { FaqDropdown } from './FaqDropdown/FaqDropdown';
import { PopularcarHireDestinations } from './PopularCarHireDestinations/PopularcardhireDestinations';
import { RentalBanner, Rental_Banner } from './RentalBanner/RentalsBanner';

export const Rentals = () => {
  return (
    <>
        <Nav/>
        <RentalBanner/>
        <ExclusiveDeals/>

        <PopularcarHireDestinations/>

        <FaqDropdown/>


        <Newsletter/>
        <FooterLinks/>
        <Experiment/>
        <Footer/>
        <BottomBar/>
    </>
  )
}
