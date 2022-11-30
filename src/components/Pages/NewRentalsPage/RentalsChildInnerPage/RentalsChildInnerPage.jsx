import React from 'react';
import { NewHomeNav } from '../../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { FlightNearYouInnerWebpageData } from '../../SubPages/FlightNearYouInnerWebpage/FlightNearYouInnerWebpageData/FlightNearYouInnerWebpageData';
import { InnerWebPageFooter } from '../../SubPages/InnerWebPageFooter/InnerWebPageFooter';
import { DriverDetails } from './DriverDetails/DriverDetails';
import "./RentalsChildInnerPage.css";
import { SupplierInformation } from './SupplierInformation/SupplierInformation';
import { TopBookingSection } from './TopBookingSection/TopBookingSection';

export const RentalsChildInnerPage = () => {
    return (
        <>
            <div className='mainOuterDivRentalChild'>

                {/* <NewHomeNav/> */}
                {/* <FlightNearYouInnerWebpageData/> */}
                <TopBookingSection/>
                
                
                <DriverDetails/>

                <InnerWebPageFooter/>
            </div>
        </>
    )
}
