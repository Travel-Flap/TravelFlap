import React from 'react';
import { InnerhandpickedFooter } from '../../SubPages/InnerhandpickedFooter/InnerhandpickedFooter';
import { VideoTextStaycation } from '../../SubPages/VideoText/VideoText';
import { DomesticSubpageFooter } from '../DomesticHolidaySubpage/DomesticSubpageFooter/DomesticSubpageFooter';
import { VideoTextDomesticSubpage } from '../DomesticHolidaySubpage/DomesticSubpageVideoTex/DomesticSubpageVideoText';
import { InternationalHoneyMoonDestination } from './InternationalHoneymoonDestination/InternationalHoneymoonDestination';
import { InternationalSubpageFaq } from './InternationalSubpageFaq/InternationalSubPageFaq';
import { InternationalFamilyDestinations } from './InternationFamilyDestination/InternationalFamilyDestination';
import { NewAndHotInternational } from './NewAndHotInternational/NewAndHotInternational';
import { InternationHolidayBanner } from './TopBanner/InternationalHolidayBanner';
import { InternationalSubpageWorldTop } from './TopWorldInternationalDestination/TopWorldInternationalDestination';


export const InternationHolidaySubpage = () => {
  return (
    <div>
        <InternationHolidayBanner/>
        <InternationalSubpageWorldTop/>
        <InternationalFamilyDestinations/>

        <InternationalHoneyMoonDestination/>
        <NewAndHotInternational/>

        <InternationalSubpageFaq/>

        <VideoTextStaycation/>

        <div style={{marginTop:"4%"}}><InnerhandpickedFooter/></div>
    </div>
  )
}
