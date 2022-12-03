import React from 'react';
import { NewOffersPageBanner } from './NewOffersBanner/NewOffersPageBanner';

import { InnerWebPageFooter } from "../SubPages/InnerWebPageFooter/InnerWebPageFooter";

import { Helmet } from 'react-helmet';
import { NewOfferPageOfferDetails } from './NewOfferPageOfferDetails/NewOfferPageOfferDetails';
import { NewOffersPlanVacation } from './NewOffersPlanVacation/NewOffersPlanVacation';

export const NewOffers = () => {
  return (
    <div>

      <Helmet>
        <title>Offers Page</title>
        <meta name='description' content='Want to spend your holiday time in good and budget friendly stay.
                Take a looks at TravelFlap for your stay co-ordinatior' />
      </Helmet>

      <NewOffersPageBanner />

      <NewOfferPageOfferDetails/>

      <NewOffersPlanVacation/>
      <InnerWebPageFooter/>
    </div>
  )
}
