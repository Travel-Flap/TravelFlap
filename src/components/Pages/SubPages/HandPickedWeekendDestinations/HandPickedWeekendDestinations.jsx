import { StaycationFaq } from "../Faq/Faq";
import { InnerhandpickedFooter } from "../InnerhandpickedFooter/InnerhandpickedFooter";
import { VideoTextStaycation } from "../VideoText/VideoText";
import {HandPickedWeekendDestinationsBanner} from "./HandPickedWeekendDestinationBanner/HandPickedWeekendDestinationsBanner";
import HandPickedDomesticWeekendDestination from "./HandPickedDomesticWeekendDestination/HandPickedDomesticWeekendDestination";
import HandPickedInternationalWeekendDestination from "./HandPickedInternationalWeekendDestinations/HandPickedInternationalWeekendDestination";
import { HandPickedWeekendDestinationSliderCards } from "./HandPickedWeekendDestinationSliderCards/HandPickedWeekendDestinationSliderCards";




export const HandPickedWeekendDestinations = () => {

    return (

          <>

            <HandPickedWeekendDestinationsBanner/>

            <HandPickedWeekendDestinationSliderCards/>

            <HandPickedDomesticWeekendDestination/>

            <HandPickedInternationalWeekendDestination/>

            <div style={{marginTop:"1%"}}><StaycationFaq /></div>

            <VideoTextStaycation/>

            <div style={{marginTop:"-3%"}}><InnerhandpickedFooter/> </div>
          </>

    );
}

