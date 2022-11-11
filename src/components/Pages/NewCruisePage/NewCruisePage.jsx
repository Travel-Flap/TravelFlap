import React from 'react'
import { NewCruiseExperimentBanner } from './NewCruiseBanner/NewCruiseExperimentBanner';
import TrendingCruise from './TrendingCruise/TrendingCruise'
import { NewHomeExclusiveDeals } from "../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals";
import CruiseInternationalDestination from './CruiseInternationalDestination/CruiseInternationalDestination';
import DomesticCruise from './DomesticCruise/DomesticCruise';
import { NewHomeAppDownload } from "../NewHomePage/NewHomeAppDownload/NewHomeAppDownload";
import { NewHomeFooter } from "../NewHomePage/NewHomeFooter/NewHomeFooter";
import { NewHomeBottomBar } from "../NewHomePage/NewHomeBottomBar/NewHomeBottomBar";
import { NewHomeStoriesSection } from "../NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection";
import NewHomeAwards from "../NewHomePage/NewHomeAwards/NewHomeAwards";
import NewHomeOurPartners from "../NewHomePage/NewHomeOurPartners/NewHomeOurPartners";

import { Helmet } from 'react-helmet';


export const NewCruisePage = () => {
    return (
        <div>

            <Helmet>
                <title>Cruise Page</title>
                <meta name='description' content='Want to spend your holiday time in good and budget friendly sea vacation.
                Take a looks at TravelFlap for your sea navigator.' />
            </Helmet>

            <NewCruiseExperimentBanner />

            <div className='carousel'>
                <NewHomeExclusiveDeals />
            </div>

            <TrendingCruise />

            <CruiseInternationalDestination />

            <DomesticCruise />

            {/* <NewHomeAwards /> */}

            <NewHomeStoriesSection />

            {/* <NewHomeOurPartners /> */}


            <NewHomeAppDownload />

            <NewHomeFooter />

            <NewHomeBottomBar />

        </div>
    )
}
