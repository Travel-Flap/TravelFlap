import React from 'react';
import { Nav } from "../../Nav/Nav";
import { BottomBar } from '../../BottomBar/BottomBar';
import { Footer } from '../../Footer/Footer';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import Newsletter from '../../NewsLetter/NewsLetter';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { Experiment } from '../../Tags/Tags';
import { Cruise_Banner } from './Cruise_Banner/cruise_Banner';
import { ExclusiveDeals } from './CruiseExclusiveDeals/CruiseExclusiveDeals';
import { Trending_Cruise } from './Trending_Cruise/Trending_Cruise';
import { InternationalCruise } from './InternationalCruise/InterNationalCruise';
import { DomesticCruise } from './DomesticCruise/DomesticCruise';
import { CruiseCarousel } from './CruiseBanner/CruiseBanner';

export const Cruise = () => {
  return (
    <div>
        <Nav/>
        <CruiseCarousel/>
        {/* <Cruise_Banner/> */}
        <Trending_Cruise/>
        <ExclusiveDeals/>

        <InternationalCruise/>

        <DomesticCruise/>

        <Newsletter/>
        <FooterLinks/>
        <Experiment/>
        <Plan/>
        <Footer/>
        <BottomBar/>
    </div>
  )
}
