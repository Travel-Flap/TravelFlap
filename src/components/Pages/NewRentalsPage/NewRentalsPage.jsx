import React from 'react';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload';
import { NewHomeExclusiveDeals } from '../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals';
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter';
import { NewHomeStoriesSection } from '../NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection';
import { HowRentalsWork } from './HowRentalsWork/HowRentalsWork';
import { NewPopularCarHireDestination } from './PopularCarHireDestinations/PopularCarHireDestination';
import { NewRentalBanner } from './RentalsBanner/NewRantalsBanner';

import { Helmet } from 'react-helmet';
import CheapCarHire from './CheapCarHire/CheapCarHire';
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { WayToRentCar } from './WayToRentCar/WayToRentCar';
import { RideWIthTravelFlap } from './RideWithTravelFlap/RideWIthTravelFlap';

export const NewRentalsPage = () => {
  return (
    <div>

      <Helmet>
        <title> Car hire: compare car rental deals & cheap car hire prices | TravelFlap</title>
        <meta name='description' content='We compare car hire deals from all major car rental companies to find you the best prices available. Save with TravelFlap' />
      </Helmet>

      <NewHomeNav />

      <NewRentalBanner />

      <div style={{ marginTop: "4%" }}>
        <NewHomeExclusiveDeals />
      </div>

      <RideWIthTravelFlap />

      <HowRentalsWork />

      <WayToRentCar />

      <NewPopularCarHireDestination />

      {/* <HappyCustomer/> */}

      <CheapCarHire />

      {/* <SearchCarHire/> */}


      {/* <PopularCarHireApplications /> */}

      {/* <NewHomeEasyVisaDestination /> */}

      {/* <RentalsFrequentlyAsked/> */}

      {/* <NewHomeAwards/> */}

      <NewHomeAppDownload />
      <Plan />
      <NewHomeStoriesSection />

      <FooterLinks />
      <NewHomeFooter />
      {/* <NewHomeBottomBar/> */}
    </div>
  )
}
