import React from 'react';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload';
import NewHomeAwards from '../NewHomePage/NewHomeAwards/NewHomeAwards';
import { NewHomeBottomBar } from '../NewHomePage/NewHomeBottomBar/NewHomeBottomBar';
import { NewHomeEasyVisaDestination } from '../NewHomePage/NewHomeEasyVisaDestination/NewHomeEasyVisaDestination';
import { NewHomeExclusiveDeals } from '../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals';
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter';
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { NewHolidaysBestBudget } from './HolidaysBestBudget/NewBestBudget';
import { NewHolidaysBestSelling } from './HolidaysBestSelling/NewBestSelling';
import { NewPopularDestination } from './HolidaysPopularDestination/NewPopularDestination';
import { NewHolidaysPageBanner } from './NewHolidaysPageBanner/NewHolidaysPageBanner';
import { HolidaysThemeFilter } from './NewHolidaysThemeFilter/HolidaysThemeFilter';
import { NewHomeStoriesSection } from "../../Pages/NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection";
import { NewHolidaysCategory } from './NewHolidaysCategory/NewHolidaysCategory';
import { CenterMode } from '../NewHomePage/NewHomePopularDetination/NewHomePopularDestination';
import { Helmet } from 'react-helmet';

export const NewHolidaysPage = () => {
  return (
    <div>
      
      <NewHomeNav/>

      <Helmet>
        <title> Holiday Packages, Indian Holidays, Honeymoon Packages, India Tourism, Holidays India, Vacation Package : TravelFlap</title>
        <meta name='description' content='Holidays in India - Get upto Rs. 7000 OFF on Indian Holidays, Honeymoon Packages, Tour Package, India Tourism Packages use Coupon Code SPLPACK at TravelFlap' />
        <meta name='keywords' content='holidays in india, india tourism, holiday destinations, holiday packages, holiday packages india, india tours, honeymoon packages india, honeymoon packages, india tour packages, Indian holidays, cheap holiday packages, india travel, travel in india, india, travel, honeymoon, packages, holidays' />
      </Helmet>

      <NewHolidaysPageBanner />

      <NewHomeExclusiveDeals />

      <NewHolidaysCategory />

      {/* <HolidaysThemeFilter /> */}

      <div className=''>
        <NewPopularDestination />
      </div>

      {/* <div className=''>
        <NewHolidaysBestBudget />
      </div> */}

      <CenterMode/>


      <div className=''>
        <NewHolidaysBestSelling />
      </div>

      {/* <NewHomeAwards/> */}


      {/* <NewHomeEasyVisaDestination /> */}

      <NewHomeAppDownload />

      <Plan />
      <NewHomeStoriesSection />
      <FooterLinks />

      <NewHomeFooter />
      {/* <NewHomeBottomBar /> */}
    </div>
  )
}
