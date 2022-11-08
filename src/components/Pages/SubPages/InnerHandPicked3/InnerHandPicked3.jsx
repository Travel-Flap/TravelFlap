import React from 'react';
import {InnerHandpick3Banner} from "./InnerHandpick3Banner/InnerHandpick3Banner"
import {InnerHandpick3Description} from "./InnerHandpick3Description/InnerHandpick3Description"
import InnerHandpick3Slider from "./InnerHandpick3Slider/InnerHandpick3Slider"
import InnerPageDiscoverPlace from "./InnerHandpick3DiscoverPlace/InnerPageDiscoverPlace"
import InnerPageDiscoverPlaceslider from "./InnerHandpick3DiscoverPlace/InnerPageDiscoverPlaceslider"

export const InnerHandPicked3 = () => {
  return (
    <>
       
    <InnerHandpick3Banner/>
    <InnerHandpick3Description/>
    <InnerHandpick3Slider />
    <InnerPageDiscoverPlace />
    <InnerPageDiscoverPlaceslider />
    {/* <Faq /> */}
    {/* <InnerhandpickedFooter/> */}

    </>
  );
}



   