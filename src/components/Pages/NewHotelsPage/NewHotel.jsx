import React from 'react';
import "./NewHotel.css";
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
// import { CenterMode } from '../NewHomePage/NewHomePopularDetination/NewHomePopularDestination';
import { FavouriteHotelGlobe } from './FavouriteHotelGlobe/FavouriteHotelGlobe';
import { NewHotelCaruosel } from './HotelsBanner/NewHotelBanner';
import { WhyChooseUs } from './WhyChooseUs/WhyChooseUs';
import { NewHomeStoriesSection } from "../../Pages/NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection";
import { CenterMode } from '../NewHomePage/NewHomePopularDetination/NewHomePopularDestination';
import { Helmet } from 'react-helmet';
import { StayNearYou } from './StayNearYou/StayNearYou';
import { VarietyOfStays } from './VarietyOfStays/VarietyOfStays';
import SearchPlaceDestination from './SearchPlaceDestination/SearchPlaceDestination';

export const NewHotel = () => {
    return (
        <div>
            <Helmet>
                <title>Hotels Page</title>
                <meta name='description' content='Want to spend your holiday time in good and budget friendly stay.
                Take a looks at TravelFlap for your stay co-ordinatior' />
            </Helmet>
            <NewHomeNav />
            <NewHotelCaruosel />

            <div style={{marginTop:"-4%"}}>
                <NewHomeExclusiveDeals />
            </div>

            {/* <NewHomeCaruosel /> */}
            <WhyChooseUs />

            {/* <div className='carousel'>
                <NewHomeHandPicked />
            </div> */}

            <StayNearYou/>

            <VarietyOfStays/>

            <SearchPlaceDestination/>

            {/* <CenterMode /> */}

            <div className='carousel'>
                <FavouriteHotelGlobe />
            </div>
            {/* <NewHomeEasyVisaDestination/> */}
            <NewHomeAppDownload />

            {/* <div className='hotelawardsdiv'>
                <NewHomeAwards />
            </div> */}
            <Plan/>
        <NewHomeStoriesSection/>
        
        <FooterLinks/>
        
        <NewHomeFooter/>
        <NewHomeBottomBar/>
            
            
        </div>
    )
}
