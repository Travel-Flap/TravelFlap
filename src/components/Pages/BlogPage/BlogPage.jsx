import React from 'react'
import { InnerWebPageFooter } from '../SubPages/InnerWebPageFooter/InnerWebPageFooter'
import { Banner2 } from './Banner2/Banner2'
import { BlogPageBanner } from './BlogPageBanner/BlogPageBanner'
import { BlogPageFeaturedexplore } from './BlogPageFeaturedexplore/BlogPageFeaturedexplore'

export const BlogPage = () => {
  return (
    <div>
      <BlogPageBanner/>
      <BlogPageFeaturedexplore/>
      <Banner2/>
      <div style={{marginTop:"50%"}}><InnerWebPageFooter/></div>
    </div>
  )
}
