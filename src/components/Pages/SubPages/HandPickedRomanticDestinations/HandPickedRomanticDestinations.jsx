import { StaycationFaq } from "../Faq/Faq";
import { InnerHandPicked2FAQ } from "../InnerHandpicked2/InnerHandPicked2FAQ/InnerHandPicked2FAQ";
import { InnerWebPageFooter } from "../InnerWebPageFooter/InnerWebPageFooter";
import { VideoTextStaycation } from "../VideoText/VideoText";
import HandPickedDomesticRomanticDestination from "./HandPickedDomesticRomanticDestination/HandPickedDomesticRomanticDestination";
import HandPickedInternationalRomanticDestination from "./HandPickedInternationalRomanticDestination/HandPickedInternationalRomanticDestination";
import { HandPickedRomanticDestinationsBanner } from "./HandPickedRomanticDestinationsBanner/HandPickedRomanticDestinationsBanner";
import { HandPickedRomanticDestinationSliderCards } from "./HandPickedRomanticDestinationSliderCards/HandPickedRomanticDestinationSliderCards";


export const HandPickedRomanticDestinations = () => {

    return (

          <>
            <HandPickedRomanticDestinationsBanner/>

            <HandPickedRomanticDestinationSliderCards/>

            <HandPickedInternationalRomanticDestination/>

            <HandPickedDomesticRomanticDestination/>

            <div style={{marginTop:"1%"}}><StaycationFaq /></div>

            {/* <VideoTextStaycation/> */}

            <div style={{marginTop:"-3%"}}><InnerWebPageFooter/> </div>
          </>

    );
}

