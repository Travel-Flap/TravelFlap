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

export const NewActivities = () => {
  return (
    <div>

        <NewActivityBanner/>
        {/* <NewTrendingActivities/> */}

      <NewTrendingActivities/>
        <NewActivitiesAround/>

        <NewTopCityActivities/>

        {/* <NewActivitiesAroundWorld/> */}
        <NewActivitiesAroundWorld/>

        <NewAdventureActivities/>

        <NewNatureLove/>

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
