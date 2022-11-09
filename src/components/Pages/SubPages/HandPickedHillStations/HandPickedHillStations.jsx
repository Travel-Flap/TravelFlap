import { StaycationFaq } from "../Faq/Faq";
import { InnerHandPicked2FAQ } from "../InnerHandpicked2/InnerHandPicked2FAQ/InnerHandPicked2FAQ";
import { InnerhandpickedFooter } from "../InnerhandpickedFooter/InnerhandpickedFooter";
import { VideoTextStaycation } from "../VideoText/VideoText";
import HandPickedDomesticHillStationsDestination from "./HandPickedDomesticHillStationsDestination/HandPickedDomesticHillStationsDestination";
import HandPickedInternationalHillStationsDestination from "./HandPickedInternationalHillStationsDestination/HandPickedInternationalHillStationsDestination";
import { HandPickedHillStationsDestinationsBanner } from "./HandPickedHillStationsDestinationsBanner/HandPickedHillStationsDestinationsBanner";
import { HandPickedHillStationsDestinationSliderCards } from "./HandPickedHillStationsDestinationSliderCards/HandPickedHillStationsDestinationSliderCards";


export const HandPickedHillStations = () => {

    return (

          <>
            <HandPickedHillStationsDestinationsBanner/>

            <HandPickedHillStationsDestinationSliderCards/>

            <HandPickedInternationalHillStationsDestination/>

            <HandPickedDomesticHillStationsDestination/>

            <div style={{ margin: "5%" }}>
                <StaycationFaq />
            </div>

            <VideoTextStaycation/>

            <div style={{marginTop:"4%"}}><InnerhandpickedFooter/> </div>
          </>

    );
}

