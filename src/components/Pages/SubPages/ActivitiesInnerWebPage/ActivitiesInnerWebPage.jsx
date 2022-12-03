import {InnerWebPageNavbar} from "../InnerWebPageNavbar/InnerWebPageNavbar";
import { ActivitiesInnerWebPageBanner } from "./ActivitiesInnerWebPageBanner/ActivitiesInnerWebPageBanner";
import { ActivitiesInnerWebPageCardsFilter } from "./ActivitiesInnerWebPageCardsFilter/ActivitiesInnerWebPageCardsFilter";
import { ActivitiesInnerWebPageCountryFilter } from "./ActivitiesInnerWebPageCountryFilter/ActivitiesInnerWebPageCountryFilter";
import { ActivityInnerWebPageFilterButtons } from "./ActivityInnerWebPageFilterButtons/ActivityInnerWebPageFilterButtons";
import { InnerWebPageFooter } from "../InnerWebPageFooter/InnerWebPageFooter";

export const ActivitiesInnerWebPage = () => {

    return (

            <>
              <InnerWebPageNavbar/>
              <ActivitiesInnerWebPageBanner/>
              <ActivitiesInnerWebPageCountryFilter/>
              <ActivityInnerWebPageFilterButtons/>
              <ActivitiesInnerWebPageCardsFilter/>
              <InnerWebPageFooter/>
            </>
    );
}

