import React from 'react'
import { FooterLinks } from '../../FooterLinks/FooterLinks'
import { Plan } from '../../NextHolidaysPlan/Plan'
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload'
import { NewHomeCaruosel } from '../NewHomePage/NewHomeBanner/NewHomeBanner'
import { NewHomeExclusiveDeals } from '../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals'
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter'
import { NewHomeHandPicked } from '../NewHomePage/NewHomeHandPicked/NewHomeHandPicked'
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar';
import { NewDomesticFlightsNearYou } from './NewDomesticFlights/NewDomesticFlights'
import { NewFlightsBanner } from './NewFlightBanner/NewFlightBanner'
import { FrequentlyAskedQuestions } from './NewFrequentlyAskedQuestions/FrequentlyAskedQuestions'
import NewHomeAwards  from "../NewHomePage/NewHomeAwards/NewHomeAwards";
import { NewHomeBottomBar } from '../NewHomePage/NewHomeBottomBar/NewHomeBottomBar'
import { FlightsNearYou } from './NewFlightNearYou/FlightsNearYou'

import { NewHomeStoriesSection } from '../NewHomePage/NewHomeStoriesSection/NewHomeStoriesSection';
import { CheapFlights } from './NewCheapFlight/CheapFlights';
import { CenterMode } from '../NewHomePage/NewHomePopularDetination/NewHomePopularDestination';
import { Helmet } from 'react-helmet'

export const NewFlight = () => {
  return (
    <div>
        <Helmet>
            <title>TravelFlap-One Stop splotion for all your vacations</title>
            <meta name='description' content='All go flight booking solution for International and Domestic at one place' />
        </Helmet>
        <NewHomeNav/>
        {/* <NewHomeCaruosel/> */}
        
        <NewFlightsBanner/>

        <div className='carousel'>
            <NewHomeExclusiveDeals/>
        </div>

        <FlightsNearYou/>

        {/* <CheapFlights/> */}
        {/* <div className='carousel'>
            <NewFlightsNearYou/>
        </div> */}
        {/* <div className='carousel'>
            <NewDomesticFlightsNearYou/>
        </div> */}

        <NewHomeHandPicked/>
        <CenterMode/>

        

        

        {/* <div className='carousel'>
            <NewHomeTopCitites/>
        </div> */}

        
        
        {/* <NewHomeAwards/> */}

        <NewHomeAppDownload/>
        
        <FooterLinks/>
        {/* <FrequentlyAskedQuestions/> */}

        {/* <NewHomeAwards/> */}

        <NewHomeStoriesSection/>
        <Plan/>
        
        <NewHomeFooter/>
        <NewHomeBottomBar/>
    </div>
  )
}
