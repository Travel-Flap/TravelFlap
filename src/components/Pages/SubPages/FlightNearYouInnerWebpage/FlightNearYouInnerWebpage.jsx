import { InnerWebPageFooter } from "../InnerWebPageFooter/InnerWebPageFooter";
import { FlightNearYouInnerWebpageBanner } from "./FlightNearYouInnerWebpageBanner/FlightNearYouInnerWebpageBanner";
import { FlightNearYouInnerWebpageData } from "./FlightNearYouInnerWebpageData/FlightNearYouInnerWebpageData";


export const FlightNearYouInnerWebpage = () => {

    return (
            <>
              <FlightNearYouInnerWebpageBanner/>
              <FlightNearYouInnerWebpageData/>
               
              <div style={{marginTop:"10%"}}><InnerWebPageFooter/></div>
            </>
    );
}
