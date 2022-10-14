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

export const NewHolidaysPage = () => {
  return (
    <div>
        {/* <NewHomeNav/> */}
        <NewHolidaysPageBanner/>

        <div className=''>
            <NewHolidaysBestSelling/>
        </div>

        <NewHomeExclusiveDeals/>
        
        <div className=''>
            <NewHolidaysBestBudget/>
        </div>

        <div className=''>
            <NewPopularDestination/>
        </div>

        <NewHomeEasyVisaDestination/>

        <NewHomeAppDownload/>

        {/* <NewHomeAwards/> */}

        <Plan/>

        <FooterLinks/>
        
        <NewHomeFooter/>
        <NewHomeBottomBar/>
    </div>
  )
}