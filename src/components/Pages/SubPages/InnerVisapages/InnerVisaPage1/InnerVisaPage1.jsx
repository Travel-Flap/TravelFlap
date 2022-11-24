import { InnerWebPageNavbar } from '../../InnerWebPageNavbar/InnerWebPageNavbar';
import { InnerVisaChangeableData } from './InnerVisaChangeableData/InnerVisaChangeableData';
import { InnerVisaPage1Banner } from './InnerVisaPage1Banner/InnerVisaPage1Banner';
// import { InnerVisaPageDiscover } from './InnerVisaPageDiscover/InnerVisaPageDiscover';
import { InnerVisapageTouristPlaces } from './InnerVisapageTouristPlaces/InnerVisapageTouristPlaces';
import { InnerhandpickedFooter } from "../../InnerhandpickedFooter/InnerhandpickedFooter";
import { NewHomeEasyVisaDestination } from '../../../NewHomePage/NewHomeEasyVisaDestination/NewHomeEasyVisaDestination';
import { InnerWebPageFooter } from '../../InnerWebPageFooter/InnerWebPageFooter';


export const InnerVisaPage1 = () => {

    return (
            <>
            <div><InnerWebPageNavbar/></div>
              
              <InnerVisaPage1Banner/>
              <InnerVisaChangeableData/>
              <InnerVisapageTouristPlaces/>
              <NewHomeEasyVisaDestination/>
              {/* <InnerVisaPageDiscover/> */}
              <InnerWebPageFooter/>
            </>
    );
}

