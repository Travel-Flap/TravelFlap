import React from 'react'
import { StaycationFaq } from '../Faq/Faq'
import { InnerWebPageFooter } from '../InnerWebPageFooter/InnerWebPageFooter'

import { PopularDestination0Cards } from './PopularDestination0Cards/PopularDestination0Cards'

import { PopularDestination0serachbox } from './PopularDestination0serachbox/PopularDestination0serachbox'
import { PopularDestinationBanner0 } from './PopularDestinationBanner/PopularDestinationBanner0'

export const PopularDestination0 = () => {
  return (
    <div>
      <PopularDestinationBanner0/>
      <PopularDestination0serachbox/>
      
      <PopularDestination0Cards/>
      <div style={{marginTop:"2%"}}><StaycationFaq/></div>
      
      <InnerWebPageFooter/>

     
      
    </div>
  )
}
