import React from 'react';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload';
import NewHomeAwards from '../NewHomePage/NewHomeAwards/NewHomeAwards';
import { NewHomeCaruosel } from '../NewHomePage/NewHomeBanner/NewHomeBanner';
import { NewHomeBottomBar } from '../NewHomePage/NewHomeBottomBar/NewHomeBottomBar';
import { NewHomeEasyVisaDestination } from '../NewHomePage/NewHomeEasyVisaDestination/NewHomeEasyVisaDestination';
import { NewHomeExclusiveDeals } from '../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals';
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter';
import { NewHomeHandPicked } from '../NewHomePage/NewHomeHandPicked/NewHomeHandPicked';
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar'
import { CenterMode } from '../NewHomePage/NewHomePopularDetination/NewHomePopularDestination';
import { FavouriteHotelGlobe } from './FavouriteHotelGlobe/FavouriteHotelGlobe';
import { NewHotelCaruosel } from './HotelsBanner/NewHotelBanner';
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs';

export const NewHotel = () => {
    return (
        <div>
            <NewHomeNav />
            <NewHotelCaruosel/>
            
            {/* <NewHomeCaruosel /> */}
            <WhyChooseUs />

            <div className='carousel'>
                <NewHomeExclusiveDeals/>
            </div>

            <CenterMode/>

            <div className='carousel'>
                <NewHomeHandPicked/>
            </div>

            <div className='carousel'>
                <FavouriteHotelGlobe/>
            </div>
            {/* <NewHomeEasyVisaDestination/> */}
            <NewHomeAppDownload/>
            <div>
                <NewHomeAwards />
            </div>
            <Plan />
            <FooterLinks />
            <NewHomeFooter />
            <NewHomeBottomBar />
        </div>
    )
}
