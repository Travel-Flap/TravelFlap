import React from 'react'
import { NewCruiseExperimentBanner } from './NewCruiseBanner/NewCruiseExperimentBanner';
import {TrendingCruise} from './TrendingCruise/TrendingCruise'
import { NewHomeExclusiveDeals } from "../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals";
import {CruiseInternationalDestination} from './CruiseInternationalDestination/CruiseInternationalDestination';
import {DomesticCruise} from './DomesticCruise/DomesticCruise';
import { NewHomeAppDownload } from "../NewHomePage/NewHomeAppDownload/NewHomeAppDownload";
import { NewHomeFooter } from "../NewHomePage/NewHomeFooter/NewHomeFooter";
import { NewHomeBottomBar } from "../NewHomePage/NewHomeBottomBar/NewHomeBottomBar";
import { NewHomeStoriesSection } from "../NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection";
import NewHomeAwards from "../NewHomePage/NewHomeAwards/NewHomeAwards";
import NewHomeOurPartners from "../NewHomePage/NewHomeOurPartners/NewHomeOurPartners";

import { Helmet } from 'react-helmet';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar';


export const NewCruisePage = () => {
    return (
        <div>

            <Helmet>
                <title> Cruise Ship Packages: Cruise Ticket Booking Online in India at Best Price | TravelFlap</title>
                <meta name='description' content='Book Cruise Ship Packages Online - TravelFlap provides you International &amp; India Cruise Packages Online at best prices. Visit your dream destination with cruise tour packages online with us. Book your cruise holiday package today!' />
            </Helmet>

            <NewHomeNav/>

            <NewCruiseExperimentBanner />

            <div style={{marginTop:"3%"}}>
                <NewHomeExclusiveDeals />
            </div>

            <TrendingCruise/>

            <CruiseInternationalDestination />

            <DomesticCruise />

            {/* <NewHomeAwards /> */}

            <NewHomeAppDownload />
        <Plan/>
        <NewHomeStoriesSection/>
        
        <FooterLinks/>
        <NewHomeFooter/>
        {/* <NewHomeBottomBar/> */}
        </div>
    )
}
