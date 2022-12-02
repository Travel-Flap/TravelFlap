import React from 'react';
import "./StaycationsInnerDetailsPage.css";
import HotelInnerBanner from './StaycationsInnerBanner/StaycationsInnerBanner';
import { HotelInnerCards, StaycationsInnerCards } from './StaycationsInnerCards/StaycationsInnerCards';
import { DiscoverCountry, StaycationsDiscoverCountry } from './StaycationsDiscoverCountry/StaycationDiscoverCountry';
import { HotelInnerFaq, StaycationsInnerFaq } from './StaycationsInnerFaq/StaycationsInnerFaq';
import { InnerhandpickedFooter } from '../../SubPages/InnerhandpickedFooter/InnerhandpickedFooter';
import ImageSlider from './StaycationTopSlider/StaycationsTopSlider';
import StaycationsInnerBanner from './StaycationsInnerBanner/StaycationsInnerBanner';
import { StaycationInnerTopComp } from './StaycationInnerTopComp/StaycationInnerTopComp';
import { InnerWebPageFooter } from '../../SubPages/InnerWebPageFooter/InnerWebPageFooter';

export const StaycationsInnerDetailsPage = () => {
    return (
        <div>
            {/* <StaycationsInnerBanner/> */}

            {/* <ImageSlider/> */}

            <StaycationInnerTopComp/>

            <div className='hotelscardsDiv'>
               <StaycationsInnerCards/>
            </div>

            <StaycationsDiscoverCountry />

            <StaycationsInnerFaq/>
            
            {/* <InnerhandpickedFooter/> */}
            <InnerWebPageFooter/>
        </div>
    )
}
