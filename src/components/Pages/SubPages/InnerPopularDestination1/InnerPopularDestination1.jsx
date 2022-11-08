
import { InnerPopularDestinationBanner } from './InnerPagePopularDestination/InnerPopularDestinationBanner';
import {InnerPopularDestinationButton} from './InnerPopularDestinationNavButton/InnerPopularDestinationButton';
import {InnerhandpickedFooter} from '../InnerhandpickedFooter/InnerhandpickedFooter';
import { StaycationFaq } from '../Faq/Faq';
import InnerPagePopularDestination1Similiarplaces  from './InnerPagePopularDestination1Similiarplaces/InnerPagePopularDestination1Similiarplaces';
export const InnerPopularDestination1 = () => {
  return (
    <>
      <InnerPopularDestinationBanner />
      <InnerPopularDestinationButton />
      <InnerPagePopularDestination1Similiarplaces/>

      <div style={{ margin: "5%" }}>
          <StaycationFaq />
      </div>
      
      <InnerhandpickedFooter/>
    </>
  );
}

