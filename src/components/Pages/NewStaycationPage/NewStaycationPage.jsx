import { ExperimentBanner } from "./NewStaycationBanner/ExperimentBanner";

import NewHomeAwards from "../NewHomePage/NewHomeAwards/NewHomeAwards";
import { NewHomeStoriesSection } from "../NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection";
import NewHomeOurPartners from "../NewHomePage/NewHomeOurPartners/NewHomeOurPartners";
import { NewHomeAppDownload } from "../NewHomePage/NewHomeAppDownload/NewHomeAppDownload";
import { Plan } from "../../NextHolidaysPlan/Plan";
import { FooterLinks } from "../../FooterLinks/FooterLinks";
import { NewHomeFooterLinks } from "../NewHomePage/NewHomeFooterLinks/NewHomeFooterLinks";
import { NewHomeFooter } from "../NewHomePage/NewHomeFooter/NewHomeFooter";
import { NewHomeBottomBar } from "../NewHomePage/NewHomeBottomBar/NewHomeBottomBar";
import { NewStaycationMostPicked } from "./NewStaycationMostPicked/NewStaycationMostPicked";
import { NewStaycationpicsSlider } from "./NewStaycationpicsSlider/NewStaycationpicsSlider";
import { NewStaycationNavbar } from "./NewStaycationNavbar/NewStaycationNavbar";
import { Staycationsnavbar } from "./Staycationsnavbar/Staycationsnavbar";
import { NewStaycationStaticBanners } from "./NewStaycationStaticBanners/NewStaycationStaticBanners";
import { FavouriteStaycationSpot } from "./FavouriteStaycation/FavouriteStaycation";
import { BudgetFriendlyStaycations } from "./BudgetFriendlyStaycation/BudgetfriendlyStaycation";
import { StaycationHappyFamily } from "./StaycationHappyFamily/StaycationHappyFamily";
import { PopularStaycation } from "./PopularStaycation/PopularStaycation";
import { DiscoverExtendedStay } from "./DiscoverExtendedStay/DiscoverExtendedStay";
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar';

// import { CountrysideStaycation } from "./CountrysideStaycation/CountrysideStaycation";

import { Helmet } from "react-helmet";
import { NewStaycationStaticBanners1 } from "./NewStaycationStaticBanners1/NewStaycationStaticBanners1";
import { NewStaycationTopSlider } from "./NewStaycationsTopSLider/NewStaycationTopSlider";

export const NewStaycationPage = () => {

    return (
        <>

            <Helmet>
                <title> Places to Stay: Find Accommodation Deals &amp; Discounts - TravelFlap </title>
                <meta name='description' content='TravelFlap searches hundreds of travel sites at once to help you find the perfect place to stay. Compare great accommodation deals and verified guest reviews now.' />
            </Helmet>

            <NewHomeNav />

            <ExperimentBanner />

            <NewStaycationTopSlider/>



            {/* 
            <div style={{marginTop:"5%"}}>
                 <Staycationsnavbar />
            </div> */}

            {/* <NewStaycationNavbar/> */}
            {/* <NewStaycationpicsSlider/> */}

            {/* <NewStaycationStaticBanners /> */}

            {/* <NewStaycationStaticBanners1 /> */}

            {/* <div style={{marginTop:"5%"}}>
                 <Staycationsnavbar />
            </div> */}

            {/* <NewStaycationNavbar/> */}
            {/* <NewStaycationpicsSlider/> */}


            {/* <NewStaycationStaticBanners /> */}

            <DiscoverExtendedStay />

            <FavouriteStaycationSpot />

            <BudgetFriendlyStaycations />

            <PopularStaycation />

            {/* <CountrysideStaycation/> */}

            {/* <StaycationHappyFamily/> */}

            {/* <NewStaycationMostPicked/> */}

            {/* <div className='carousel'>
                <NewHomeAwards/>
            </div> */}


            <NewHomeAppDownload />
            <Plan />
            <NewHomeStoriesSection />

            <FooterLinks />
            <NewHomeFooter />
            {/* <NewHomeBottomBar/> */}
        </>
    );
};



