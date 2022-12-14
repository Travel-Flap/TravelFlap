import React from 'react'
import { PopularDestinationBanner } from './PopularDestinationBanner/PopularDestinationBanner'
import { PopularDestinationButton } from './PopularDestinationButton/PopularDestinationButton'
import { SimilarPopularDestination } from './SimilarPopularDestination/SimilarPopularDestination'
import { StaycationFaq } from "../Faq/Faq";
import { InnerWebPageFooter } from '../InnerWebPageFooter/InnerWebPageFooter';


export const PopularDestination1 = () => {
  return (
    <div>

     
      <PopularDestinationBanner />
      <PopularDestinationButton />

      <SimilarPopularDestination />

      <StaycationFaq/>
      <InnerWebPageFooter/>
   </div>

  )
}
