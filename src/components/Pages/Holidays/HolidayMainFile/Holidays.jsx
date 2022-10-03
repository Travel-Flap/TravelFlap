import React from 'react';
import { Nav } from "../../../Nav/Nav";
import { Banner, HolidayCarousel } from '../Banner/Banner';
import PackageDeals from '../BestSellingDestinations/BestSelling';
// import EasyVisaDestinations from '../EasyVisaDestinations/EasyVisaDestinations';
import TrendingDestinations from '../Trending Destinations/TrendingDestinations';
import { BestBudget } from '../BestBudget/BestBudget';
import { Footer } from "../../../Footer/Footer";
import { BottomBar } from '../../../BottomBar/BottomBar';
import Newsletter from '../../../NewsLetter/NewsLetter';
import { FooterLinks } from '../../../FooterLinks/FooterLinks';
import { DomesticDestinations } from '../DomesticDestinations/DomesticDestinations';
import { InternationalDestinations } from '../InternationalDestinations/InternationalDestinations';



import { Experiment } from '../../../Tags/Tags';
import { Plan } from '../../../NextHolidaysPlan/Plan';
import EasyVisaDestination from '../../../EasyVisaDestinations/EasyVisaDestinations';

export const Holidays = () => {
  return (
    <div>
      <Nav />
      <HolidayCarousel />
      {/* <Banner /> */}

      <div className=' carousel'>
        <BestBudget />
      </div>
      <div className='mt-3 carousel'>
        {/* <h1 className='holidaydeals_title'>Travel Stories</h1> */}
        <PackageDeals />
      </div>

      <div className='mt-3 carousel'>
        <InternationalDestinations />
      </div>

      <div className='mt-3 carousel'>
        <DomesticDestinations />
      </div>



      {/* <div className='mt-3 carousel'>
        <EasyVisaDestinations />
      </div> */}
      <div className='mt-3 carousel'>
        <h1 className='travelstories_title'>Easy Visa Destinations</h1>
        <EasyVisaDestination />
      </div>
      {/* <TrendingDestinations /> */}


      <Newsletter />

      <FooterLinks />

      <Experiment />
      <Plan />

      <Footer />

      <BottomBar />
    </div>
  )
}
