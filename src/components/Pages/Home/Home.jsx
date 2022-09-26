import React from 'react'
import { ControlledCarousel } from "../../TopCorousel/Corousel";
import { DataCards } from "../../Cards/Cards";
import { Middleslider } from "../../MiddleCorousel/Middleslider";
import { Footer } from "../../Footer/Footer";

import { TitleBar } from "../../TopTitleBar/TitleBar";
import { CardText } from "../../CardwithText/CardText";
import { BottomBar } from "../../BottomBar/BottomBar";

import ImageSlider from "../../MultipleCards/MultiCardSlider";

// import {OurPartners} from "../../OurPatnersSection/OurPartners";
import OurPartners from '../../OurPatnersSection/OurPartners';

// import { Carousel } from "../../TopCorousel/Corousel";
import { PopularDestinations } from '../../PopularDestinations/PopularDestinations';
// import PopularDestinations from '../../ExclusiveDeals/ExclusiveDeals';

import EasyVisaDestination from "../../EasyVisaDestinations/EasyVisaDestinations";
import { Newsletter } from '../../NewsLetter/NewsLetter';
import Awards from '../../Achievements/Awards';
import { Nav } from "../../Nav/Nav";
import { FooterLinks } from '../../FooterLinks/FooterLinks';
import TopCities from '../../TopCities/TopCities';
// import ExclusiveDeals from '../../ExclusiveDeals/ExclusiveDeals';
// import { ExclusiveDeals } from '../../ExclusiveDeals/ExclusiveDeals';
import { ExclusiveDeals } from '../../ExclusiveDeals/ExclusiveDeals';
import { Experiment } from '../../Tags/Tags';
import { Plan } from '../../NextHolidaysPlan/Plan';
export const Home = () => {
    return (
        <div>

            <Nav />

            <ControlledCarousel />
                <ExclusiveDeals />
            <div className='carousel'>
            </div>

            <PopularDestinations />

            <DataCards />

            {/* <Carousel /> */}

            <div className='carousel'>
                <TopCities />
            </div>

            <CardText />

            <div className='carousel'>
                <h1 className='travelstories_title'>Easy Visa Destinations</h1>
                <EasyVisaDestination />
            </div>

            <div className="carousel">
                <h1 className="achievements_title">Achievement and Awards</h1>
                <Awards />
            </div>

            <div className="carousel">
                <h1 className="clientstestimonial_title">What our Clients say about us</h1>
                <ImageSlider />
            </div>

            <div className='carousel'>
                <h1 className='partners_title'>Our Partners</h1>
                <OurPartners />
            </div>

            <Newsletter />

            <FooterLinks />

            <Experiment/>
            <Plan/>
            <Footer />

            <BottomBar />

        </div>
    )
}
