import React from 'react';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload';
import NewHomeAwards from '../NewHomePage/NewHomeAwards/NewHomeAwards';
import { NewHomeBottomBar } from '../NewHomePage/NewHomeBottomBar/NewHomeBottomBar';
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter';
import NewHomeOurPartners from '../NewHomePage/NewHomeOurPartners/NewHomeOurPartners';
import { NewHomeStoriesSection } from '../NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection';
import { NewActivitiesAround } from './NewActivitiesAroundYou/NewActivitiesAroundYou';
import { NewActivityBanner } from './NewActivityBanner/NewActivityBanner';
import NewAdventureActivities from './NewAdventureActivities/NewAdventureActivities';
import NewTrendingActivities from './NewBestTrendingActivity/BestTrendingActivities';
import { NewNatureLove } from './NewLoveForNature/NewNature';
import NewTopCityActivities from './NewTopCitiesActivity/NewTopCityActivity';

import { NewActivitiesAroundWorld } from "./NewBesActivityAroundWorld/NewBestActivityAroundWorld";

import { Helmet } from 'react-helmet';
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar';

export const NewActivities = () => {
  return (
    <div>

      <Helmet>
        <title> TravelFlap- Best Tour Operators in world |Activity Booking | Visa Agent around Globe </title>
        <meta name='description' content='TravelFlap is best tour & travel operator in Dubai. We offer wide range of tourism services like , Activities Booking around the world best travel destination and Visa services.' />
      </Helmet>

      <NewHomeNav />

      <NewActivityBanner />
      {/* <NewTrendingActivities/> */}

      <div style={{ marginTop: "1%" }}>
        <NewTrendingActivities />
      </div>

      <NewActivitiesAround />

      <NewTopCityActivities />

      {/* <NewActivitiesAroundWorld/> */}
      <NewActivitiesAroundWorld />

      <NewAdventureActivities />

      <NewNatureLove />

      {/* <NewHomeAwards/> */}

      <NewHomeStoriesSection />

      <Plan />
      {/* <NewHomeOurPartners/> */}

      <NewHomeAppDownload />



      <FooterLinks />

      <NewHomeFooter />
      {/* <NewHomeBottomBar /> */}
    </div>
  )
}
