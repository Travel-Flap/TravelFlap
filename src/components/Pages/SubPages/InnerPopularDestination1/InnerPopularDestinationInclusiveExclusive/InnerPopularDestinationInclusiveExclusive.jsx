import { StaycationFaq } from "../../Faq/Faq";
import { InnerhandpickedFooter } from "../../InnerhandpickedFooter/InnerhandpickedFooter";
import { InnerPopularDestinationBanner } from "../InnerPagePopularDestination/InnerPopularDestinationBanner";
import { HolidayPageButton } from "../InnerPopularDestinationAccomodations/HolidayPageButton/HolidayPageButton";
import { InnerPopularDestinationButton } from "../InnerPopularDestinationNavButton/InnerPopularDestinationButton";
import { PopularInclusionDescription } from "./PopularInclusionDescription/PopularInclusionDescription";
import { PopularInclusionFilter } from "./PopularInclusionFilter/PopularInclusionFilter";
import PopularInclusionSlider from "./PopularInclusionSlider/PopularInclusionSlider";



export const InnerPopularDestinationInclusiveExclusive =() =>{
  return (
    <>
      {/* <HolidayPageBanner /> */}
      <InnerPopularDestinationBanner/>
      <InnerPopularDestinationButton/>
      {/* <HolidayPageButton/> */}
      <div style={{marginTop:"1%"}}><PopularInclusionDescription/> </div>
      {/* <PopularInclusionFilter/> */}
      <PopularInclusionSlider/>
      <div style={{marginTop:"2%"}}><StaycationFaq/> </div>
      <InnerhandpickedFooter/> 
    </>
  );
}


