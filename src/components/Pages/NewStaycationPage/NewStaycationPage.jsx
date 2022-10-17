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

export const NewStaycationPage = () => {
   
    return (
        <>
           <ExperimentBanner/>

            <NewStaycationNavbar/>
            <NewStaycationpicsSlider/>
            <NewStaycationMostPicked/>

           <div className='carousel'>
                <NewHomeAwards/>
            </div>

            <NewHomeStoriesSection/> 

            
            <NewHomeOurPartners/>
            <NewHomeAppDownload/>

            <Plan/>
            <FooterLinks/>
            {/* <NewHomeFooterLinks/> */}
            <NewHomeFooter/>
            <NewHomeBottomBar/>
        </>
    );
};



