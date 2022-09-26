import React from 'react';
import { Footer } from "../../Footer/Footer";

import { TitleBar } from "../../TopTitleBar/TitleBar";
import { BottomBar } from "../../BottomBar/BottomBar";
import  { MiddleForm } from "./FormBelowCaousel/Form";
import { MultiDropdown } from './MultipleDropdown/Dropdown';
import { HotelCards } from "./HotelCards/HotelCards";
import { Banner } from './Banner/Banner';
import { Nav } from "../../Nav/Nav";
import Newsletter from '../../NewsLetter/NewsLetter';
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import { Experiment } from '../../Tags/Tags';
import { Plan } from '../../NextHolidaysPlan/Plan';

export const Offers = () => {
  return (
    <div>
        <Nav/>
 
        <Banner />

        <MiddleForm />
        <MultiDropdown />
        <HotelCards />
        <Newsletter/>
        <FooterLinks/>
        <Experiment/>
        <Plan/>
        <Footer />
        <BottomBar />
    </div>
  )
}
