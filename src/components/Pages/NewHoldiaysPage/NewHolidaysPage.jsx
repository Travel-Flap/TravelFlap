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
      {/* <NewHomeNav/> */}

      <Helmet>
        <title>Holidays Page</title>
        <meta name='description' content='Want to spend your holiday time in good and budget friendly stay.
                Take a looks at TravelFlap for your stay co-ordinatior' />
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
