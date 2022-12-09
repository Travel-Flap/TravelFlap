import React from 'react';
import { InnerWebPageFooter } from '../SubPages/InnerWebPageFooter/InnerWebPageFooter';
import { AirlineDetailsBanner } from './AirlineDetailsBanner/AirlineDetailsBanner';
import { AirlineDetailsFilterButton } from './AirlineDetailsFilterButton/AirlineDetailsFilterButton';
import "./AirlinesDetails.css";

export const AirlinesDetails = () => {
    return (
        <>
            <div>
                <AirlineDetailsBanner />

                <AirlineDetailsFilterButton />

                <InnerWebPageFooter />
            </div>
        </>
    )
}
