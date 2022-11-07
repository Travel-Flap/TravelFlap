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

export const NewHolidaysPage = () => {
  return (
    <div>
      {/* <NewHomeNav/> */}
      <NewHolidaysPageBanner />

      <NewHomeExclusiveDeals />

      <NewHolidaysCategory/>
      
      {/* <HolidaysThemeFilter /> */}

      <div className=''>
        <NewPopularDestination />
      </div>

      <div className=''>
        <NewHolidaysBestBudget />
      </div>
      
      


      <div className=''>
        <NewHolidaysBestSelling />
      </div>

      {/* <NewHomeAwards/> */}


      {/* <NewHomeEasyVisaDestination /> */}

      <NewHomeAppDownload />

      <Plan />
      <NewHomeStoriesSection/>
      <FooterLinks />

      <NewHomeFooter />
      <NewHomeBottomBar />
    </div>
  )
}
