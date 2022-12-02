import React from 'react';
import { NewHomeNav } from '../../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { InnerWebPageFooter } from '../../SubPages/InnerWebPageFooter/InnerWebPageFooter';
import { CruiseDetailsBanner } from './CruiseDetailsBanner/CruiseDetaiilsBanner';
import { CruiseDetailsCards } from './CruiseDetailsCards/CruiseDetailsCards';
import "./CruiseDetailsWireFrame.css";
import { CruiseFilterButtons } from './CruiseFilterButtons/CruiseFilterButtons';

export const CruiseDetailsWIreFrame = () => {
    return (
        <>
            <div>
                {/* <h4> Let's get started </h4> */}
                <NewHomeNav/>

                <CruiseDetailsBanner/>

                <CruiseFilterButtons/>

                <CruiseDetailsCards/>
                
                <InnerWebPageFooter/>
            </div>
        </>
    )
}
