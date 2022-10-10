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
import { CenterMode, NewHomePopularDestinations } from './NewHomePopularDetination/NewHomePopularDestination';
import { NewHomeStoriesSection } from './NewHomeStoriesSection/NewHomeStoriesSection';
import { NewHomeTopCitites } from './NewHomeTopCitites/NewHomeTopCitites';
import { NewHomeTourDeals } from './NewHomeTourDeal/NewHomeTourDeal';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { FooterLinks } from '../../FooterLinks/FooterLinks';

export const NewHomeLayout = () => {
    return (
        <div>
            <Nav/>
            <NewHomeNav />
            <NewHomeCaruosel />

            <div className='carousel'>
                <NewHomeExclusiveDeals />
            </div>

            <NewHomeHandPicked />

            <CenterMode />

            <NewHomeHotelServices />

            <div className='carousel'>
                <NewHomeTourDeals />
            </div>

                <NewHomeOurPartners />
            <div className='carousel'>
            </div>

            <div className='carousel'>
                <NewHomeTopCitites />
            </div>

            <NewHomeEasyVisaDestination />


            <NewHomeAppDownload />

            <div className='carousel'>
                <NewHomeAwards />
            </div>

            {/* <NewHomeStoriesSection /> */}

            <Plan />
            <FooterLinks />

            <NewHomeFooter />
            <NewHomeBottomBar />

        </div>
    )
}
