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

import { Helmet } from 'react-helmet';

export const NewOffers = () => {
  return (
    <div>

      <Helmet>
        <title>Offers Page</title>
        <meta name='description' content='Want to spend your holiday time in good and budget friendly stay.
                Take a looks at TravelFlap for your stay co-ordinatior' />
      </Helmet>

      <NewOffersPageBanner />

      <NewMultiDropdown />

      <NewHotelCards />

      <NewUserOffers />

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
