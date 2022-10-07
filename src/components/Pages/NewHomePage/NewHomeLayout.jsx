import React from 'react'
import { Nav } from '../../Nav/Nav'
import { NewHomeHotelServices } from './HotelServices/HotelServices';
import { NewHomeAppDownload } from './NewHomeAppDownload/NewHomeAppDownload';
import NewHomeAwards from './NewHomeAwards/NewHomeAwards';
import { NewHomeCaruosel } from './NewHomeBanner/NewHomeBanner';
import { NewHomeBottomBar } from './NewHomeBottomBar/NewHomeBottomBar';
import NewHomeEasyVisaDestination from './NewHomeEasyVisaDestination/NewHomeEasyVisaDestination';
import { NewHomeExclusiveDeals } from './NewHomeExclusiveDeals/NewHomeExclusiveDeals';
import { NewHomeFooter } from './NewHomeFooter/NewHomeFooter';
import { NewHomeHandPicked } from './NewHomeHandPicked/NewHomeHandPicked';
import { NewHomeNav } from './NewHomeNavbar/NewHomeNavbar';
import NewHomeOurPartners from './NewHomeOurPartners/NewHomeOurPartners';
import {NewHomePopularDestinations} from './NewHomePopularDetination/NewHomePopularDestination';
import { NewHomeStoriesSection } from './NewHomeStoriesSection/NewHomeStoriesSection';
import { NewHomeTopCitites } from './NewHomeTopCitites/NewHomeTopCitites';
import { NewHomeTourDeals } from './NewHomeTourDeal/NewHomeTourDeal';

export const NewHomeLayout = () => {
    return (
        <div>
            {/* <Nav/> */}
            <NewHomeNav />
            <NewHomeCaruosel />

            <div className='carousel'>
                <NewHomeExclusiveDeals/>
            </div>
            <NewHomeHandPicked />
            <NewHomeHotelServices />

            <div className='carousel'>
                <NewHomeTourDeals />
            </div>

            <div className='carousel'>
                <NewHomeOurPartners />
            </div>

            <div className='carousel'>
                <NewHomeTopCitites/>
            </div>

            <NewHomeEasyVisaDestination/>

            <div className='carousel'>
                <NewHomeAwards/>
            </div>

            <NewHomeStoriesSection/>

            {/* <NewHomeAppDownload/> */}

            <NewHomeFooter/>
            <NewHomeBottomBar/>

        </div>
    )
}
