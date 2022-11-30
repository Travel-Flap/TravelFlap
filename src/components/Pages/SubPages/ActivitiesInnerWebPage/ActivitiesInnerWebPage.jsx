import { ActivitiesInnerWebPageBanner } from "./ActivitiesInnerWebPageBanner/ActivitiesInnerWebPageBanner";
import { ActivitiesInnerWebPageCardsFilter } from "./ActivitiesInnerWebPageCardsFilter/ActivitiesInnerWebPageCardsFilter";
import { ActivitiesInnerWebPageCountryFilter } from "./ActivitiesInnerWebPageCountryFilter/ActivitiesInnerWebPageCountryFilter";
import { ActivityInnerWebPageFilterButtons } from "./ActivityInnerWebPageFilterButtons/ActivityInnerWebPageFilterButtons";
import { InnerWebPageFooter } from "../InnerWebPageFooter/InnerWebPageFooter";

export const ActivitiesInnerWebPage = () => {

    return (

            <>
              <ActivitiesInnerWebPageBanner/>
              <ActivitiesInnerWebPageCountryFilter/>
              <ActivityInnerWebPageFilterButtons/>
              <ActivitiesInnerWebPageCardsFilter/>
              <InnerWebPageFooter/>
            </>
    );
}

