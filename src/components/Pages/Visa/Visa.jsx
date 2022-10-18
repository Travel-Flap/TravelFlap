  import React from 'react';
import { Footer } from '../../Footer/Footer';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Nav } from '../../Nav/Nav';
import { VisapageEasyvisaDestinations } from "./VisapageEasyvisaDestinations/VisapageEasyvisaDestinations";
import { ApplyProcess } from './ApplyProcess/ApplyProcess';
import { WhychooseTravelflap } from './WhychooseTravelflap/WhychooseTravelflap';
import { FamousDestinations } from './FamousDestinations/FamousDestinations';
import { VisaBanner } from './VisaBanner/VisaBanner';
// import { Experiment } from '../../Experiment/Experiment';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { OurPackage } from './Package/OurPackage';
import Awards from '../../Achievements/Awards';
import { Newsletter } from '../../NewsLetter/NewsLetter';
import ImageSlider from "../../MultipleCards/MultiCardSlider";
import { Applications } from './Applications/Applications';
import OurPartners from '../../OurPatnersSection/OurPartners';

// import {VisaDetails} from "./VisaInnerpages/VisaDetails"
export const Visa = () => {
  return (
    <div>
      {/* <VisaDetails/> */}
      <Nav />
      <VisaBanner />
      <ApplyProcess />
      <FamousDestinations />
      <OurPackage />
      <VisapageEasyvisaDestinations />
      <WhychooseTravelflap />
      <Applications />

      <div className="carousel">
        <h1 className="achievements_title" >Achievement and Awards</h1>
        <Awards />
      </div>
      <div className="carousel">
        <h1 className="clientstestimonial_title" >What our Clients say about us</h1>
        <ImageSlider />
      </div>
      <div className='carousel'>
        <h1 className='partners_title'>Our Partners</h1>
        <OurPartners />
      </div>
      <Newsletter />
      <FooterLinks />
      <Footer />
    </div>
  )
}
