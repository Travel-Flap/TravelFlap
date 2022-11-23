
import { InnerVisaChangeableData } from './InnerVisaChangeableData/InnerVisaChangeableData';
import { InnerVisaPage1Banner } from './InnerVisaPage1Banner/InnerVisaPage1Banner';
import { InnerVisaPageDiscover } from './InnerVisaPageDiscover/InnerVisaPageDiscover';
import { InnerVisapageTouristPlaces } from './InnerVisapageTouristPlaces/InnerVisapageTouristPlaces';
import { InnerhandpickedFooter } from "../../InnerhandpickedFooter/InnerhandpickedFooter";
import { NewHomeEasyVisaDestination } from '../../../NewHomePage/NewHomeEasyVisaDestination/NewHomeEasyVisaDestination';

export const InnerVisaPage1 = () => {

    return (
            <>
              <InnerVisaPage1Banner/>
              <InnerVisaChangeableData/>
              <InnerVisapageTouristPlaces/>
              <NewHomeEasyVisaDestination/>
              {/* <InnerVisaPageDiscover/> */}
              <InnerhandpickedFooter/>
            </>
    );
}

