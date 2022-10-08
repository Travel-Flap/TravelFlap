import React from 'react'
import { FooterLinks } from '../../FooterLinks/FooterLinks'
import { Plan } from '../../NextHolidaysPlan/Plan'
import { NewHomeAppDownload } from '../NewHomePage/NewHomeAppDownload/NewHomeAppDownload'
import { NewHomeCaruosel } from '../NewHomePage/NewHomeBanner/NewHomeBanner'
import { NewHomeExclusiveDeals } from '../NewHomePage/NewHomeExclusiveDeals/NewHomeExclusiveDeals'
import { NewHomeFooter } from '../NewHomePage/NewHomeFooter/NewHomeFooter'
import { NewHomeHandPicked } from '../NewHomePage/NewHomeHandPicked/NewHomeHandPicked'
import { NewHomeNav } from '../NewHomePage/NewHomeNavbar/NewHomeNavbar'
import { CenterMode } from '../NewHomePage/NewHomePopularDetination/NewHomePopularDestination'
import { NewHomeTopCitites } from '../NewHomePage/NewHomeTopCitites/NewHomeTopCitites'
import { CheapFlights } from './NewCheapFlight/CheapFlights'
import { NewDomesticFlightsNearYou } from './NewDomesticFlights/NewDomesticFlights'
import { NewFlightsNearYou } from './NewFlightsNearYou/NewFlightsNearYou'
import { FrequentlyAskedQuestions } from './NewFrequentlyAskedQuestions/FrequentlyAskedQuestions'

export const NewFlight = () => {
  return (
    <div>
        <NewHomeNav/>
        <NewHomeCaruosel/>
        
        <div className='carousel'>
            <NewHomeExclusiveDeals/>
        </div>

        <div className='carousel'>
            <NewFlightsNearYou/>
        </div>
        {/* <div className='carousel'>
            <NewDomesticFlightsNearYou/>
        </div> */}

        <CenterMode/>
        <NewHomeHandPicked/>

        <div className='carousel'>
            <NewHomeTopCitites/>
        </div>

        <CheapFlights/>

        <FrequentlyAskedQuestions/>

        <NewHomeAppDownload/>
        <Plan/>
        <FooterLinks/>
        <NewHomeFooter/>
    </div>
  )
}
