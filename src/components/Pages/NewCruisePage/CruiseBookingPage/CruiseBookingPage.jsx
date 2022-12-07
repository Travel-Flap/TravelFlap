import React from 'react';
import { NewHomeNav } from '../../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { InnerWebPageFooter } from '../../SubPages/InnerWebPageFooter/InnerWebPageFooter';
import { InnerWebPageNavbar } from '../../SubPages/InnerWebPageNavbar/InnerWebPageNavbar';
import { CruiseBookingFaq } from './CruiseBookingFaq/CruiseBookingFaq';
import "./CruiseBookingPage.css";
import { CruiseFacilities } from './CruiseFacilities/CruiseFacilities';
import { CuriseInnerPageAvlibility } from './CuriseInnerPageAvlibility/CuriseInnerPageAvlibility';
import { CuriseInnerPageBooking } from './CuriseInnerPageBooking/CuriseInnerPageBooking';
import { CuriseInnerPagFacilities } from './CuriseInnerPageOptions/CuriseInnerPageOptions';
// import { CuriseInnerPagFacilities } from './CuriseInnerPagFacilities/CuriseInnerPagFacilities';

export const CruiseBookingPage = () => {
    return (
        <>
            <div>
                {/* <NewHomeNav/> */}
                <InnerWebPageNavbar/>

                <CuriseInnerPageBooking/>

                <CuriseInnerPageAvlibility/>

                <CuriseInnerPagFacilities/>

                <CruiseFacilities/>
                
                <CruiseBookingFaq/>

                <InnerWebPageFooter/>
            </div>
        </>
    )
}
