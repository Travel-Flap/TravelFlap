import React from 'react';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload';
import NewHomeAwards from '../NewHomePage/NewHomeAwards/NewHomeAwards';
import { NewHomeBottomBar } from '../NewHomePage/NewHomeBottomBar/NewHomeBottomBar';
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter';
import NewHomeOurPartners from '../NewHomePage/NewHomeOurPartners/NewHomeOurPartners';
import { NewHomeStoriesSection } from '../NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection';
import { NewHotelCards } from './NewHotelCards/NewHotelCards';
import { NewMultiDropdown } from './NewMultiFilter/NewMultiFilter';
import { NewOffersPageBanner } from './NewOffersBanner/NewOffersPageBanner'
import { NewUserOffers } from './NewUserOffers/NewUserOffers';

export const NewOffers = () => {
  return (
    <div>
        <NewOffersPageBanner/>

        <NewMultiDropdown/>

        <NewHotelCards/>

        <NewUserOffers/>

        {/* <NewHomeAwards/> */}

        <NewHomeStoriesSection/>    

        {/* <NewHomeOurPartners/> */}

        <NewHomeAppDownload/>

        <Plan/>

        <FooterLinks/>

        <NewHomeFooter/>

        <NewHomeBottomBar/>
    </div>
  )
}
