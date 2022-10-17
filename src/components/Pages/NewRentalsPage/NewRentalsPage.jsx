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
import { RentalsFrequentlyAsked } from './NewFrequentlyAsked/FrequentlyAsked';
import { NewPopularCarHireDestination } from './PopularCarHireDestinations/PopularCarHireDestination';
import { NewRentalBanner } from './RentalsBanner/NewRantalsBanner';


export const NewRentalsPage = () => {
  return (
    <div>
        <NewRentalBanner/>

        <NewHomeExclusiveDeals/>

        <NewPopularCarHireDestination/>

        <NewHomeEasyVisaDestination/>

        <RentalsFrequentlyAsked/>

        <NewHomeAwards/>

        <NewHomeStoriesSection/>

        <NewHomeOurPartners/>

        <NewHomeAppDownload/>

        <Plan/>

        <FooterLinks/>


        <NewHomeFooter/>

        <NewHomeBottomBar/>
    </div>
  )
}
