import React from 'react'
import { PopularDestination0Cards } from './PopularDestination0Cards/PopularDestination0Cards'
import { PopularDestination0Filter } from './PopularDestination0Filter/PopularDestination0Filter'
import { PopularDestinationBanner0 } from './PopularDestinationBanner/PopularDestinationBanner0'
import {InnerWebPageFooter} from "../InnerWebPageFooter/InnerWebPageFooter";
import { StaycationFaq } from '../Faq/Faq';

export const PopularDestination0 = () => {
  return (
    <div>
      <PopularDestinationBanner0/>
      <PopularDestination0Filter/>
      <PopularDestination0Cards/>
      <StaycationFaq/>
      <InnerWebPageFooter/>
    </div>
  )
}
