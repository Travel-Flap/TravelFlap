import React from 'react';
import { Footer } from '../../Footer/Footer';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Nav } from '../../Nav/Nav';
import Newsletter from '../../NewsLetter/NewsLetter';
import { Plan } from '../../NextHolidaysPlan/Plan';
import { ControlledCarousel } from '../../TopCorousel/Corousel';
import { Experiment } from '../../Tags/Tags';
// import { TopActivities } from "./WorldActivities/WorldActivities";
import TopActivities from "./TopCityActivity/TopActivity";
import WorldActivities from './WorldActivities/WorldActivities';
import { ActivityAround } from './ActivitiesAroundyou/ActivitiesAroundyou';
import { AdventureActivities } from './AdventureActivities/AdventureActivitites';
import { NatureLove } from './NatureLove/NatureLove';
import { ActivityCarousel } from './ActivitiesCarouselCompo/ActivityCarousel';
import { TrendingActivities } from './TrendingActivitites/TrendingActivities';
import { BottomBar } from '../../BottomBar/BottomBar';
// import { ActivityExperiment2 } from './Experiment/Experiment2';
// import { SeoLocal } from './SeoLocalServices/SeoLocal';


export const Activities = () => {
  return (
    <div>

      <Nav />
      <ActivityCarousel />
      {/* <ControlledCarousel /> */}
      {/* <CountryDropdown /> */}

      {/* <SeoLocal/> */}
      {/* <div className='carousel'>

      <ActivityExperiment2/>
      </div> */}

      <div className='mt-3 carousel'>
        <TrendingActivities />
      </div>


      <div className='mt-3 carousel'>
        <ActivityAround />
      </div>

      <div className='mt-3 carousel'>
        <TopActivities />
      </div>

      <div className="carousel">
        <h1 className="clientstestimonial_title">Best Activities Around the World</h1>
        <WorldActivities />
      </div>


      <div className='mt-3 carousel'>
        <AdventureActivities />
      </div>

      <div className='mt-3 carousel'>
        <NatureLove />
      </div>

      <Newsletter />

      <FooterLinks />

      <Experiment />
      <Plan />
      <Footer />

      <BottomBar/>
    </div>
  )
}
