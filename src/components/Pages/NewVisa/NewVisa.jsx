import React from 'react';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload';
import NewHomeAwards from '../NewHomePage/NewHomeAwards/NewHomeAwards';
import { NewHomeBottomBar } from '../NewHomePage/NewHomeBottomBar/NewHomeBottomBar';
import { NewHomeEasyVisaDestination } from '../NewHomePage/NewHomeEasyVisaDestination/NewHomeEasyVisaDestination';
import { NewHomeExclusiveDeals } from '../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals';
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter';
import { NewOurPackage } from './NewOurPackages/OurPackages';
import { NewProceedApplication } from './NewProceedApplication/NewProceedApplication';
import { NewWhychooseTravelflap } from './NewWhyChooseTravelFlap/NewWhyChooseTravelFlap';
import { TopDemandedVisa } from './TopDemandedVisa/TopDemandedVisa';
import { NewVisaPageBanner } from './VisaBanner/NewVisaBanner';
import { VisaSteps } from './VisaSteps/VisaSteps';

export const NewVisa = () => {
  return (
    <div>
      <NewVisaPageBanner/>

      <VisaSteps/>
      
      <TopDemandedVisa/>  

      <NewHomeExclusiveDeals/>
      
      {/* <NewOurPackage/> */}

      <NewHomeEasyVisaDestination/>

      <NewWhychooseTravelflap/>

      <NewProceedApplication/>

      <NewHomeAwards/>

      <NewHomeAppDownload/>

      <Plan/>

      <FooterLinks/>

      <NewHomeFooter/>

      <NewHomeBottomBar/>
    </div>
  )
}
