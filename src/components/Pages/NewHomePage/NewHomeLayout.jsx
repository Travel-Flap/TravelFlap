import React from 'react'
import { Nav } from '../../Nav/Nav'
import { NewHomeNav } from './NewHomeNavbar/NewHomeNavbar';
import { NewHomeHotelServices } from './HotelServices/HotelServices';
import { NewHomeAppDownload } from './NewHomeAppDownload/NewHomeAppDownload';
import NewHomeAwards from './NewHomeAwards/NewHomeAwards';
import { NewHomeCaruosel } from './NewHomeBanner/NewHomeBanner';
import { NewHomeBottomBar } from './NewHomeBottomBar/NewHomeBottomBar';
import { NewHomeEasyVisaDestination } from './NewHomeEasyVisaDestination/NewHomeEasyVisaDestination';
import { NewHomeExclusiveDeals } from './NewHomeExclusiveDeals/NewHomeExclusiveDeals';
import { NewHomeFooter } from './NewHomeFooter/NewHomeFooter';
import { NewHomeHandPicked } from './NewHomeHandPicked/NewHomeHandPicked';
import NewHomeOurPartners from './NewHomeOurPartners/NewHomeOurPartners';
import { NewHomeStoriesSection } from './NewHomeStoriesSection/NewHomeStoriesSection';
import { NewHomeTopCitites } from './NewHomeTopCitites/NewHomeTopCitites';
import { NewHomeTourDeals } from './NewHomeTourDeal/NewHomeTourDeal';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { NewHomeFooterLinks } from './NewHomeFooterLinks/NewHomeFooterLinks';
import { ExperimentBanner } from './ExperimentBanner/ExperimentBanner';
import { CenterMode } from './NewHomePopularDetination/NewHomePopularDestination';

export const NewHomeLayout = () => {
    return (
        <div>
            {/* <Nav/> */}
            <NewHomeNav />
            {/* <NewHomeCaruosel /> */}

            <ExperimentBanner/>

            <div className='carousel'>
                <NewHomeExclusiveDeals />
            </div>

            <NewHomeHandPicked />

            {/* <CenterMode /> */}

            <CenterMode/>

            <NewHomeHotelServices />

            <div className='carousel'>
                <NewHomeTourDeals />
            </div>

                {/* <NewHomeOurPartners /> */}
            <div className='carousel'>
            </div>

            <div className='carousel'>
                <NewHomeTopCitites />
            </div>

            <NewHomeEasyVisaDestination />

            {/* <NewHomeAwards/> */}
            
            <NewHomeAppDownload />

            <div className='carousel'>
                <NewHomeAwards />
            </div>

            <NewHomeStoriesSection />

            <Plan />
            <FooterLinks />
            {/* <NewHomeFooterLinks/> */}
            <NewHomeFooter />
            <NewHomeBottomBar />

        </div>
    )
}
