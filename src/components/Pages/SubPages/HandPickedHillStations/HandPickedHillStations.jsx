import { StaycationFaq } from "../Faq/Faq";
import { InnerHandPicked2FAQ } from "../InnerHandpicked2/InnerHandPicked2FAQ/InnerHandPicked2FAQ";
import HandPickedDomesticHillStationsDestination from "./HandPickedDomesticHillStationsDestination/HandPickedDomesticHillStationsDestination";
import HandPickedInternationalHillStationsDestination from "./HandPickedInternationalHillStationsDestination/HandPickedInternationalHillStationsDestination";
import { HandPickedHillStationsDestinationsBanner } from "./HandPickedHillStationsDestinationsBanner/HandPickedHillStationsDestinationsBanner";
import { HandPickedHillStationsDestinationSliderCards } from "./HandPickedHillStationsDestinationSliderCards/HandPickedHillStationsDestinationSliderCards";
import { InnerWebPageFooter } from "../InnerWebPageFooter/InnerWebPageFooter";


export const HandPickedHillStations = () => {

    return (

          <>
            <HandPickedHillStationsDestinationsBanner/>

            <HandPickedHillStationsDestinationSliderCards/>

            <HandPickedInternationalHillStationsDestination/>

            <HandPickedDomesticHillStationsDestination/>

            <div style={{marginTop:"1%"}}><StaycationFaq /></div>


            <div style={{marginTop:"-3%"}}><InnerWebPageFooter/> </div>
          </>

    );
}

