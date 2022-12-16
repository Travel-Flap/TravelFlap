import React from 'react';
import "./NewHotel.css";
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload';
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
                <title> Hotels Booking Online - Book Budget, Luxury, Cheap Domestic &amp; International Hotels - TravelFlap </title>
                <meta name='description' content='Book Cheap Hotels, Luxury Hotels, Budget Hotels, Villas or resorts online with TravelFlap. Find the Best Hotel for Your Stay at Your Next Destination only on TravelFlap.' />
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
        {/* <NewHomeBottomBar/> */}
            
            
        </div>
    )
}
