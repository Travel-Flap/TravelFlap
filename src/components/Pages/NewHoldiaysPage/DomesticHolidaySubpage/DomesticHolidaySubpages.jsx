import React from 'react'
import { DomesticFamilyDestinations } from './DomesticFamilyDestinations/DomesticFamilyDestination'
import { DomesticHoneyMoonDestination } from './DomesticHoneymoonDestination/DomesticHoneymoonDestination'
import { NewAndHotDomestic } from './NewAndHotDomestic/NewAndHotDomestic'
import { TopBannerContent } from './TopBanner/TopBannerContent'

export const DomesticHolidaySubpages = () => {
  return (
    <div>
        <TopBannerContent/>
        <NewAndHotDomestic/>
        <DomesticHoneyMoonDestination/>
        <DomesticFamilyDestinations/>
    </div>
  )
}
