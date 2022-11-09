
import {HolidayPageBanner} from "./HolidayPageBanner/HolidayPageBanner"
import {HolidayPageDescription} from "./HolidayPageDescription/HolidayPageDescription"
import {HolidayPageRating} from "./HolidayPageRating/HolidayPageRating";
import {HolidayPageFilter} from "./HolidayPageFilter/HolidayPageFilter";
import {HolidayPageButton} from "./HolidayPageButton/HolidayPageButton";
import HolidayPageSlider from "./HolidayPageSlider/HolidayPageSlider";
import { StaycationFaq } from "../../Faq/Faq";
import { InnerhandpickedFooter } from "../../InnerhandpickedFooter/InnerhandpickedFooter";
import { InnerPopularDestinationBanner } from "../InnerPagePopularDestination/InnerPopularDestinationBanner";
import { InnerPopularDestinationButton } from "../InnerPopularDestinationNavButton/InnerPopularDestinationButton";


export const InnerPopularDestinationAccomodations =() =>{
  return (
    <>
      {/* <HolidayPageBanner /> */}
      <InnerPopularDestinationBanner/>
      <InnerPopularDestinationButton/>
      {/* <HolidayPageButton /> */}
      <div style={{marginTop:"1%"}}><HolidayPageDescription/></div>
      <HolidayPageRating/>
      {/* <HolidayPageFilter/> */}
      <HolidayPageSlider/>
      <div style={{marginTop:"2%"}}><StaycationFaq/></div>
      <InnerhandpickedFooter/>
    </>
  );
}

