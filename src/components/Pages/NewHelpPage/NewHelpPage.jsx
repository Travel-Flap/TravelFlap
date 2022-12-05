import React from 'react';
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { InnerWebPageFooter } from '../SubPages/InnerWebPageFooter/InnerWebPageFooter';
import { HelpBanner } from './HelpBanner/HelpBanner';
import { HelpBannerContent } from './HelpBannerContent/HelpBannerContent';
import "./NewHelpPage.css";

export const NewHelpPage = () => {
    return (
        <>
            <div>
                <NewHomeNav />
                <HelpBanner />
                <HelpBannerContent/>

                
                <InnerWebPageFooter/>
            </div>
        </>
    )
}
