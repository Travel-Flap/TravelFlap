import React from 'react';
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { InnerWebPageFooter } from '../SubPages/InnerWebPageFooter/InnerWebPageFooter';
import { ReasonVisitDestination } from './ResonVisitDestination/ReasonVisitDestination';
import "./TourGuides.css";
import { TravelGuideBanner } from './TravelGuideBanner/TravelGuideBanner';
import { TravelguideSlider } from './TravelguideSlider/TravelguideSlider';

export const TourGuides = () => {
    return (
        <>
            <div>
                <NewHomeNav />

                <TravelGuideBanner />

                <TravelguideSlider />

                <ReasonVisitDestination />

                <InnerWebPageFooter />
            </div>
        </>
    )
}
