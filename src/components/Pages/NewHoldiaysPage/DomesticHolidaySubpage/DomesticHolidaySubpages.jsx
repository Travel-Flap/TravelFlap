import React from 'react';
import { InnerhandpickedFooter } from '../../SubPages/InnerhandpickedFooter/InnerhandpickedFooter';
import { DomesticFamilyDestinations } from './DomesticFamilyDestinations/DomesticFamilyDestination';
import { DomesticHoneyMoonDestination } from './DomesticHoneymoonDestination/DomesticHoneymoonDestination';
import { DomesticSubpageFaq } from './DomesticSubPageFaq/DomesticSubPageFaq';
import { DomesticSubpageFooter } from './DomesticSubpageFooter/DomesticSubpageFooter';
import { VideoTextDomesticSubpage } from './DomesticSubpageVideoTex/DomesticSubpageVideoText';
import { NewAndHotDomestic } from './NewAndHotDomestic/NewAndHotDomestic';
import { TopBannerContent } from './TopBanner/TopBannerContent';
import { DomesticSubpageWorldTop } from './TopWorldDomesticDestination/TopWorldDomesticDestination';

export const DomesticHolidaySubpages = () => {
  return (
    <div>
      <TopBannerContent />
      <DomesticSubpageWorldTop/>
      <NewAndHotDomestic />
      <DomesticHoneyMoonDestination />
      <DomesticFamilyDestinations />
      <div className='domesticFaqwrapper'>
        <DomesticSubpageFaq />
      </div>


      <div style={{marginTop:"-3%"}}><DomesticSubpageFooter/> </div>
    
    </div>
  )
}
