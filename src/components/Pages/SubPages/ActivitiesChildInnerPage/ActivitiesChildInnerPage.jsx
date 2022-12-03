import {InnerWebPageNavbar} from "../InnerWebPageNavbar/InnerWebPageNavbar";
import { ActivitiesChildInnerPageBanner } from "./ActivitiesChildInnerPageBanner/ActivitiesChildInnerPageBanner";
import { ActivitiesChildInnerPageButtonsDetails } from "./ActivitiesChildInnerPageButtonsDetails/ActivitiesChildInnerPageButtonsDetails";
import { InnerWebPageFooter } from "../InnerWebPageFooter/InnerWebPageFooter";

export const ActivitiesChildInnerPage = () => {

    return (

            <>
              <InnerWebPageNavbar/>
              <ActivitiesChildInnerPageBanner/>
              <ActivitiesChildInnerPageButtonsDetails/>
              <InnerWebPageFooter/>
            </>
    );
}

