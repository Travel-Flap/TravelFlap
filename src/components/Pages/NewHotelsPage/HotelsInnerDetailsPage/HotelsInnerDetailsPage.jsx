import React from 'react';
import "./HotelsInnerDetailsPage.css";
import HotelInnerBanner from './HotelInnerBanner/HotelInnerBanner';
import { HotelInnerCards } from './HotelInnerCards/HotelInnerCards';
import { DiscoverCountry } from './DiscoverCountry/DiscoverCountry';
import { HotelInnerFaq } from './HotelInnerFaq/HotelInnerFaq';
import { InnerhandpickedFooter } from '../../SubPages/InnerhandpickedFooter/InnerhandpickedFooter';
import ImageSlider from './HotelInnerTopSlider/HotelInnerTopSlider';
import { InnerWebPageFooter } from '../../SubPages/InnerWebPageFooter/InnerWebPageFooter';

export const HotelsInnerDetailsPage = () => {
    return (
        <div>
            <HotelInnerBanner/>

            {/* <ImageSlider/> */}

            <div className='hotelscardsDiv'>
                <HotelInnerCards />
            </div>

            <DiscoverCountry/>

            <HotelInnerFaq/>
            
            {/* <InnerhandpickedFooter/> */}
            <InnerWebPageFooter/>
        </div>
    )
}
