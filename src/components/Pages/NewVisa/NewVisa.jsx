import React from 'react';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload';
import NewHomeAwards from '../NewHomePage/NewHomeAwards/NewHomeAwards';
import { NewHomeBottomBar } from '../NewHomePage/NewHomeBottomBar/NewHomeBottomBar';
import { NewHomeEasyVisaDestination } from '../NewHomePage/NewHomeEasyVisaDestination/NewHomeEasyVisaDestination';
import { NewHomeExclusiveDeals } from '../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals';
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter';
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { NewHomeStoriesSection } from '../NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection';
import { NewOurPackage } from './NewOurPackages/OurPackages';
import { NewProceedApplication } from './NewProceedApplication/NewProceedApplication';
import { NewWhychooseTravelflap } from './NewWhyChooseTravelFlap/NewWhyChooseTravelFlap';
import { TopDemandedVisa } from './TopDemandedVisa/TopDemandedVisa';
import { NewVisaPageBanner } from './VisaBanner/NewVisaBanner';
import { VisaSteps } from './VisaSteps/VisaSteps';
import { Helmet } from 'react-helmet';

export const NewVisa = () => {
  return (
    <div>

      <Helmet>
        <title> Worldwide Visas - TravelFlap </title>
        <meta name='description' content='TravelFlap is best tour & travel operator in globe. We offer wide range of tourism services like , Activities Booking in around world best country destinations and Visa services.' />
        {/* <meta name='keywords' content='flight booking, cheap flight booking, online booking, Cheap flight tickets, lowest air fare, low cost airlines, akbar travels, Hotel, Holidays, akbartravels' /> */}
      </Helmet>

      <NewHomeNav />

      <NewVisaPageBanner />

      <VisaSteps />

      <TopDemandedVisa />

      <NewWhychooseTravelflap />

      <NewHomeEasyVisaDestination />

      <NewProceedApplication />
      <NewHomeAppDownload />
      <Plan />
      <NewHomeStoriesSection />

      <FooterLinks />
      <NewHomeFooter />
      {/* <NewHomeBottomBar/> */}
    </div>
  )
}
