import { StaycationFaq } from "../Faq/Faq";
import {HandPickedWeekendDestinationsBanner} from "./HandPickedWeekendDestinationBanner/HandPickedWeekendDestinationsBanner";
import HandPickedDomesticWeekendDestination from "./HandPickedDomesticWeekendDestination/HandPickedDomesticWeekendDestination";
import HandPickedInternationalWeekendDestination from "./HandPickedInternationalWeekendDestinations/HandPickedInternationalWeekendDestination";
import { HandPickedWeekendDestinationSliderCards } from "./HandPickedWeekendDestinationSliderCards/HandPickedWeekendDestinationSliderCards";
import { InnerWebPageFooter } from "../InnerWebPageFooter/InnerWebPageFooter";




export const HandPickedWeekendDestinations = () => {

    return (

          <>

            <HandPickedWeekendDestinationsBanner/>

            <HandPickedWeekendDestinationSliderCards/>

            <HandPickedDomesticWeekendDestination/>

            <HandPickedInternationalWeekendDestination/>

            <div style={{marginTop:"1%"}}><StaycationFaq /></div>

            <div style={{marginTop:"-3%"}}><InnerWebPageFooter/> </div>
          </>

    );
}

