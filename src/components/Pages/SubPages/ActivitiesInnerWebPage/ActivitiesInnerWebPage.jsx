import { ActivitiesInnerWebPageBanner } from "./ActivitiesInnerWebPageBanner/ActivitiesInnerWebPageBanner";
import { ActivitiesInnerWebPageCountryFilter } from "./ActivitiesInnerWebPageCountryFilter/ActivitiesInnerWebPageCountryFilter";
import { ActivityInnerWebPageFilterButtons } from "./ActivityInnerWebPageFilterButtons/ActivityInnerWebPageFilterButtons";

export const ActivitiesInnerWebPage = () => {

    return (

            <>
              <ActivitiesInnerWebPageBanner/>
              <ActivitiesInnerWebPageCountryFilter/>
              <ActivityInnerWebPageFilterButtons/>
            </>
    );
}

