import React from 'react';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload';
import NewHomeAwards from '../NewHomePage/NewHomeAwards/NewHomeAwards';
import { NewHomeBottomBar } from '../NewHomePage/NewHomeBottomBar/NewHomeBottomBar';
import { NewHomeEasyVisaDestination } from '../NewHomePage/NewHomeEasyVisaDestination/NewHomeEasyVisaDestination';
import { NewHomeExclusiveDeals } from '../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals';
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter';
import NewHomeOurPartners from '../NewHomePage/NewHomeOurPartners/NewHomeOurPartners';
import { NewHomeStoriesSection } from '../NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection';
import { HowRentalsWork } from './HowRentalsWork/HowRentalsWork';
import { RentalsFrequentlyAsked } from './NewFrequentlyAsked/FrequentlyAsked';
import PopularCarHireApplications from './PopularCarHireApplications/PopularCarHireApplications';
import { NewPopularCarHireDestination } from './PopularCarHireDestinations/PopularCarHireDestination';
import { NewRentalBanner } from './RentalsBanner/NewRantalsBanner';

import { Helmet } from 'react-helmet';

export const NewRentalsPage = () => {
  return (
    <div>

      <Helmet>
        <title>Rentals Page</title>
        <meta name='description' content='Want to travel in holiday time in good and budget friendly road trips.
                Take a looks at TravelFlap for your car rentals co-ordinatior.' />
      </Helmet>

      <NewRentalBanner />

      <NewHomeExclusiveDeals />

      <HowRentalsWork />

      <NewPopularCarHireDestination />


      <PopularCarHireApplications />

      <NewHomeEasyVisaDestination />

      {/* <RentalsFrequentlyAsked/> */}

      {/* <NewHomeAwards/> */}

      <NewHomeStoriesSection />



      {/* <NewHomeOurPartners/> */}

      <NewHomeAppDownload />

      <Plan />

      <FooterLinks />


      <NewHomeFooter />

      <NewHomeBottomBar />
    </div>
  )
}
