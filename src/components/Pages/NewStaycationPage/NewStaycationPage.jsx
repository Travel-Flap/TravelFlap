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

// import { CountrysideStaycation } from "./CountrysideStaycation/CountrysideStaycation";

import { Helmet } from "react-helmet";

export const NewStaycationPage = () => {

    return (
        <>

            <Helmet>
                <title>Staycations Page</title>
                <meta name='description' content='Want to spend your holiday time in good and budget friendly stay.
                Take a looks at TravelFlap for your stay co-ordinatior' />
            </Helmet>

            <ExperimentBanner />

            <Staycationsnavbar />
            {/* <NewStaycationNavbar/> */}
            {/* <NewStaycationpicsSlider/> */}

            <NewStaycationStaticBanners />

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

            <NewHomeStoriesSection />


            {/* <NewHomeOurPartners/> */}
            <NewHomeAppDownload />

            <Plan />
            <FooterLinks />
            <NewHomeFooter />
            <NewHomeBottomBar />
        </>
    );
};



