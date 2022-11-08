
import {HolidayPageBanner} from "./HolidayPageBanner/HolidayPageBanner"
import {HolidayPageDescription} from "./HolidayPageDescription/HolidayPageDescription"
import {HolidayPageRating} from "./HolidayPageRating/HolidayPageRating";
import {HolidayPageFilter} from "./HolidayPageFilter/HolidayPageFilter";
import {HolidayPageButton} from "./HolidayPageButton/HolidayPageButton";
import HolidayPageSlider from "./HolidayPageSlider/HolidayPageSlider"

export const InnerPopularDestinationAccomodations =() =>{
  return (
    <>
      <HolidayPageBanner />
      <HolidayPageButton />
      <HolidayPageDescription/>
      <HolidayPageRating/>
      <HolidayPageFilter/>
      <HolidayPageSlider/>
    </>
  );
}

